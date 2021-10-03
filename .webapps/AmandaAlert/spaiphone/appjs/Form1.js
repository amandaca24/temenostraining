define("Form1", function() {
    return function(controller) {
        function addWidgetsForm1() {
            this.setDefaultUnit(kony.flex.DP);
            var PaddedButtonRound = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "60dp",
                "id": "PaddedButtonRound",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_f49542da31d24366b4ccf8e5769e9a95,
                "skin": "slFbox0i459d967392543",
                "top": "415dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "AmandaAlert"
            }, {
                "paddingInPixel": false
            }, {});
            PaddedButtonRound.setDefaultUnit(kony.flex.DP);
            var ButtonRound = new kony.ui.Button({
                "bottom": "5dp",
                "focusSkin": "ButtonSkinActive",
                "id": "ButtonRound",
                "isVisible": true,
                "left": "10dp",
                "onTouchStart": controller.AS_Button_c2d76ba23e7c4e91af4f82b9e1dfbf3c,
                "right": "10dp",
                "skin": "ButtonSkinNormal",
                "text": "Click to Alert",
                "top": "5dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            PaddedButtonRound.add(ButtonRound);
            var headerContainer03 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "44dp",
                "id": "headerContainer03",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "headerContainerSknMaster",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "AmandaAlert"
            }, {
                "paddingInPixel": false
            }, {});
            headerContainer03.setDefaultUnit(kony.flex.DP);
            var headerTitleLabel = new kony.ui.Label({
                "height": "100%",
                "id": "headerTitleLabel",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "headerTitleSkinMaster",
                "text": "Title",
                "top": "0dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var headerTitleLogo = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "29dp",
                "id": "headerTitleLogo",
                "isVisible": true,
                "left": "218dp",
                "skin": "slImage0db47405b3ef240",
                "src": "kony_logowhitehoriz.png",
                "top": "0dp",
                "width": "65dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var headerIconRight = new kony.ui.Label({
                "centerY": "49%",
                "id": "headerIconRight",
                "isVisible": false,
                "right": 12,
                "skin": "headerCartIconSkin",
                "text": "",
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
            var hamburgerIconContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "18dp",
                "id": "hamburgerIconContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "11dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0f54e6831b2364d",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1,
                "appName": "AmandaAlert"
            }, {
                "paddingInPixel": false
            }, {});
            hamburgerIconContainer.setDefaultUnit(kony.flex.DP);
            var FlexContainer0f97e6e10d5ff40 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "id": "FlexContainer0f97e6e10d5ff40",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0h819ee2043fa41",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1,
                "appName": "AmandaAlert"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer0f97e6e10d5ff40.setDefaultUnit(kony.flex.DP);
            FlexContainer0f97e6e10d5ff40.add();
            var aspdkaspdokaspdokaspdoakd = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "2dp",
                "id": "aspdkaspdokaspdokaspdoakd",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0h819ee2043fa41",
                "top": "21dp",
                "width": "20dp",
                "zIndex": 1,
                "appName": "AmandaAlert"
            }, {
                "paddingInPixel": false
            }, {});
            aspdkaspdokaspdokaspdoakd.setDefaultUnit(kony.flex.DP);
            aspdkaspdokaspdokaspdoakd.add();
            var CopyFlexContainer0c1413b4b970f4a = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "CopyFlexContainer0c1413b4b970f4a",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0h819ee2043fa41",
                "width": "20dp",
                "zIndex": 1,
                "appName": "AmandaAlert"
            }, {
                "paddingInPixel": false
            }, {});
            CopyFlexContainer0c1413b4b970f4a.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0c1413b4b970f4a.add();
            hamburgerIconContainer.add(FlexContainer0f97e6e10d5ff40, aspdkaspdokaspdokaspdoakd, CopyFlexContainer0c1413b4b970f4a);
            var headerButtonLeft = new kony.ui.Button({
                "focusSkin": "headerIconCartSkin",
                "height": "100%",
                "id": "headerButtonLeft",
                "isVisible": true,
                "left": "0dp",
                "skin": "headerButtonClearSkin",
                "text": "Back",
                "top": "0dp",
                "width": "41dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": false,
                "padding": [27, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var headerButtonRight = new kony.ui.Button({
                "focusSkin": "headerIconCartSkin",
                "height": "100%",
                "id": "headerButtonRight",
                "isVisible": false,
                "right": "0dp",
                "skin": "headerButtonClearSkin",
                "text": "Settings",
                "top": "0dp",
                "width": "40dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [15, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            headerContainer03.add(headerTitleLabel, headerTitleLogo, headerIconRight, hamburgerIconContainer, headerButtonLeft, headerButtonRight);
            var PaddedButtonRound0ha54c1e2779149 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "60dp",
                "id": "PaddedButtonRound0ha54c1e2779149",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox0f8fcdadc490047",
                "top": "485dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "AmandaAlert"
            }, {
                "paddingInPixel": false
            }, {});
            PaddedButtonRound0ha54c1e2779149.setDefaultUnit(kony.flex.DP);
            PaddedButtonRound0ha54c1e2779149.add();
            this.add(PaddedButtonRound, headerContainer03, PaddedButtonRound0ha54c1e2779149);
        };
        return [{
            "addWidgets": addWidgetsForm1,
            "enabledForIdleTimeout": false,
            "id": "Form1",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "onTouchStart": controller.AS_Form_g4a13f2bc6864f73921792ca3c1dbef6,
            "skin": "slForm",
            "appName": "AmandaAlert",
            "info": {
                "kuid": "g1fab9121fd14e55bfb3fd532dd41ac8"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});