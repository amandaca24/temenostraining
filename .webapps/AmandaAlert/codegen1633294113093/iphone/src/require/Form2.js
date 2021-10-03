define("Form2", function() {
    return function(controller) {
        function addWidgetsForm2() {
            this.setDefaultUnit(kony.flex.DP);
            var NotesBxSL = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "75dp",
                "id": "NotesBxSL",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox0d54a73a63d3f46",
                "top": "230dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "AmandaAlert"
            }, {
                "paddingInPixel": false
            }, {});
            NotesBxSL.setDefaultUnit(kony.flex.DP);
            var NotesFieldBoxSingleLine = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "0dp",
                "focusSkin": "NotesBoxSingleLineFocusSkin",
                "id": "NotesFieldBoxSingleLine",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "10dp",
                "placeholder": "Please write some text",
                "right": "10dp",
                "secureTextEntry": false,
                "skin": "NotesBoxSingleLineNormalSkin",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "10dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [4, 0, 4, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "showClearButton": false,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            NotesBxSL.add(NotesFieldBoxSingleLine);
            var PaddedButtonRound = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "60dp",
                "id": "PaddedButtonRound",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox0eca24adcdd4647",
                "top": "310dp",
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
                "onClick": controller.AS_Button_d9f96e7722ca481783cff758e7c131cd,
                "onTouchStart": controller.AS_Button_c87b221dfb67402d9dfe3e77d25179f4,
                "right": "10dp",
                "skin": "ButtonSkinNormal",
                "text": "Send",
                "top": "5dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            PaddedButtonRound.add(ButtonRound);
            var headerContainer25 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "44dp",
                "id": "headerContainer25",
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
            headerContainer25.setDefaultUnit(kony.flex.DP);
            var headerTitleLabel = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "headerTitleLabel",
                "isVisible": true,
                "left": "72dp",
                "right": "72dp",
                "skin": "headerTitleSkinMaster",
                "text": "Koni",
                "textStyle": {},
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var headerIconRight = new kony.ui.Label({
                "height": "100%",
                "id": "headerIconRight",
                "isVisible": true,
                "right": 11,
                "skin": "headerPlusIconSkin",
                "text": "",
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var headerIconLeft = new kony.ui.Label({
                "height": "100%",
                "id": "headerIconLeft",
                "isVisible": true,
                "left": "4dp",
                "skin": "headerBackIconSkin",
                "text": "",
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var headerButtonLeft = new kony.ui.Button({
                "focusSkin": "headerIconCartSkin",
                "height": "100%",
                "id": "headerButtonLeft",
                "isVisible": true,
                "left": "0dp",
                "onTouchStart": controller.AS_Button_f25acddc489140c3a919d7184e3b8862,
                "skin": "headerButtonBackSkin",
                "text": "Back",
                "top": "0dp",
                "width": "76dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [27, 0, 0, 0],
                "paddingInPixel": true
            }, {
                "showProgressIndicator": true
            });
            var headerButtonRight = new kony.ui.Button({
                "focusSkin": "headerIconCartSkin",
                "height": "100%",
                "id": "headerButtonRight",
                "isVisible": true,
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
                "paddingInPixel": true
            }, {
                "showProgressIndicator": true
            });
            headerContainer25.add(headerTitleLabel, headerIconRight, headerIconLeft, headerButtonLeft, headerButtonRight);
            var footerBackForwardShareCopy = new kony.ui.FlexContainer({
                "bottom": 0,
                "clipBounds": true,
                "height": "49dp",
                "id": "footerBackForwardShareCopy",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0e87dd617ff5a41",
                "width": "100%",
                "zIndex": 1,
                "appName": "AmandaAlert"
            }, {
                "paddingInPixel": false
            }, {});
            footerBackForwardShareCopy.setDefaultUnit(kony.flex.DP);
            var FlexContainer1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlexContainer1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox0a6262c0b9f6145",
                "top": "0dp",
                "width": "20%",
                "zIndex": 1,
                "appName": "AmandaAlert"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer1.setDefaultUnit(kony.flex.DP);
            var btnBack = new kony.ui.Button({
                "focusSkin": "slButtonTransGrey",
                "height": "100%",
                "id": "btnBack",
                "isVisible": true,
                "left": "0dp",
                "skin": "slButtonTransGrey",
                "text": "",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            FlexContainer1.add(btnBack);
            var FlexContainer2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "30%",
                "clipBounds": true,
                "height": "100%",
                "id": "FlexContainer2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "75dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox0a6262c0b9f6145",
                "top": "0dp",
                "width": "20%",
                "zIndex": 1,
                "appName": "AmandaAlert"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer2.setDefaultUnit(kony.flex.DP);
            var btnForward = new kony.ui.Button({
                "focusSkin": "slButtonTransGrey",
                "height": "100%",
                "id": "btnForward",
                "isVisible": true,
                "left": "0dp",
                "skin": "slButtonTransGrey",
                "text": "",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            FlexContainer2.add(btnForward);
            var FlexContainer3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "FlexContainer3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "150dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox0a6262c0b9f6145",
                "top": "0dp",
                "width": "20%",
                "zIndex": 1,
                "appName": "AmandaAlert"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer3.setDefaultUnit(kony.flex.DP);
            var btnShare = new kony.ui.Button({
                "focusSkin": "slButtonTransBlue",
                "height": "100%",
                "id": "btnShare",
                "isVisible": true,
                "left": "0dp",
                "skin": "slButtonTransBlue",
                "text": "",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            FlexContainer3.add(btnShare);
            var FlexContainer4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "70%",
                "clipBounds": true,
                "height": "100%",
                "id": "FlexContainer4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "225dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox0a6262c0b9f6145",
                "top": "0dp",
                "width": "20%",
                "zIndex": 1,
                "appName": "AmandaAlert"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer4.setDefaultUnit(kony.flex.DP);
            var btnBookmark = new kony.ui.Button({
                "focusSkin": "slButtonTransBlue",
                "height": "100%",
                "id": "btnBookmark",
                "isVisible": true,
                "left": "0dp",
                "skin": "slButtonTransBlue",
                "text": "",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            FlexContainer4.add(btnBookmark);
            var FlexContainer5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "90%",
                "clipBounds": true,
                "height": "100%",
                "id": "FlexContainer5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "300dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox0a6262c0b9f6145",
                "top": "0dp",
                "width": "20%",
                "zIndex": 1,
                "appName": "AmandaAlert"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer5.setDefaultUnit(kony.flex.DP);
            var btnCopy = new kony.ui.Button({
                "focusSkin": "slButtonTransBlue",
                "height": "100%",
                "id": "btnCopy",
                "isVisible": true,
                "left": "0dp",
                "skin": "slButtonTransBlue",
                "text": "",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            FlexContainer5.add(btnCopy);
            footerBackForwardShareCopy.add(FlexContainer1, FlexContainer2, FlexContainer3, FlexContainer4, FlexContainer5);
            this.add(NotesBxSL, PaddedButtonRound, headerContainer25, footerBackForwardShareCopy);
        };
        return [{
            "addWidgets": addWidgetsForm2,
            "enabledForIdleTimeout": false,
            "id": "Form2",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "appName": "AmandaAlert",
            "info": {
                "kuid": "f01c0bf81ea148e79aa83319709afd2b"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});