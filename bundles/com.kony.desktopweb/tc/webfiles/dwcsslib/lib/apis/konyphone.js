/* global kony */
/* global FileError */
Object.defineProperty(kony, 'phone', {configurable:false, enumerable:false, writable:false, value:(function() {
    var _ns = {}, $K = kony.$kwebfw$, _form = null, _input = null, _scrap = null;


    var _dial = function(phoneno) {
        var $K = kony.$kwebfw$, $KU = $K.utils,
            version = $KU.browser('osversion'),
            device = $KU.browser('device'), href = '';

        $KU.log({api:'kony.phone.dial', enter:true});

        if(device === 'iphone' && version >= 5 && version < 8) {
            href = ('tel://' + phoneno);
        } else {
            href = ('tel:' + phoneno);
        }

        window.location.href = href;

        $KU.log({api:'kony.phone.dial', exit:true});
    };


    var _openMediaGallery = function(onselectioncallback, querycontext, widgetref) {
        var $K = kony.$kwebfw$, $KU = $K.utils, $KD = $K.dom, $KG = $K.globals;

        $KU.log({api:'kony.phone.openMediaGallery', enter:true});

        if(window.File && window.FileReader && window.FileList) {
            if(!_scrap) _scrap = $KG.appScrap;

            if(!_form && !_input) {
                _form = $KD.create('form');
                _input = $KD.create('input', {type:'file'});

                $KD.on(_input, 'change', 'change', function(e) {
                    var $K = kony.$kwebfw$, $KU = $K.utils;

                    if($KU.is(onselectioncallback, 'function')) {
                        var reader = new FileReader(), info = null,
                            file = this.files[0], mimetype = file.type;

                        reader.readAsArrayBuffer(file);

                        reader.onload = function(evt) {
                            var chars = new Uint8Array(evt.target.result),
                                CHUNK_SIZE = 0x8000, index = 0, result = '', slice;

                            while(index < chars.length) {
                                slice = chars.subarray(index, Math.min(index + CHUNK_SIZE, chars.length));
                                result += String.fromCharCode.apply(null, slice);
                                index += CHUNK_SIZE;
                            }

                            info = new kony.utils.konyRawBytes(result, 'utf8');

                            onselectioncallback(info, kony.application.PERMISSION_GRANTED, mimetype);
                        };

                        reader.onerror = function(evt) {
                            if(evt.target.error instanceof FileError) { // Read error code in case of error is of FileError type
                                switch(evt.target.error.code) {
                                case FileError.NOT_FOUND_ERR:
                                    kony.print('openMediaGallery error:: The file resource couldn\'t be found at the time the read was processed.');
                                    break;
                                case FileError.NOT_READABLE_ERR:
                                    kony.print('openMediaGallery error:: 2101, The resource couldn\'t be read. Insufficient Permissions.');
                                    break;
                                case FileError.ENCODING_ERR:
                                    kony.print('openMediaGallery error:: The resource couldn\'t be encoded.');
                                    break;
                                case FileError.SECURITY_ERR:
                                default:
                                    kony.print('openMediaGallery error:: The file resource is unsafe/changed/other unspecified security error.');
                                }
                            } else { //Read error name & message in case error is of DOMError type
                                kony.print('openMediaGallery error:: ' + evt.target.error.name + ', ' + evt.target.error.message);
                            }
                        };
                    }
                });

                $KD.add(_form, _input);
                $KD.add(_scrap, _form);
            }

            if(querycontext && querycontext.mimetype) { //add mime type
                $KD.setAttr(_input, 'accept', querycontext.mimetype);
            } else {
                $KD.removeAttr(_input, 'accept');
            }

            _input.click();

            $KU.log({api:'kony.phone.openMediaGallery', exit:true});
        } else {
            kony.print('openMediaGallery error:: 2103, Cannot open media gallery. Not supported.');
        }
    };


    $K.defKonyProp(_ns, [
        {keey:'dial', value:_dial},
        {keey:'openMediaGallery', value:_openMediaGallery}
    ]);


    return _ns;
}())});
