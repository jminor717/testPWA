'use strict';
class instrumentData {
    modules = [];
    notifications = [];
    AcumulatedAssays = [];
    workFlows = [];
    softwareversion = {};
    GeneralInventory = {
        RacksPendingInventoryCount: 0,
        OpenRackSlotCount: 0
    };
}

class Settings {
    Theme = "Default";//Dark 
    DarkModeChecked = false;
    ShowAboutChecked = true;
    NotivicationChecked = false;
    AutoUpdateApp = true;
    dataRefreshEvery = 3000;
}

const api_data_link = {
    modules: { url: ":7000/api/eve/Modules", property: "modules" },
    CorInventory: { url: ":7000/api/corinventory/" },
    dorStatus: { url: ":7000/api/PortalAccess/DoorStatus/" },
    notifications: { url: ":44360/api/Notifications", property: "notifications" },
    acumulations: { url: ":7000/api/assays/accumulation", property: "AcumulatedAssays" },
    workFlows: { url: ":7000/api/workflow/executionState", property: "workFlows" },
    softwareversion: { url: ":7000/api/softwareversion", property: "softwareversion" },
    OpenRacks: { url: ":7000/api/rackManagement/OpenRackSlotCount", property: "GeneralInventory.OpenRackSlotCount" },
    pendingCount: { url: ":7000/api/rackManagement/RacksPendingInventoryCount", property: "GeneralInventory.RacksPendingInventoryCount" }
}

var displayBusy = false, addVisible = false, optiosVisible = false;
var currrentCardUpdater, baseUpdater;

const CORMonitorApp = {
    SavedInstruments: { undefined: { name: "", adress: "", data: new instrumentData(), hasValidData: false } },
    appliedSettings: new Settings(),
    incomingSettings: new Settings(),
    addDialogContainer: document.getElementById('addDialogContainer'),
};

/**
 * Event handler for butDialogAdd, adds the selected location to the list.
 */
async function addInstrument() {
    // Hide the dialog
    let force = document.getElementById("ForceAdd").checked;
    let nameinput = document.getElementById('instrument_name');
    let name = nameinput.value;
    let adress = "localhost"
    if (name === "" || name === null) {
        alert("Give it a name");
        return;
    }
    let card = document.getElementById(name);
    if (card) {
        alert("this Name already exists Names must be unique");
        return;
    }
    if (!force) {//if force hasnt been checked atempt to contact the instrument befor adding it
        if (!(await contactInstrument(adress))) {
            alert("instrument could not be reached\nto add it anyways check the force button");
            document.getElementById("ForceAddBox").hidden = false;
            return;
        }
    }
    document.getElementById("ForceAdd").checked = false;
    nameinput.value = "";
    toggleAddDialog();
    // Get instrument information
    let instrument = { name: name, adress: adress, data: new instrumentData(), hasValidData: false };
    card = getInstrumentCard(instrument);
    getInstrumentDataFromNetwork(instrument).then((Instrument_with_Data) => {
        CORMonitorApp.SavedInstruments[name] = Instrument_with_Data;
        saveInstrumentList(CORMonitorApp.SavedInstruments);
        console.log(Instrument_with_Data.data)
        renderInstrument(card, Instrument_with_Data);
    });
    // Save the updated list of selected cities.
}

async function contactInstrument(adress) {
    return await fetch("https://" + adress + ":7000/signalr//negotiate?clientProtocol=1.5&_=1567610154102").then(body => {
        return true;//body.json(); 
    }).catch(err => {
        console.log(err);
        return false;
    });
    //return false;
}

// Event handler for .remove-instrument, removes a instrument from the list.
function removeInstrumentTrack(evt) {
    const parent = evt.srcElement.parentElement.parentElement;
    parent.remove();
    if (CORMonitorApp.SavedInstruments[parent.id]) {
        delete CORMonitorApp.SavedInstruments[parent.id];
        saveInstrumentList(CORMonitorApp.SavedInstruments);
    }
}

/**
 * Renders the forecast data into the card element.
 * @param {Element} card The card element to update.
 * @param {instrumentData} data Instrument data to update the element with.
 */
function renderInstrument(card, instrument) {
    let data = instrument.data;
    if (!data) {
        // There's no data, skip the update.
        console.log("tyr render, data null")
        return;
    }
    if (!(data instanceof instrumentData)) {
        card.querySelector('.Inventory').innerHTML = data;
        console.log("data is not an instrument this is data")
        console.log(data);
        return;
        const spinner = card.querySelector('.card-spinner');
        if (spinner) {
            card.removeChild(spinner);
        }
    }
    // const cardLastUpdatedElem = card.querySelector('.card-last-updated');
    // const cardLastUpdated = cardLastUpdatedElem.textContent;
    //const lastUpdated = parseInt(cardLastUpdated);


    card.querySelector('.User-given-name').textContent = card.id + " ";

    card.querySelector('.moduleNames').innerHTML = '';
    data.modules.forEach(instrumentModule => {//this adds the instrument tytles eg PX(vsp001) for PX and both of its sides
        card.querySelector('.moduleNames').append(makeInstrumentHeader(instrumentModule));
    });


    let num = card.querySelector('.notify-badge');
    num.textContent = data.notifications.value.length;
    num.hidden = true
    if (data.notifications.value.length != 0) {
        num.hidden = false
    }


    // If the loading spinner is still visible, remove it.
    let spinner = card.querySelector('.card-spinner');
    spinner.hidden = true;
    card.querySelector('.offline-message').hidden = true;
    card.querySelector('.Is-Valid').innerHTML = true;
    instrument.hasValidData = true;
}


async function getInstrumentDataFromNetwork(instrument) {
    let Promises = [];
    let data = new instrumentData();
    console.log("atempt fetch modules")
    data.modules = await fetch("https://" + instrument.adress + api_data_link.modules.url).then(body => { return body.json(); }).catch(err => {
        ShowInstrumentTimeoOut(instrument);
        console.log(err);
        return err;
    });
    //get all the modules present on the instrument then get the inventories assocaited with the 
    //data.modules = 0;
    if (!Array.isArray(data.modules)) {
        return new Promise(function (resolve) { // display test datd
            setTimeout(resolve.bind(null), 3000)
        }).then(() => {
            instrument.data = data.modules;
            let data2 = offlienData //return ofline data for testing purposes
            data.modules = data2.modules;
            data.notifications = data2.notifications;
            data.AcumulatedAssays = data2.AcumulatedAssays;
            instrument.data = data;
            //console.log(data);
            return instrument;
        });
    } else {
        console.log(" modules returned fetching rest ");//instrument.name+
        for (let i = 0; i < data.modules.length; i++) {
            Promises[i] = fetch("https://" + instrument.adress + api_data_link.CorInventory.url + i).then(body => { return body.json(); }).catch(err => { console.log(err); return err; });
            Promises[3 + i] = fetch("https://" + instrument.adress + api_data_link.dorStatus.url + i).then(body => { return body.json(); }).catch(err => { console.log(err); return err; });
        }
        let filter = "$filter=(NotificationType/EventType%20eq%20BD.HT.Common.Notifications.EventTypes%27Warning%27%20and%20%20ClearedByUser%20eq%20null)%20or%20(NotificationType/EventType%20eq%20BD.HT.Common.Notifications.EventTypes%27Alert%27%20and%20%20ClearedByInstrument%20eq%20null)";
        let expeand = "$expand=NotificationType,NotificationParameters,Instrument,Site,InstrumentConfigurationDevice";
        Promises[6] = fetch("https://" + instrument.adress + api_data_link.notifications.url + "?" + filter + "&" + expeand, { mode: 'no-cors' }).then(body => {
            //console.log(body);
            return body.json();
        }).catch(err => { });
        Promises[7] = fetch("https://" + instrument.adress + api_data_link.acumulations.url).then(body => { return body.json(); }).catch(err => { console.log(err); return err; });
        Promises[8] = fetch("https://" + instrument.adress + api_data_link.workFlows.url).then(body => { return body.json(); }).catch(err => { console.log(err); return err; });
        Promises[9] = fetch("https://" + instrument.adress + api_data_link.softwareversion.url).then(body => { return body.json(); }).catch(err => { console.log(err); return err; });
        Promises[10] = fetch("https://" + instrument.adress + api_data_link.OpenRacks.url).then(body => { return body.json(); }).catch(err => { console.log(err); return err; });
        Promises[11] = fetch("https://" + instrument.adress + api_data_link.pendingCount.url).then(body => { return body.json(); }).catch(err => { console.log(err); return err; });

        //https://localhost:7000/api/softwareversion
        //https://localhost:7000/Alert/  Count
        //https://localhost:7000/api/assayinfo/assays  ,  assayvariant  ,  racks  ,  tubes
        //https://localhost:7000/api/assayinfo/
        //https://localhost:7000/Procedure  
        //https://localhost:7000/api/rackManagement/  Unload
        //https://localhost:7000/Diagnostic/Notification/Active
        //https://localhost:44360/api/SampleNeedAttentionCount
        return Promise.all(Promises).then(function (values) {
            console.log("network returned all")
            for (let i = 0; i < data.modules.length; i++) {
                //these valuse need to be updated or saved in viewupdater.js
                data.modules[i].Inventory = values[i];
                data.modules[i].DoorStatus = values[3 + i];
            }
            //data.notifications = values[6];
            data.notifications = offlienNotifications;
            data.AcumulatedAssays = values[7];
            data.workFlows = values[8].Workflows;
            data.softwareversion = values[9];
            data.GeneralInventory.OpenRackSlotCount = values[10];
            data.GeneralInventory.RacksPendingInventoryCount = values[11];
            instrument.data = data;
            return instrument;
        }).catch(error => {
            console.log(error.message)
            return instrument;
        });
    }
}

function ShowInstrumentTimeoOut(Instrument) {
    let card = getInstrumentCard(Instrument);
    card.querySelector('.moduleNames').innerHTML = '';
    card.querySelector('.notify-badge').hidden = true;
    card.querySelector('.card-spinner').hidden = true;
    card.querySelector('.offline-message').hidden = false;
    card.querySelector('.Is-Valid').innerHTML = false;

}

// uses instrument.name to get the HTML element for that instrument
// or if a card with this id isnt found it clones the template and returns it
function getInstrumentCard(instrument) {
    const id = instrument.name;
    const card = document.getElementById(id);
    if (card) {
        return card;
    }
    const newCard = document.getElementById('Instrument-template').cloneNode(true);
    // newCard.querySelector('.location').textContent = location.label;
    newCard.setAttribute('id', id);//card-spinner   HeaderButtonsContainer
    newCard.querySelector('.HeaderButtonsContainer').querySelector('.remove-instrument').addEventListener('click', removeInstrumentTrack);
    newCard.querySelector('.card-spinner').querySelector('.remove-instrument').addEventListener('click', removeInstrumentTrack);
    newCard.querySelector('.ViewInstrumentButton').onclick = function (e) {
        if (newCard.querySelector('.Is-Valid').innerHTML === "false") { return; }
        showPopup(e, "Inventory");
    }
    newCard.querySelector('.Inventory').querySelector(".remove-Inventory").onclick = function (e) {
        //HideInventory(e.target.parentNode.parentNode)//goto Instrument-card
        hidePopup(e, ".Inventory");
    }
    newCard.querySelector('.genericOverLay').onclick = function (e) {
        let source = document.getElementById("overlaySource").innerHTML;
        hidePopup(e, source);
    }
    newCard.querySelector('.notifications').onclick = function (e) {
        if (newCard.querySelector('.Is-Valid').innerHTML === "false") { return; }
        showPopup(e, "Notifications");
    }
    newCard.querySelector('.notificationDetails').querySelector(".remove-Notifications").onclick = function (e) {
        hidePopup(e, ".notificationDetails");
    }
    newCard.querySelector('.instrument-info').onclick = function (e) {//show 
        if (newCard.querySelector('.Is-Valid').innerHTML === "false") { return; }
        showPopup(e, "DetailedInfo");
    }
    newCard.querySelector('.InstrumentDetail').querySelector(".remove-instrument-info").onclick = function (e) {
        hidePopup(e, ".InstrumentDetail");
    }

    document.querySelector('main').appendChild(newCard);
    newCard.removeAttribute('hidden');
    newCard.querySelector('.User-given-name').textContent = instrument.name;
    return newCard;
}


function updateData() {
    if (CORMonitorApp.SavedInstruments === null) {
        return;
    }
    Object.keys(CORMonitorApp.SavedInstruments).forEach((key) => {
        let Instrument = CORMonitorApp.SavedInstruments[key];
        let card = getInstrumentCard(Instrument);
        card.querySelector('.card-spinner').hidden = false;
        getInstrumentDataFromNetwork(Instrument).then(Instrument_with_Data => {
            //console.log(data);
            renderInstrument(card, Instrument_with_Data);
            CORMonitorApp.SavedInstruments[Instrument_with_Data.name] = Instrument_with_Data;
        });
    });
}



//stores the JSON instruments in cache
function saveInstrumentList(Instruments) {
    let data = JSON.stringify(Instruments);
    localStorage.setItem('cachedInstrumentList', data);
}
//loads JSON instruments from cache if none are found return {}
function loadInstrumentsList() {
    let Instruments = localStorage.getItem('cachedInstrumentList');
    if (Instruments) {
        try {
            Instruments = JSON.parse(Instruments);
        } catch (ex) {
            Instruments = {};
        }
    }
    if (Instruments === null) {
        Instruments = {};
    }
    return Instruments;
}

/**
 * Initialize the app, gets the list of instruments from local storage, then renders the initial data.
 */
function init() {
    // retrive and update the cached instruments
    //document.getElementById('about').querySelector(".button").textContent+=" init"
    CORMonitorApp.SavedInstruments = loadInstrumentsList();
    CORMonitorApp.incomingSettings = LoadSettings();
    applySettings();
    console.log(CORMonitorApp.incomingSettings.dataRefreshEvery)
    updateData();
    // Set up the event handlers for all of the buttons. 
    window.addEventListener("resize", windowResizeHandler);
    document.getElementById('butRefresh').addEventListener('click', updateData);
    document.getElementById('butAdd').addEventListener('click', toggleAddDialog);//open add instrument dialog
    document.getElementById('butDialogCancel').addEventListener('click', toggleAddDialog);//cancel add instrument
    document.getElementById('butDialogAdd').addEventListener('click', addInstrument);
    document.getElementById('removeAboutBox').addEventListener('click', removeAbout);
    document.getElementById('butOptions').addEventListener('click', toggleOptions);
    document.getElementById('OptiosOverlay').addEventListener('click', HideOptions);
   // document.getElementById('about').querySelector(".button").addEventListener('click', ()=>{
   //     document.getElementById('about').querySelector(".button").textContent+=" here"
   // });
    
    let boolOptionList = document.getElementById('options').querySelectorAll(".bool");
    boolOptionList.forEach(option => {
        try {
            option.querySelector(".settingElement").addEventListener('click', getUserSettings);//getUserSettings.bind(null, event, updateAll=true)
        } catch (err) {//mostlikly couldnt find settingElement
            console.error("error Asigning listner to option error: ", err);
        }
    });
    let rangeOptionList = document.getElementById('options').querySelectorAll(".range");
    rangeOptionList.forEach(option => {
        try {
            option.querySelector(".settingElement").addEventListener('input', displayNewValue, "time");
            option.querySelector(".settingElement").addEventListener('change', getUserSettings);//getUserSettings.bind(null, event, updateAll=true)
        } catch (err) {//mostlikly couldnt find settingElement
            console.error("error Asigning listner to option error: ", err);
        }
    });
    baseUpdater = setInterval(() => {
        UpdateBase();
    }, CORMonitorApp.appliedSettings.dataRefreshEvery);
    //document.getElementById('butInstall').removeAttribute('hidden');
}

async function windowResizeHandler() {
    //resize options
    let options = document.getElementById("options");
    let optionsOverlay = document.getElementById("OptiosOverlay");
    if (optiosVisible) {
        optionsOverlay.style.height = screen.height;//window.screen.height * window.devicePixelRatio;
        optionsOverlay.style.width = screen.width;//window.screen.width * window.devicePixelRatio;
    } else {
        options.style.transition = "none";
        options.style.left = -options.clientWidth + "px";
        setTimeout(() => {
            options.style.transition = "left .3s linear";
        }, 500);
    }
}

function removeAbout() {
    document.getElementById('about').hidden = true;
}


/**
 * 
 * 
 * show Hide interfaces and their overlayes
 */


function toggleAddDialog() {
    //console.log(addVisible ,displayBusy)
    if (!addVisible && !displayBusy) {//add not diplayed and screen is not busy, display add
        CORMonitorApp.addDialogContainer.classList.toggle('visible');
        document.getElementById("ForceAddBox").hidden = true;
        displayBusy = addVisible = true;
    } else if (addVisible && displayBusy) {//add is displayed and should be removed
        CORMonitorApp.addDialogContainer.classList.toggle('visible');
        document.getElementById("ForceAddBox").hidden = true;
        displayBusy = addVisible = false;
    }//else add not diplayed, and should not be displayed
}



//called from showPopup displays a list of inventory items
function Inventory(instrument, card) {
    let inventory = card.querySelector('.Inventory');
    let inventoryList = inventory.querySelector('.InventoryList');
    inventoryList.innerHTML = '';
    instrument.data.modules.forEach(instrumentModule => {//each module has an inventory loop through them
        let hasBulk = false;
        let instrumentName = document.createElement("div"); instrumentName.className = "InstrumentInventoryNAme";
        instrumentName.textContent = instrumentModule.Type + " " + instrumentModule.Side + " (" + instrumentModule.InstrumentSerialNumber + ")"
        inventoryList.appendChild(instrumentName);
        inventoryList.appendChild((document.createElement("hr")));
        instrumentModule.Inventory.forEach(element => {
            if (element.ConsumableCode.includes("BULK_CHANNEL")) { hasBulk = true; return; }//if this module has bulk diluent inventory we will display it later
            let elm = human_readable_consumable(element);
            //console.log(elm.height);
            inventoryList.appendChild(elm);
        });
        if (hasBulk) {
            inventoryList.appendChild(makeDiluentDisplay(instrumentModule));
        }
    });
    //inventory.hidden = false;
    inventory.style.transform = "scale(1)";
    document.getElementById("overlaySource").innerHTML = ".Inventory";
    //inventory.style.top = (inventory.clientHeight / 2) - (card.clientHeight / 2) + "px";//InventoryOverLay
}

//called from showPopup displays a list notifications
function Notifications(instrument, card) {
    let notificationDetails = card.querySelector('.notificationDetails');
    let NotificationsList = notificationDetails.querySelector('.NotificationsList');

    instrument.data.notifications.value.forEach(notification => {
        makeNotification(notification, NotificationsList)
    });

    notificationDetails.style.transform = "scale(1)";
    document.getElementById("overlaySource").innerHTML = ".notificationDetails";
    updateNotification(instrument, card)
    currrentCardUpdater = setInterval(() => {
        updateNotification(instrument, card);
    }, CORMonitorApp.appliedSettings.dataRefreshEvery);
}

//called from showPopup displays extra information about a particular instrument
function DetailedInfo(instrument, card) {
    let InstrumentDetail = card.querySelector('.InstrumentDetail');
    makeAutoDetailInfo(instrument, InstrumentDetail);
    InstrumentDetail.style.transform = "scale(1)";
    document.getElementById("overlaySource").innerHTML = ".InstrumentDetail";
    updatedetails(instrument, card);
    currrentCardUpdater = setInterval(() => {
        updatedetails(instrument, card);
    }, CORMonitorApp.appliedSettings.dataRefreshEvery);
}



/**
 * will create a popup then call the callback function which fils out the popup and displays it
 * @param {event} evt mouse click event
 * @param {function} popupContent name of the function to call that will create the popup content
 */
function showPopup(evt, popupContent) {
    if (displayBusy) return;
    displayBusy = true;
    let card;//= evt.target.parentNode.parentNode.parentNode;//goto Instrument-card
    for (let pathIndex in evt.path) {
        let element = evt.path[pathIndex];
        if (element.className) {
            if (element.className.includes("Instrument-card")) {
                card = element;
                break;
            }
        }
    }
    let overlay = card.querySelector('.genericOverLay');
    overlay.hidden = false;
    overlay.style.height = screen.height + "px";//window.screen.height * window.devicePixelRatio;
    overlay.style.width = screen.width + "px";//window.screen.width * window.devicePixelRatio;  overlay.offset().top
    console.log(screen.height, screen.width)


    console.log(document.body.clientHeight)
    //console.log(overlay.offsetTop, position.y)
    //overlay.style.height="600px"
    let Instrument = CORMonitorApp.SavedInstruments[card.id];

    var cb = window[popupContent];
    if (typeof cb === "function") cb(Instrument, card);
    
    overlay.style.left = 0+ "px"
    overlay.style.top = 0 + "px"
    let position = getPosition(overlay);
    overlay.style.left = -position.x + "px"
    overlay.style.top = -position.y + "px"
    console.log(document.body.clientHeight)
   // console.log(document.getElementById("mainpage").scrollHeight)
}

function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;
    while (element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return { x: xPosition, y: yPosition };
}

function hidePopup(evt, sourceClass) {
    displayBusy = false;
    let card;//= evt.target.parentNode.parentNode.parentNode;//goto Instrument-card
    for (let pathIndex in evt.path) {
        let element = evt.path[pathIndex];
        if (element.className) {
            if (element.className.includes("Instrument-card")) {
                card = element;
                break;
            }
        }
    }
    card.querySelector(sourceClass).style.transform = "scale(0)";
    card.querySelector('.genericOverLay').hidden = true;
    clearInterval(currrentCardUpdater);
}

init();




