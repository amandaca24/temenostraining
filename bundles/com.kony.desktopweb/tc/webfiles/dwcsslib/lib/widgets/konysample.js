/* global kony */
/* global constants */
(function() {
    /* Types of ERRORs

    InternalError
    RangeError
    ReferenceError
    SyntaxError
    TypeError
    Warning

    //*/



    //For variable or property of a class

    /**
     * One liner description about this variable.
     *
     * @deprecated
     * @readonly
     * @access      private
     * @var         {string} varName
     * @property    {string} varName
     *
     * @desc        A brief description about the class.
     *              -
     *              -
     *
     * @todo        Anything that thought for but not yet implemented.
     *              -
     *              -
     */



    //For constant

    /**
     * One liner description about this constant.
     *
     * @deprecated
     * @readonly
     * @access      private
     * @constant    {string} constantName
     *
     * @desc        A brief description about the class.
     *              -
     *              -
     *
     * @todo        Anything that thought for but not yet implemented.
     *              -
     *              -
     */



    //For simple function or method of a class

    /**
     * One liner description about what this function/method is for.
     *
     * @deprecated
     * @async
     * @callback
     * @function    functionName
     * @this        kony.ui.WidgetClass
     * @override
     * @access      private
     * @method      methodName
     * @memberof    ClassName
     * @author      Goutam Sahu <goutam.sahu@kony.com>
     *
     * @param       {string} paramName1 - One liner description about this param.
     * @param       {string} paramName2 - One liner description about this param.
     *
     * @fires       kony.ui.Form2#preshow
     * @fires       kony.ui.Form2#postshow
     *
     * @throws      {InvalidArgumentException} - One liner description about this exception.
     *
     * @returns     {string} – One liner description about this returned value.
     *
     * @desc        A brief description about the class.
     *              -
     *              -
     *
     * @todo        Anything that thought for but not yet implemented.
     *              -
     *              -
     */
    //function someFunction(paramName1, paramName2) {
        /**
         * Preshow Event
         *
         * @deprecated
         * @event     kony.ui.Form2#preshow
         * @type      {object}
         *
         * @property  {string} paramName - One liner description about this param.
         *
         * @todo      Anything that thought for but not yet implemented.
         *            -
         *            -
         */
    //}



    //For a Class

    /**
     * One liner description about the constructor function.
     *
     * @deprecated
     * @class
     * @namespace   kony.ui
     * @extends     kony.ui.WidgetClass
     * @author      Goutam Sahu <goutam.sahu@kony.com>
     *
     * @param       {string} paramName1 - One liner description about this param.
     * @param       {string} paramName2 - One liner description about this param.
     *
     * @fires       kony.ui.Form2#preshow
     *
     * @throws      {InvalidArgumentException} - One liner description about this exception.
     *
     * @classdesc   A brief description about the class.
     *              -
     *              -
     *
     * @todo        Anything that thought for but not yet implemented.
     *              -
     *              -
     */
    //function SomeFunction(paramName1, paramName2) {
    //}
}());

(function() {
    var $K = kony.$kwebfw$;

    $K.defKonyProp($K.ui, [
        {keey:'SampleWidget', value:{}, items:[
            //TODO:: Mostly this is not needed
            //       Added it for knowledge purpose
            {keey:'doLayout', value:function(frame) {
            }},

            {keey:'onKeyDown', value:function(evt) {
                var $K = kony.$kwebfw$, $KW = $K.widget, $KD = $K.dom,
                    code = evt.keyCode || evt.which;

                if([13, 32].indexOf(code) >= 0) {
                    $KD.preventDefault(evt);

                    if(code === 13 || code === 32) { //Enter or Space
                        $KW.fire(this, 'onClick', this);
                    }
                }

                return false;
            }},

            //TODO:: Mostly this is not needed
            //       Added it for knowledge purpose
            {keey:'setupUIInteraction', value:function(dom, clone) {
                var $K = kony.$kwebfw$, $KU = $K.utils, $KW = $K.widget,
                    $KD = $K.dom, tabindex = '';

                if($KW.disabled(this)) {
                    $KD.setAttr(dom, 'aria-disabled', true);
                    $KD.setAttr(dom, 'tabindex', -1);
                } else if(!$KW.interactable(this)) {
                    $KD.setAttr(dom, 'tabindex', -1);
                } else {
                    tabindex = $KW.tabIndex(this, clone);
                    $KD.removeAttr(dom, 'aria-disabled');

                    if($KU.is(tabindex, 'integer')) {
                        $KD.setAttr(dom, 'tabindex', tabindex);
                    } else {
                        $KD.removeAttr(dom, 'tabindex');
                    }
                }
            }}
        ]}
    ]);


    //All widget file must have this variable
    //All the functions will be called in the scope of widget instance
    var _dependentPropertiesValidationMessage = {};


    //All widget file must have this variable
    //All the functions will be called in the scope of widget instance
    var _getter = {
        SampleWidget: {
            property: function SampleWidget$_getter_property(value) {
                //
            }
        }
    };


    //All widget file must have this variable
    //This functions will be called in the scope of widget instance
    var _populateUnderscore = {
        SampleWidget: function SampleWidget$_populateUnderscore() {
            var $K = kony.$kwebfw$, $KU = $K.utils, _ = null;

            if(!$KU.is(this._kwebfw_, 'object')) {
                $KU.defineProperty(this, '_kwebfw_', {}, null);
            }
            _ = this._kwebfw_;

            //NOTE:: Any changes to _ (underscore) may need a change in
            //       _cleanUnderscore function of konyui.js file.
            if(!_.ns) {
                if($KU.is(this.__$kwebfw$ns__, 'string') && this.__$kwebfw$ns__) {
                    $KU.defineProperty(_, 'ns', this.__$kwebfw$ns__, null);
                } else {
                    $KU.defineProperty(_, 'ns', 'kony.ui.SampleWidget', null);
                }
            }
            if(!_.name) {
                if($KU.is(this.__$kwebfw$name__, 'string') && this.__$kwebfw$name__) {
                    $KU.defineProperty(_, 'name', this.__$kwebfw$name__, null);
                } else {
                    $KU.defineProperty(_, 'name', 'SampleWidget', null);
                }
            }
        }
    };


    //All widget file must have this variable
    //This function will be called in the scope of widget instance
    var _postInitialization = {};


    //All widget file must have this variable
    //This functions will be called in the scope of widget instance
    var _relayoutActiveTriggerer = {
        SampleWidget: function SampleWidget$_relayoutActiveTriggerer() {
            return [];
        }
    };


    //All widget file must have this variable
    //This functions will be called in the scope of widget instance
    var _relayoutPassiveTriggerer = {
        SampleWidget: function SampleWidget$_relayoutPassiveTriggerer() {
            return [];
        }
    };


    //All widget file must have this variable
    //All the functions will be called in the scope of widget instance
    var _setter = {
        SampleWidget: {
            property: function SampleWidget$_setter_property(old) {
                //
            }
        }
    };


    //All widget file must have this variable
    //All the functions will be called in the scope of widget instance
    //These function should always return a boolean value
    var _valid = {
        SampleWidget: {
            property: function SampleWidget$_valid_property(value) {
                var $K = kony.$kwebfw$, $KU = $K.utils, flag = false;

                if($KU.is(value, '')) {
                    flag = true;
                }

                return flag;
            }
        }
    };


    //All widget file must have this variable
    //All the functions will be called in the scope of widget instance
    //Any property here, which is set to "false", will not create a setter
    var _view = {
        SampleWidget: {
            property: function SampleWidget$_view_property(el, old) {
                var $K = kony.$kwebfw$, $KU = $K.utils,
                    $KW = $K.widget, $KD = $K.dom;

                //TODO::
            }
        }
    };


    Object.defineProperty(kony.ui, 'SampleWidget', {configurable:false, enumerable:false, writable:false, value:(function() {
        var $K = kony.$kwebfw$;


        /**
         * kony.ui.SampleWidget constructor.
         *
         * @class
         * @namespace   kony.ui
         * @extends     kony.ui.BasicWidget
         * @author      Goutam Sahu <goutam.sahu@kony.com>
         *
         * @param       {object} bconfig - An object with basic properties.
         * @param       {object} lconfig - An object with layout properties.
         * @param       {object} pspconfig - An object with platform specific properties.
         *
         * @throws      {InvalidArgumentException} - Invalid argument is passed.
         * @throws      {InvalidPropertyException} - Invalid property or invalid value of a property is passed.
         *
         * @classdesc   A brief description about the class.
         *              -
         *              -
         *
         * @todo        Anything that thought for but not yet implemented.
         *              -
         *              -
         */
        var SampleWidget = function SampleWidget(bconfig, lconfig, pspconfig) {
            var $K = kony.$kwebfw$, $KU = $K.utils, self = this,
                dependentPropertiesValidationMessage = '', prop = null;

            if(!bconfig.isPreValidated) {
                prop = {
                    prop1: '',
                    prop2: ''
                };
            }

            _populateUnderscore.SampleWidget.call(this);

            SampleWidget.base.call(this, bconfig, lconfig, pspconfig);

            if(!bconfig.isPreValidated) {
                if($KU.is(_dependentPropertiesValidationMessage.SampleWidget, 'function')) {
                    dependentPropertiesValidationMessage = _dependentPropertiesValidationMessage.SampleWidget.call(this, prop, bconfig, lconfig, pspconfig);
                }
            }

            if(dependentPropertiesValidationMessage) {
                throw new Error(dependentPropertiesValidationMessage);
            } else {
                if(!bconfig.isPreValidated) {
                    //Defaulting to platfom values specific to SampleWidget
                    $KU.each(prop, function (value, key) {
                        var $K = kony.$kwebfw$, $KU = $K.utils,
                            $KW = $K.widget, valid = false, message = '';

                        if(!bconfig.hasOwnProperty(key)) {
                            bconfig[key] = value;
                        } else if($KW.getNonConstructorProperties(self._kwebfw_.name).indexOf(key) >= 0) {
                            throw new Error('<' + key + '> is a non-constructor property of <' + self._kwebfw_.ns + '> class.');
                        } else if(!$KU.is(_valid.SampleWidget[key], 'function')) {
                            throw new Error('<' + key + '> is available in default widget properties of <kony.ui.SampleWidget>, but not in <_valid.SampleWidget> namespace.');
                        } else {
                            valid = _valid.SampleWidget[key].call(self, bconfig[key]);
                            if($KU.is(valid, 'array')) { bconfig[key] = valid[0]; valid = valid[1]; }

                            if(valid === false || ($KU.is(valid, 'string') && valid)) {
                                message = ('Invalid value passed to property <' + key + '> of widget <' + self._kwebfw_.ns + '>.');

                                if($KU.is(valid, 'string')) {
                                    message += ('\n' + valid);
                                }

                                throw new Error(message);
                            }
                        }
                    });
                }

                //Defining Getters/Setters specific to SampleWidget
                $KU.each(_view.SampleWidget, function(value, key) {
                    var $K = kony.$kwebfw$, $KU = $K.utils;

                    $KU.defineProperty(self._kwebfw_.prop, key, bconfig[key], {configurable:false, enumerable:true, writable:true});

                    $KU.defineGetter(self, key, function SampleWidget$_getter() {
                        var $K = kony.$kwebfw$, $KU = $K.utils;

                        if($KU.is(_getter.SampleWidget[key], 'function')) {
                            return _getter.SampleWidget[key].call(this, this._kwebfw_.prop[key]);
                        } else {
                            return this._kwebfw_.prop[key];
                        }
                    }, true);

                    $KU.defineSetter(self, key, function SampleWidget$_setter(val) {
                        var $K = kony.$kwebfw$, $KU = $K.utils, old = null,
                            valid = false, $KW = $K.widget, rmodel = null,
                            final = null, message = '', el = null;

                        if(value === false) {
                            throw new Error('<'+key+'> is a readonly property of <'+this._kwebfw_.ns+'> widget.');
                        } else if(this._kwebfw_.prop[key] !== val) {
                            rmodel = $KW.rmodel(this);

                            if(rmodel && rmodel._kwebfw_.is.template && !rmodel._kwebfw_.is.cloned) {
                                throw new Error('Cannot set any value of a widget, which is either a raw template or any of its widget.');
                            } else {
                                valid = _valid.SampleWidget[key].call(this, val);
                                if($KU.is(valid, 'array')) {val = valid[0]; valid = valid[1];}

                                if(valid === false || ($KU.is(valid, 'string') && valid)) {
                                    message = ('Invalid value passed to property <'+key+'> of widget <'+self._kwebfw_.ns+'>.');

                                    if($KU.is(valid, 'string')) {
                                        message += ('\n' + valid);
                                    }

                                    throw new Error(message);
                                } else {
                                    old = this._kwebfw_.prop[key];
                                    this._kwebfw_.prop[key] = val;

                                    if($KU.is(_setter.SampleWidget[key], 'function')) {
                                        _setter.SampleWidget[key].call(this, old);
                                    }

                                    if(_relayoutActiveTriggerer.SampleWidget().indexOf(key) >= 0) {
                                        $KW.markRelayout(this);
                                    }

                                    if(_relayoutPassiveTriggerer.SampleWidget().indexOf(key) >= 0) {
                                        final = this._kwebfw_.flex.final;

                                        if(!(final.height && final.width)) {
                                            $KW.markRelayout(this);
                                        }
                                    }

                                    $KW.onPropertyChange(this, key, old);

                                    if($KU.is(value, 'function')) {
                                        el = $KW.el(this);
                                        el.node && value.call(this, el, old);
                                    }
                                }
                            }
                        }
                    }, false);
                });

                if($KU.is(_postInitialization.SampleWidget, 'function')) {
                    _postInitialization.SampleWidget.call(this);
                }
            }


            pspconfig = lconfig = bconfig = null; //For GC
        };


        $K.utils.inherits(SampleWidget, kony.ui.BasicWidget);


        /**
         * Takes care of flushing out the widget reference to clean memory.
         *
         * @override
         * @access      protected
         * @method      _flush
         * @memberof    kony.ui.SampleWidget
         * @author      Goutam Sahu <goutam.sahu@kony.com>
         *
         * @returns     void
         */
        var sample__flush = function SampleWidget$_flush() {
            var $super = kony.ui.SampleWidget.base.prototype;

            $super._flush.call(this);
        };


        /**
         * Builds the view layer for kony.ui.SampleWidget widget.
         *
         * @override
         * @access      protected
         * @method      _render
         * @memberof    kony.ui.SampleWidget
         * @author      Goutam Sahu <goutam.sahu@kony.com>
         *
         * @returns     {HTMLElement} – SampleWidget view.
         */
        var sample__render = function SampleWidget$_render(tag) {
            var $super = kony.ui.SampleWidget.base.prototype,
                $K = kony.$kwebfw$, $KW = $K.widget, $KD = $K.dom,
                _ = this._kwebfw_, view = _.view, el = $KW.el(view);

            if(this.isVisible || $K.F.RIVW) {
                if(!view) {
                    view = $super._render.call(this, tag, []);
                    $KD.setAttr(view, 'kwh-keydown', 'onKeyDown');

                    el = $KW.el(view);
                }

                _view.SampleWidget.property.call(this, el, this.property);

                $KW.accessibility(this);
            }

            return view;
        };


        /**
         * One liner description about what this function/method is for.
         *
         * @access      public
         * @method      someFunction
         * @memberof    kony.ui.SampleWidget
         * @author      Goutam Sahu <goutam.sahu@kony.com>
         *
         * @param       {string} paramName1 - One liner description about this param.
         * @param       {string} paramName2 - One liner description about this param.
         *
         * @fires       kony.ui.Form2#preshow
         * @fires       kony.ui.Form2#postshow
         *
         * @throws      {InvalidArgumentException} - One liner description about this exception.
         *
         * @returns     {string} – One liner description about this returned value.
         *
         * @desc        A brief description about the class.
         *              -
         *              -
         *
         * @todo        Anything that thought for but not yet implemented.
         *              -
         *              -
         */
        var sample_someFunction = function SampleWidget$someFunction() {
            var $K = kony.$kwebfw$, $KW = $K.widget, final = null,
                hmodel = null, rmodel = null, omodel = null;

            //TODO::

            if(_relayoutActiveTriggerer.SampleWidget().indexOf('someFunction') >= 0) {
                $KW.markRelayout(this);
            }

            if(_relayoutPassiveTriggerer.SampleWidget().indexOf('someFunction') >= 0) {
                final = this._kwebfw_.flex.final;

                if(!(final.height && final.width)) {
                    $KW.markRelayout(this);
                }
            }
        };


        $K.defKonyProp(SampleWidget.prototype, [
            {keey:'_flush', value:sample__flush},
            {keey:'_render', value:sample__render},
            {keey:'someFunction', value:sample_someFunction}
        ]);




        //Your JS code for DEBUG purpose goes here...


        return SampleWidget;
    }())});
}());