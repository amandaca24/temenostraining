/* global kony */
Object.defineProperty(kony, 'location', {configurable:false, enumerable:false, writable:false, value:(function() {
    var _ns = {}, $K = kony.$kwebfw$;

    var _clearWatch = function(watchId) {
        var $K = kony.$kwebfw$, $KU = $K.utils;

        $KU.log({api:'kony.location.clearWatch', enter:true});

        if($KU.browser('supports', 'geolocation')) {
            $KU.log({api:'kony.location.clearWatch', exit:true});
            navigator.geolocation.clearWatch(watchId);
        }
    };


    var _getCurrentPosition = function(successCallback, errorCallback, positionOptions) {
        var $K = kony.$kwebfw$, $KU = $K.utils;

        $KU.log({api:'kony.location.getCurrentPosition', enter:true});

        if($KU.browser('supports', 'geolocation')) {
            $KU.log({api:'kony.location.getCurrentPosition', exit:true});
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback, positionOptions);
        }
    };

    var _watchPosition = function(successCallback, errorCallback, positionOptions) {
        var $K = kony.$kwebfw$, $KU = $K.utils, watchId = null;

        $KU.log({api:'kony.location.watchPosition', enter:true});

        if($KU.browser('supports', 'geolocation')) {
            $KU.log({api:'kony.location.watchPosition', exit:true});
            watchId = navigator.geolocation.watchPosition(successCallback, errorCallback, positionOptions);
        }

        return watchId;
    };


    $K.defKonyProp(_ns, [
        {keey:'PERMISSION_DENIED', value:1},
        {keey:'POSITION_UNAVAILABLE', value:2},
        {keey:'TIMEOUT', value:3},
        {keey:'clearWatch', value:_clearWatch},
        {keey:'getCurrentPosition', value:_getCurrentPosition},
        {keey:'watchPosition', value:_watchPosition}
    ]);


    return _ns;
}())});
