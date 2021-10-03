define("com/konymp/newsdetailsCopy/usernewsdetailsCopyController", function() {
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
