function generate_inventory_card(element, tytle, outofnum, outovText) {
    let inventoryItem = document.createElement("div"); inventoryItem.className = "InvenToryItem";

    let img = document.createElement("img"); img.className = "alertImg"; img.src = "images/state-ok.svg";
    let expir = document.createElement("span"); expir.classList = "danger";//experiationAlertRight
    let imgANDexpir = document.createElement("span"); imgANDexpir.className = "ininvvetoryAlertContainer";
    let title = document.createElement("b");
    let quantity = document.createElement("b");
    let number = document.createElement("span"); number.className = "Healthy";
    let outOve = document.createElement("span");
    let countANDname = document.createElement("div");

    title.textContent = tytle;
    //element.AvailableQuantity=outofnum*.61;
    element.AvailableQuantity = Math.round(element.AvailableQuantity);
    number.textContent = element.AvailableQuantity;/////////////////determin if this is corect property also try   ReservedQuantity    TotalUnusedQuantity    TotalSpace
    if (tytle.includes("Waste")) {//waste errors ocor at high volumes
        if (element.AvailableQuantity / outofnum > .9) { number.className = "danger"; img.src = "images/state-error.svg"; }
        else if (element.AvailableQuantity / outofnum > .6) { number.className = "warning"; img.src = "images/state-warning.svg"; }
    } else {//other inventory errors ocor at low volumes
        if (element.AvailableQuantity / outofnum < .1 || element.AvailableQuantity == 0) { number.className = "danger"; img.src = "images/state-error.svg"; }
        else if (element.AvailableQuantity / outofnum < .4) { number.className = "warning"; img.src = "images/state-warning.svg"; }
    }
    if (element.Expired) {
        expir.textContent = "EXPIRIED";
    }
    imgANDexpir.appendChild(expir);
    imgANDexpir.append(img);

    quantity.append(number);
    outOve.append(quantity);
    outOve.append(document.createElement("span").textContent = "/" + outofnum + outovText);
    countANDname.append(outOve);
    img.style.height = "20px";

    inventoryItem.append(title);
    inventoryItem.append(imgANDexpir);
    inventoryItem.append(countANDname);
    // console.log(inventoryItem.offsetHeight)
    //img.style.height= inventoryItem.clientHeight+"px";public\images\state-ok.svg
    return inventoryItem;
}

function makeDiluentDisplay(inModule) {
    let BulkContainer = document.createElement("div"); BulkContainer.className = "InvenToryItem";
    let title = document.createElement("b");
    title.textContent = "Bulk Diluent Aliquots";
    BulkContainer.append(title);
    inModule.Inventory.forEach(element => {
        if (element.ConsumableCode.includes("BULK_CHANNEL")) {
            let chanelnum = human_readable_consumable(element);
            if (element.AssayName === 3) {

            } else {
                chanelnum += element.AssayName;
                let dilChanel = document.createElement("div");
                dilChanel.textContent = chanelnum;
                let quantity = document.createElement("span"); quantity.className = "DiluentQuantity";
                let hasQuantity = document.createElement("b");
                let outove = document.createElement("span");
                let expirationANDquantity = document.createElement("span"); expirationANDquantity.className = "ininvvetoryAlertContainer";
                hasQuantity.textContent = element.AvailableQuantity   /////////////////determin if this is corect proprtir also   ReservedQuantity    TotalUnusedQuantity    TotalSpace
                outove.textContent = "/400"
                if (element.AvailableQuantity / 400 < .1) { hasQuantity.className = "danger"; }
                else if (element.AvailableQuantity / 400 < .4) { hasQuantity.className = "warning"; }
                if (element.Expired) {
                    let expir = document.createElement("span"); expir.classList = "danger";//experiationAlert
                    expir.textContent = "EXPIRIED"
                    expirationANDquantity.appendChild(expir);
                }


                quantity.appendChild(hasQuantity);
                quantity.appendChild(outove);
                expirationANDquantity.appendChild(quantity);
                dilChanel.appendChild(expirationANDquantity);
                BulkContainer.appendChild(document.createElement("hr"));
                BulkContainer.appendChild(dilChanel);
            }

        }
    });
    return BulkContainer;
}

function makeInstrumentHeader(Moodule) {
    let title = document.createElement("span");
    title.textContent = Moodule.Type;
    let name = document.createElement("span");
    name.textContent = "(" + Moodule.InstrumentSerialNumber + ") ";
    name.className = "smallHeader";
    if (Moodule.IsOnline) {
        name.className += " Healthy";
    }
    name.className += " danger";
    title.append(name);
    return title;
}


function makeNotification(notification, NotificationsList) {
    const id = notification.NotificationId;
    let notificationCard = document.getElementById(id);
    if (!notificationCard) {
        notificationCard = document.getElementById("NotificationTemplate").cloneNode(true);
        notificationCard.setAttribute("id", id);
        updateNotificationInfo(notification, notificationCard)
        NotificationsList.appendChild(notificationCard);
        return;
    }
    updateNotificationInfo(notification, notificationCard)
    return;
}


function updateNotificationInfo(notification, notificationCard) {
    notificationCard.querySelector(".message-title").textContent = notification.NotificationType.Name;
    notificationCard.querySelector(".message-code").textContent = notification.Instrument.Name + " " + notification.Instrument.InstrumentSide + " (" + notification.InstrumentSerialNumber + ") - " + notification.NotificationTypeId;
    notificationCard.querySelector(".message-body").textContent = notification.NotificationType.Description;
    notificationCard.querySelector(".message-header").parentNode.className = "sys" + notification.NotificationType.EventType;
    notificationCard.removeAttribute("hidden");
}

/**
 * will generate extra info based on html elements in the InstrumentDetail element labeled with the auto class name   
 * the value of this element is given by its id for example a dive wit an id of
 *   softwareversion.Version   will map to   instrument.data.softwareversion.Version ___best used for simple properties
 * @param {*} instrument 
 * @param {Element} InstrumentDetail popup card
 */
function makeAutoDetailInfo(instrument, InstrumentDetail) {
    let autofill = InstrumentDetail.querySelectorAll(".auto");
    for (let i = 0; i < autofill.length; i++) {
        let element = autofill[i];
        let path = element.id.split('.');
        element.textContent= getValue(instrument.data,path,0)
    }
}

function getValue(object, pathArr, pathindex){
    if(pathindex>=pathArr.length-1){
        return object[pathArr[pathindex]];
    }
    return getValue(object[pathArr[pathindex]], pathArr, ++pathindex)
}