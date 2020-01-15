




function toggleOptions() {
    if (!optiosVisible && !displayBusy) {//add not diplayed and screen is not busy, display add
        showOptions()
        displayBusy = optiosVisible = true;
    } else if (optiosVisible && displayBusy) {//add is displayed and should be removed
        HideOptions()
        displayBusy = optiosVisible = false;
    }
}

function showOptions() {//optiosVisible
    let options = document.getElementById("options");
    options.style.left = "0%"
    let overlay = document.getElementById("OptiosOverlay");
    //    console.log(screen.height , screen.width)
    overlay.style.height = screen.height;//window.screen.height * window.devicePixelRatio;
    overlay.style.width = screen.width;//window.screen.width * window.devicePixelRatio;
    overlay.hidden = false;
    console.log("showing options")
}

function HideOptions() {
    displayBusy = optiosVisible = false;
    let options = document.getElementById("options");
    options.style.left = -options.clientWidth + "px"
    document.getElementById("OptiosOverlay").hidden = true;;
}

function getUserSettings(evt, updateAll) {
    console.log(evt, updateAll)
    if (evt === "all" || updateAll === true) {

    } else {
        //evt.target.parentElement.
    }
    let optionlist = document.getElementById('options').querySelectorAll(".SettingContainer");
    optionlist.forEach(option => {
        if (option.classList.contains("bool")) {
            let optionValue = option.querySelector(".settingValue");
            CORMonitorApp.incomingSettings[optionValue.id] = optionValue.checked;
        }
        if (option.classList.contains("range")) {
            let optionValue = option.querySelector(".settingValue");
            console.log(optionValue.valueAsNumber)
            CORMonitorApp.incomingSettings[optionValue.id] = optionValue.valueAsNumber*1000;
        }
    });

    console.log(CORMonitorApp.incomingSettings)
    //console.log(evt)
    applySettings();
}

function displayNewValue(evt, displayType) {
    console.log(displayType)//range-display
    
    let displayString = "0:";
    let seconds = evt.target.valueAsNumber;
    displayString += Math.floor(seconds / 60);
    displayString+=":";
    displayString+=seconds%60;
    evt.target.parentNode.querySelector(".range-display").textContent =displayString;

}

async function applySettings() {
    for (var CurrentSettingName in CORMonitorApp.appliedSettings) {
        //console.log(CurrentSettingName,CORMonitorApp.appliedSettings[CurrentSettingName], CORMonitorApp.incomingSettings[CurrentSettingName])
        if (CORMonitorApp.appliedSettings[CurrentSettingName] === CORMonitorApp.incomingSettings[CurrentSettingName]) {
            continue;
        }
        if (CurrentSettingName === "ShowAboutChecked") {
            document.getElementById(CurrentSettingName).checked = CORMonitorApp.incomingSettings[CurrentSettingName];
            if (CORMonitorApp.incomingSettings[CurrentSettingName]) {//show the about message
                showAbout();
            } else {//hide the about message
                removeAbout();
            }
        }
        if (CurrentSettingName === "DarkModeChecked") {
            document.getElementById(CurrentSettingName).checked = CORMonitorApp.incomingSettings[CurrentSettingName];
            if (CORMonitorApp.incomingSettings[CurrentSettingName]) {
                setTheme("dark")
            } else {
                setTheme("defaultTheme")
            }
        }
        if (CurrentSettingName === "NotivicationChecked") {
            document.getElementById(CurrentSettingName).checked = CORMonitorApp.incomingSettings[CurrentSettingName];
            if (CORMonitorApp.incomingSettings[CurrentSettingName]) {
                displayNotification();
            } else {

            }
        }
        if (CurrentSettingName === "AutoUpdateApp") {
            document.getElementById(CurrentSettingName).checked = CORMonitorApp.incomingSettings[CurrentSettingName];
            globalAutoUpdateVal = CORMonitorApp.incomingSettings[CurrentSettingName];
        }
        if (CurrentSettingName === "dataRefreshEvery") {//set the value displayed on the options screen, 
            document.getElementById(CurrentSettingName).valueAsNumber=CORMonitorApp.incomingSettings[CurrentSettingName]/1000;
            displayNewValue({target:document.getElementById(CurrentSettingName)},"time");
            clearInterval(baseUpdater);
            baseUpdater = setInterval(() => {
                UpdateBase();
            }, CORMonitorApp.incomingSettings[CurrentSettingName]);
        }
        CORMonitorApp.appliedSettings[CurrentSettingName] = CORMonitorApp.incomingSettings[CurrentSettingName];//set current setting equal to desired setting
    }
    SaveSettings(CORMonitorApp.appliedSettings);
}



function SaveSettings(settings) {
    let data = JSON.stringify(settings);
    localStorage.setItem('cachedSettings', data);
}

function LoadSettings() {
    let settins = localStorage.getItem('cachedSettings');
    if (settins) {
        try {
            settins = JSON.parse(settins);
        } catch (ex) {
            settins = new Settings();
        }
    }
    if (settins === null) {
        settins = new Settings();
    }
    return settins;
}

function showAbout() {
    //console.log("Shieb")
    document.getElementById('about').hidden = false;
}

function setTheme(themeName) {
    //const element = document.querySelector("."+themeName)
    //const style = getComputedStyle(element)
    //console.log(style);
    //document.documentElement.style.setProperty('--my-variable-name', 'pink');
    if (themeName === "dark") {
        for (propertieName in dark) {
            //console.log(propertieName)
            document.documentElement.style.setProperty("--" + propertieName, dark[propertieName]);
        }
    }
    if (themeName === "defaultTheme") {
        for (propertieName in defaultTheme) {
            document.documentElement.style.setProperty("--" + propertieName, defaultTheme[propertieName]);
        }
    }
}

let dark = {
    PrimaryColor: "#056b99",
    SecondaryColor: "#067fc3",
    mainBackground: "#515151",
    POPUPBackground: "#4c637b",
    ItemColor: "#1d1d1d",
    addCircleBackground: "#3f51b5",
    mainTextColor: "#efefef",
    secondaryTextColor: "#b7b7b7",
    lowPriorityTextColor: "#939393",
    standOutTextColor: "#fff",
};
let defaultTheme = {
    PrimaryColor: "#056b99",
    SecondaryColor: "#067fc3",
    mainBackground: "#ececec",
    POPUPBackground: "#4c637b",
    ItemColor: "#fff",
    addCircleBackground: "#3f51b5",
    mainTextColor: "#242424",
    secondaryTextColor: "#666",
    lowPriorityTextColor: "#999",
    standOutTextColor: "#fff",
};




function displayNotification() {
    Notification.requestPermission(function (status) {
        console.log('Notification permission status:', status);
    });
    console.log("try Notivication");
    console.log(Notification.permission);
    if (Notification.permission == 'granted') {
        navigator.serviceWorker.getRegistration().then(function (reg) {
            reg.showNotification('Hello world!');
        });
    }
}