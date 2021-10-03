//startup.js
var globalhttpheaders = {};
var appConfig = {
    appId: "ProjetoTeste",
    appName: "AmandaAlert",
    appVersion: "1.0.0",
    isturlbase: "https://m100039386001.konycloud.com/services",
    isMFApp: true,
    appKey: "a6c20f37599eb278a810868712a8a764",
    appSecret: "3ab0daa79d78c5db01e20ca34d8a2eb9",
    serviceUrl: "https://100039386.auth.konycloud.com/appconfig",
    svcDoc: {
        "selflink": "https://100039386.auth.konycloud.com/appconfig",
        "app_version": "1.0",
        "integsvc": {
            "_internal_logout": "https://m100039386001.konycloud.com/services/IST",
            "News": "https://m100039386001.konycloud.com/services/News"
        },
        "service_doc_etag": "0000017C47EA1E50",
        "appId": "29004325-cb7d-40b5-8a76-f2074e7f0b51",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "ProjetoTeste",
        "reportingsvc": {
            "session": "https://m100039386001.konycloud.com/services/IST",
            "custom": "https://m100039386001.konycloud.com/services/CMS"
        },
        "baseId": "ed657734-7f5c-4245-9ce0-2ad10c1e169d",
        "app_default_version": "1.0",
        "services_meta": {
            "News": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://m100039386001.konycloud.com/services/News"
            }
        },
        "Webapp": {
            "url": "https://m100039386001.konycloud.com/apps/ProjetoTeste"
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
        marginsIncludedInWidgetContainerWeight: true,
        isMVC: true,
        APILevel: 9300,
        isCompositeApp: false
    });
};

function themeCallBack() {
    initializeGlobalVariables();
    applicationController = require("applicationController");
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: applicationController.appInit,
        postappinit: function(eventObj) {
            return applicationController.postAppInitCallBack(eventObj);
        },
        showstartupform: function() {
            new kony.mvc.Navigation("Form1").navigate();
        }
    });
};

function loadResources() {
    _kony.mvc.initCompositeApp(false);
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
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//This is the entry point for the application.When Locale comes,Local API call will be the entry point.
loadResources();
debugger;