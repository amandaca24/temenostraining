kony.appinit.setApplicationMetaConfiguration("appid", "AmandaNews");
kony.appinit.setApplicationMetaConfiguration("build", "debug");
//startup.js
var appConfig = {
    appId: "AmandaNews",
    appName: "AmandaNews",
    appVersion: "1.0.0",
    isturlbase: "https://m100039386001.konycloud.com/services",
    isDebug: true,
    hotReloadURL: "ws://192.168.2.188:9099",
    isMFApp: true,
    appKey: "7d9a466e44c80ef078a961cadaea3760",
    appSecret: "ccd8da5f0728179116e181cadb7e8d01",
    serviceUrl: "https://100039386.auth.konycloud.com/appconfig",
    svcDoc: {
        "selflink": "https://100039386.auth.konycloud.com/appconfig",
        "app_version": "1.0",
        "integsvc": {
            "_internal_logout": "https://m100039386001.konycloud.com/services/IST",
            "NewAndWeather": "https://m100039386001.konycloud.com/services/NewAndWeather",
            "LocationLookup": "https://m100039386001.konycloud.com/services/LocationLookup",
            "News": "https://m100039386001.konycloud.com/services/News",
            "CopyNewsAndWeatherService": "https://m100039386001.konycloud.com/services/CopyNewsAndWeatherService",
            "WeatherNew": "https://m100039386001.konycloud.com/services/WeatherNew"
        },
        "service_doc_etag": "0000017C47E50988",
        "appId": "50a37de5-7619-4320-bcca-4be2c8a74474",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "AmandaNews",
        "reportingsvc": {
            "session": "https://m100039386001.konycloud.com/services/IST",
            "custom": "https://m100039386001.konycloud.com/services/CMS"
        },
        "baseId": "daa34922-c890-4b49-91e0-fd9136af9641",
        "app_default_version": "1.0",
        "services_meta": {
            "NewAndWeather": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://m100039386001.konycloud.com/services/NewAndWeather"
            },
            "LocationLookup": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://m100039386001.konycloud.com/services/LocationLookup"
            },
            "News": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://m100039386001.konycloud.com/services/News"
            },
            "CopyNewsAndWeatherService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://m100039386001.konycloud.com/services/CopyNewsAndWeatherService"
            },
            "WeatherNew": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://m100039386001.konycloud.com/services/WeatherNew"
            }
        }
    },
    eventTypes: [],
};
sessionID = "";

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        isMVC: true,
        APILevel: 9300,
        FormControllerSyncLoad: false,
        isCompositeApp: undefined
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    requirejs.config({
        baseUrl: kony.appinit.getStaticContentPath() + 'spaiphone/appjs'
    });
    require(['kvmodules'], function() {
        applicationController = require("applicationController");
        callAppMenu();
        kony.application.setApplicationInitializationEvents({
            init: applicationController.appInit,
            postappinit: applicationController.postAppInitCallBack,
            showstartupform: function() {
                new kony.mvc.Navigation("Form1").navigate();
            }
        });
    });
};

function loadResources() {
    _kony.mvc.initCompositeApp(undefined);
    kony.theme.packagedthemes(["default"]);
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //This is the entry point for the application.When Locale comes,Local API call will be the entry point.
    loadResources();
};
debugger;