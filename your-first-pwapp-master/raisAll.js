//will raise or clear all avalable alerts and warnings in the cor notifications
//
var args = process.argv.slice(2);


const fetch = require("node-fetch");
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;


if(process.argv[2]==="raise"){
    fetch("https://localhost:7000/Diagnostic/Notification/Types").then(body => { 
        body.json().then(resp =>{
            resp.forEach(element => {
                if(element.EventType!=3){
                    fetch(
                        "https://localhost:7000/Diagnostic/Notification/Raise?notificationTypeId="+element.NotificationTypeId+"&siteId=null&deviceId=null&orderedAssayId=null&rackIdentifiedId=&createParent=false",
                        { method: 'POST' }
                    )
                    
                    console.log(element.Name);
                }
            });
        }); 
    });
}

if(process.argv[2]==="clear"){
    fetch(
        "https://localhost:44360/api/Notifications?"+
        "$filter=(NotificationType/EventType%20eq%20BD.HT.Common.Notifications.EventTypes%27Warning%27%20and%20%20ClearedByUser%20eq%20null)%20or%20(NotificationType/EventType%20eq%20BD.HT.Common.Notifications.EventTypes%27Alert%27%20and%20%20ClearedByInstrument%20eq%20null)&"+
        "$expand=NotificationType,Instrument").then(body => { 
        body.json().then(resp =>{
            let respBody ={
                byInstrument: true,
                notificationIds: []
              };
            resp.value.forEach(element => {                    
                respBody.notificationIds.push(element.NotificationId)
            });
            fetch(
                "https://localhost:7000/Diagnostic/Notification/Clear",
                { method: 'POST',body: JSON.stringify(respBody) ,headers: { 'Content-Type': 'application/json' } }
            )
            respBody.byInstrument = false;
            fetch(
                "https://localhost:7000/Diagnostic/Notification/Clear",
                { method: 'POST',body: JSON.stringify(respBody) ,headers: { 'Content-Type': 'application/json' } }
            )
            console.log(respBody);
        }); 
    });
}


