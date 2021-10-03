/*
 *
 *  File      : license.js
 *  Version   : 9.3.0.3
 *  TimeStamp : 16-06-2021 13:39:31 IST
 *
 */

kony.license = {};
kony.license.disableMetricReporting = function() {
    kony.ds.save(["true"], "LicenseDisableFlag");
}

kony.licensevar = {};
kony.licensevar.didAppWentInBackground = false;
kony.license.timeoutValue = 14400 ;
kony.license.version = "9.3.0.3";
kony.licensevar.currentSessionId = "";
kony.licensevar.latestSessionCreationTimestamp = "";
kony.licensevar.maxSessionCountLimit = 100;
kony.licensevar.changeHandlers = [];
kony.licensevar.isLicenseUrlAvailable = true;
kony.licensevar.isISTNetworkCallProcessingInProgress = false;
kony.licensevar.deferredNewSessionsCounter = 0;
kony.licensevar.isInteractive = false;
kony.licensevar.isPostAppInitCalled = false;
kony.licensevar.timesAppBecomeInteractive = 0;
kony.licensevar.maxDeferSessionCount = 15;
kony.licensevar.appLaunch = "appLaunch";

kony.licensevar.appStateCallbackFunction = function () {
    kony.licensevar.timesAppBecomeInteractive++;
    kony.license.log("appStateCallbackFunction:: isPostAppInitCalled :" + kony.licensevar.isPostAppInitCalled + " ,isInteractive :" + kony.licensevar.isInteractive);
    if (kony.licensevar.isInteractive === false) {
        kony.licensevar.isInteractive = true;
        kony.license.log("App is in interactive state");
        if (kony.licensevar.isPostAppInitCalled === true) {
            /* Create a new interactive session if app got launched in silent mode and later comes to postappinit due to user
            action such as clicking the notification (isAppLaunchedForInteraction callback is invoked later)*/
            kony.license.log("Creating and sending a new interactive session details.");
            kony.license.sendNewIST();
        }
    }
    else {
        kony.license.log("Warning: appStateCallbackFunction is called "+kony.licensevar.timesAppBecomeInteractive+" times, ignoring the interactive app state event");
    }
};

kony.licensevar.callbacksObjList = {};
kony.licensevar.callbacksObjList.isAppLaunchedForInteraction = {};
kony.licensevar.callbacksObjList.isAppLaunchedForInteraction.appStateCallbackFunction = kony.licensevar.appStateCallbackFunction;

kony.license.maxWaitTimeToHandleMultipleNewSessions = 60;

kony.license.constants = {};
kony.license.constants.THIN_CLIENT = "thinclient";
kony.license.constants.LAUNCH_PARAMS = "launchparams";
kony.license.constants.REUSABLE_SESSION_ID = "reusable_session_id";
kony.license.constants.KEY_KONY_LICENSE_TIMEOUT = "konyLicenseTimeout";

/*
 *  Name      : kony.license.setLogging
 *  Purpose   : The API enables the logs for license.js. 
 *              It should be called via devloper who is intented to debug the license flow. It can be called in the app code or through developer tools.
 *  Scenarios : i) If kony.license.setLogging is invoked with boolean value true , the logs will be enabled for current launch and further launch of the app
 *              ii) If kony.license.setLogging is invoked with boolean value false , the logs will be disabled for current launch and further launch of the app
 */
kony.license.setLogging = function(boolValue){
    if(boolValue === true){
        kony.ds.save([true], "LicenseLoggingFlag");
    }else{
        kony.ds.save([false], "LicenseLoggingFlag");
    }
}

kony.license.log = function(msg){
    try{
        var logCondition = kony.ds.read("LicenseLoggingFlag");
    }catch(e){
        //This might get into exception in case of SPA due to a limitaion in implementation of FTR MADPSPA-394
    }
    if (logCondition != undefined && logCondition[0] != undefined && logCondition[0]!=null && logCondition[0]===true) {
        kony.print("[License] :"+msg);
    }
}

kony.license.isLicenseUrlAvailable = function() {
    return kony.licensevar.isLicenseUrlAvailable;
}

kony.license.setIsLicenseUrlAvailable = function(value) {
    kony.licensevar.isLicenseUrlAvailable = value;
}

kony.license.getSessionId = function() {
    return kony.licensevar.currentSessionId;
}

/*
  konyUserID encrypted and saved in datastore.Used in reporting params.
 */
var konyUserID = function () {

    var dataStorekeys = {};
    dataStorekeys.encryptedKonyuserId = "konyUserID_ENC";
    dataStorekeys.konyuserId = "konyUserID";
    var encryptionSalt = "konyUserID_ENC";
    var encryptionAlgo = "aes";

    /*
     *  Name      : get
     *  Purpose   : Returns array with one element encrypted userID.
     *              Removes old key "konyUserID" and add new key with encrypted userid to data store for migration from old version.
     *
     *  Scenarios : i) UserID must be encrypted and saved with key konyUserID_ENC.
     *              ii) For upagrade to 8.4 check if all both encrypted and non-encrpyted data are going to Mf
     */
    var getKonyUserID = function () {
        var userInfo = new Array();
        var userId = kony.ds.read(dataStorekeys.encryptedKonyuserId);
        if (userId === undefined || userId === null || userId[0] === undefined) {
            userId = kony.ds.read(dataStorekeys.konyuserId);
            if (userId != undefined && userId != null && userId[0] != undefined) {
                userId = userId[0];
                setKonyUserID(userId);
                kony.ds.remove(dataStorekeys.konyuserId);
            }
            else {
                return null;
            }

        }
        else {
            userId = decryptText(userId[0], encryptionSalt, encryptionAlgo);
        }

        userInfo.push(userId);
        return userInfo;
    };

    /*
     *  Name      : set
     *  Purpose   : Saves encrypted userID in datastore
     *
     *  Scenarios : i) UserID must be encrypted and saved with key konyUserID_ENC
     *              ii) For upagrade to 8.4 check if all both encrypted and non-encrpyted data are going to Mf
     */
    var setKonyUserID = function (userId) {
        if (userId == undefined || userId == null || typeof userId !== 'string') {
            return;
        }

        var userId = encryptText(userId, encryptionSalt, encryptionAlgo);
        var userInfo = new Array();
        userInfo.push(userId);
        kony.ds.save(userInfo, dataStorekeys.encryptedKonyuserId);
    };

    /**
     * Name     : generateSecureKeyFromText
     * Purpose  : Generates key for encryption.
     */
    function generateSecureKeyFromText(salt) {
        var secureKey = salt;

        if (salt != undefined || salt != null) {
            secureKey = kony.crypto.newKey("passphrase", 128, {
                passphrasetext: salt,
                subalgo: encryptionAlgo,
                passphrasehashalgo: "md5"
            });
        }
        return secureKey;
    }

    /**
     * Name     : encryptText
     * Purpose  : Encrypts text with the given salt and encryptionAlgo.
     *            Channel specific  behaviour:
     *            SPA     : Saving encrypted object to DS, as convertToRawbytes not supported in SPA
     */
    function encryptText(text, salt, encryptionAlgo) {
        var channel = kony.os.deviceInfo().name.toString().toLowerCase();
        var secureSalt = generateSecureKeyFromText([ salt ]);
        var encryptedText = kony.crypto.encrypt(encryptionAlgo, secureSalt, text, {});
        if(channel !== "thinclient") {
            encryptedText = kony.convertToBase64(encryptedText);
        }
        return encryptedText;
    }

    /**
     * Name     : decryptText
     * Purpose  : Decrypts text with the given salt and encryptionAlgo.
     */
    function decryptText(text, salt, decryptionAlgo) {
        var channel = kony.os.deviceInfo().name.toString().toLowerCase();
        var secureSalt = generateSecureKeyFromText([ salt ]);
        var rawBytes = text;
        if(channel !== "thinclient") {
            rawBytes = kony.convertToRawBytes(text);
        }

        var decryptText =kony.crypto.decrypt(decryptionAlgo, secureSalt, rawBytes, {});
        return decryptText;
    }

    return {"set": setKonyUserID, "get": getKonyUserID};
}

kony.license.registerChangeListener = function(changeHandler) {

    if (!changeHandler) {
        return;
    }
    // We give the initial values once
    var changes = {};
    var userId = konyUserID().get.call(this)
    changes["sessionId"] = kony.licensevar.currentSessionId;
    if (userId != undefined && userId[0] != undefined && userId[0]!=null) {
        changes["userId"] = userId[0];
    }

    if (!kony.license.isNullOrUndefined(kony.licensevar.currentSessionId)) {
        changeHandler(changes);
    }

    // Add to my listeners
    kony.licensevar.changeHandlers.push(changeHandler);
};

kony.license.notifyChangesToListeners = function() {
    for (var i = 0; i < kony.licensevar.changeHandlers.length; i++) {
        var changes = {};
        var userId = konyUserID().get.call(this);
        changes["sessionId"] = kony.licensevar.currentSessionId;
        if (userId != undefined && userId[0] != undefined && userId[0]!=null) {
            changes["userId"] = userId[0];
        }
        var changeHandler = kony.licensevar.changeHandlers[i];
        changeHandler(changes);
    }
};

/*
*  Name      : processDeferredNewSessions
*  Author    : None
*  Purpose   : Helper method to process deferred new sessions
*/

kony.license.processDeferredNewSessions = function () {
    kony.license.log("sending deferred launch date - "+kony.licensevar.currentSessionId);
    kony.licensevar.isISTNetworkCallProcessingInProgress = false;
    kony.licensevar.deferredNewSessionsCounter = 0;
    kony.license.pushKonySessionsToServer(true);
}

/**
 * This function takes a value as input to check for undefined or null
 * @param value
 * @returns {boolean}
 */
kony.license.isNullOrUndefined = function (value) {
    var isNullOrUndefined = false;
    if (value === undefined || value === null) {
        isNullOrUndefined = true;
    }
    return isNullOrUndefined;
}

/*
 *  Name      : kony.license.startLicenseService
 *  Author    : None
 *  Purpose   : Single global function which contains definitions of all required functions for session tracking.
 */
kony.license.startLicenseService = function() {
        "use strict";
        var deviceInfo = kony.os.deviceInfo();
        kony.license.log("startLicenseService deviceInfo " + JSON.stringify(deviceInfo));
        /*
         *  Name      : getLicenseUrl
         *  Author    : None
         *  Purpose   : Internal function to get the appropriate IST url for session calls
         */

        function getLicenseUrl() {
            var url = "";
            if (appConfig.isturlbase) {
                url = appConfig.isturlbase + "/IST";
            } else if (appConfig.secureurl) {
                url = getFromServerUrl(appConfig.secureurl, "IST");
            } else if (appConfig.url) {
                url = getFromServerUrl(appConfig.url, "IST");
            }
            return url;
        }

       
        /*
         *  Name      : getFromServerUrl
         *  Author    : None
         *  Purpose   : Helper method to form a proper url
         */

        function getFromServerUrl(url, path) {
            if (!url) {
                return null;
            }
            // ServerURL for non-mf has /mwservlet appended after the context path.
            // We need to remove it to get the base server url
            kony.license.log("Entering into getfromserverurl when IST-base url is not defined");
            if (deviceInfo.name === "thinclient") {
                url = url.replace(/mwservlet\/*$/i, "");
                return url + path;
            } else {
                var exactSubString = url.match(/mwservlet/i);
                var newUrl = null;
                if (exactSubString) {
                    var exactSubStringLength = "mwservlet".length;
                    var lastSubStringIndex = url.lastIndexOf(exactSubString);
                    var subString = url.slice(0, lastSubStringIndex);
                    var index = (lastSubStringIndex + exactSubStringLength);
                    var subString2 = url.slice(index, url.length);
                    var has = /[a-zA-Z0-9]/.test(subString2);
                    if (!has) {
                        newUrl = subString;
                    } else {
                        newUrl = url;
                    }
                } else {
                    newUrl = url;
                }
                return newUrl + path;
            }
        }

        function getApplicationType(name) {
            if (name === "thinclient") {
                return "spa";
            }
            var appMode = kony.application.getApplicationMode();
            if (appMode === constants.APPLICATION_MODE_NATIVE) {
                return "native";
            } else if (appMode === constants.APPLICATION_MODE_HYBRID) {
                return "hybrid";
            } else if (appMode === constants.APPLICATION_MODE_WRAPPER) {
                return "mixedmode";
            } else {
                return "";
            }
        }

        /*
         *  Name       : kony.setUserID
         *  Author     : None
         *  Purpose    : Stores the userID in device local, once set.
         *  Scenarios :  i) If kony.setUserID api is invoked by the developer, the userId set won't be overriden regardless 
         *                   of any number of logins.
         *               ii) If kony.setUserID is called from login flow, then the userId of login will be set and will 
         *                    be overriden for every subsequent login calls and direct invocation of kony.setUserID.
         *               iii) kony.setUserID api is invoked by the developer the userId for ex: 'X' will be set, again if kony.setUserID 
         *                    api is invoked with value ex : 'Y' then the previous value will be overriden and 
         *                    current userId will be set to 'Y'.
         */

        kony.setUserID = function(userId,fromLoginFlag) {
            /* fromLoginFlag is introduced to know whether the call is made from
               login flow or directly kony.setUserID api is invoked */
			if(fromLoginFlag == undefined || fromLoginFlag == null){
				fromLoginFlag = false;
			}

            var userIDflagGet = kony.ds.read("userIDFromLicenseFlag");
             /* If userIDflagGet is true ie. it is being set by invoking kony.setUserID directly and this function 
               is invoked from login flow, then no need to override, just return */
            if(userIDflagGet && (userIDflagGet[0] == "true") && fromLoginFlag) {
                return;
            }

            /* If the invocation is directly through calling api and not through login flow,
               set userIDFromLicenseFlag key to true so that it is not overriden by any other invocations from login flow*/

            /* userIDFromLicenseFlag is set to true only when kony.setUserID api is directly invoked by the developer */
            if(!fromLoginFlag) {
                var userIDflagSet = new Array;
                userIDflagSet.push("true");
                kony.ds.save(userIDflagSet,"userIDFromLicenseFlag");
            }

            /* sets userID in device local */
            konyUserID().set.call(this, userId);
            kony.license.notifyChangesToListeners();
        }

        kony.license.generateUUID = function() {
                var S4 = function() {
                    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                };
                return (new Date().getTime() + '-' + S4() + '-' + S4() + '-' + S4());
        }
        /*
         *  Name      : kony.license.isCloud
         *  Author    : None
         *  Purpose   : Returns true if it is cloud enviroment, else returns false.
         */
        kony.license.isCloud = function() {
                //starting 6.0 the licensing approach is also applicable for On-Prem customers.Hence the license usage posting 
                //will be enabled for on-prem customers as well. So removing the check for the Kony Cloud URLs.

                var isLicenseEnabled = true;
                var LicenseCheck = kony.ds.read("LicenseDisableFlag");
                if (LicenseCheck && (LicenseCheck[0] === "true" || LicenseCheck === "true" ))  {
                    isLicenseEnabled = false;
                }
                if (kony.license.isLicenseUrlAvailable() === false) {
                    isLicenseEnabled = false;
                }
                return isLicenseEnabled;
        }

        /*
         *  Name      : kony.license.getCurrentDateTime
         *  Author    : None
         *  Purpose   : Returns current date and time details in required string format for service input.
         */
        kony.license.getCurrentDateTime = function() {
                kony.license.log("getCurrentDateTime..");
                var nowDate, month, formatDate;
                nowDate = new Date();
                month = nowDate.getUTCMonth() + 1;
                formatDate = (("00" + nowDate.getUTCFullYear()).slice(-4)) + "-" + (("00" + month).slice(-2)) + "-" + (("00" + nowDate.getUTCDate()).slice(-2)) + " " + (("00" + nowDate.getUTCHours()).slice(-2)) + ":" + (("00" + nowDate.getUTCMinutes()).slice(-2)) + ":" + (("00" + nowDate.getUTCSeconds()).slice(-2));
                return formatDate;
        }

        /*
         *  Name      : kony.license.appendLicenseTrackingKeys
         *  Author    : None
         *  Purpose   : Returns input object after appending the required tracking keys for provided input object.
         */

        kony.license.appendLicenseTrackingKeys = function(requestType,reportData) {
                kony.license.log("appendLicenseTrackingKeys deviceinfo ---> " + JSON.stringify(deviceInfo));
                var inputParams = {};
                 if (kony.license.isCloud() === true) {
                    inputParams.plat = deviceInfo.name;
                    if (typeof(kony.sdk) !== "undefined"){
                        inputParams.chnl = kony.sdk.getChannelType();
                        inputParams.did = kony.sdk.getDeviceId();
                        inputParams.plat = kony.sdk.getPlatformName();    
                    }
                    else{
                        //In absense of sdk [ MFSDK-2377 ],since for 7.0 viz we do not package SDK, so sdk namespace won't be available
                        //We should be okay with this hardcoding because in absence of SDK, IST call also doesn't make sense
                        //We are making this fix just for Backward compatibility of Viz Starter 7.0 Apps.
                        inputParams.chnl = "fpApp";
                        inputParams.did = "fp-"+kony.license.generateUUID();
                        inputParams.plat = "fp";
                    }
                    
                    inputParams.aid = appConfig.appId;
                    inputParams.aver = appConfig.appVersion;
                    inputParams.aname = appConfig.appName;
                    //adding mfaid, mfaname if konyref is available.
                    if (typeof konyRef !== "undefined" && konyRef != null && konyRef.mainRef) {
                        inputParams.mfaid = konyRef.mainRef.appId;
                        inputParams.mfbaseid = konyRef.mainRef.baseId;
                        inputParams.mfaname = konyRef.mainRef.name;
                    }
                    if (kony.application.getCurrentForm()) {
                        var fid = kony.application.getCurrentForm().id;
                        if (fid) {
                            inputParams.fid = fid;
                        }
                    }
                    inputParams.atype = getApplicationType(deviceInfo.name);
                    inputParams.os = deviceInfo.version;
                    inputParams.stype = "b2c";
                    inputParams.dm = deviceInfo.model;
                    inputParams.ua = kony.os.userAgent();
                    inputParams.sessiontype = kony.licensevar.isInteractive === true ? "I" : "NI";
                     var userId = konyUserID().get.call(this);
                    if (userId !== undefined && userId !== null && userId.length > 0) {
                        inputParams.kuid = userId[0];
                    } else {
                        inputParams.kuid = "";
                    }
                    if (requestType === "session") {
                        kony.license.checkAndCreateSession();
                        if(kony.licensevar.isISTNetworkCallProcessingInProgress === true || kony.licensevar.deferredNewSessionsCounter > 0){
                            //In case of first app laucn the kony.licensevar.deferredNewSessionsCounter would be 0 , so we don't need to cancel the uncommenced timer
                            if(kony.licensevar.deferredNewSessionsCounter > 0) {
                                try{
                                    kony.license.log("cancelling the previous timer, as in span of "
                                        +kony.license.maxWaitTimeToHandleMultipleNewSessions+ " seconds, a new IST was fired immediately");
                                    kony.timer.cancel("konySession"+(kony.licensevar.deferredNewSessionsCounter-1));
                                } catch(erObj) {
                                    kony.license.log("error - "+JSON.stringify(erObj)+",  while cancelling the deferred session timer" +
                                        " to send launch dates with timer id"+(kony.licensevar.deferredNewSessionsCounter-1));
                                }
                            }
                            kony.timer.schedule(("konySession"+(kony.licensevar.deferredNewSessionsCounter++)),
                                kony.license.processDeferredNewSessions, kony.license.maxWaitTimeToHandleMultipleNewSessions, false);
                                kony.license.log("another session is in progress , we will try again");
                            return {}; //returning empty konyReportingParams as we dont want another IST call while one IST call is in progress
                        }
                        
                        var offlineData = kony.license.getStoredSession();
                        inputParams.launchDates = offlineData;
                        kony.licensevar.isISTNetworkCallProcessingInProgress = true;
                        inputParams.svcid = "RegisterKonySession";
                        kony.license.log("---------->LaunchDates : " + inputParams.launchDates);
                    } else {
                        var uuid = kony.ds.read("konyUUID");
                        if (uuid !== undefined && uuid !== null && uuid.length > 0) {
                            inputParams.rsid = uuid[0];
                        } else {
                            inputParams.rsid = kony.license.generateUUID().toString();
                        }
                    }
                }
                kony.license.log("input params in appendLicenseTrackingKeys are " + JSON.stringify(inputParams));
                return inputParams;
            
        }

        /*
         *  Name      : kony.license.checkAndCreateSession
         *  Author    : None
         *  Purpose   : creates a new session (if session is not created).
         */
        kony.license.checkAndCreateSession = function() {
                kony.license.log("check and create session..");
                var uuid = kony.ds.read("konyUUID");
                if (uuid !== undefined && uuid !== null && uuid.length > 0) {
                   kony.licensevar.currentSessionId = uuid[0];
                } else {
                   kony.license.createSession();
                } 
        }

        kony.licensevar.sdkTimerCounter = 0;
        /**
         * This function prepares timer event for 4 hour delayed license call.
         * If another timer has to be scheduled, this function takes care of cancelling previous timer.
         */
        kony.license.prepare4HoursTimer = function () {
            kony.license.log("Entering prepare4HoursTimer, counter value-" + kony.licensevar.sdkTimerCounter);
            //In case of first app launch the kony.licensevar.sdkTimerCounter would be 0 , so we don't need to cancel the uncommenced timer
            if (kony.licensevar.sdkTimerCounter !== 0) {
                try {
                    var timerIdToCancel = kony.license.constants.KEY_KONY_LICENSE_TIMEOUT + (kony.licensevar.sdkTimerCounter - 1);
                    kony.timer.cancel(timerIdToCancel);
                } catch (erObj) {
                    kony.license.log("the error object while cancelling the timer is" + erObj);
                }
            }
        }

        /**
         * This function takes care of creating a new timer id and scheduling a new timed event
         * for new IST session to be created after 4 hours
         */
        kony.license.schedule4HoursTimer = function () {
            kony.license.log("Entering schedule4HoursTimer, counter value-" + kony.licensevar.sdkTimerCounter);
            var timerIdToSchedule = kony.license.constants.KEY_KONY_LICENSE_TIMEOUT + (kony.licensevar.sdkTimerCounter++);
            kony.timer.schedule(timerIdToSchedule, kony.license.sendNewIST, kony.license.timeoutValue, false);
        }

        /*
         *  Name      : kony.license.createSession
         *  Author    : None
         *  Purpose   : creates a new session (if session is not created) and sets the counter for 4hrs to call IST.
         */
        kony.license.createSession = function() {
            kony.license.prepare4HoursTimer();
            var uuid = new Array();
            kony.licensevar.currentSessionId = kony.license.generateUUID().toString();
            kony.licensevar.latestSessionCreationTimestamp = kony.license.getCurrentDateTime();
            uuid.push(kony.licensevar.currentSessionId);
            kony.ds.save(uuid, "konyUUID");
            kony.license.storeSession();
            kony.license.notifyChangesToListeners();
            kony.license.schedule4HoursTimer();
        }

        kony.license.storeSession = function(){
            var uuid = kony.licensevar.currentSessionId;
            var offlineData = kony.license.getStoredSession();
            if (offlineData === undefined || offlineData === null) {
                offlineData = new Array();
            }
            var currentSession = new Array();
            currentSession.push(uuid);
            currentSession.push(kony.licensevar.latestSessionCreationTimestamp);
            var sessionType = kony.licensevar.isInteractive === true ? "I" : "NI";
            currentSession.push(sessionType);

            if(offlineData.length === 0 || offlineData[(offlineData.length-1)][0] !== currentSession[0]){
                if(offlineData.length > 0 && kony.licensevar.deferredNewSessionsCounter > 0){
                    //we are dropping rapidly created sessions while already a network call is in progress. We will send only recent session.
                    offlineData.pop();
                }
                offlineData.push(currentSession);
            }else{
                kony.license.log("Ignoring duplicate session: "+JSON.stringify(currentSession));
                offlineData[offlineData.length - 1][2] = kony.licensevar.isInteractive.toString();
            }
            if(offlineData.length > kony.licensevar.maxSessionCountLimit){
                kony.license.log("Trimming to latest " + kony.licensevar.maxSessionCountLimit + " records, total records found - " + offlineData.length);
                var sliceValue = offlineData.length - kony.licensevar.maxSessionCountLimit;
                offlineData = offlineData.slice(sliceValue);
            }
            kony.ds.save(offlineData, "konyOfflineAccessData");
            kony.license.log("offlineData saved");
        };

        kony.license.getStoredSession = function(){
            return kony.ds.read("konyOfflineAccessData");
        };
            
        kony.license.sendNewIST = function() {
            kony.license.createSession();
            kony.license.pushKonySessionsToServer(true);           
        }

        /*
         *  Name      : kony.license.handleISTInvocation
         *  Author    : KH2293
         *  Purpose   : handles whether or not to invoke the IST call based on session type and other parameters
         */
        kony.license.handleISTInvocation = function(sessionURL, input, options) {
                var storedSessions = kony.license.getStoredSession();
                if((!kony.licensevar.isInteractive && storedSessions && (storedSessions.length >= kony.licensevar.maxDeferSessionCount)) || kony.licensevar.isInteractive) {
                   kony.license.invokeIST(sessionURL, input, kony.license.licenseUsageServiceSuccessCallback, kony.license.licenseUsageServiceFailureCallback, options);
                } else {
                   kony.licensevar.isISTNetworkCallProcessingInProgress = false;
                }
        }

        /*
         *  Name      : kony.license.licenseUsageServiceSuccessCallback
         *  Author    : KH2321
         *  Purpose   : handles the success behaviour of IST call and clear the offline stored failed sid
         */
        kony.license.licenseUsageServiceSuccessCallback = function (result){
                kony.licensevar.isISTNetworkCallProcessingInProgress = false;
                kony.license.log("launch dates sent successfully. result - "+JSON.stringify(result));
                //If launchDetails are successfully logged at server. Removing offline access details.
                kony.ds.remove("konyOfflineAccessData");
                kony.ds.remove("konyOfflineSessionsCount");
        }

        /*
         *  Name      : kony.license.licenseUsageServiceFailureCallback
         *  Author    : KH2321
         *  Purpose   : handles the error behaviour of IST call and stores failed sid
         */
        kony.license.licenseUsageServiceFailureCallback = function(result)
        {       
                kony.licensevar.isISTNetworkCallProcessingInProgress = false;
                kony.license.log("launch dates weren't sent successfully. result - "+JSON.stringify(result));
                //Storing offline access time details in case of network/service issues.
                var count, offlineCount;
                //Storing the offline sessions count.
                offlineCount = kony.ds.read("konyOfflineSessionsCount");
                if (offlineCount === undefined || offlineCount === null || offlineCount.length < 1) {
                    offlineCount = new Array();
                    offlineCount.push(1);
                } else if (!(offlineCount[0] >= 500)) {
                    //Stop updating the count if greater than 500
                    count = offlineCount[0] + 1;
                    offlineCount[0] = count;
                }
                kony.ds.save(offlineCount, "konyOfflineSessionsCount");
            }

        kony.license.captureKonyLicenseUsage = function(newLaunch) {
            // we are maintaining this for FP app made on earlier release for backward compatibility
            kony.license.pushKonySessionsToServer(newLaunch);
        }

        /*
         *  Name      : kony.license.pushKonySessionsToServer
         *  Author    : None
         *  Purpose   : Makes service call for session tracking if the app is built with cloud environment and last access is made 30 minutes ago.
         *              Sends required tracking keys for the service.
         */
        kony.license.pushKonySessionsToServer = function(newLaunch) {
                kony.license.log("capturing license information..");
                //Count session only if the time difference between last access and current access is more than 1 minute (30 minutes)
                var nowDate, lastDate, diff, sessionURL;
                var timeCheck = 1800000;
                var isNewSession = true;
                if (newLaunch === undefined || newLaunch === null) {
                    newLaunch = false;
                } else if (newLaunch !== true) {
                    newLaunch = false;
                }
                if (kony.license.isCloud() === false) {
                    kony.license.log("session tracking is turned off");
                    isNewSession = false;
                }
                if (kony.ds.read("konyLastAccessTime") !== undefined && kony.ds.read("konyLastAccessTime") !== null) {
                    nowDate = new Date();
                    lastDate = new Date(kony.ds.read("konyLastAccessTime")[0]);
                    diff = nowDate.getTime() - lastDate.getTime();
                    if (diff < timeCheck && newLaunch === false) {
                        isNewSession = false;
                    } else {
                        kony.ds.remove("konyLastAccessTime");
                    }
                }

                if (isNewSession === true) {
                    var input = {};
                    var options = {};
                    if (deviceInfo.name !== "thinclient") {
                        options["httpRequestOptions"] = [];
                        options["httpRequestOptions"]["timeoutIntervalForRequest"]=60;  
                    }
                    sessionURL = getLicenseUrl();
                    input.konyreportingparams = JSON.stringify(kony.license.appendLicenseTrackingKeys("session"),null);
                    options["disableIntegrity"] = true;
                    if(input.konyreportingparams !== "{}"){
                    	kony.license.handleISTInvocation(sessionURL, input, options);
                    }
                }
        }

        /*
         *  Name      : kony.license.backgroundTimeCapture
         *  Author    : None
         *  Purpose   : Stores the time stamp when app is sent to background.
         */
        kony.license.backgroundTimeCapture = function() {
                kony.license.log("app is going to background..");
                if (kony.license.isCloud() === true) {
                    var accessDetails = new Array();
                    accessDetails.push(new Date().toString());
                    kony.ds.save(accessDetails, "konyLastAccessTime");
                }
        }

        /*
         *  Name      : kony.license.clearLastAccess
         *  Author    : None
         *  Purpose   : Clears last access details on the termination of app.
         */
        kony.license.clearLastAccess = function() {
                kony.license.log("clear last access..");
                if (kony.license.isCloud() === true) {
                    kony.ds.remove("konyLastAccessTime");
                }
        }

        /*
         *  Name      : kony.license.setAppCallbacksOverride
         *  Author    : None
         *  Purpose   : Overrides the API setApplicationCallbacks. Prepends onforeground, onbackground and onappterminate events with required
         *              session tracking methods.
         */
        kony.license.setAppCallbacksOverride = function() {
                kony.license.log("overriding kony.application.setApplicationCallbacks..");
                var oldImplementation = kony.application.setApplicationCallbacks;

                function newImplementation(eventsDefinition) {
                    if (kony.license.isCloud() === true) {
                        if (eventsDefinition !== undefined && eventsDefinition !== null) {
                            if (eventsDefinition.onforeground !== undefined && eventsDefinition.onforeground !== null) {
                                var userForeFunction = eventsDefinition.onforeground;
                                var newForeFunction = function() {
                                    if(kony.licensevar.didAppWentInBackground === true){
                                        kony.license.pushKonySessionsToServer(false);
                                    }
                                    if (deviceInfo.name !== "thinclient " && typeof(kony.sync) !== "undefined") {
                                        kony.sync.isAppInBackground = false;
                                    }
                                    kony.licensevar.didAppWentInBackground = false;
                                    userForeFunction();
                                };
                                eventsDefinition.onforeground = newForeFunction;
                            }
                            if (eventsDefinition.onbackground !== undefined && eventsDefinition.onbackground !== null) {
                                var userBackFunction = eventsDefinition.onbackground;
                                var newBackFunction = function() {
                                    kony.licensevar.didAppWentInBackground = true;
                                    kony.license.backgroundTimeCapture();
                                    if (typeof(kony.sdk) !== "undefined" && typeof(kony.sdk.metric) !== "undefined") {
                                        kony.sdk.metric.saveInDS();
                                    }
                                    if (deviceInfo.name !== "thinclient " && typeof(kony.sync) !== "undefined") {
                                        kony.sync.isAppInBackground = true;
                                    }
                                    userBackFunction();
                                };
                                eventsDefinition.onbackground = newBackFunction;
                            }
                            if (eventsDefinition.onappterminate !== undefined && eventsDefinition.onappterminate !== null) {
                                var userTerminateFunction = eventsDefinition.onappterminate;
                                var newTerminateFunction = function() {
                                    kony.license.clearLastAccess();
                                    if (typeof(kony.sdk) !== "undefined" && typeof(kony.sdk.metric) !== "undefined") {
                                        kony.sdk.metric.saveInDS();
                                    }
                                    userTerminateFunction();
                                };
                                eventsDefinition.onappterminate = newTerminateFunction;
                            }
                        }
                    }
                    return oldImplementation(eventsDefinition);
                }
                kony.application.setApplicationCallbacks = newImplementation;
                if (deviceInfo.name !== "thinclient ") {
                    var callbackEvents = {
                        onforeground: function() {},
                        onbackground: function() {},
                        onappterminate: function() {}
                    };

                    kony.application.setApplicationCallbacks(callbackEvents);
                }
        }

        /*
         *  Name      : kony.license.invokeServiceAsyncOverride
         *  Author    : None
         *  Purpose   : Overrides the API invokeServiceAsync. Appends tracking keys to the input param.
         */
        kony.license.invokeServiceAsyncOverride = function() {
                kony.license.log("overriding kony.net.invokeServiceAsync..");
                var oldImplementation = kony.net.invokeServiceAsync;

                function newImplementation(url, input, callback, config, requestType, reportData) {
                    if (kony.license.isCloud() === true) {
                        if (input === undefined || input === null) {
                            input = {};
                        }
                        if (input !== undefined && input !== null && !isGetRequest(input)) {
                            if (requestType !== undefined && requestType !== null) {
                                input.konyreportingparams = processKonyReportingParams(input.konyreportingparams, requestType, reportData);
                            } else {
                                input.konyreportingparams = processKonyReportingParams(input.konyreportingparams, null, null);
                            }
                        }
                    }
                    return oldImplementation(url, input, callback, config);

                    function processKonyReportingParams(params, requestType, reportData) {
                        var params2 = kony.license.appendLicenseTrackingKeys(requestType, reportData);
                        if (!params) {
                            return JSON.stringify(params2);
                        } else {
                            try {
                                if (typeof(params) === "string") {
                                    params = JSON.parse(params);
                                }
                                for (var key in params2) {
                                    if (typeof(params[key]) === "undefined") {
                                        params[key] = params2[key];
                                    }
                                }
                                return JSON.stringify(params);
                            } catch (e) {
                                kony.license.log("unable to parse params " + params);
                                return JSON.stringify(params2);
                            }


                        }
                    }

                    function isGetRequest(inputParams) {
                        if (inputParams && inputParams.httpconfig && inputParams.httpconfig.method && inputParams.httpconfig.method === "get") {
                            return true;
                        }
                        return false;
                    }
                }
                kony.net.invokeServiceAsync = newImplementation;
        }

        /*
         *  Name      : kony.license.invokeServiceSyncOverride
         *  Author    : None
         *  Purpose   : Overrides the API invokeServiceSync. Appends tracking keys to the input param.
         */
        kony.license.invokeServiceSyncOverride = function() {
                kony.license.log("overriding kony.net.invokeServiceSync..");
                var oldImplementation = kony.net.invokeServiceSync;

                function newImplementation(url, input, isblocking) {
                    if (kony.license.isCloud() === true) {
                        if (input === undefined || input === null) {
                            input = {};
                        }
                        if (input !== undefined && input !== null) {
                            input.konyreportingparams = JSON.stringify(kony.license.appendLicenseTrackingKeys(null));
                        }
                    }
                    return oldImplementation(url, input, isblocking);
                }
                kony.net.invokeServiceSync = newImplementation;
        }

        //The below function gets defined only in thinclient channels due to APPPLT-7291
        if (kony.os.deviceInfo().name === kony.license.constants.THIN_CLIENT) {
            /**
             * This function reads post app init argument and tries to find
             * for availability of code in params for recovery against last session.
             * In case of non-availability , this function cleans any stored resuable session
             * @param eventObject
             * @returns {boolean}
             */
            kony.license.doesLaunchParamsHaveCode = function (eventObject) {
                kony.license.log("Entering doesLaunchParamsHaveCode");
                var isCodePresentInQueryParams = !kony.license.isNullOrUndefined(eventObject)
                                                 && !kony.license.isNullOrUndefined(eventObject[kony.license.constants.LAUNCH_PARAMS])
                                                 && !kony.license.isNullOrUndefined(eventObject[kony.license.constants.LAUNCH_PARAMS].code);

                if (!isCodePresentInQueryParams) {
                    kony.license.log("code was not present in launch params");
                    kony.license.removeReusableSession();
                }

                kony.license.log("code was present in launch params");
                return isCodePresentInQueryParams;
            }

            /**
             * This function saves current session to be used in next continued app launch for login
             */
            kony.license.saveCurrentSessionForReuse = function () {
                kony.license.log("Entering saveCurrentSessionForReuse");
                var singleStoredSession = [kony.licensevar.currentSessionId];
                kony.ds.save(singleStoredSession, kony.license.constants.REUSABLE_SESSION_ID);
            }

            /**
             * This function does following function
             * 1.consume previously saved session in last launch & notify all listeners with this session
             * always cleans any stored resuable session
             * @returns {boolean} returns true if session was restored successfully
             */
            kony.license.reuseLastSession = function () {
                kony.license.log("Entering reuseLastSession");
                var wasAbleToReuseLastSession = false;
                var singleStoredSession = kony.ds.read(kony.license.constants.REUSABLE_SESSION_ID);

                if (!kony.license.isNullOrUndefined(singleStoredSession)
                    && !kony.license.isNullOrUndefined(singleStoredSession[0]))
                {
                    kony.license.log("successfully reused session");
                    kony.license.prepare4HoursTimer();
                    kony.licensevar.currentSessionId = singleStoredSession[0];
                    kony.license.notifyChangesToListeners();
                    wasAbleToReuseLastSession = true;
                    kony.license.schedule4HoursTimer();
                }

                kony.license.removeReusableSession();
                return wasAbleToReuseLastSession;
            }

            /**
             * This function removes single stored session from storage for clean up
             */
            kony.license.removeReusableSession = function (){
                kony.license.log("removing reusable session");
                kony.ds.remove(kony.license.constants.REUSABLE_SESSION_ID);
            }
        }


        /**
         * This function primarily sets session id & capture app launch event
         * @param postAppInitArgument
         */
        kony.license.prepareLicenseSessionOnPostAppInit = function (postAppInitArgument) {
            kony.license.log("Entering prepareLicenseSessionOnPostAppInit");
            /* MFSDK-4266 Saving app launch key-value to detect
            application launch to reset locks on application reload
            */
            kony.ds.save([true], kony.licensevar.appLaunch);

            //only for thinclient channels e.g SPA,DW
            if (kony.os.deviceInfo().name === kony.license.constants.THIN_CLIENT
                && kony.license.doesLaunchParamsHaveCode(postAppInitArgument))
            {
                var wasAbleToReuseLastSession =  kony.license.reuseLastSession();
                if(wasAbleToReuseLastSession){
                    kony.license.log("last session reused inside postappinit");
                    return;
                }
            }

            //sdk will not create session any more since we have to avoid creating session when SPA app is relaunched for single window login
            //license will be self sufficient to create session on post-app init from now on
            kony.license.log("creating new session inside postappinit");
            kony.license.createSession();
            
            kony.license.pushKonySessionsToServer(true);
        }

        /*
         *  Name      : kony.license.setAppInitializationEventsOverride
         *  Author    : None
         *  Purpose   : Overrides the API setApplicationInitializationEvents. Prepends postappinit event with required session tracking method.
         *              If postappinit is undefiend, sets postappinit with required session tracking method.
         */
        kony.license.setAppInitializationEventsOverride = function() {
                var oldImplementation = kony.application.setApplicationInitializationEvents;
                function newImplementation(eventsDefinition) {
                    kony.license.log("setApplicationInitializationEvents events " + eventsDefinition);
                    kony.licensevar.isPostAppInitCalled = true;
                    if (kony.license.isCloud() === true) {
                        if (eventsDefinition !== undefined && eventsDefinition !== null) {
                            var userFunction = eventsDefinition.postappinit;
                            if (!kony.license.isNullOrUndefined(userFunction)) {
                                var wrapperPostAppInit = function (postAppInitArgument) {
                                    kony.license.prepareLicenseSessionOnPostAppInit(postAppInitArgument);
                                    var userForm = userFunction.apply(this,arguments);
                                    if (userForm !== undefined || userForm !== null) {
                                        return userForm;
                                    }
                                };
                                eventsDefinition.postappinit = wrapperPostAppInit;
                            } else {
                                eventsDefinition.postappinit = kony.license.prepareLicenseSessionOnPostAppInit;
                            }
                            
                            /*The below function gets defined only in thinclient channels due to APPPLT-7291
                            Below function defines appServiceAsync function, the license.js will be able to know
                            whether app was launched with code as launch params, and will ask sdk to do login.
                            The sdk will perform login and send result to license.
                            License would append login result in appServiceAsync eventObject
                             */
                            if (kony.os.deviceInfo().name === kony.license.constants.THIN_CLIENT) {
                                function doLoginWithCode(appServiceEventObjectArgument, doneCallback) {
                                    kony.license.log("Entering doLoginWithCode");
                                    if (!kony.license.doesLaunchParamsHaveCode(appServiceEventObjectArgument)) {
                                        kony.license.log("no code launch param found, skipping login for same window login");
                                        doneCallback();
                                    } else {
                                        kony.license.log("code launch param found, requesting sdk to complete login");
                                        var code = appServiceEventObjectArgument[kony.license.constants.LAUNCH_PARAMS].code;
                                        kony.sdk.completeSingleWindowLogin(code, doneCallback);
                                    }
                                }

                                var appServiceAsyncFunction = function (appServiceEventObjectArgument, callback) {
                                    kony.license.log("Entering appServiceAsyncFunction");
                                    doLoginWithCode(appServiceEventObjectArgument, function (loginResponse) {
                                        if (!kony.license.isNullOrUndefined(loginResponse)) {
                                            kony.license.log("appending loginResponse in eventObject");
                                            appServiceEventObjectArgument.loginResponse = loginResponse;
                                        }

                                        kony.license.log("Exiting appServiceAsyncFunction");
                                        callback(appServiceEventObjectArgument);
                                    })
                                };
                                
                                eventsDefinition.appServiceAsync = appServiceAsyncFunction;
                            }
                        }
                    }
                    return oldImplementation(eventsDefinition);
                }
                kony.application.setApplicationInitializationEvents = newImplementation;
        }
        /*
         *  Name      : kony.license.apiOverride
         *  Author    : None
         *  Purpose   : Sets initial application callbacks. Calls the API overriding functions
         */
       kony.license.apiOverride =function() {
                kony.license.log("Entering apiOverride..");
                //Overriding APIs
                if (deviceInfo.name !== "thinclient") {
                    kony.license.setAppCallbacksOverride();
                } else {
                    //in SPA/DW kony.application.addApplicationCallbacks function is a stub.
                    kony.licensevar.isInteractive = true;
                }
                kony.license.invokeServiceAsyncOverride();
                kony.license.invokeServiceSyncOverride();
                kony.license.setAppInitializationEventsOverride();
        }

        kony.license.apiOverride();
        kony.application.addApplicationCallbacks(kony.licensevar.callbacksObjList);
        if (deviceInfo.name !== "thinclient") {
            Object.seal(kony.license);
            Object.freeze(kony.license);
        }
        kony.license.log("license loading completed");
}

//License Network Layer
kony.license.invokeIST = function(url, params, successCallback, failureCallback, options) {
    if(typeof(url)==="undefined" || url === undefined || url === null || url === ""){
        failureCallback("license url can't be null or empty");
        return;
    }

    var headers = {"Content-Type":"application/x-www-form-urlencoded"};
    //kony.sdk can be undefined in case where sdk is absent in project eg.(fp apps of 7.x versions) or unable to load
    if(kony.hasOwnProperty("sdk") && kony.sdk.getCurrentInstance && kony.sdk.getCurrentInstance()){
        url = kony.sdk.getCurrentInstance().appendGlobalParams(url, headers, params);
    }

    var httpRequest = new kony.net.HttpRequest();
    if(options && options["httpRequestOptions"] && options["httpRequestOptions"] instanceof Object && options["httpRequestOptions"]["timeoutIntervalForRequest"]){
        httpRequest.timeout = options["httpRequestOptions"]["timeoutIntervalForRequest"] * 1000;
    }
    httpRequest.open("POST", url);

    function localRequestCallback(result) {
        var readyState = Number(httpRequest.readyState.toString());
        var status = Number(httpRequest.status.toString());
        kony.license.log("localRequestCallback in state :"+readyState+" with status :"+status);
        var response = null;
        if (readyState === 4) {
            var isFailure = true;
            if ((status >= 200 && status < 300)|| status === 504) {
                if (status!== 504){
                    try{
                        response = JSON.parse(JSON.stringify(httpRequest.response)); //copying response
                        if(typeof(response) === "string"){
                            response = JSON.parse(response);	
                        }
                        response.url = url;
                        if(response && (typeof(response.opstatus) === "undefined" || response.opstatus == 0)){
                            isFailure = false;
                        }
                    } catch (e){
                        kony.license.log("error while extracting response :"+e);
                    } 
                } else{
                    isFailure = false;
                }
            }
            if( isFailure === true){
                var errorResponse = {
                    "error": "failure in sending IST call with status as :" + status,
                    "url" : url
                };
                failureCallback(errorResponse);
            } else{
                successCallback(response);
            }
        }
    }

    //setting params
    paramsTable = new kony.net.FormData();
    for (var key in params) {
        if (typeof(params[key]) != "undefined") {
            if (typeof(params[key]) !== "string") {
                params[key] = JSON.stringify(params[key]);
            }
            paramsTable.append((key), (params[key]));
        }
    }
    kony.license.log("paramsTable formed is "+paramsTable.toString());
    //setting headers
    for (var headerKey in headers ) {
        if(headers.hasOwnProperty(headerKey)){
            httpRequest.setRequestHeader(headerKey , headers[headerKey]);
        }
    }   
    //setting listener
    httpRequest.onReadyStateChange = localRequestCallback;
    //disabling integrity as integrity is never supported in IST,
    //for consistency we should also not send req headers containing integrity headers even though the headers will be ignored by MW
    //This should have been done as a part of MFSDK-4957
    if (httpRequest.hasOwnProperty("disableIntegrityCheck")) {
        httpRequest.disableIntegrityCheck = true;
    }
    //sending IST
    httpRequest.send(paramsTable);
    
}


function cloudSessionCallback() {
    kony.license.log("Cloud session timed out.");
    kony.ds.remove("konyLastAccessTime");
    kony.ds.remove("konyUUID");
    kony.ds.remove("konyCustomReportData");
    kony.ds.remove("konyOfflineAccessData");
    kony.license.pushKonySessionsToServer();
    kony.cloud.appevents.unregisterforidletimeout();
    kony.cloud.appevents.registerforidletimeout(30, cloudSessionCallback);
}

kony.license.startLicenseService();