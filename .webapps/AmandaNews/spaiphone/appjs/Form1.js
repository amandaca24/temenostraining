define("Form1", function() {
    return function(controller) {
        function addWidgetsForm1() {
            this.setDefaultUnit(kony.flex.DP);
            var FlexScrollGroup0j923d626aba94f = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "FlexScrollGroup0j923d626aba94f",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {
                "paddingInPixel": false
            }, {});
            FlexScrollGroup0j923d626aba94f.setDefaultUnit(kony.flex.DP);
            var DataGrid0f9ffa38b775946 = new kony.ui.DataGrid({
                "columnHeadersConfig": [{
                    "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "News",
                    "columnHeaderType": "text",
                    "columnID": "col1",
                    "columnText": "Not Defined",
                    "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
                    "columnWidthInPercentage": 33,
                    "isColumnSortable": false,
                    "columnOnClick": controller.AS_DataGrid_ce5ca4f771f24e569f4133d476ef11cd
                }],
                "data": [{
                    "col1": ""
                }, {
                    "col1": ""
                }, {
                    "col1": ""
                }, {
                    "col1": ""
                }, {
                    "col1": ""
                }, {
                    "col1": ""
                }],
                "headerSkin": "slDataGridHead",
                "height": "94.06%",
                "id": "DataGrid0f9ffa38b775946",
                "isMultiSelect": false,
                "isVisible": true,
                "left": "0dp",
                "onTouchStart": controller.AS_DataGrid_ede34a8d3bc14ec6ad009973bbf32909,
                "rowAlternateSkin": "slDataGridAltRow",
                "rowCount": 6,
                "rowFocusSkin": "slDataGridFocusedRow",
                "rowNormalSkin": "slDataGridRow",
                "showColumnHeaders": true,
                "top": "45dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var headerContainer20 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "44dp",
                "id": "headerContainer20",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "headerContainerSknMaster",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "AmandaNews"
            }, {
                "paddingInPixel": false
            }, {});
            headerContainer20.setDefaultUnit(kony.flex.DP);
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
                "width": "20dp",
                "zIndex": 1,
                "appName": "AmandaNews"
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
                "appName": "AmandaNews"
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
                "width": "14dp",
                "zIndex": 1,
                "appName": "AmandaNews"
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
                "width": "10dp",
                "zIndex": 1,
                "appName": "AmandaNews"
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
                "width": "42dp",
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
                "isVisible": true,
                "skin": "headerButtonClearSkin",
                "text": "Settings",
                "width": "40dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [15, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var TextField0c2531dc7b58b4c = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "height": "32dp",
                "id": "TextField0c2531dc7b58b4c",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "90dp",
                "onDone": controller.AS_TextField_b1a2c1040794438298999d791cee99d8,
                "onTextChange": controller.AS_TextField_i8931f5c15cb47949a4cb98e4cc554d0,
                "secureTextEntry": false,
                "skin": "headerSearchFieldSkin",
                "text": "Search",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "6dp",
                "width": "62.53%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [10, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false
            });
            var Search = new kony.ui.Label({
                "id": "Search",
                "isVisible": true,
                "left": "360dp",
                "onTouchStart": controller.AS_Label_e69782c807a74300befcf736fc3a077c,
                "skin": "slFontAwesomeIcon",
                "text": "",
                "textStyle": {},
                "top": "6dp",
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
            headerContainer20.add(headerTitleLabel, hamburgerIconContainer, headerButtonLeft, headerButtonRight, TextField0c2531dc7b58b4c, Search);
            FlexScrollGroup0j923d626aba94f.add(DataGrid0f9ffa38b775946, headerContainer20);
            this.add(FlexScrollGroup0j923d626aba94f);
        };
        return [{
            "addWidgets": addWidgetsForm1,
            "enabledForIdleTimeout": false,
            "id": "Form1",
            "init": controller.AS_Form_ge981f55bccf4c81bc8e0c4a3ebc4dfe,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_dfcf702908ef466b9841efe30c280f06(eventobject);
                controller.AS_Form_af529e7b43ba44678dece53fa73cc20d(eventobject);
            },
            "skin": "slForm",
            "appName": "AmandaNews",
            "info": {
                "kuid": "d15e64a0086a47debdffc8c010557fb5"
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