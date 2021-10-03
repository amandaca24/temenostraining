var kony = {
        appid: '',
        filesToCache: '',
        cacheName: '',
        contextName: '/',
        path: 'desktopweb',
        returnObj: null,
        cacheid:'',
        buildtype: 'zip',
        cssmode:false,
        isSWHelperAvailable: false
    },
    constants = {
        CACHE_VERSION: '@cacheversion@',
        NONE: 'none',
        NETWORK_ONLY: 'networkonly',
        NETWORKFIRST_CACHELATER: 'networkfirstcachelater',
        CACHEFIRST_NETWORKLATER: 'cachefirstnetworklater'
    };

importScripts('./nocache/sw-ext.js');


kony.cacheid = cacheid;
kony.cssmode = @cssmode@;
kony.buildtype = '@buildtype@';
kony.isSWHelperAvailable = @isSWHelperAvailable@;
kony.appid = location.pathname.split('/')[1];
kony.returnObj = {"cachestrategy": constants.CACHEFIRST_NETWORKLATER};

if(kony.buildtype === 'zip') {
    kony.path = kony.cacheid + '/' + kony.path;
    kony.contextName = '/'+location.pathname.split('/')[1]+'/';
    kony.appid = location.pathname.split('/')[2];
}
kony.cacheName = kony.appid + '-v' + constants.CACHE_VERSION;
if(!kony.cssmode){
    kony.filesToCache = [
        './',
        kony.path + '/konydesktop.css',
        kony.path + '/appjs/app.js',
        kony.path + '/appjs/kvmodules.js',
        kony.path + '/jslib/konyframework.js'
    ];
} else {
    kony.filesToCache = [
        './',
        kony.path + '/konydesktop.css',
        kony.path + '/themes/default/theme.css',
        kony.path + '/lib/fw.css',
        kony.path + '/appjs/app.js',
        kony.path + '/appjs/kvmodules.js',
        kony.path + '/jslib/konyframework.js',
        kony.path + '/lib/konyinit.js',
        kony.path + '/lib/fw.js'
    ];
}

if(kony.isSWHelperAvailable) {
    importScripts('./nocache/sw-helper.js');
}

self.addEventListener('install', function(e) {
    //console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(kony.cacheName).then(function(cache) {
            //console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(kony.filesToCache);
        }));
    self.skipWaiting();
});

self.addEventListener('activate', function(e) {
    //console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if(key !== kony.cacheName) {
                    if(key.split('-')[0] === kony.appid) { // delete only if same app
                        //console.log('[ServiceWorker] Removing old cache', key);
                        return caches.delete(key);
                    }
                }
            }));
        }));
    return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
    //console.log('[ServiceWorker] Fetch', event.request.url);
    var requestUrl = event.request.url;
    var selfLocation = self.location.origin;

    if(kony.isSWHelperAvailable) {
        if(event.request.method === 'GET' && typeof cacheMechanism === 'function') {
            if(handleAppshellFiles(requestUrl)) {
                event.respondWith(cacheFirstNetworkLater(event, caches));
            } else {
                kony.returnObj = cacheMechanism(requestUrl);
                if(kony.returnObj && kony.returnObj.cachestrategy == constants.CACHEFIRST_NETWORKLATER) {
                    event.respondWith(cacheFirstNetworkLater(event, caches));
                } else if (kony.returnObj && kony.returnObj.cachestrategy == constants.NETWORKFIRST_CACHELATER) {
                    event.respondWith(networkFirstCacheLater(event, caches));
                }
            }
        }
    } else {
        if(requestUrl.startsWith(selfLocation+kony.contextName+kony.appid)) {
            if(requestUrl.indexOf('nocache') == -1) {
                event.respondWith(cacheFirstNetworkLater(event, caches));
            } else {
                return fetch(event.request).then(function(response) {
                    return response;
                });
            }
        }
    }
});

var handleAppshellFiles = function(requestUrl) {
    var handleAppshell = false, i = 0, fileLen = kony.filesToCache.length;

    if(requestUrl.indexOf(kony.appid+'/#_') > 0 || requestUrl.indexOf(kony.appid+'/?') > 0){
        handleAppshell = true;
    } else {
        for( i = 0 ; i< fileLen; i++) {
            if(requestUrl.indexOf(kony.filesToCache[i]) > 0){
                handleAppshell = true;
                break;
            }
        }
    }
    return handleAppshell;
};


var cacheFirstNetworkLater = function(event, caches) {
    return caches.match(event.request).then(function(response) {
        if(response) {
            return response;
        } else {
            return fetchAndCache(event, caches);
        }
    });
}


var fetchAndCache = function(event, caches) {
    return fetch(event.request).then(function(response) {
         if((response.ok && response.status === 200)
         || (response.status === 0 && response.type === 'opaque')) {
            return caches.open(kony.cacheName).then(function(cache) {
                return cache.put(event.request, response.clone()).then(function() {
                    return response;
                }).catch(function() {
                    return response;
                });
            }).catch(function() {
                return response;
            });
        } else {
            return response;
        }
    });
}


var networkFirstCacheLater = function(event, caches) {
    return fetch(event.request).then(function(response) {
         if((response.ok && response.status === 200)
         || (response.status === 0 && response.type === 'opaque')) {
            return caches.open(kony.cacheName).then(function(cache) {
                return cache.put(event.request, response.clone()).then(function() {
                    return response;
                }).catch(function() {
                    return response;
                });
            }).catch(function() {
                return response;
            });
        } else {
            return caches.match(event.request).then(function(cacheresponse) {
                if(cacheresponse) {
                    return cacheresponse;
                } else {
                    return response;
                }
            });
        }
    }).catch(function(error) {
        return caches.match(event.request).then(function(cacheresponse) {
            return cacheresponse;
        });
    });
};