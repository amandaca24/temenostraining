if (window && window.Windows && Windows && Windows.UI && Windows.UI.Popups) {
    kony.net = kony.net || {};
    kony.net.urlDecode = function (queryParams) {
        var returnValue = PWAWrapper.NetworkWrapper.urlDecode(getWinRTObjectArray([queryParams]));
        return returnValue;
    }
    kony.net.urlEncode = function (queryParams) {
        var returnValue = PWAWrapper.NetworkWrapper.urlEncode(getWinRTObjectArray([queryParams]));
        return returnValue;
    }
}
