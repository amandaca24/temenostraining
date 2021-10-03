
kony.ui.Canvas = function(bconfig, lconfig, pspconfig) {
    if(arguments.length < 3)
        bconfig = lconfig = pspconfig = $KU.mergeDefaults(bconfig, $KU.getAllDefaults("Canvas"));

    kony.ui.Canvas.baseConstructor.call(this, bconfig, lconfig, pspconfig);
    this.shapesdata = bconfig.shapesData;

    
    this.wType = "Canvas";
    this.name = "kony.ui.Canvas";

    this.setGetterSetter();
};

kony.inherits(kony.ui.Canvas, kony.ui.Widget);

kony.ui.Canvas.prototype.setGetterSetter = function() {
    defineGetter(this, "shapesData", function() {
        return this.shapesdata;
    });
    defineSetter(this, "shapesData", function(val) {
        this.shapesdata = val;
        $KW[this.wType]["updateView"](this, "shapesdata", val);
    });
};


kony.ui.Canvas.prototype.addShapes = function(shapesData) {
    $KW.Canvas.addShapes(this, shapesData);
};

kony.ui.Canvas.prototype.updateShapes = function(shapesData) {
    $KW.Canvas.updateShapes(this, shapesData);
};

kony.ui.Canvas.prototype.removeShapes = function(shapeIds) {
    $KW.Canvas.removeShapes(this, shapeIds);
};

kony.ui.Canvas.prototype.clear = function() {
    $KW.Canvas.clear(this);
};
