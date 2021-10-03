define("CopyFlexContainer", function() {
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
})