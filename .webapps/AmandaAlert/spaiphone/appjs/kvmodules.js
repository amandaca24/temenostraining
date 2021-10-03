define('applicationController',{
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("ListView.AlertsWithoutThumbnails", "AlertsWithoutThumbnails", "AlertsWithoutThumbnailsController");
        kony.application.registerMaster({
            "namespace": "ListView",
            "classname": "AlertsWithoutThumbnails",
            "name": "ListView.AlertsWithoutThumbnails"
        });
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
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("Form1").navigate();
    }
});
define("ListView/AlertsWithoutThumbnails/userAlertsWithoutThumbnailsController", [],function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {}
    };
});
define("ListView/AlertsWithoutThumbnails/AlertsWithoutThumbnailsControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
    /** preShow defined for AlertsWithoutThumbnails **/
    AS_FlexContainer_ed5dc822662d41b28863f4b0bfae393e: function AS_FlexContainer_ed5dc822662d41b28863f4b0bfae393e(eventobject) {
        var self = this;

        function INVOKE_SERVICE_e52808cd971c4e7f8875b1ee2c0822f5_Callback(status, GetNews) {}
        if (GetNews_inputparam == undefined) {
            var GetNews_inputparam = {};
        }
        GetNews_inputparam["serviceID"] = "News$GetNews";
        var GetNews_httpheaders = {};
        GetNews_inputparam["httpheaders"] = GetNews_httpheaders;
        var GetNews_httpconfigs = {};
        GetNews_inputparam["httpconfig"] = GetNews_httpconfigs;
        News$GetNews = mfintegrationsecureinvokerasync(GetNews_inputparam, "News", "GetNews", INVOKE_SERVICE_e52808cd971c4e7f8875b1ee2c0822f5_Callback);
    }
});
define("ListView/AlertsWithoutThumbnails/AlertsWithoutThumbnailsController", ["ListView/AlertsWithoutThumbnails/userAlertsWithoutThumbnailsController", "ListView/AlertsWithoutThumbnails/AlertsWithoutThumbnailsControllerActions"], function() {
    var controller = require("ListView/AlertsWithoutThumbnails/userAlertsWithoutThumbnailsController");
    var actions = require("ListView/AlertsWithoutThumbnails/AlertsWithoutThumbnailsControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('ListView/AlertsWithoutThumbnails/AlertsWithoutThumbnails',[],function() {
    return function(controller) {
        var AlertsWithoutThumbnails = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "AlertsWithoutThumbnails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_ed5dc822662d41b28863f4b0bfae393e(eventobject);
            },
            "skin": "CopyCopysknFlxfff",
            "top": "0dp",
            "width": "100%",
            "appName": "AmandaAlert"
        }, controller.args[0], "AlertsWithoutThumbnails"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "AlertsWithoutThumbnails"), extendConfig({}, controller.args[2], "AlertsWithoutThumbnails"));
        AlertsWithoutThumbnails.setDefaultUnit(kony.flex.DP);
        var segList = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "imgArrow": "chevron.png",
                "lblDescription": "This article is floated online with an intent for an example.",
                "lblHeading": "System Notification",
                "lblStrip": "L",
                "lblTime": "2 days ago"
            }, {
                "imgArrow": "chevron.png",
                "lblDescription": "Here, I focus on a range of items and features that we use in life.",
                "lblHeading": "System Notification",
                "lblStrip": "",
                "lblTime": "Yesterday"
            }, {
                "imgArrow": "chevron.png",
                "lblDescription": "Having used discount toner cartridges for twenty years, there are",
                "lblHeading": "System Notification",
                "lblStrip": "",
                "lblTime": "Yesterday"
            }, {
                "imgArrow": "chevron.png",
                "lblDescription": "This article is floated online with an intent for an example.",
                "lblHeading": "System Notification",
                "lblStrip": "",
                "lblTime": "Yesterday"
            }, {
                "imgArrow": "chevron.png",
                "lblDescription": "Here, I focus on a range of items and features that we use in life.",
                "lblHeading": "System Notification",
                "lblStrip": "L",
                "lblTime": "Yesterday"
            }, {
                "imgArrow": "chevron.png",
                "lblDescription": "some description to show the property that might reflect into this widget.",
                "lblHeading": "System Notification",
                "lblStrip": "",
                "lblTime": "2 days ago"
            }],
            "groupCells": false,
            "height": "100%",
            "id": "segList",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "CopyCopyseg2",
            "rowSkin": "CopyCopyseg3",
            "rowTemplate": "CopyCopyflxRow",
            "scrollingEvents": {},
            "sectionHeaderSkin": "CopyCopysliPhoneSegmentHeader1",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "c8c7cc00",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "CopyCopyflxRow": "CopyCopyflxRow",
                "imgArrow": "imgArrow",
                "lblDescription": "lblDescription",
                "lblHeading": "lblHeading",
                "lblStrip": "lblStrip",
                "lblTime": "lblTime"
            },
            "width": "100%",
            "zIndex": 1,
            "appName": "AmandaAlert"
        }, controller.args[0], "segList"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segList"), extendConfig({}, controller.args[2], "segList"));
        AlertsWithoutThumbnails.add(segList);
        return AlertsWithoutThumbnails;
    }
});
define("com/konymp/newsdetails/usernewsdetailsController", [],function() {
    return {};
});
define("com/konymp/newsdetails/newsdetailsControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_b6286f3fd4c34102b00415e2fd683882: function AS_FlexContainer_b6286f3fd4c34102b00415e2fd683882(eventobject) {
        var self = this;
        this.view.segImage.pageSkin = "sknNewsDetails";
    }
});
define("com/konymp/newsdetails/newsdetailsController", ["com/konymp/newsdetails/usernewsdetailsController", "com/konymp/newsdetails/newsdetailsControllerActions"], function() {
    var controller = require("com/konymp/newsdetails/usernewsdetailsController");
    var actions = require("com/konymp/newsdetails/newsdetailsControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/konymp/newsdetails/newsdetails',[],function() {
    return function(controller) {
        var newsdetails = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "newsdetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "appName": "AmandaAlert"
        }, controller.args[0], "newsdetails"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "newsdetails"), extendConfig({}, controller.args[2], "newsdetails"));
        newsdetails.setDefaultUnit(kony.flex.DP);
        var flxNewsDetails = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "100%",
            "id": "flxNewsDetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknNewsDetails1",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "AmandaAlert"
        }, controller.args[0], "flxNewsDetails"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxNewsDetails"), extendConfig({}, controller.args[2], "flxNewsDetails"));
        flxNewsDetails.setDefaultUnit(kony.flex.DP);
        var flxNewsImage = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "300dp",
            "id": "flxNewsImage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "AmandaAlert"
        }, controller.args[0], "flxNewsImage"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxNewsImage"), extendConfig({}, controller.args[2], "flxNewsImage"));
        flxNewsImage.setDefaultUnit(kony.flex.DP);
        var segImage = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "Image0j5421d6ccf6e46": "newsdetailimage1_2.png"
            }, {
                "Image0j5421d6ccf6e46": "newsdetailimage2_2.png"
            }, {
                "Image0j5421d6ccf6e46": "newsdetailimage3_2.png"
            }],
            "groupCells": false,
            "height": "100%",
            "id": "segImage",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "FlexContainer0f6ec0fa04dea44",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorRequired": false,
            "separatorThickness": 0,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
            "widgetDataMap": {
                "FlexContainer0f6ec0fa04dea44": "FlexContainer0f6ec0fa04dea44",
                "Image0j5421d6ccf6e46": "Image0j5421d6ccf6e46"
            },
            "width": "100%",
            "zIndex": 1,
            "appName": "AmandaAlert"
        }, controller.args[0], "segImage"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segImage"), extendConfig({}, controller.args[2], "segImage"));
        flxNewsImage.add(segImage);
        var flxHeading = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "65dp",
            "id": "flxHeading",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "300dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "AmandaAlert"
        }, controller.args[0], "flxHeading"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHeading"), extendConfig({}, controller.args[2], "flxHeading"));
        flxHeading.setDefaultUnit(kony.flex.DP);
        var lblNewsheading = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblNewsheading",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblNewsTitle",
            "text": "Tour bus crashes in Peru's capital, killing at least 9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblNewsheading"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 3, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNewsheading"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblNewsheading"));
        flxHeading.add(lblNewsheading);
        var flxSubHeading = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxSubHeading",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "365dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "AmandaAlert"
        }, controller.args[0], "flxSubHeading"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSubHeading"), extendConfig({}, controller.args[2], "flxSubHeading"));
        flxSubHeading.setDefaultUnit(kony.flex.DP);
        var flxDateTime = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50%",
            "id": "flxDateTime",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "50%",
            "width": "100%",
            "zIndex": 1,
            "appName": "AmandaAlert"
        }, controller.args[0], "flxDateTime"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxDateTime"), extendConfig({}, controller.args[2], "flxDateTime"));
        flxDateTime.setDefaultUnit(kony.flex.DP);
        var lblDateTime = new kony.ui.Label(extendConfig({
            "id": "lblDateTime",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknDateTime",
            "text": "Jul 10, 2017 10:04 AM",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblDateTime"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDateTime"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblDateTime"));
        flxDateTime.add(lblDateTime);
        var flxReporterDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50%",
            "id": "flxReporterDetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "AmandaAlert"
        }, controller.args[0], "flxReporterDetails"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxReporterDetails"), extendConfig({}, controller.args[2], "flxReporterDetails"));
        flxReporterDetails.setDefaultUnit(kony.flex.DP);
        var CopyLabel0e12d8ff34a9942 = new kony.ui.Label(extendConfig({
            "id": "CopyLabel0e12d8ff34a9942",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblNewsBy",
            "text": "By",
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "CopyLabel0e12d8ff34a9942"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0e12d8ff34a9942"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "CopyLabel0e12d8ff34a9942"));
        var lblReporterName = new kony.ui.Label(extendConfig({
            "id": "lblReporterName",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknNewsAuthor",
            "text": "Caitlin Schiller",
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblReporterName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReporterName"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblReporterName"));
        flxReporterDetails.add(CopyLabel0e12d8ff34a9942, lblReporterName);
        flxSubHeading.add(flxDateTime, flxReporterDetails);
        var flxNews = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxNews",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "425dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "AmandaAlert"
        }, controller.args[0], "flxNews"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxNews"), extendConfig({}, controller.args[2], "flxNews"));
        flxNews.setDefaultUnit(kony.flex.DP);
        var Label0e4092c7ef0bc43 = new kony.ui.Label(extendConfig({
            "id": "Label0e4092c7ef0bc43",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknNewsText",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            "top": "5dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "Label0e4092c7ef0bc43"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 3, 0],
            "paddingInPixel": false
        }, controller.args[1], "Label0e4092c7ef0bc43"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "Label0e4092c7ef0bc43"));
        flxNews.add(Label0e4092c7ef0bc43);
        flxNewsDetails.add(flxNewsImage, flxHeading, flxSubHeading, flxNews);
        newsdetails.add(flxNewsDetails);
        return newsdetails;
    }
});
define("com/konymp/newsdetailsCopy/usernewsdetailsCopyController", [],function() {
    return {};
});
define("com/konymp/newsdetailsCopy/newsdetailsCopyControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_b6286f3fd4c34102b00415e2fd683882: function AS_FlexContainer_b6286f3fd4c34102b00415e2fd683882(eventobject) {
        var self = this;
        this.view.segImage.pageSkin = "sknNewsDetails";
    }
});
define("com/konymp/newsdetailsCopy/newsdetailsCopyController", ["com/konymp/newsdetailsCopy/usernewsdetailsCopyController", "com/konymp/newsdetailsCopy/newsdetailsCopyControllerActions"], function() {
    var controller = require("com/konymp/newsdetailsCopy/usernewsdetailsCopyController");
    var actions = require("com/konymp/newsdetailsCopy/newsdetailsCopyControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/konymp/newsdetailsCopy/newsdetailsCopy',[],function() {
    return function(controller) {
        var newsdetailsCopy = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "newsdetailsCopy",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "appName": "AmandaAlert"
        }, controller.args[0], "newsdetailsCopy"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "newsdetailsCopy"), extendConfig({}, controller.args[2], "newsdetailsCopy"));
        newsdetailsCopy.setDefaultUnit(kony.flex.DP);
        var flxNewsDetails = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "100%",
            "id": "flxNewsDetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknNewsDetails",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "AmandaAlert"
        }, controller.args[0], "flxNewsDetails"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxNewsDetails"), extendConfig({}, controller.args[2], "flxNewsDetails"));
        flxNewsDetails.setDefaultUnit(kony.flex.DP);
        var flxNewsImage = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "300dp",
            "id": "flxNewsImage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "AmandaAlert"
        }, controller.args[0], "flxNewsImage"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxNewsImage"), extendConfig({}, controller.args[2], "flxNewsImage"));
        flxNewsImage.setDefaultUnit(kony.flex.DP);
        var segImage = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "Image0j5421d6ccf6e46": "newsdetailimage1_1.png"
            }, {
                "Image0j5421d6ccf6e46": "newsdetailimage2_1.png"
            }, {
                "Image0j5421d6ccf6e46": "newsdetailimage3_1.png"
            }],
            "groupCells": false,
            "height": "100%",
            "id": "segImage",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "CopyFlexContainer",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorRequired": false,
            "separatorThickness": 0,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
            "widgetDataMap": {
                "CopyFlexContainer": "CopyFlexContainer",
                "Image0j5421d6ccf6e46": "Image0j5421d6ccf6e46"
            },
            "width": "100%",
            "zIndex": 1,
            "appName": "AmandaAlert"
        }, controller.args[0], "segImage"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segImage"), extendConfig({}, controller.args[2], "segImage"));
        flxNewsImage.add(segImage);
        var flxHeading = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "65dp",
            "id": "flxHeading",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "300dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "AmandaAlert"
        }, controller.args[0], "flxHeading"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHeading"), extendConfig({}, controller.args[2], "flxHeading"));
        flxHeading.setDefaultUnit(kony.flex.DP);
        var lblNewsheading = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblNewsheading",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopysknLblNewsTitle",
            "text": "Tour bus crashes in Peru's capital, killing at least 9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblNewsheading"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 3, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNewsheading"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblNewsheading"));
        flxHeading.add(lblNewsheading);
        var flxSubHeading = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxSubHeading",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "365dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "AmandaAlert"
        }, controller.args[0], "flxSubHeading"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSubHeading"), extendConfig({}, controller.args[2], "flxSubHeading"));
        flxSubHeading.setDefaultUnit(kony.flex.DP);
        var flxDateTime = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50%",
            "id": "flxDateTime",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "50%",
            "width": "100%",
            "zIndex": 1,
            "appName": "AmandaAlert"
        }, controller.args[0], "flxDateTime"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxDateTime"), extendConfig({}, controller.args[2], "flxDateTime"));
        flxDateTime.setDefaultUnit(kony.flex.DP);
        var lblDateTime = new kony.ui.Label(extendConfig({
            "id": "lblDateTime",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopysknDateTime",
            "text": "Jul 10, 2017 10:04 AM",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblDateTime"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDateTime"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblDateTime"));
        flxDateTime.add(lblDateTime);
        var flxReporterDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50%",
            "id": "flxReporterDetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "AmandaAlert"
        }, controller.args[0], "flxReporterDetails"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxReporterDetails"), extendConfig({}, controller.args[2], "flxReporterDetails"));
        flxReporterDetails.setDefaultUnit(kony.flex.DP);
        var CopyLabel0e12d8ff34a9942 = new kony.ui.Label(extendConfig({
            "id": "CopyLabel0e12d8ff34a9942",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopysknLblNewsBy",
            "text": "By",
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "CopyLabel0e12d8ff34a9942"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0e12d8ff34a9942"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "CopyLabel0e12d8ff34a9942"));
        var lblReporterName = new kony.ui.Label(extendConfig({
            "id": "lblReporterName",
            "isVisible": true,
            "left": "30dp",
            "skin": "CopysknNewsAuthor",
            "text": "Caitlin Schiller",
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblReporterName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReporterName"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "lblReporterName"));
        flxReporterDetails.add(CopyLabel0e12d8ff34a9942, lblReporterName);
        flxSubHeading.add(flxDateTime, flxReporterDetails);
        var flxNews = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxNews",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "425dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "AmandaAlert"
        }, controller.args[0], "flxNews"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxNews"), extendConfig({}, controller.args[2], "flxNews"));
        flxNews.setDefaultUnit(kony.flex.DP);
        var Label0e4092c7ef0bc43 = new kony.ui.Label(extendConfig({
            "id": "Label0e4092c7ef0bc43",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopysknNewsText",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            "top": "5dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "Label0e4092c7ef0bc43"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 3, 0],
            "paddingInPixel": false
        }, controller.args[1], "Label0e4092c7ef0bc43"), extendConfig({
            "renderAsAnchor": false,
            "textCopyable": false
        }, controller.args[2], "Label0e4092c7ef0bc43"));
        flxNews.add(Label0e4092c7ef0bc43);
        flxNewsDetails.add(flxNewsImage, flxHeading, flxSubHeading, flxNews);
        newsdetailsCopy.add(flxNewsDetails);
        return newsdetailsCopy;
    }
});
define("CopyFlexContainer", [],function() {
    return function(controller) {
        var CopyFlexContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "CopyFlexContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "appName": "AmandaAlert"
        }, {
            "paddingInPixel": false
        }, {});
        CopyFlexContainer.setDefaultUnit(kony.flex.DP);
        var Image0j5421d6ccf6e46 = new kony.ui.Image2({
            "height": "100%",
            "id": "Image0j5421d6ccf6e46",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        CopyFlexContainer.add(Image0j5421d6ccf6e46);
        return CopyFlexContainer;
    }
});
define("CopyCopyflxRow", [],function() {
    return function(controller) {
        var CopyCopyflxRow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "11%",
            "id": "CopyCopyflxRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "CopyCopysknFlxfff",
            "appName": "AmandaAlert"
        }, {
            "paddingInPixel": false
        }, {});
        CopyCopyflxRow.setDefaultUnit(kony.flex.DP);
        var lblHeading = new kony.ui.Label({
            "height": "28%",
            "id": "lblHeading",
            "isVisible": true,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "CopysknLblHeading",
            "text": "System Notification",
            "top": "8%",
            "width": "45%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblDescription = new kony.ui.Label({
            "bottom": "10%",
            "id": "lblDescription",
            "isVisible": true,
            "left": "4%",
            "maxNumberOfLines": 3,
            "maxWidth": "70%",
            "skin": "CopyCopyslLabel",
            "text": "some description to show the property that might reflect into this widget.",
            "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
            "top": "42%",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblTime = new kony.ui.Label({
            "id": "lblTime",
            "isVisible": true,
            "right": "9%",
            "skin": "CopyCopyslLabel1",
            "text": "2 days ago",
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var imgArrow = new kony.ui.Image2({
            "bottom": "25%",
            "centerY": "50%",
            "height": "34.26%",
            "id": "imgArrow",
            "isVisible": true,
            "right": "3.50%",
            "skin": "CopyCopyslImage1",
            "src": "chevron.png",
            "width": "5%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblStrip = new kony.ui.Label({
            "height": "100%",
            "id": "lblStrip",
            "isVisible": true,
            "left": "0dp",
            "maxWidth": "1%",
            "skin": "CopykonympALsknLblStrip",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        CopyCopyflxRow.add(lblHeading, lblDescription, lblTime, imgArrow, lblStrip);
        return CopyCopyflxRow;
    }
});
define("flxSampleRowTemplate", [],function() {
    return function(controller) {
        var flxSampleRowTemplate = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxSampleRowTemplate",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknSampleRowTemplate",
            "width": "100%",
            "appName": "AmandaAlert"
        }, {
            "paddingInPixel": false
        }, {});
        flxSampleRowTemplate.setDefaultUnit(kony.flex.DP);
        var lblHeading = new kony.ui.Label({
            "id": "lblHeading",
            "isVisible": true,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "sknLblRowHeading",
            "text": "Heading",
            "textStyle": {},
            "top": "8.00%",
            "width": "45%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblDescription = new kony.ui.Label({
            "bottom": "10%",
            "id": "lblDescription",
            "isVisible": true,
            "left": "4%",
            "maxNumberOfLines": 3,
            "maxWidth": "70%",
            "skin": "sknLblDescription",
            "text": "Sub-Heading",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
            "top": "42%",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblTime = new kony.ui.Label({
            "id": "lblTime",
            "isVisible": true,
            "right": "9%",
            "skin": "sknLblTimeStamp",
            "text": "Timestamp",
            "textStyle": {},
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblStrip = new kony.ui.Label({
            "height": "100%",
            "id": "lblStrip",
            "isVisible": true,
            "left": "0dp",
            "maxWidth": "1%",
            "skin": "sknLblStrip",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxSampleRowTemplate.add(lblHeading, lblDescription, lblTime, lblStrip);
        return flxSampleRowTemplate;
    }
});
define("flxSectionHeaderTemplate", [],function() {
    return function(controller) {
        var flxSectionHeaderTemplate = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxSectionHeaderTemplate",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknSampleSectionHeaderTemplate",
            "width": "100%",
            "appName": "AmandaAlert"
        }, {
            "paddingInPixel": false
        }, {});
        flxSectionHeaderTemplate.setDefaultUnit(kony.flex.DP);
        var lblHeading = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblHeading",
            "isVisible": true,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "sknSectionHeaderLabelSkin",
            "text": "Heading",
            "textStyle": {},
            "width": "75%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxSectionHeaderTemplate.add(lblHeading);
        return flxSectionHeaderTemplate;
    }
});
define("FlexContainer0f6ec0fa04dea44", [],function() {
    return function(controller) {
        var FlexContainer0f6ec0fa04dea44 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "FlexContainer0f6ec0fa04dea44",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "appName": "AmandaAlert"
        }, {
            "paddingInPixel": false
        }, {});
        FlexContainer0f6ec0fa04dea44.setDefaultUnit(kony.flex.DP);
        var Image0j5421d6ccf6e46 = new kony.ui.Image2({
            "height": "100%",
            "id": "Image0j5421d6ccf6e46",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlexContainer0f6ec0fa04dea44.add(Image0j5421d6ccf6e46);
        return FlexContainer0f6ec0fa04dea44;
    }
});
define("userCopyFlexContainerController", {
    //Type your controller code here 
});
define("CopyFlexContainerControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("CopyFlexContainerController", ["userCopyFlexContainerController", "CopyFlexContainerControllerActions"], function() {
    var controller = require("userCopyFlexContainerController");
    var controllerActions = ["CopyFlexContainerControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});

define("userCopyCopyflxRowController", {
    //Type your controller code here 
});
define("CopyCopyflxRowControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("CopyCopyflxRowController", ["userCopyCopyflxRowController", "CopyCopyflxRowControllerActions"], function() {
    var controller = require("userCopyCopyflxRowController");
    var controllerActions = ["CopyCopyflxRowControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});

define("userflxSampleRowTemplateController", {
    //Type your controller code here 
});
define("flxSampleRowTemplateControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSampleRowTemplateController", ["userflxSampleRowTemplateController", "flxSampleRowTemplateControllerActions"], function() {
    var controller = require("userflxSampleRowTemplateController");
    var controllerActions = ["flxSampleRowTemplateControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});

define("userflxSectionHeaderTemplateController", {
    //Type your controller code here 
});
define("flxSectionHeaderTemplateControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSectionHeaderTemplateController", ["userflxSectionHeaderTemplateController", "flxSectionHeaderTemplateControllerActions"], function() {
    var controller = require("userflxSectionHeaderTemplateController");
    var controllerActions = ["flxSectionHeaderTemplateControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});

define("userFlexContainer0f6ec0fa04dea44Controller", {
    //Type your controller code here 
});
define("FlexContainer0f6ec0fa04dea44ControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("FlexContainer0f6ec0fa04dea44Controller", ["userFlexContainer0f6ec0fa04dea44Controller", "FlexContainer0f6ec0fa04dea44ControllerActions"], function() {
    var controller = require("userFlexContainer0f6ec0fa04dea44Controller");
    var controllerActions = ["FlexContainer0f6ec0fa04dea44ControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});

define("navigation/NavigationModel", { 
    "Application": {},
    "Forms" : {},
    "UIModules" : {}
});
define("navigation/NavigationController", {
    //Add your navigation controller code here.
});

require(['applicationController','ListView/AlertsWithoutThumbnails/AlertsWithoutThumbnailsController','ListView/AlertsWithoutThumbnails/AlertsWithoutThumbnails','com/konymp/newsdetails/newsdetailsController','com/konymp/newsdetails/newsdetails','com/konymp/newsdetailsCopy/newsdetailsCopyController','com/konymp/newsdetailsCopy/newsdetailsCopy','CopyFlexContainer','CopyCopyflxRow','flxSampleRowTemplate','flxSectionHeaderTemplate','FlexContainer0f6ec0fa04dea44','CopyFlexContainerController','CopyCopyflxRowController','flxSampleRowTemplateController','flxSectionHeaderTemplateController','FlexContainer0f6ec0fa04dea44Controller','navigation/NavigationModel','navigation/NavigationController'], function(){});
define("sparequirefileslist", function(){});

