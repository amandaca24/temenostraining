Object.defineProperty(kony.$kwebfw$, 'hotreload', {configurable:false, enumerable:false, writable:false, value:(function() {
    var _ns = {}, formList = [], moduleList = [],
        $K = kony.$kwebfw$, isDefaultConnection = false,
        appGroupMap = {};

    var _flushModules = function $KH_flushModules() {
        var i;
        for(i = 0; i < moduleList.length; i++) {
            require.undef(moduleList[i]);
        }
    }

    var _reloadFormDefinition = function $KH_reloadFormDefinition() {
        var $K = kony.$kwebfw$, $KW = $K.widget, $KA = $K.app,
            tmpControllerName, userController, formInfo, registryInfo,
            cf, formID, appName, index;

        kony.print('HotReload: Reloading the current form');
        cf = $KW.model($KA.currentFormUID);
        formID = cf.id;
        appName = cf.appName;
        index = formList.indexOf(formID);
        _flushModules();

        if(index != -1) {
            formInfo = _kony.mvc.resetBookKeepersAndGetFormInfo(formID, appName);
            registryInfo = formInfo.registryInfo;

            if(registryInfo && registryInfo.controllerName) {
                tmpControllerName = registryInfo.controllerName;
                userController = tmpControllerName.replace(formID+'Controller', 'user'+formID+'Controller');
                require.undef(tmpControllerName);
                require.undef(tmpControllerName+"Actions");
                require.undef(registryInfo.name);
                require.undef(userController);
            }

            cf.flush();

            require(moduleList, function() {
                var nav = new kony.mvc.Navigation(formInfo.navigationObject);
                nav.navigate();
                kony.print('HotReload: Current form reload is done');
            });
            formList.splice(index, 1);
        } else {
            require(moduleList, function() {
                kony.print('HotReload: modules are reloaded');
            });
        }
    }

    var _initializeHotReloadConnection = function $KH_initializeHotReloadConnection() {
        var connection = appConfig.hotReloadURL,
            localConnection = 'ws://127.0.0.1:9099';

        window.WebSocket = window.WebSocket || window.MozWebSocket;
        connection = new WebSocket(connection);

        connection.onopen = function() {
            kony.print('HotReload: Socket open');
        };

        connection.onerror = function (error) {
            kony.print('HotReload: Socket error');
            if(this.close) {
                this.close();
            }
        };

        connection.onmessage = function (message) {
            kony.print('HotReload: Socket message recieved');
            var data = JSON.parse(message.data), frmName = null,
                payLoad, modifiedForms, i, requireModules, globalModules;

            if(data.eventName == 'HOT_RELOAD') {
                payLoad = data.message;
                modifiedForms = payLoad.modifiedForms;
                for(i = 0; i < modifiedForms.length; i++) {
                    frmName = modifiedForms[i]['name'];
                    formList.push(frmName);
                    appGroupMap[frmName] = modifiedForms[i].formPath;
                }

                requireModules = payLoad.modifiedRequireModules;
                for(i = 0; i < requireModules.length; i++) {
                    moduleList.push(requireModules[i]['name']);
                }

                globalModules = payLoad.modifiedGlobalModules;
                for(i = 0; i < globalModules.length; i++) {
                    moduleList.push(globalModules[i]['name']);
                }

                _reloadFormDefinition();
                moduleList = []; //resetting to empty after loading modules.
            }
        };

        connection.onclose = function(error) {
            if(isDefaultConnection) {
                localConnection = null;
                alert('HotReload connection is lost. Please check your network connection.')
            }
            if(error.code == 1006 && isDefaultConnection == false) {
                isDefaultConnection = true;
                localConnection = new WebSocket(localConnection);
                localConnection.onopen = connection.onopen;
                localConnection.onerror = connection.onerror;
                localConnection.onmessage = connection.onmessage;
                localConnection.onclose = connection.onclose;
                connection = null;
                kony.print('HotReload: connection created on local ip');
            }

            kony.print('HotReload: Socket close');
        };
    };

    var _extendFormApis = function $KH_extendFormApis() {

        kony.ui.Form2.prototype.flush = function() {
            this.removeAll();
        };

    };

    $K.defKonyProp(_ns, [
        {keey:'initializeHotReloadConnection', value:_initializeHotReloadConnection},
        {keey:'extendFormApis', value:_extendFormApis}
    ]);

    return _ns;
}())});
