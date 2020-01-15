//in order to save on network bandwith only properties visible on the users screen are updated

function UpdateBase() {
    if (CORMonitorApp.SavedInstruments === null) {
        return;
    }
    Object.keys(CORMonitorApp.SavedInstruments).forEach((key) => {
        let instrument = CORMonitorApp.SavedInstruments[key];
        let card = getInstrumentCard(instrument);
        //card.querySelector('.card-spinner').hidden = false;
        retrievBaseData(instrument).then(Instrument_with_Data => {
            //console.log(data);
            if (!instrument.hasValidData) {
                getInstrumentDataFromNetwork(instrument).then(Instrument_with_Data => {
                    console.log("first time on network")
                    renderInstrument(card, Instrument_with_Data);
                    CORMonitorApp.SavedInstruments[Instrument_with_Data.name] = Instrument_with_Data;
                });
            } else {
                renderInstrument(card, Instrument_with_Data);
            }
            //console.log(Instrument_with_Data)
            //CORMonitorApp.SavedInstruments[Instrument_with_Data.name] = Instrument_with_Data;
            //saveInstrumentList(CORMonitorApp.SavedInstruments);
        }).catch(() => {
            ShowInstrumentTimeoOut(instrument);
        });
    });
}


function retrievBaseData(instrument) {
    let Promises = [];
    //let data = new instrumentData();
    Promises[0] = fetch("https://" + instrument.adress + api_data_link.modules.url).then(body => { return body.json(); }).catch(err => { throw err; });
    let filter = "$filter=(NotificationType/EventType%20eq%20BD.HT.Common.Notifications.EventTypes%27Warning%27%20and%20%20ClearedByUser%20eq%20null)%20or%20(NotificationType/EventType%20eq%20BD.HT.Common.Notifications.EventTypes%27Alert%27%20and%20%20ClearedByInstrument%20eq%20null)";
    let expeand = "$expand=NotificationType,NotificationParameters,Instrument,Site,InstrumentConfigurationDevice";
    Promises[1] = fetch("https://" + instrument.adress + api_data_link.notifications.url + "?" + filter + "&" + expeand, { mode: 'no-cors' }).then(body => {
        //console.log(body);
        return body.json();
    }).catch(err => { });
    return Promise.all(Promises).then(function (values) {
        /* console.log("network returned: ",values)
         values.forEach((value)=>{
             console.log(value)
             if(value){}
         })
         //*/
        let Inventorys = [], DoorStatus = [];
        for (let i = 0; i < instrument.data.modules.length; i++) {//save old valuse
            Inventorys[i] = instrument.data.modules[i].Inventory;
            DoorStatus[i] = instrument.data.modules[i].DoorStatus;
        }
        instrument.data.modules = values[0];
        for (let i = 0; i < instrument.data.modules.length; i++) {//replace old valuse 
            instrument.data.modules[i].Inventory = Inventorys[i];
            instrument.data.modules[i].DoorStatus = DoorStatus[i];
        }

        //instrument.data.notifications = values[1];
        instrument.data.notifications = offlienNotifications;
        return instrument;
    }).catch(error => {
        if (error.message === "Failed to fetch") {
            throw error;
        }
        console.log(error.message)
        return instrument;
    });
}

function updateInventory(instrument, card) {

}

function updateNotification(instrument, card) {
    let Promis;
    //let data = new instrumentData();
    let filter = "$filter=(NotificationType/EventType%20eq%20BD.HT.Common.Notifications.EventTypes%27Warning%27%20and%20%20ClearedByUser%20eq%20null)%20or%20(NotificationType/EventType%20eq%20BD.HT.Common.Notifications.EventTypes%27Alert%27%20and%20%20ClearedByInstrument%20eq%20null)";
    let expeand = "$expand=NotificationType,NotificationParameters,Instrument,Site,InstrumentConfigurationDevice";
    Promis = fetch("https://" + instrument.adress + api_data_link.notifications.url + "?" + filter + "&" + expeand, { mode: 'no-cors' }).then(body => {
        //console.log(body);
        return body.json();
    }).catch(err => { });

    return Promis.then(function (value) {
        console.log(value);

        //instrument.data.notifications = value;
        instrument.data.notifications = offlienNotifications;

        let notificationDetails = card.querySelector('.notificationDetails');
        let NotificationsList = notificationDetails.querySelector('.NotificationsList');

        instrument.data.notifications.value.forEach(notification => {
            makeNotification(notification, NotificationsList)
        });
    }).catch(error => {
        //console.log(error.message)
        return instrument;
    });
}

function updatedetails(instrument, card) {
    let Promises = [];
    //let data = new instrumentData();
    Promises[0] = fetch("https://" + instrument.adress + api_data_link.softwareversion.url).then(body => { return body.json(); }).catch(err => { console.log(err); return err; });
    Promises[1] = fetch("https://" + instrument.adress + api_data_link.OpenRacks.url).then(body => { return body.json(); }).catch(err => { console.log(err); return err; });
    Promises[2] = fetch("https://" + instrument.adress + api_data_link.pendingCount.url).then(body => { return body.json(); }).catch(err => { console.log(err); return err; });

    return Promise.all(Promises).then(function (values) {
        console.log("network returned")
        instrument.data.softwareversion = values[0];
        instrument.data.GeneralInventory.OpenRackSlotCount = values[1];
        instrument.data.GeneralInventory.RacksPendingInventoryCount = values[2];

        let InstrumentDetail = card.querySelector('.InstrumentDetail');
        makeAutoDetailInfo(instrument, InstrumentDetail)
        //console.log(instrument)
        //CORMonitorApp.SavedInstruments[instrument.name] = instrument;
        //saveInstrumentList(CORMonitorApp.SavedInstruments);
    }).catch(error => {
        //console.log(error.message)
        return instrument;
    });

}
