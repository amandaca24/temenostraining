define(function() {
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
})