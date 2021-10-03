define("userForm2Controller", {
    //Type your controller code here 
});
define("Form2ControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
    /** onTouchStart defined for ButtonRound **/
    AS_Button_c87b221dfb67402d9dfe3e77d25179f4: function AS_Button_c87b221dfb67402d9dfe3e77d25179f4(eventobject, x, y) {
        var self = this;

        function SHOW_ALERT_c0fa3baf9f3a4165b05f6f86f1dd8891_True() {}

        function SHOW_ALERT_c0fa3baf9f3a4165b05f6f86f1dd8891_Callback() {
            SHOW_ALERT_c0fa3baf9f3a4165b05f6f86f1dd8891_True();
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "message": this.view.NotesFieldBoxSingleLine.text,
            "alertHandler": SHOW_ALERT_c0fa3baf9f3a4165b05f6f86f1dd8891_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
    },
    /** onClick defined for ButtonRound **/
    AS_Button_d9f96e7722ca481783cff758e7c131cd: function AS_Button_d9f96e7722ca481783cff758e7c131cd(eventobject) {
        var self = this;

        function SHOW_ALERT_f17512d3f25d4f8589b29be4027879c5_True() {}

        function SHOW_ALERT_f17512d3f25d4f8589b29be4027879c5_Callback() {
            SHOW_ALERT_f17512d3f25d4f8589b29be4027879c5_True();
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "alertTitle": "Info Input",
            "message": this.view.NotesFieldBoxSingleLine,
            "alertHandler": SHOW_ALERT_f17512d3f25d4f8589b29be4027879c5_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
    },
    /** onTouchStart defined for headerButtonLeft **/
    AS_Button_f25acddc489140c3a919d7184e3b8862: function AS_Button_f25acddc489140c3a919d7184e3b8862(eventobject, x, y) {
        var self = this;
        var ntf = new kony.mvc.Navigation({
            "appName": "ProjetoTeste",
            "friendlyName": "Form1"
        });
        ntf.navigate();
    }
});
define("Form2Controller", ["userForm2Controller", "Form2ControllerActions"], function() {
    var controller = require("userForm2Controller");
    var controllerActions = ["Form2ControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
