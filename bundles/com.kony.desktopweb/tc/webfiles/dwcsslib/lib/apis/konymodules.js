/* global kony */
Object.defineProperty(kony, 'modules', {configurable:false, enumerable:false, writable:false, value:(function() {
    var _ns = {}, $K = kony.$kwebfw$;


    var _loadFunctionalModule = function(modulename) {
        var $K = kony.$kwebfw$, $KU = $K.utils;

        $KU.log({api:'kony.modules.loadFunctionalModule', enter:true});

        //TODO:: loadFunctionalModule API

        $KU.log({api:'kony.modules.loadFunctionalModule', exit:true});
    };


    var _loadFunctionalModuleAsync = function(modulename, successcallback, errorcallback) {
        var $K = kony.$kwebfw$, $KU = $K.utils;

        $KU.log({api:'kony.modules.loadFunctionalModuleAsync', enter:true});

        //TODO:: loadFunctionalModuleAsync API

        $KU.log({api:'kony.modules.loadFunctionalModuleAsync', exit:true});
    };


    $K.defKonyProp(_ns, [
        {keey:'loadFunctionalModule', value:_loadFunctionalModule},
        {keey:'loadFunctionalModuleAsync', value:_loadFunctionalModuleAsync}
    ]);


    return _ns;
}())});
