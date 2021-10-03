define({
    appInit: function(params) {
        skinsInit();
        if (kony.store.getItem("LOGS_FOR_CHILDAPP") === true) {
            redirectKonyPrintFP();
            subscribeLogListenerFP();
        }
        kony.application.setApplicationBehaviors({
            "enableLoggerFramework": true,
            "disabledFrameworkLogTypes": [kony.logger.logLevel.DEBUG.value]
        });
        kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
        kony.application.setDefaultTextboxPadding(false);
        kony.application.setRespectImageSizeForImageWidgetAlignment(true);
        kony.mvc.registry.add("flxSampleRowTemplate", "flxSampleRowTemplate", "flxSampleRowTemplateController");
        kony.mvc.registry.add("flxSectionHeaderTemplate", "flxSectionHeaderTemplate", "flxSectionHeaderTemplateController");
        kony.mvc.registry.add("Form1", "Form1", "Form1Controller");
        setAppBehaviors();
        if (typeof startBackgroundWorker != "undefined") {
            startBackgroundWorker();
        }
    },
    postAppInitCallBack: function(eventObj) {
        apppostappinitFuncPreview();
    },
    appmenuseq: function() {
        new kony.mvc.Navigation("Form1").navigate();
    }
});