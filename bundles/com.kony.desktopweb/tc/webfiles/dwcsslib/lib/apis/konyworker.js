/* global kony */
Object.defineProperty(kony, 'worker', {configurable:false, enumerable:false, writable:false, value:(function() {
    var _ns = {}, $K = kony.$kwebfw$;


    var _addEventListener = function Worker$_addEventListener(sName, fListener) {
        var $K = kony.$kwebfw$, $KU = $K.utils;

        $KU.log({api:'worker.addEventListener', enter:true});
        if(arguments.length < 2) {
            $KU.log('addEventListener: MissingMandatoryParameter. Mandatory arguments missing');
            throw new KonyError(3001, "WorkerThreadError", "addEventListener: MissingMandatoryParameter. Mandatory arguments missing");
        }
        if(typeof sName != "string" || typeof fListener != "function") {
            $KU.log('addEventListener: InvalidParameter. Invalid arguments');
            throw new KonyError(3002, "WorkerThreadError", "addEventListener: InvalidParameter. Invalid arguments");
        }
        if(sName != "message" && sName != "error") {
            $KU.log('addEventListener: InvalidParameter. Invalid arguments');
            throw new KonyError(3002, "WorkerThreadError", "addEventListener: InvalidParameter. Invalid arguments");
        }
        $KU.log('worker.addEventListener', sName, fListener);
        fListener = fListener ? fListener : this.defaultListener;
        Worker.prototype.addEventListener.call(this.oWorker, sName, fListener, false);
        if("error" === sName) {
            Worker.prototype.removeEventListener.call(this.oWorker, "error", this.defaultErrorListener, false);
        }

        $KU.log({api:'worker.addEventListener', exit:true});
    };


    var _hasWorkerThreadSupport = function() {
        var $K = kony.$kwebfw$, $KU = $K.utils, workerSupport = true;

        $KU.log({api:'kony.worker.hasWorkerThreadSupport', enter:true});

        if(typeof Worker === "undefined") {
            $KU.log('Worker not defined');
            workerSupport = false;
        }

        $KU.log({api:'kony.worker.hasWorkerThreadSupport', exit:true});

        return workerSupport;
    };


    var _postMessage = function Worker$_postMessage(vMsg) {
        var $K = kony.$kwebfw$, $KU = $K.utils;

        $KU.log({api:'worker.postMessage', enter:true});
        if(vMsg === undefined || vMsg === null || vMsg === '') {
            $KU.log('postMessage: MissingMandatoryParameter. Message undefined');
            throw new KonyError(3001, "WorkerThreadError", "postMessage: MissingMandatoryParameter. Message undefined");
        }
        if(typeof vMsg === "number" || typeof vMsg === "boolean" || typeof vMsg === "function") {
            $KU.log('postMessage: InvalidParameter. Invalid Message');
            throw new KonyError(3002, "WorkerThreadError", "postMessage: InvalidParameter. Invalid Message");
        }
        $KU.log('worker.postMessage', vMsg);
        try {
            Worker.prototype.postMessage.call(this.oWorker, vMsg);
            $KU.log({api:'worker.postMessage', exit:true});
        } catch(err) {
            $KU.log('postMessage: InvalidParameter. Invalid Message');
            kony.print("Error occured in WorkerThread postMessage: " + err.message);
            throw new KonyError(3002, "WorkerThreadError", "postMessage: InvalidParameter. Invalid Message");
        }
    };


    var _removeEventListener = function Worker$_removeEventListener(sName, fListener) {
        var $K = kony.$kwebfw$, $KU = $K.utils;

        $KU.log({api:'worker.removeEventListener', enter:true});
        if(arguments.length < 2) {
            $KU.log('removeEventListener: MissingMandatoryParameter. Mandatory arguments missing');
            throw new KonyError(3001, "WorkerThreadError", "removeEventListener: MissingMandatoryParameter. Mandatory arguments missing");
        }
        if(typeof sName != "string" || typeof fListener != "function") {
            $KU.log('removeEventListener: InvalidParameter. Invalid arguments');
            throw new KonyError(3002, "WorkerThreadError", "removeEventListener: InvalidParameter. Invalid arguments");
        }
        if(sName != "message" && sName != "error") {
            $KU.log('removeEventListener: InvalidParameter. Invalid arguments');
            throw new KonyError(3002, "WorkerThreadError", "removeEventListener: InvalidParameter. Invalid arguments");
        }
        $KU.log('worker.removeEventListener', sName, fListener);
        Worker.prototype.removeEventListener.call(this.oWorker, sName, fListener, false);
        if("error" === sName) {
            Worker.prototype.addEventListener.call(this.oWorker, "error", this.defaultErrorListener, false);
        }
        $KU.log({api:'worker.removeEventListener', exit:true});
    };


    var _terminate = function Worker$_terminate() {
        var $K = kony.$kwebfw$, $KU = $K.utils;

        $KU.log({api:'worker.terminate', enter:true});
        Worker.prototype.terminate.call(this.oWorker);
        $KU.log({api:'worker.terminate', exit:true});
    };


    var _WorkerThread = function(workerjs, fDefListener, fOnError) {
        var $K = kony.$kwebfw$, $KU = $K.utils, $KG = $K.globals, workerInstance = this,
            isFMSupported = false, workerInitPath = $KG.platform+'/lib/';

        if($K.ecmaEnable) {
            workerInitPath = $KG.platform+'/es5lib/';
        }

        $KU.log({api:'kony.worker.WorkerThread', enter:true});

        if(workerjs === undefined || workerjs === null || workerjs === '') {
            $KU.log('Invalid parameters');
            throw new Error(3001, "WorkerThreadError", "WorkerThread: MissingMandatoryParameter. Failed to construct WorkerThread");
        }
        if(typeof workerjs !== "string") {
            $KU.log('Invalid parameters');
            throw new Error(3002, "WorkerThreadError", "WorkerThread: InvalidParameter. Invalid script name");
        }
        $KU.log('kony.worker.WorkerThread', workerjs, fDefListener, fOnError);

        if(typeof nestedWorker === "undefined") {
            this.oWorker = new Worker(workerInitPath + "konyworkerinit.js");
        } else {
            this.oWorker = new Worker("konyworkerinit.js");
        }


        this.oWorker.postMessage({
            moduleName: workerjs,
            platform: $KG.platform,
            kgAppMode: 'kgAppMode',// TODO
            kgAppID: 'kgAppID', // TODO
            isFMSupported: isFMSupported,
            kgUserAgent: kony.os.userAgent()
        }),

        workerInstance.defaultListener = fDefListener || function(event) {
            kony.print("Data: " + event.data)
        };

        workerInstance.defaultErrorListener = fOnError || function(e) {
            kony.print(e.message + " : in file - " + e.filename + " at location :" + e.lineno + "," + e.colno);
        };

        this.oWorker.addEventListener("error", workerInstance.defaultErrorListener);


        $K.defKonyProp(workerInstance, [
            {keey:'addEventListener', value:_addEventListener},
            {keey:'postMessage', value:_postMessage},
            {keey:'removeEventListener', value:_removeEventListener},
            {keey:'terminate', value:_terminate}
        ]);

        $KU.log({api:'kony.worker.WorkerThread', exit:true});
    };


    $K.defKonyProp(_ns, [
        {keey:'hasWorkerThreadSupport', value:_hasWorkerThreadSupport},
        {keey:'WorkerThread', value:_WorkerThread}
    ]);


    return _ns;
}())});
