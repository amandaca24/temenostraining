var PUBLISH = false, UWPAPIS = (/true/i).test('-- UWPAPIS --'), ECMAENABLE = "@ECMAENABLE",
    UWPOFFLINEAPIS = (/true/i).test('-- UWPOFFLINEAPIS --'), UWPBUILD = (UWPAPIS || UWPOFFLINEAPIS);

/* START:: GLOBAL VARIABLES DECLARATION - Used further in application code and framework */
window = self;
nestedWorker = true;
/*END::  GLOBAL VARIABLES DECLARATION*/

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
        } else if(typeof writable !== 'boolean') {
            writable = false;
        }

        return writable;
    };

    var _props = [
        {keey:'$kwebfw$', value:{}, items:[
            {keey:'defKonyProp', value:_def},
            {keey:'globals', value:{}}
        ]},
        {keey:'props', value:{}}
    ]; _def(_ns, _props);

    return _ns;
}())});


kony.print = function(msg) {
    if(typeof console !== "undefined") console.log(msg);
};


function _isEcmaEnabledForIE() {
    var ua = navigator.userAgent.toLowerCase();

    if(ua.indexOf('trident/') >= 0 && ua.indexOf('rv:11.0') >= 0
    && ECMAENABLE && typeof ECMAENABLE === 'boolean') {
        return true;
    } else {
        return false;
    }
}


KonyError = function(errorcode, name, message) {
    this.errorCode = this.errorcode = errorcode;
    this.name = name;
    this.message = message;
};
KonyError.prototype = new Error();
KonyError.prototype.constructor = KonyError;

kony.getError = function(e) {
    return e;
};


self.onmessage = function(oEvent) {
    var data = oEvent.data;

    self.onmessage = null; // deregister this message listener and initiate the application worker file.

    if(typeof data.moduleName !== "undefined") {
        initiateWorker(data);
    } else {
        this.console.log('Unable to create worker thread.');
    }
};

var initiateWorker = function(data) {
    var _importScripts = importScripts, _addEventListener = addEventListener,
        _removeEventListener = removeEventListener, _postMessage = postMessage,
        ua = navigator.userAgent.toLowerCase(),
        basePath = self.location.href.split('/lib/')[0] + '/appjs/worker/';

    if(_isEcmaEnabledForIE()) {
        basePath = self.location.href.split('/es5lib/')[0] + '/es5appjs/worker/';
    }

    if(PUBLISH) {
        importScripts('konywebworkermin.js');
    } else {
        importScripts('utils/konyutils.js', 'apis/kony.js', 'apis/konyapplication.js', 'apis/konyconstants.js', 'apis/konycrypto.js', 'apis/konydb.js', 'apis/konyds.js', 'apis/konyi18n.js', 'apis/konyio.js', 'apis/konylocation.js', 'apis/konymodules.js', 'apis/konynet.js', 'apis/konyos.js', 'apis/konyphone.js', 'apis/konytheme.js', 'apis/konytimer.js', 'apis/konyworker.js');
    }

    importScripts = function() {
        var args = [].slice.call(arguments);

        for(i = 0; i < args.length; i++) {
            if(typeof args[i] !== "string") {
                throw new KonyError(3002, "WorkerThreadError", "importScripts: InvalidParameter. Invalid script name.");
            }
            try {
                _importScripts(args[i]);
            } catch(e) {
                if((e.name && e.name == "NetworkError") || (e.message && (/network/i).test(e.message)) || (e.message && (/Script file not found/i).test(e.message))) {
                    throw new KonyError(3002, "WorkerThreadError", "importScripts: InvalidParameter. Unable to import script. " + args[i]);
                } else {
                    throw e;
                }
            }
        }
    }

    addEventListener = function(sName, fListener) {
        if(arguments.length < 2) {
            throw new KonyError(3001, "WorkerThreadError", "addEventListener: MissingMandatoryParameter. Mandatory arguments missing");
        }
        if(typeof sName != "string" || typeof fListener != "function") {
            throw new KonyError(3002, "WorkerThreadError", "addEventListener: InvalidParameter. Invalid arguments");
        }
        if(sName != "message" && sName != "error") {
            throw new KonyError(3002, "WorkerThreadError", "addEventListener: InvalidParameter. Invalid arguments");
        }
        _addEventListener(sName, fListener);
    }

    removeEventListener = function(sName, fListener) {
        if(arguments.length < 2) {
            throw new KonyError(3001, "WorkerThreadError", "removeEventListener: MissingMandatoryParameter. Mandatory arguments missing");
        }
        if(typeof sName != "string" || typeof fListener != "function") {
            throw new KonyError(3002, "WorkerThreadError", "removeEventListener: InvalidParameter. Invalid arguments");
        }
        if(sName != "message" && sName != "error") {
            throw new KonyError(3002, "WorkerThreadError", "removeEventListener: InvalidParameter. Invalid arguments");
        }
        _removeEventListener(sName, fListener);
    }

    postMessage = function(vMsg) {
        if(vMsg === undefined || vMsg === null || vMsg === '') {
            throw new KonyError(3001, "WorkerThreadError", "postMessage: MissingMandatoryParameter. Message undefined");
        }
        if(typeof vMsg === "number" || typeof vMsg === "boolean" || typeof vMsg === "function") {
            throw new KonyError(3002, "WorkerThreadError", "postMessage: InvalidParameter. Invalid Message");
        }
        try {
            _postMessage(vMsg);
        } catch(err) {
            kony.print("Error occured in WorkerThread postMessage: " + err.message);
            throw new KonyError(3002, "WorkerThreadError", "postMessage: InvalidParameter. Invalid Message");
        }
    }

    try {
        if(data.moduleName.indexOf(".js") > 0) {
            _importScripts(basePath + data.moduleName);
        } else {
            var modLoaded = false;
            if(data.isFMSupported) {
                modLoaded = kony.modules.loadFunctionalModule(data.moduleName);
            }

            if(!modLoaded) {
                throw new Error("WorkerThread: InvalidParameter. WorkerThread script not found");
            }
        }
    } catch(e) {
        if((e.name && e.name == "NetworkError") || (e.message && (/network/i).test(e.message)) || (e.message && (/Script file not found/i).test(e.message))) {
            throw new Error("WorkerThread: InvalidParameter. WorkerThread script not found");
        } else {
            throw e;
        }
    }

};