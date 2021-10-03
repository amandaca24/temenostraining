define("com/konymp/newsdetails/usernewsdetailsController", function() {
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
