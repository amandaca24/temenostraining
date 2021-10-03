define(function() {
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
        }, controller.args[1], "segList"), extendConfig({
            "bounces": true,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_NONE,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        }, controller.args[2], "segList"));
        AlertsWithoutThumbnails.add(segList);
        return AlertsWithoutThumbnails;
    }
})