define("ListView/AlertsWithoutThumbnails/userAlertsWithoutThumbnailsController", function() {
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
