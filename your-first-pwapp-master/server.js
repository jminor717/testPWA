'use strict';

const express = require('express');
const https = require('https');
const fs = require("fs");
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;

function startServer() {
    const app = express();

    // Redirect HTTP to HTTPS,
    //app.use(redirectToHTTPS([/localhost:(\d{4})/], [], 301));

    // Logging for each request
    /*
    app.use((req, resp, next) => {
        const now = new Date();
        const time = `${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`;
        const path = `"${req.method} ${req.path}"`;
        const m = `${req.ip} - ${time} - ${path}`;
        console.log(m);
        next();
    });
*/

    // Handle requests for static files
    app.use(express.static('public'));

    var privateKey = fs.readFileSync('openssl.key').toString();
    var certificate = fs.readFileSync('openssl.crt').toString();
    //*
    https.createServer({
        key: privateKey,
        cert: certificate,
        passphrase: "xj04612E"
    }, app).listen(3001, function () {
        console.log('running on https port 3000')
    })
    //*/
    // Start the server
    return app.listen('8884', () => {
        console.log('running on port 8088');
    });
     app.listen('8881', "192.168.137.1", () => {
        console.log('running on port 8088');
    });
}








startServer();

