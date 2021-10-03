_kony.mvc = {
    Form2: function(bconfig, lconfig, pspconfig) {
        var $K = kony.$kwebfw$, $KU = $K.utils, formInstance = null;

        if(!bconfig._konyControllerName) {
            $KU.log('warn', 'This API is applicable only for MVC projects.');
        } else {
            if(arguments.length < 3) {
                formInstance = new kony.ui.Form2(bconfig);
            } else {
                formInstance = new kony.ui.Form2(bconfig, lconfig, pspconfig);
            }

            return formInstance;
        }
    },

    showForm: function(formModel) {
        var $K = kony.$kwebfw$, $KU = $K.utils;

        $KU.log({api:'_kony.mvc.showForm', enter:true});

        if(formModel._konyControllerName) {
            formModel.show({forced:true});
            $KU.log({api:'_kony.mvc.showForm', exit:true});
        } else {
            $KU.log('warn', 'This API is applicable only for MVC projects.');
        }
    },

    destroyForm: function(formModel) {
        var $K = kony.$kwebfw$, $KU = $K.utils;

        $KU.log({api:'_kony.mvc.destroyForm', enter:true});

        if(formModel._konyControllerName && formModel) {
            formModel.destroy({forced:true});
            $KU.log({api:'_kony.mvc.destroyForm', exit:true});
        } else {
            $KU.log('warn', 'This API is applicable only for MVC projects.');
        }
    }
};
