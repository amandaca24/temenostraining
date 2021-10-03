define("userForm1Controller", {
    //Type your controller code here 
});
define("Form1ControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
    /** onTouchStart defined for ButtonRound **/
    AS_Button_c2d76ba23e7c4e91af4f82b9e1dfbf3c: function AS_Button_c2d76ba23e7c4e91af4f82b9e1dfbf3c(eventobject, x, y) {
        var self = this;
        var ntf = new kony.mvc.Navigation({
            "appName": "ProjetoTeste",
            "friendlyName": "Form2"
        });
        ntf.navigate();
    },
    /** onClick defined for PaddedButtonRound **/
    AS_FlexContainer_f49542da31d24366b4ccf8e5769e9a95: function AS_FlexContainer_f49542da31d24366b4ccf8e5769e9a95(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation({
            "appName": "ProjetoTeste",
            "friendlyName": "Form2"
        });
        ntf.navigate();
    },
    /** onTouchStart defined for Form1 **/
    AS_Form_g4a13f2bc6864f73921792ca3c1dbef6: function AS_Form_g4a13f2bc6864f73921792ca3c1dbef6(eventobject, x, y) {
        var self = this;
    }
});
define("Form1Controller", ["userForm1Controller", "Form1ControllerActions"], function() {
    var controller = require("userForm1Controller");
    var controllerActions = ["Form1ControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
