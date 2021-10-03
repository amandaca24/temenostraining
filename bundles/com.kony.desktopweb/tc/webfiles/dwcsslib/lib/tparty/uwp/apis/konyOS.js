if (window && window.Windows && Windows && Windows.UI && Windows.UI.Popups) {
    kony.os.createUUID = function () {
        var returnValue = PWAWrapper.OSWrapper.createUUID();
        return returnValue;
    }
    kony.os.getDeviceId = function (arg) {
        // not supported by windows....
    }
    kony.os.toNumber = function (arg) {
        if (arguments.length != 1) {
            throw new Error("Invalid argument to os.toNumber");
        }
        if (typeof (arg) === "number") {
            return arg;
        } else if (typeof (arg) === "string") {
            var str = arg.replace(/^\s*/, '').replace(/\s*$/, '');
            if (str === '') {
                return null;
            } else {
                var num = str - 0;
                return (isNaN(num) ? null : num);
            }
        } else {
            return null;
        }
    }
    kony.os.toCurrency = function (arg) {
        arg -= 0;
        if (isNaN(arg)) {
            throw new Error("Invalid argument to os.toCurrency");
        }
        if (arg < 0) arg *= -1;
        var str = arg.toFixed(3);
        str = str.substr(0, str.length - 1);
        var outStr = "";
        for (var i = 0; i < str.length - 4; i++) {
            outStr += str.charAt(i);
            if ((str.length - i - 1) % 3 === 0) outStr += ",";
        }
        for (; i < str.length; i++) {
            outStr += str.charAt(i);
        }
        return "$" + outStr;
    }
    kony.os.userAgent = function () {
        var returnValue = PWAWrapper.OSWrapper.userAgent();
        return returnValue;
    }
    kony.os.deviceInfo = function () {
        var returnValue = PWAWrapper.OSWrapper.deviceInfo();
        return returnValue;
    }
    kony.os.hasGPSSupport = function () {
        var returnValue = PWAWrapper.OSWrapper.hasGPSSupport();
        return returnValue;
    }
    kony.os.hasCameraSupport = function () {
        var returnValue = PWAWrapper.OSWrapper.hasCameraSupport();
        return returnValue;
    }
    kony.os.hasTouchSupport = function () {
        var returnValue = PWAWrapper.OSWrapper.hasTouchSupport();
        return returnValue;
    }
    kony.os.hasOrientationSupport = function () {
        var returnValue = PWAWrapper.OSWrapper.hasOrientationSupport();
        return returnValue;
    }
    kony.os.hasAccelerometerSupport = function () {
        var returnValue = PWAWrapper.OSWrapper.hasAccelerometerSupport();
        return returnValue;
    }
    kony.os.getDeviceCurrentOrientation = function () {
        var returnValue = PWAWrapper.OSWrapper.getDeviceCurrentOrientation();
        return returnValue;
    }
    kony.os.freeMemory = function () {
        var returnValue = PWAWrapper.OSWrapper.freeMemory();
        return returnValue;
    }
}