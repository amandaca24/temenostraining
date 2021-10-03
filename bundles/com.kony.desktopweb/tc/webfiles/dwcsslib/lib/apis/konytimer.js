/* global kony */
Object.defineProperty(kony, 'timer', {configurable:false, enumerable:false, writable:false, value:(function() {
    var _ns = {}, _map = {}, $K = kony.$kwebfw$;


    var _cancel = function(id) {
        var $K = kony.$kwebfw$, $KU = $K.utils, timer = null, func = null;

        $KU.log({api:'kony.timer.cancel', enter:true});

        if((($KU.is(id, 'string') && id) || $KU.is(id, 'number'))) {
            id = ('' + id);

            if(_map.hasOwnProperty(id)) {
                timer = _map[id];
                func = (timer.repeat) ? 'clearInterval' : 'clearTimeout';

                window[func](timer.id);
                delete _map[id];
                $KU.log({api:'kony.timer.cancel', exit:true});
            } else {
                $KU.log('warn', 'No timer found with id="'+id+'".');
                $KU.log({api:'kony.timer.cancel', exit:true});
                return null;
            }
        } else {
            $KU.log({api:'kony.timer.cancel', exit:true});
        }
    };


    var _schedule = function(id, callback, interval, repeat) {
        var $K = kony.$kwebfw$, $KU = $K.utils, func = null;

        $KU.log({api:'kony.timer.schedule', enter:true});

        if((($KU.is(id, 'string') && id)
                || $KU.is(id, 'number'))
        && $KU.is(callback, 'function')
        && $KU.is(interval, 'number')) {
            id = ('' + id);

            if(!$KU.is(repeat, 'boolean')) {
                repeat = false;
            }

            _map[id] = {callback:callback, repeat:repeat};
            func = (repeat) ? 'setInterval' : 'setTimeout';

            _map[id].id = window[func](function() {
                _map[id] && _map[id].callback();
                !repeat && _cancel(id);
            }, (interval*1000));
        }

        $KU.log({api:'kony.timer.schedule', exit:true});
    };


    var _setCallBack = function(id, callback) {
        var $K = kony.$kwebfw$, $KU = $K.utils, timer = null;

        $KU.log({api:'kony.timer.setCallBack', enter:true});

        if((($KU.is(id, 'string') && id)
                || $KU.is(id, 'number'))
        && $KU.is(callback, 'function')) {
            timer = _map[(''+id)];

            if(timer) {
                timer.callback = callback;
            } else {
                //LOG:: WARN
            }
        }

        $KU.log({api:'kony.timer.setCallBack', exit:true});
    };


    $K.defKonyProp(_ns, [
        {keey:'cancel', value:_cancel},
        {keey:'schedule', value:_schedule},
        {keey:'setCallBack', value:_setCallBack}
    ]);


    return _ns;
}())});
