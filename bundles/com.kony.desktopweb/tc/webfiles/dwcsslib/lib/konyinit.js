/* global kony */
/* global constants */
/* global location */
/* global initializeApp */

/*
(function() {
    var list = ['pmodel', 'rmodel', 'widgets'],
        l = 0, len = list.length;

    for(l=0; l<len; l++) {
        Object.defineProperty(window, list[l], {
            set: function(val) {
                debugger;
            }
        });
    }
}());
//*/
(function() {
    var VERSION = '9.3.2.v202109141330', BUILD = 'debug', ECMAENABLE = "@ECMAENABLE",
        PUBLISH = false, PLATFORMBUILT = '-- platform --', UWPAPIS = (/true/i).test('-- UWPAPIS --'),
        UWPOFFLINEAPIS = (/true/i).test('-- UWPOFFLINEAPIS --'), UWPBUILD = (UWPAPIS || UWPOFFLINEAPIS);

        // DESKTOPWEB CODE ONLY  - JS PREPROCESSOR

    var legacy = (window.kony && window.kony.legacy) ? true : false,
        $K = null, body = document.body, head = document.head, staticPath = '',
        device = null, supportedPlatforms = ['desktopweb', 'spaandroid', 'spaandroidtablet', 'spabbnth', 'spablackberry', 'spaipad', 'spaiphone', 'spaplaybook', 'spawindows', 'spawindowstablet', 'spawinphone8'];


    function _isEcmaEnabledForIE() {
        var ua = navigator.userAgent.toLowerCase();

        if(ua.indexOf('trident/') >= 0 && ua.indexOf('rv:11.0') >= 0
        && ECMAENABLE && typeof ECMAENABLE === 'boolean') {
            return true;
        } else {
            return false;
        }
    }


    function applySplashScreen(body) {
        var $K = kony.$kwebfw$, $KG = $K.globals,
            splash = document.getElementById('app_splash_img');

        if(splash && body.contains(splash)) {
            var imgsrc = splash.getAttribute('data-src');
            if(imgsrc) {
                splash.src = './' + $KG.platform +'/images/'+imgsrc;
                splash.onload = function() {
                    this.style.animationDuration = '1.5s';
                    this.style.animationName = 'splash';
                };
            }
        } else { //splash.firstChild.src not available
            //
        }
    }


    function boot(head, body) {
        var $K = kony.$kwebfw$, i = 0, uwpfiles = null, scripts = getFrameworkFiles();

        loadStyle(head, 'lib/fw.css');


        if (UWPAPIS || UWPOFFLINEAPIS) {
            if (window && window.Windows && Windows && Windows.UI && Windows.UI.Popups) {
                uwpfiles = getUWPFiles();

                for (i = 0; i < uwpfiles.utils.length; i++) {
                    scripts.push(uwpfiles.utils[i]);
                }
                if (UWPAPIS) {
                    for (i = 0; i < uwpfiles.apis.length; i++) {
                        scripts.push(uwpfiles.apis[i]);
                    }
                }
                if (UWPOFFLINEAPIS) {
                    for (i = 0; i < uwpfiles.offline.length; i++) {
                        scripts.push(uwpfiles.offline[i]);
                    }
                }
            }
        }

        loadStyle(head, 'lib/anim.css');
        if(_isEcmaEnabledForIE()) {
            $K.ecmaEnable = true;
        }
        if(_isEcmaEnabledForIE()) {
            scripts.unshift('https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.12.1/polyfill.min.js');
            scripts.push('es5appjs/app.js');
        } else {
            scripts.push('appjs/app.js');
        }


        loadFiles(head, scripts, true, function() {
            if($K.legacy) {
                removeLegacyStyleTags();
                injectFrameworkStyleTag();
            }
            populateDeviceResolution();
            initializeLocalStorage();
            migrateLocalStorage();
            populateDeepLinkParams();
            kony.appinit.konyLoadFunctionalModules();

            initializeSDKLogger();

            if(typeof initializeApp === 'function') {
                if(appConfig.hotReloadURL) {
                    loadFiles(head, ['lib/utils/konyhotreload.js'], true, function() {
                        var $K = kony.$kwebfw$, $KH = $K.hotreload;
                        $KH.initializeHotReloadConnection();
                        $KH.extendFormApis();
                    });
                }

                if(appConfig.testAutomation) {
                    loadFiles(head, getAutomationFiles(), true, function() {
                        initializeApp();
                    })
                } else  {
                    initializeApp();
                }

            }

            body = null; //For GC
        });
    }


    function convertBase64ToString(base64) {
        var e = {}, i = 0, c = '', x = 0, l = 0,
            a, b, r = '', w = String.fromCharCode, L = base64.length,
            A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

        for(i=0; i<64; i++) {
            e[A.charAt(i)] = i;
        }

        for(x=0; x<L; x++) {
            c = e[base64.charAt(x)];
            b = (b << 6) + c;
            l += 6;

            while(l >= 8) {
                ((a = (b >>> (l -= 8)) & 0xff) || (x < (L - 2))) && (r += w(a));
            }
        }

        return r;
    }


    function getUWPFiles() {
        return {"utils":["lib/tparty/uwp/utils/konyUWPWrapperutils.js"],"apis":["lib/tparty/uwp/apis/konyApplication.js","lib/tparty/uwp/apis/konyBattery.js","lib/tparty/uwp/apis/konyContacts.js","lib/tparty/uwp/apis/konyCrypto.js","lib/tparty/uwp/apis/konyio.js","lib/tparty/uwp/apis/konyLocation.js","lib/tparty/uwp/apis/konyNetwork.js","lib/tparty/uwp/apis/konyOS.js","lib/tparty/uwp/apis/konySpeech2Text.js","lib/tparty/uwp/apis/konyStore.js"],"offline":["lib/tparty/uwp/offline/konyUWPOfflineObjects.js","lib/tparty/uwp/offline/konyUWPOfflineSDKObject.js","lib/tparty/uwp/offline/konyUWPOfflineSDKObjectService.js"]};
    }


    function getFrameworkFiles() {
        if(PUBLISH) {
            if(_isEcmaEnabledForIE()) {
                return ['es5lib/fw.js'];
            } else {
                return ['lib/fw.js'];
            }
        } else{
            return ['jslib/tparty/requirejs/require.js', 'jslib/tparty/crypto/cryptojslib.js', 'lib/utils/konyconstants.js', 'lib/utils/konyutils.js', 'lib/utils/konyapm.js', 'lib/utils/konystore.js', 'lib/utils/konydom.js', 'lib/utils/konyanim.js', 'lib/apis/kony.js', 'lib/apis/konyapplication.js', 'lib/apis/konyconstants.js', 'lib/apis/konycrypto.js', 'lib/apis/konydb.js', 'lib/apis/konyds.js', 'lib/apis/konyi18n.js', 'lib/apis/konyio.js', 'lib/apis/konylocation.js', 'lib/apis/konymodules.js', 'lib/apis/konymedia.js', 'lib/apis/konynet.js', 'lib/apis/konynosql.js', 'lib/apis/konyos.js', 'lib/apis/konyphone.js', 'lib/apis/konypush.js', 'lib/apis/konytheme.js', 'lib/apis/konytimer.js', 'lib/apis/konyworker.js', 'lib/utils/konywidget.js', 'lib/utils/konyevent.js', 'lib/apis/konyui.js', 'lib/apis/konyunsupported.js', 'lib/plugins/konydropdown.js', 'lib/widgets/konyform.js', 'lib/widgets/konyflexcontainer.js', 'lib/widgets/konyflexscrollcontainer.js', 'lib/widgets/konycanvas.js', 'lib/widgets/konycamera.js', 'lib/widgets/konycomponent.js', 'lib/widgets/konybrowser.js', 'lib/widgets/konybutton.js', 'lib/widgets/konycalendar.js', 'lib/widgets/konycheckboxgroup.js', 'lib/widgets/konycollectionview.js', 'lib/widgets/konycustomwidget.js', 'lib/widgets/konydatagrid.js', 'lib/widgets/konyimage.js', 'lib/widgets/konylabel.js', 'lib/widgets/konylistbox.js', 'lib/widgets/konymap.js', 'lib/widgets/konyradiobuttongroup.js', 'lib/widgets/konyrichtext.js', 'lib/widgets/konysegment.js', 'lib/widgets/konyslider.js', 'lib/widgets/konyswitch.js', 'lib/widgets/konytabpane.js', 'lib/widgets/konytextarea.js', 'lib/widgets/konytextbox.js', 'lib/widgets/konyvideo.js', 'lib/widgets/konyunsupported.js', 'lib/utils/konymvc.js', 'lib/tparty/konymvc_sdk.js', 'lib/tparty/konylicense.js'];
        }

    }


    function getAutomationFiles() {
        var files = ['lib/automation/konyautomationrecorder.js',
                    'lib/automation/konyautomationtouchevents.js',
                    'lib/automation/konyautomationutils.js',
                    'lib/automation/konyautomationwidgets.js',
                    'jslib/tparty/jasmine/jasmine.js',
                    'jslib/tparty/jasmine/jamsinecucumber.js',
                    'jslib/tparty/jasmine/jasmine-feature-runner.js',
                    'jslib/tparty/jasmine/testDefinitions.js',
                    ];
        return files;
    }


    function initializeLocalStorage() {
        var $K = kony.$kwebfw$, $KU = $K.utils, $KA = $K.app,
            $KG = $K.globals, store = null, data = null;

        try {
            if(typeof(localStorage) === 'object') {
                store = $KU.getLocalStorage();

                if(typeof store === 'object' && store
                && store.migrated === true) {
                    if($KU.is(store.data, 'array')) {
                        //Storing to migrated to namespaced localStorage
                        data = JSON.stringify(store.data);
                    } else if($KU.is(store.ds, 'array')
                    && $KU.is(store.store, 'array')) {
                        return; //If already a namespaced localStorage
                    }
                } else if(store !== '' && store !== null) {
                    $KG.localStorageBackup = store; //Already JSON parsed
                }

                store = {migrated: false, store: [], ds: [], ns: {}};

                if(data) { //Migrating here to namespaced localStorage
                    store.ds = JSON.parse(data);
                    store.store = JSON.parse(data);
                }

                localStorage.setItem($KA.id, JSON.stringify(store));
            }
        } catch(e) {}
    }

    function initializeSDKLogger() {
        var $K = kony.$kwebfw$, $KA = $K.app;

        $K.defKonyProp($KA, [
            {keey:'logger', value:kony.logger.createNewLogger("KonyFrameworkLogger", new kony.logger.createLoggerConfig())}
        ]);

        if(appConfig.isDebug === true) {
            kony.logger.activatePersistors(kony.logger.consolePersistor);
            kony.logger.currentLogLevel = kony.logger.logLevel.ALL;
            $KA.logger.setIndirectionLevel(3);
        }
    }


    function injectFrameworkStyleTag() {
        var rules = '*{box-sizing:border-box !important;user-select:none;cursor:inherit;margin:0px;padding:0px;border:none;}html,body,div.kvp{overflow-x:hidden !important;overflow-y:hidden !important;overflow:hidden !important;height:100% !important;width:100% !important;padding:0px !important;margin:0px !important;min-width:100% !important;max-width:100%;min-height:100% !important;max-height:100% !important;}[hidden]{display:none !important;}input,textarea{user-select:auto;}textarea{resize:none;font-size:inherit;font-family:inherit;}div#app_splash{position:absolute;top:0px;left:0px;opacity:0;background-color:rgb(69, 186, 221);}div#app_splash>img{display:none;}div[kr="app_forms"]{position:absolute;left:0px;right:0px;top:0px;bottom:0px;overflow-x:hidden;overflow-y:hidden;}div[kr="app_dialogs"]{position:absolute;left:0px;top:0px;}div[kr="app_scrap"]{position:absolute;left:-999999999px;top:-999999999px;width:1px;height:1px;max-width:1px;max-height:1px;opacity:0;border:0;margin-left:-1px;margin-top:-1px;clip:rect(1px, 1px, 1px, 1px);clip-path:inset(50%);-webkit-clip-path:inset(50%);}div[kr="app_blocker"]{display:flex;flex-direction:column;justify-content:center;align-items:center;position:absolute;left:0px;top:0px;width:100%;height:100%;max-width:100%;max-height:100%;overflow-x:hidden;overflow-y:hidden;}',
            firstScriptTag = null, style = document.createElement('STYLE'),
            children = document.head.children, c = 0, clen = children.length;

        style.setAttribute('type', 'text/css');
        style.innerHTML = rules;

        for(c=0; c<clen; c++) {
            if(children[c].tagName === 'SCRIPT') {
                firstScriptTag = children[c];
                break;
            }
        }

        if(firstScriptTag) {
            firstScriptTag.parentElement.insertBefore(style, firstScriptTag);
        }
    }


    function loadFiles(head, sources, sync, onsuccess, onerror) {
        var s = 0, slen = sources.length, iv = null,
            failed = false, counter = 0, start = new Date();

        for(s=0; s<slen; s++) {
            if(typeof sync === 'boolean') {
                loadScript(head, sources[s], sync, function() {counter++;}, function() {failed = true;});
            } else {
                loadStyle(head, sources[s], function() {counter++;}, function() {failed = true;});
            }
        }

        iv = setInterval(function() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            if(failed || (counter >= slen) || (new Date() - start) > 300000) {
                clearInterval(iv);
                iv = null; //For GC
            }

            //NOTE:: For firefox I had to keep >=, else === works fine in chrome
            if(counter >= slen) { //Now all framework scripts are loaded
                if($KU.is(onsuccess, 'function')) onsuccess();
            } else if(failed) {
                if($KU.is(onerror, 'function')) onerror();
            } else if((new Date() - start) > 300000) { //i.e. 5 mins
                throw new Error('Could not load all files in 5 minutes.');
            }
        });
    }


    function loadScript(head, src, sync, onsuccess, onerror) {
        var $K = kony.$kwebfw$, $KG = $K.globals,
            script = document.createElement('SCRIPT');

        if(sync) script.async = false;
        if(src.indexOf('http') !== 0) {
            src = ($KG.platform+'/'+src);
        }

        script.type = 'text/javascript';
        script.src  = src;

        script.onload = function() {
            script.onload = script.onerror = null; //For GC

            if(typeof onsuccess === 'function') {
                onsuccess.call(this);
            }
        };

        script.onerror = function() {
            script.onload = script.onerror = null; //For GC

            if(typeof onerror === 'function') {
                onerror.call(this);
            }
        };

        head.appendChild(script);
    }


    function loadStyle(head, src, onsuccess, onerror) {
        var $K = kony.$kwebfw$, $KG = $K.globals,
            link = document.createElement('link');

        src        = ($KG.platform+'/'+src);
        link.href  = src;
        link.media = 'none';
        link.type  = 'text/css';
        link.rel   = 'stylesheet';
        link.setAttribute('kfwss', 'kony');

        link.onload = function(e) {
            link.onload = link.onerror = null; //For GC
            this.media = 'all';

            if(typeof onsuccess === 'function') {
                onsuccess.call(this);
            }
        };

        link.onerror = function(e) {
            link.onload = link.onerror = null; //For GC

            if(typeof onerror === 'function') {
                onerror.call(this);
            }
        };

        head.appendChild(link);
    }


    function migrateLocalStorage() {
        var $K = kony.$kwebfw$, $KU = $K.utils, $KG = $K.globals, $KA = $K.app;

        try {
            if(typeof(localStorage) === 'object') {
                var store = $KU.getLocalStorage(),
                    keysToBeRemoved = [], parsed = null,
                    l = 0, len = 0, key = '', value = '';

                //initializeLocalStorage is already called by this time
                //So store is an object for sure, possibly not migrated.
                if(store.migrated === true) return;

                store.migrated = true;

                if($K.behavior[constants.API_LEVEL] < constants.API_LEVEL_8200) {
                    localStorage.removeItem('i18nVersion');

                    len = localStorage.length;
                    for(l = 0; l < len; l++) {
                        key = localStorage.key(l);

                        if(key === $KA.id) {
                            if($KG.hasOwnProperty('localStorageBackup')) {
                                //NOTE:: $KG.localStorageBackup is already JSON parsed
                                store.data.push({
                                    key: key,
                                    value: $KG.localStorageBackup
                                });
                            }
                        } else {
                            //Filter out keys like, for i18n
                            if(key.indexOf($KA.id + '_') !== 0 &&
                                key.split('_').length < 2) {
                                value = localStorage.getItem(key);
                                try {
                                    parsed = JSON.parse(value);
                                } catch(e) {
                                    parsed = value;
                                }

                                //Filter out any other migrated app data
                                if(!(typeof parsed === 'object' && parsed &&
                                        parsed.migrated === true &&
                                        $KU.is(parsed.data, 'array'))) {
                                    keysToBeRemoved.push(key);
                                    store.data.push({
                                        key: key,
                                        value: parsed
                                    });
                                }
                            }
                        }
                    }

                    //Migration cleanup
                    len = keysToBeRemoved.length;
                    for(l=0; l<len; l++) {
                        localStorage.removeItem(keysToBeRemoved[l]);
                    }
                }

                localStorage.setItem($KA.id, JSON.stringify(store));
            }
        } catch(e) {}
    }


    function parseRequestHeaders(requestHeaders) {
        var $K = kony.$kwebfw$, $KU = $K.utils;

        if(requestHeaders && requestHeaders !== 'null') {
            if(requestHeaders[0] === '{') {
                requestHeaders = convertBase64ToString(requestHeaders);
            }

            requestHeaders = requestHeaders.replace(/"="/g, "\":\"");

            try {
                requestHeaders = JSON.parse(requestHeaders);

                $KU.each(requestHeaders, function(value, key) {
                    requestHeaders[key] = unescape(decodeURIComponent(value));
                });
            } catch(e) {
                requestHeaders = {};
            }
        } else {
            requestHeaders = {};
        }

        return requestHeaders;
    }


    function parseRequestParams(requestParams) {
        if(requestParams && requestParams !== 'null') {
            if(requestParams[0] === '{') {
                requestParams = convertBase64ToString(requestParams);
            }

            try {
                requestParams = JSON.parse(requestParams);
            } catch(e) {
                requestParams = {};
            }
        } else {
            requestParams = {};
        }

        return requestParams;
    }


    function populateDeepLinkParams() {
        var $K = kony.$kwebfw$, $KU = $K.utils, $KG = $K.globals,
            qs = location.search.slice(1), path = location.href.split('?');

        $K.defKonyProp($KG, [
            {keey:'launchmode', value:(qs ? 3 : 1)},
            {keey:'deeplinkParams', value:{deeplinkPath:path[0], deeplinkpath:path[0]}}
        ]);

        if($KG.requestHeaders) {
            $KG.deeplinkParams.requestHeaders = $KG.requestHeaders;
        }

        $KU.each($KG.requestParams, function(value, keey) {
            $KG.deeplinkParams[keey] = value;
        });

        if(qs) {
            qs = qs.split('&');

            $KU.each(qs, function(value) {
                var s = value.replace(/\+/g, ' ').split('=');

                if(s[0]) s[0] = decodeURIComponent(s[0]);
                if(s[1]) s[1] = decodeURIComponent(s[1]);
                if(s[0]) $KG.deeplinkParams[s[0]] = s[1];
            });
        }
    }


    function populateDeviceResolution() {
        var $K = kony.$kwebfw$, $KU = $K.utils,
            device = $K.device, resolution = '',
            dpi = device.DPI, os = $KU.browser('os'),
            channel = $KU.browser('channel');

        /* For future use. Do not delete this commented block.
        if(os === 'ios') {
            resolution = 'retina';
        } else if(os === 'windows') {
            if(channel === 'phone') {
                resolution = '320';
            }
        } else if(os === 'android') {
            if(channel === 'tablet') {
                if(dpi <= 1) {
                    resolution = 'mdpi';
                } else if(dpi <= 1.5) {
                    resolution = 'hdpi';
                } else if(dpi > 1.5) {
                    resolution = 'xhdpi';
                }
            } else {
                if(dpi <= 1) {
                    resolution = '320';
                } else if(dpi > 1 && dpi <= 1.5) {
                    resolution = '360';
                } else if(dpi > 1.5 && dpi <= 2) {
                    resolution = '400';
                } else if(dpi > 2) {
                    resolution = '440';
                }
            }
        }
        //*/

        $KU.defineProperty(device, 'resolution', resolution, null);
    }


    function populateGlobalVariablesFromDOM() {
        var $K = kony.$kwebfw$, $KG = $K.globals, staticContentPath = null,
            isNewSession = null, requestParams = null, requestHeaders = null,
            konyAppProperties = null, appid = null;

        //TODO:: if(!$K.legacy) DOM id's might be different
        staticContentPath = document.getElementsByName('staticContentPath')[0];
        requestParams = document.getElementsByName('_reqParams')[0];
        requestHeaders = document.getElementsByName('_reqHeaders')[0];
        konyAppProperties = document.getElementsByName('_konyAppProperties')[0];
        appid = document.getElementsByName('appid')[0];
        isNewSession = document.getElementById('isnewsession');

        if(staticContentPath) staticPath = staticContentPath.value;
        if(requestParams) $K.defKonyProp($KG, [{keey:'requestParams', value:parseRequestParams(requestParams.value)}]);
        if(requestHeaders) $K.defKonyProp($KG, [{keey:'requestHeaders', value:parseRequestHeaders(requestHeaders.value)}]);
        if(konyAppProperties) $K.defKonyProp($KG, [{keey:'konyAppProperties', value:konyAppProperties.value}]);
        if(appid) $K.defKonyProp($KG, [{keey:'appid', value:appid.value}]);
        if(isNewSession) $K.defKonyProp($KG, [{keey:'isNewSession', value:(isNewSession.innerText === 'true')}]);
    }


    function populateGlobalVariablesFromURL() {
        var $K = kony.$kwebfw$, src = '', scripts = document.scripts,
            publish = '', zipId = '', id = '', platform = '',
            l = 0, s = 0, slen = scripts.length, index = -1;

        for(s=0; s<slen; s++) {
            src = scripts[s].src;

            index = (typeof src === 'string') ? src.indexOf('/lib/konyinit.js') : -1;

            if(index >= 0) {
                src = src.substr(0, index).split('/');
                l = src.length;

                publish  = (src[(l-4)] === 'apps') ? 'zip' : 'war';
                zipId    = (publish === 'zip') ? src[(l-2)] : '';
                id       = (publish === 'zip') ? 3 : 2;
                id       = src[(l - id)];
                platform = src[(l-1)];

                $K.defKonyProp($K.globals, [
                    {keey:'platform', value:platform},
                    {keey:'publish', value:publish}
                ]);

                $K.defKonyProp($K.app, [
                    {keey:'id', value:id},
                    {keey:'zipId', value:zipId}
                ]);

                src.splice(-1, 1);
                staticPath = (src.join('/') + '/'); // + platform + '/'

                break;
            }
        }
    }


    function populateGlobalVariablesFromOtherSource() {
        var $K = kony.$kwebfw$;

        $K.defKonyProp($K, [
            {keey:'build', value:BUILD},
            {keey:'version', value:VERSION}
        ]);

        //TODO:: Any other variable to populate
    }


    function populateRequiredGlobalVariables() {
        var $K = kony.$kwebfw$, $KG = $K.globals;

        populateGlobalVariablesFromURL();

        if(typeof $KG.platform === 'string' && $KG.platform) {
            populateGlobalVariablesFromDOM();
            populateGlobalVariablesFromOtherSource();

            $K.defKonyProp($K.app, [
                {keey:'startedAt', value:new Date()},
                {keey:'staticContentPath', value:staticPath}
            ]);

            window._kony = {mvc:{}};

            return true;
        } else {
            return false;
        }
    }


    function removeLegacyStyleTags() {
        var sheets = document.styleSheets, s = 0,
            sheet = null, slen = sheets.length;

        for(s=0; s<slen; s++) {
            sheet = sheets[s];

            if(sheet.ownerNode && sheet.ownerNode.tagName === 'STYLE') {
                s--; slen--; sheet.disabled = true;
                sheet.ownerNode.parentElement.removeChild(sheet.ownerNode);
            }
        }
    }


    if(legacy) {
        delete window.$KA;
        delete window.$KG;
        delete window.$KI;
        delete window.$KIO;
        delete window.$KU;
        delete window.$KW;

        if(document.documentElement) {
            document.documentElement.setAttribute('lang', 'en');
            document.documentElement.setAttribute('dir', 'ltr');
        }
    }

    Object.defineProperty(window, 'kony', {configurable:false, enumerable:false, writable:false, value:(function() {
        var _ns = {}, _def = function(obj, items) {
            var i = 0, ilen = (items instanceof Array) ? items.length : 0;

            for(i=0; i<ilen; i++) {(function(target, item) {
                item.writable = _defWritable(item.writable);

                //NOTE:: When a function scope is changed using bind API.
                //Then that new function does not contain "prototype" property
                if(typeof item.value === 'function') {
                    item.value.toLocaleString = item.value.__proto__.toLocaleString;
                    item.value.toSource = item.value.__proto__.toSource;
                    item.value.toString = item.value.__proto__.toString;
                }

                Object.defineProperty(target, item.keey, {
                    configurable: false,
                    enumerable: false,
                    value: item.value,
                    writable: item.writable
                });

                if(item.items && item.items.length) {
                    _def(item.value, item.items);
                }
            }(obj, items[i]));}
        }, _defWritable = function(writable) {
            if(UWPBUILD === true) {
                writable = true;
            } else
            if(typeof writable !== 'boolean') {
                writable = false;
            }

            return writable;
        };
        var _props = [
            {keey:'$kwebfw$', value:{}, items:[
                {keey:'app', value:{}, items:[
                    {keey:'blocked', value:null, writable:true},
                    {keey:'build', value:'', writable:true},
                    {keey:'currentBreakpoint', value:-1, writable:true},
                    {keey:'currentFormUID', value:'', writable:true},
                    {keey:'currentLocale', value:'', writable:true},
                    {keey:'currentTheme', value:'', writable:true},
                    {keey:'defaultLocale', value:'', writable:true},
                    {keey:'focusedWidget', value:null, writable:true},
                    {keey:'gesture', value:null, writable:true},
                    {keey:'hoveredWidget', value:null, writable:true},
                    {keey:'id', value:'', writable:true},
                    {keey:'idleCallback', value:null, writable:true},
                    {keey:'idleTime', value:0, writable:true},
                    {keey:'idleTimeout', value:null, writable:true},
                    {keey:'lastInteractionAt', value:null, writable:true},
                    {keey:'localeInitialized', value:false, writable:true},
                    {keey:'localeLayoutConfig', value:null, writable:true},
                    {keey:'localization', value:false, writable:true},
                    {keey:'mode', value:1, writable:true},
                    {keey:'previousFormUID', value:'', writable:true},
                    {keey:'previousLocale', value:'', writable:true},
                    {keey:'supportedLocales', value:[], writable:true},
                    {keey:'supportedThemes', value:[], writable:true},
                    {keey:'title', value:'', writable:true}
                ]},
                {keey:'automation', value:{}},
                {keey:'behavior', value:{}},
                {keey:'defKonyProp', value:_def},
                {keey:'defWritable', value:_defWritable},
                {keey:'device', value:{}, items:[
                    {keey:'DPI', value:1}, //window.devicePixelRatio
                    {keey:'height', value:-1, writable:true},
                    {keey:'width', value:-1, writable:true}
                ]},
                {keey:'ecmaEnable', value:false, writable:true},
                {keey:'F', value:{}, items:[ //Experimental features
                    {keey:'EIWP', value:true}, //false:: escape invalid widget property (whereever possible)
                    {keey:'RFB', value:true}, //false:: render fake border
                    {keey:'RIVW', value:false} //false:: render invisible widget
                ]},
                {keey:'flag', value:{}},

                {keey:'globals', value:{}}
                ,{keey:'legacy', value:legacy},
                {keey:'locale', value:{}},
                {keey:'plugins', value:{}},
                {keey:'theme', value:{}}, //value:{<themeName>:{stylesheet:DOM, lastIndex:-1, rule:{<skinName>:{index:-1}}}}
                {keey:'ui', value:{}} //Widget file specific properties will be available here
            ]}
            ,{keey:'automation', value:{}},
            {keey:'props', value:{}},
            {keey:'ui', value:{}}
        ]; _def(_ns, _props);

        return _ns;
    }())});


    Object.defineProperty(kony, 'appinit', {configurable:false, enumerable:false, writable:false, value:(function() {
        var _ns = {}, $K = kony.$kwebfw$;


        var _getStaticContentPath = function() {
            return '';
            /*
            var $K = kony.$kwebfw$, $KA = $K.app;

            return $KA.staticContentPath;
            //*/
        };


        //TODO:: kony.appinit.konyLoadFunctionalModules
        var _konyLoadFunctionalModules = function() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.log({api:'kony.appinit.konyLoadFunctionalModules', enter:true});

            //

            $KU.log({api:'kony.appinit.konyLoadFunctionalModules', exit:true});
        };


        var _setApplicationMetaConfiguration = function(ckey, cval) {
            var k = '', putIntoAppConfig = function(id, val) {
                var $K = kony.$kwebfw$, $KA = $K.app;

                if(id === 'appid') $KA.id = val;
                else if(id === 'locales') $KA.supportedLocales = val;
                else if(id === 'build') $KA.build = val;
                else if(id === 'apptitle') $KA.title = val;
                else if(id === 'i18nArray') {
                    //TODO:: Not sure, if it is even needed.
                }
            };

            if(typeof ckey === 'string') {
                putIntoAppConfig(ckey, cval);
            } else if(typeof ckey === 'object' && ckey) {
                for(k in ckey) {if(ckey.hasOwnProperty(k)) {
                    putIntoAppConfig(k, ckey[k]);
                }}
            }
        };

        var _setRequireBasepath = function() {

            if(_isEcmaEnabledForIE()) {
                requirejs.config({
                    baseUrl: kony.appinit.getStaticContentPath() + 'desktopweb/es5appjs'
                });
            } else {
                requirejs.config({
                    baseUrl: kony.appinit.getStaticContentPath() + 'desktopweb/appjs'
                });
            }
        };

        $K.defKonyProp(_ns, [
            {keey:'getStaticContentPath', value:_getStaticContentPath},
            {keey:'konyLoadFunctionalModules', value:_konyLoadFunctionalModules},
            {keey:'setApplicationMetaConfiguration', value:_setApplicationMetaConfiguration},
            {keey:'setRequireBasepath', value:_setRequireBasepath},
        ]);


        return _ns;
    }())});


    if(populateRequiredGlobalVariables()) {
        $K = kony.$kwebfw$; device = $K.device;
        device.height = body.offsetHeight;
        device.width = body.offsetWidth;

        body.setAttribute('aria-busy', 'true');

        applySplashScreen(body);
        boot(head, body);
        body = head = null; //For GC
    } else {
        throw new Error('Your platform is not suported.');
    }
}());