'use strict';
var globalAutoUpdateVal = true;
const cahceName = 'Local-cache-V-1.0.0';

const PreCachedFiles = [//things not loaded as part of normal operation but should still be cached
    '/offline.html',

];
let bac = [//does nothing
    '/scripts/oflineData.js',


    '/index.html',
    '/styles/inline.css',
    '/manifest.json',

    '/scripts/options.js',
    '/scripts/app.js',
    '/scripts/views.js',
    '/scripts/oflineData.js',
    '/scripts/install.js',
    '/scripts/conversions.js',

    '/images/icons/icon-144x144.png',
    '/images/favicon.ico',
    '/images/BellWhite.png',
]
self.addEventListener('install', (e) => {//Precache static resources here.
    console.log("service worker install event")
    e.waitUntil(
        caches.open(cahceName).then((cache) => {
            console.log(cache)
            return cache.addAll(PreCachedFiles);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (evt) => {//Remove previous cached data from disk.
    evt.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== cahceName) {
                    console.log('deleting old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    self.clients.claim();
});


self.addEventListener('fetch', function (event) {//cache any file that is loaded with the page
    let dest = event.request.url;
    let origion = event.currentTarget.location.origin
    if (dest.indexOf(origion) == -1) {//dont cache files that dont files that arnt from the same server as this file
        //console.log(dest, origion);   //this will stop requests to cor from being cahced
        return;
    }
    event.respondWith(
        caches.open(cahceName).then(function (cache) {
            return cache.match(event.request).then(function (response) {
                return response || fetch(event.request).then(function (response) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
    //checkForUpdates
    if(globalAutoUpdateVal){
        try{
            fetch(event.request).then( (response)=> {
                caches.open(cahceName).then((cache)=> {
                    cache.put(event.request, response.clone());
                });
            }).catch((err)=>{
                console.log("ofline, update cache failed")
            });
        }catch{
            console.log("ofline")
        }
    }
});


/*

self.addEventListener('fetch', (evt) => {
    //console.log(evt.request)
    //console.log(evt);
    if (evt.request.mode !== 'navigate') {
        let unsanatized = evt.request.url;//"http://localhost:8884/scripts/views.js"//"http://localhost:8884/"
        //let origion= evt.currentTarget.location.origin//"http://localhost:8884";
        //console.log(unsanatized.indexOf(origion));
        // console.log(unsanatized,origion);
        //unsanatized=unsanatized.replace(origion,"")
        //console.log(unsanatized);

        let reg = /(?:.+)(?:\/)(.+)/
        let res = reg.exec(unsanatized)
        evt.respondWith(
            fetch(evt.request)
                .catch(() => {// if server cant be reached return the ofline page
                    return caches.open(cahceName)
                        .then((cache) => {
                            console.log(res[1]);
                            cache.match(res[1]).then(function (response) {
                                return response;
                            });
                            //return data;
                        });
                })
        );

    } else {
        evt.respondWith(
            fetch(evt.request)
                .catch(() => {// if server cant be reached return the ofline page
                    return caches.open(cahceName)
                        .then((cache) => {
                            return cache.match('index.html');
                        });
                })
        );
    }
});
//*//*
|| fetch(event.request).then(function (response) {
                                    cache.put(event.request, response.clone());
                                    return response;
                                });
//*/