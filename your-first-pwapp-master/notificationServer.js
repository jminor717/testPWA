const azure = require('azure-sb');
var notificationHubService = azure.createNotificationHubService('COR-test-notifications', 'Endpoint=sb://cor-test.servicebus.windows.net/;SharedAccessKeyName=DefaultFullSharedAccessSignature;SharedAccessKey=n/QrPMw/COwX7rBtd7/+lWewVcmI9oO9/4lBsn3MLYs=');
const fs =require("fs")
const https = require('https');

class instrument{
    constructor(displayName, guid,adress) {
        this.displayName = displayName;
        this.guid = guid;
        this.adress = adress;
      }

}



const port = 8888;
var run = true;
var monitorInterval;
const check_COR_every=.2*(60*1000);
var test= new instrument(displayName="vsp0000",guid="6152f559-f983-449d-9508-fd1136a337e3",adress="localhost")
var instruments=[test ]
//express.Router.call()
//const app = express()
var app = require('express')();

var privateKey = fs.readFileSync('openssl.key').toString();
var certificate = fs.readFileSync('openssl.crt').toString();
//*
https.createServer({
    key: privateKey,
    cert: certificate,
    passphrase: "xj04612E"
}, app).listen(3303, function () {
    console.log('running on https port 3303')
})

app.listen(port, function () {
    console.log("Listening on " + port);
});


app.get("/avalabelInstruments", function (req, res) {
    /* some server side logic */
    console.log("/user/add");
    res.send([{name:"strelitzia"}]);
});

app.post("/notifictions/register",function (req,res){
    console.log(req)
    res.send("acknoledged");
    //console.log(res)
});



function sendNotificationall() {
    var payload = {
        data: {
            message: 'Hello!'
        }
    };
    notificationHubService.gcm.send(["user:" + "first"], payload, function (error) {
        if (!error) {
            //notification sent
            console.log("notification sent")
        }else{
            console.log(error);
        }
    });
}


sendNotificationall();
function checkCor(){

}




monitorInterval =setInterval(() => {
    checkCor();
}, check_COR_every);
