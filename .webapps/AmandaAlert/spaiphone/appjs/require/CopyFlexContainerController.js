define("userCopyFlexContainerController", {
    //Type your controller code here 
});
define("CopyFlexContainerControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("CopyFlexContainerController", ["userCopyFlexContainerController", "CopyFlexContainerControllerActions"], function() {
    var controller = require("userCopyFlexContainerController");
    var controllerActions = ["CopyFlexContainerControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
