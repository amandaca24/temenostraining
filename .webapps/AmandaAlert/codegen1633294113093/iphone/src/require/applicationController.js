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
        kony.mvc.registry.add("com.konymp.newsdetails", "newsdetails", "newsdetailsController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "newsdetails",
            "name": "com.konymp.newsdetails"
        });
        kony.mvc.registry.add("com.konymp.newsdetailsCopy", "newsdetailsCopy", "newsdetailsCopyController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "newsdetailsCopy",
            "name": "com.konymp.newsdetailsCopy"
        });
        kony.mvc.registry.add("ListView.AlertsWithoutThumbnails", "AlertsWithoutThumbnails", "AlertsWithoutThumbnailsController");
        kony.application.registerMaster({
            "namespace": "ListView",
            "classname": "AlertsWithoutThumbnails",
            "name": "ListView.AlertsWithoutThumbnails"
        });
        kony.mvc.registry.add("CopyFlexContainer", "CopyFlexContainer", "CopyFlexContainerController");
        kony.mvc.registry.add("CopyCopyflxRow", "CopyCopyflxRow", "CopyCopyflxRowController");
        kony.mvc.registry.add("flxSampleRowTemplate", "flxSampleRowTemplate", "flxSampleRowTemplateController");
        kony.mvc.registry.add("flxSectionHeaderTemplate", "flxSectionHeaderTemplate", "flxSectionHeaderTemplateController");
        kony.mvc.registry.add("FlexContainer0f6ec0fa04dea44", "FlexContainer0f6ec0fa04dea44", "FlexContainer0f6ec0fa04dea44Controller");
        kony.mvc.registry.add("Form1", "Form1", "Form1Controller");
        kony.mvc.registry.add("Form2", "Form2", "Form2Controller");
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