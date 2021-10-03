if (window && window.Windows && Windows && Windows.UI && Windows.UI.Popups) {
    kony.location.getCurrentPosition = function (successcallback, errorcallback, positionoptions) {
        var positionoptionsFinal = null;
        var events = new PWAWrapper.CallbackEvents();
        events.addEventListener("success", getWinRTFunctionObject(successcallback));
        if (typeof errorcallback == "function") {
            events.addEventListener("failure", getWinRTFunctionObject(errorcallback));
        }
        else if (typeof errorcallback == "object") {
            positionoptionsFinal = errorcallback;
        }
        if (typeof positionoptions == "object") {
            positionoptionsFinal = positionoptions;
        }
        PWAWrapper.LocationWrapper.getCurrentPosition(events, getWinRTObject(positionoptionsFinal));
    }
    kony.location.watchPosition = function (successcallback, errorcallback, positionoptions) {
        var positionoptionsFinal = null;
        var events = new PWAWrapper.CallbackEvents();
        events.addEventListener("success", getWinRTFunctionObject(successcallback));
        if (typeof errorcallback == "function") {
            events.addEventListener("failure", getWinRTFunctionObject(errorcallback));
        }
        else if (typeof errorcallback == "object") {
            positionoptionsFinal = errorcallback;
        }
        if (typeof positionoptions == "object") {
            positionoptionsFinal = positionoptions;
        }
        var returnValue = PWAWrapper.LocationWrapper.watchPosition(events, getWinRTObject(positionoptionsFinal));
        return returnValue;
    }
    kony.location.clearWatch = function (watchID) {
        PWAWrapper.LocationWrapper.clearWatch(getWinRTObject(watchID));
    }
    kony.location.mylocation = function (successcallback, errorcallback, positionoptions) {
        var positionoptionsFinal = null;
        var events = new PWAWrapper.CallbackEvents();
        events.addEventListener("success", getWinRTFunctionObject(successcallback));
        if (typeof errorcallback == "function") {
            events.addEventListener("failure", getWinRTFunctionObject(errorcallback));
        }
        else if (typeof errorcallback == "object") {
            positionoptionsFinal = errorcallback;
        }
        if (typeof positionoptions == "object") {
            positionoptionsFinal = positionoptions;
        }
        PWAWrapper.LocationWrapper.getCurrentPosition(events, getWinRTObject(positionoptionsFinal));
    }
    kony.location.createGeofences = function (positionoptions) {
        PWAWrapper.LocationWrapper.createGeofences(getWinRTObject(positionoptions));
    }
    kony.location.clearAllGeofences = function () {
        PWAWrapper.LocationWrapper.clearAllGeofences();
    }
    kony.location.setGeofencesCallback = function (EntryExitCallback, ErrorCallback) {
        var events = new PWAWrapper.CallbackEvents();
        events.addEventListener("success", getWinRTFunctionObject(EntryExitCallback));
        events.addEventListener("failure", getWinRTFunctionObject(ErrorCallback));
        PWAWrapper.LocationWrapper.setGeofencesCallback(events);
    }
}