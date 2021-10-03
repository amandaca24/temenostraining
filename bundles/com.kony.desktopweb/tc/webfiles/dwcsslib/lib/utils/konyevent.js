/* global kony */
/* global history */
/* global location */
(function() {
    var _getInternalHandlers = function $KE_getInternalHandlers(evt) {
        var $K = kony.$kwebfw$, $KD = $K.dom, target = null;

        target = $KD.closest(evt.target, function(dom) {
            var $K = kony.$kwebfw$, $KD = $K.dom;

            if($KD.hasAttr(dom, ('kwh-'+evt.type))) {
                return true;
            } else if($KD.hasAttr(dom, 'kw')) {
                return false;
            }
        });

        return (target) ? $KD.getAttr(target, ('kwh-'+evt.type)) : '';
    };


    var _getKonyEventType = function $KE_getKonyEventType(evt) {
        var event = {
            click:       'onClick',
            keydown:     'onKeyDown',
            keyup:       'onKeyUp',
            mousedown:   'onTouchStart',
            mousemove:   'onTouchMove',
            mouseout:    'onTouchEnd',
            mouseup:     'onTouchEnd',
            touchend:    'onTouchEnd',
            touchmove:   'onTouchMove',
            touchstart:  'onTouchStart',
            touchcancel: 'onTouchEnd'
        };

        return event[evt.type] || evt.type;
    };


    var _handleOwnerItemBlur = function $KE_handleOwnerItemBlur(evt, model) {
        var $K = kony.$kwebfw$, $KW = $K.widget, $KD = $K.dom,
            omodel = null, item = null, prevItem = null, nextItem = null,
            rmodel = null, prevRmodel = null, nextRmodel = null;

        if($KD.getAttr(evt.target, 'kr') === 'item') {
            model = $KD.first(evt.target);
            model = (model) ? $KW.model(model) : null;
        }

        if(model && model._kwebfw_.view) {
            omodel = $KW.omodel(model);
            rmodel = $KW.rmodel(model);
            item = $KD.closest(model._kwebfw_.view, 'kr', 'item');

            if(omodel && rmodel && item) {
                prevItem = $KD.prev(item);
                nextItem = $KD.next(item);

                $KD.setAttr(item, 'tabindex', -1);
                $KW.iterate(rmodel, function(widget) {
                    var $K = kony.$kwebfw$, $KW = $K.widget;

                    $KW.setupUIInteraction(widget, $KW.focusableElement(widget), false);
                }, {tabs:false});

                if(prevItem) {
                    prevRmodel = $KW.model(prevItem);
                    if(!prevRmodel) {
                        prevRmodel = $KW.model($KD.first(prevItem));
                    }

                    $KD.setAttr(prevItem, 'tabindex', -1);
                    $KW.iterate(prevRmodel, function(widget) {
                        var $K = kony.$kwebfw$, $KW = $K.widget;

                        $KW.setupUIInteraction(widget, $KW.focusableElement(widget), false);
                    }, {tabs:false});
                }

                if(nextItem) {
                    nextRmodel = $KW.model(nextItem);
                    if(!nextRmodel) {
                        nextRmodel = $KW.model($KD.first(nextItem));
                    }

                    $KD.setAttr(nextItem, 'tabindex', -1);
                    $KW.iterate(nextRmodel, function(widget) {
                        var $K = kony.$kwebfw$, $KW = $K.widget;

                        $KW.setupUIInteraction(widget, $KW.focusableElement(widget), false);
                    }, {tabs:false});
                }
            }
        }
    };


    var _handleOwnerItemClick = function $KE_handleOwnerItemClick(evt, model) {
        var $K = kony.$kwebfw$, $KU = $K.utils, omodel = null,
            $KW = $K.widget, $KD = $K.dom, nonTemplated = false;

        if($KU.is(model, 'widget', 'DataGrid')
        && (['IMG', 'DIV'].indexOf(evt.target.tagName) >= 0)) {
            nonTemplated = true;
        } else if($KD.getAttr(evt.target, 'kr') === 'item') {
            model = $KD.first(evt.target);
            model = (model) ? $KW.model(model) : null;
        }

        if(model && model._kwebfw_.view && $KW.interactable(model)) {
            if(nonTemplated) {
                _setOwnerSelectedIndex[$KW.name(model)].call(model, evt.target);
            } else {
                omodel = $KW.omodel(model);

                if(omodel && $KU.is(_setOwnerSelectedIndex[$KW.name(omodel)], 'function')) {
                    _setOwnerSelectedIndex[$KW.name(omodel)].call(omodel, model);
                }
            }
        }
    };


    var _handleOwnerItemFocus = function $KE_handleOwnerItemFocus(evt, model) {
        var $K = kony.$kwebfw$, $KU = $K.utils, $KW = $K.widget, $KD = $K.dom,
            omodel = null, tabindex = '', item = null, prevItem = null, nextItem = null,
            rmodel = null, prevRmodel = null, nextRmodel = null, nonTemplated = false;

        if($KU.is(model, 'widget', 'DataGrid')
        && (['IMG', 'DIV'].indexOf(evt.target.tagName) >= 0)) {
            nonTemplated = true;
        } else if($KD.getAttr(evt.target, 'kr') === 'item') {
            model = $KD.first(evt.target);
            model = (model) ? $KW.model(model) : null;
        }

        if(model && model._kwebfw_.view && $KW.interactable(model)) {
            if(nonTemplated) {
                tabindex = $KW.tabIndex(model);

                if($KU.is(tabindex, 'integer') && tabindex >= 0) {
                    $KD.setAttr(evt.target, 'tabindex', tabindex);
                }
            } else {
                omodel = $KW.omodel(model);
                rmodel = $KW.rmodel(model);
                item = $KD.closest(model._kwebfw_.view, 'kr', 'item');

                if(omodel && rmodel && item) {
                    tabindex = $KW.tabIndex(omodel);

                    if($KU.is(tabindex, 'integer') && tabindex >= 0) {
                        prevItem = $KD.prev(item);
                        nextItem = $KD.next(item);

                        $KD.setAttr(item, 'tabindex', tabindex);
                        $KW.iterate(rmodel, function(widget) {
                            var $K = kony.$kwebfw$, $KW = $K.widget;

                            $KW.setupUIInteraction(widget, $KW.focusableElement(widget), true);
                        }, {tabs:false});

                        if(prevItem) {
                            prevRmodel = $KW.model(prevItem);
                            if(!prevRmodel) {
                                prevRmodel = $KW.model($KD.first(prevItem));
                            }

                            $KD.setAttr(prevItem, 'tabindex', tabindex);
                            $KW.iterate(prevRmodel, function(widget) {
                                var $K = kony.$kwebfw$, $KW = $K.widget;

                                $KW.setupUIInteraction(widget, $KW.focusableElement(widget), true);
                            }, {tabs:false});
                        }

                        if(nextItem) {
                            nextRmodel = $KW.model(nextItem);
                            if(!nextRmodel) {
                                nextRmodel = $KW.model($KD.first(nextItem));
                            }

                            $KD.setAttr(nextItem, 'tabindex', tabindex);
                            $KW.iterate(nextRmodel, function(widget) {
                                var $K = kony.$kwebfw$, $KW = $K.widget;

                                $KW.setupUIInteraction(widget, $KW.focusableElement(widget), true);
                            }, {tabs:false});
                        }
                    }
                }
            }
        }
    };


    var _handleSkinEvent = {
        target: null,

        mouseOverModel: null,

        dealWithCalendarHoverSkin: function(model) {//deal with calendar picker
            var $K = kony.$kwebfw$, $KU = $K.utils,
                $KW = $K.widget, $KD = $K.dom, skin = '';

            skin = _handleSkinEvent.getHoverSkinForCalendar(model);// skin to be reset
            _handleSkinEvent.resetSkinForCalendar(model, (skin +'-hover'), 'hover');

            skin = _handleSkinEvent.getHoverSkinForCalendar(model);// skin to be set
            _handleSkinEvent.setSkinForCalendar(model, (skin+'-hover'), 'hover');
        },

        dealWithFocusSkin: function(evt) {
            var $K = kony.$kwebfw$, $KW = $K.widget, $KD = $K.dom, model = null;

            _handleSkinEvent.target = evt.target;
            model = $KD.closest(evt.target, function(node) {
                var $K = kony.$kwebfw$, $KD = $K.dom;

                if($KD.hasAttr(node, 'kw') || $KD.hasAttr(node, 'kwf')) {
                    return true;
                }
            });

            if(model) {
                if($KD.hasAttr(model, 'kw')) {
                    model = $KW.model(model);
                } else if($KD.hasAttr(model, 'kwf')) {
                    model = $KW.model($KD.getAttr(model, 'kwf'));
                }

                if(['mousedown', 'touchstart'].indexOf(evt.type) >= 0) {
                    _handleSkinEvent.setSkinRecursively(model, 'focus');
                } else if(['touchend', 'touchcancel', 'mouseup', 'mouseout'].indexOf(evt.type) >= 0) {
                    _handleSkinEvent.resetSkinRecursively(model, 'focus');
                }
            }
        },

        dealWithGroupWidgetHoverSkin: function(model) {
            var $K = kony.$kwebfw$, $KU = $K.utils, $KW = $K.widget,
                $KD = $K.dom, option = null, skin = '';

            if(($KU.is(model, 'widget', 'ListBox')
            && model.viewType === constants.LISTBOX_VIEW_TYPE_EDITVIEW)
            || ['CheckBoxGroup', 'RadioButtonGroup'].indexOf($KW.name(model)) >= 0) {

                if($KU.is(model, 'widget', 'ListBox') && model.itemHoverSkin !== '') {
                    skin = model.itemHoverSkin+'-hover';
                } else if(model.hoverSkin !== '') {
                    skin = model.hoverSkin+'-hover';
                }

                option = $KD.closest(_handleSkinEvent.target, function(node) {
                    var $K = kony.$kwebfw$, $KD = $K.dom;

                    if($KD.getAttr(node, 'kr') === 'option') {
                        return true;
                    } else if($KD.hasAttr(node, 'kw') || $KD.hasAttr(node, 'kwf')) {
                        if(model._kwebfw_.hSkinNode && $KD.hasAttr(node, 'kw')) {
                            _handleSkinEvent.resetSkin(model, skin, 'hover');
                        }

                        return false;
                    }
                });

                if(option && model._kwebfw_.hSkinNode !== option) {
                    _handleSkinEvent.resetSkin(model, skin, 'hover');
                }

                if($KU.is(model, 'widget', 'ListBox') || (option && model._kwebfw_.hSkinNode !== option)) {
                    _handleSkinEvent.setSkin(model, skin, 'hover');
                }
            }
        },

        dealWithHoverSkin: function(evt) {
            var $K = kony.$kwebfw$, $KU = $K.utils, $KW = $K.widget, $KD = $K.dom,
                model = null, relatedModel = null, commonModel = null, option = null,
                target = null;

            _handleSkinEvent.target = evt.target;
            model = $KD.closest(evt.target, function(node) {
                var $K = kony.$kwebfw$, $KD = $K.dom;

                if($KD.hasAttr(node, 'kw') || $KD.hasAttr(node, 'kwf')) {
                    return true;
                }
            });

            if(model) {
                target = model;
                if($KD.hasAttr(model, 'kw')) {
                    model = $KW.model(model);
                } else if($KD.hasAttr(model, 'kwf')) {
                    model = $KW.model($KD.getAttr(model, 'kwf'));
                }

                relatedModel = _handleSkinEvent.mouseOverModel;

                if(model != relatedModel) {
                    commonModel = _handleSkinEvent.getLCA(model, relatedModel);
                    _handleSkinEvent.executeHoverEvent(
                        model, constants.ONHOVER_MOUSE_ENTER, evt, commonModel
                    );

                    if(relatedModel) {
                        _handleSkinEvent.executeHoverEvent(
                            relatedModel, constants.ONHOVER_MOUSE_LEAVE, evt, commonModel
                        );
                    }

                    _handleSkinEvent.executeHoverEvent(
                        commonModel, constants.ONHOVER_MOUSE_MOVE, evt
                    );
                } else {
                    _handleSkinEvent.executeHoverEvent(
                        model, constants.ONHOVER_MOUSE_MOVE, evt
                    );
                }

                if(relatedModel === model) {
                    if(model instanceof kony.ui.GroupWidget) {
                        _handleSkinEvent.dealWithGroupWidgetHoverSkin(model);
                    } else if($KU.is(model, 'widget', 'Calendar') && model._kwebfw_.picker === target) {
                        _handleSkinEvent.dealWithCalendarHoverSkin(model);
                    } else if($KU.is(model, 'widget', 'DataGrid')) {
                        _handleSkinEvent.resetSkinRecursively(model, 'hover');
                        _handleSkinEvent.setSkinRecursively(model, 'hover');
                    }
                } else {

                    if(relatedModel) {
                        if($KU.is(relatedModel, 'widget', 'Calendar') && relatedModel._kwebfw_.hSkinNode) {
                            _handleSkinEvent.dealWithCalendarHoverSkin(relatedModel);//handle for picker
                        } else {
                            _handleSkinEvent.resetSkinRecursively(
                                relatedModel, 'hover', commonModel
                            );
                        }
                    }

                    if(($KU.is(model, 'widget', 'Calendar') && model._kwebfw_.picker === target)) {
                       _handleSkinEvent.dealWithCalendarHoverSkin(model);//handle for picker
                    }  else {
                        _handleSkinEvent.setSkinRecursively(model, 'hover', commonModel);
                    }
                }

                _handleSkinEvent.mouseOverModel = model;
            }
        },

        executeHoverEvent: function(model, type, evt, commonModel) {
            var $K = kony.$kwebfw$, $KW = $K.widget;

            if(model && model._kwebfw_.view) {
                $KW.closest(model, function(widget) {
                    var $K = kony.$kwebfw$, $KW = $K.widget, $KD = $K.dom, payload;

                    if(!$KW.interactable(widget)) {
                        return false;
                    } else if(commonModel && commonModel === widget) {
                        return false;
                    } else {
                        if(!payload) payload = {};

                        payload.eventType = type;
                        payload.pageX = evt.pageX || evt.clientX;
                        payload.pageY = evt.pageY || evt.clientY;
                        touch = $KD.point(model._kwebfw_.view);
                        payload.pageX = (payload.pageX - touch.x);
                        payload.pageY = (payload.pageY - touch.y);

                        payload.screenX = evt.clientX || null;
                        payload.screenY = evt.clientY || null;

                        //if($KW.name(model) === 'FlexContainer') {
                            $KW.fire(widget, 'onHover', widget, payload);
                        //}

                    }
                }, {owner:true, tabs:true});
            }
        },


        dealWithSkinStateConfig: function(model, el, type, action) {
            var $K = kony.$kwebfw$, $KU = $K.utils, $KD = $K.dom, _ = model._kwebfw_,
                props = {
                    hover: 'hoverStateSkinProperties',
                    focus: 'focusStateSkinProperties'
                };

            if(model[props[type]]) {
                if(action === 'set') {
                    _.skinStateObj[type] = el.style.cssText;
                    _handleSkinEvent.setSkinConfig(el, model[props[type]], _.skinStateObj[type], model);
                } else if(action === 'reset'){
                    //$KD.style(el, _.skinStateObj[type]);
                    el.style.cssText = _.skinStateObj[type];
                    _.skinStateObj[type] = {};
                }
            }
        },
        getLCA: function(toModel, fromModel) {
            var $K = kony.$kwebfw$, $KW = $K.widget, $KA = $K.app, i = 0,
                toPath = [], fromPath = [], LCA = $KW.model($KA.currentFormUID);

            $KW.closest(fromModel, function(widget) {
                fromPath.splice(0, 0, widget);
            }, {owner:true, tabs:true});

            $KW.closest(toModel, function(widget) {
                toPath.splice(0, 0, widget);
            }, {owner:true, tabs:true});

            for(i = 0; i < fromPath.length && i < toPath.length; i++) {
                if(fromPath[i] != toPath[i]) {
                    break;
                }
                LCA = fromPath[i];
            }

            return LCA;
        },

        getHoverSkinForCalendar: function(model) {
            var $K = kony.$kwebfw$, $KU = $K.utils, $KD = $K.dom,
                _ = model._kwebfw_, prop = _.prop, el = '', kr = '',
                viewConfig = prop.viewConfig ? prop.viewConfig.gridConfig : null, skin = '',
                cellHoverSkin = viewConfig ? viewConfig.gridCellHoverSkin : null,
                monthYearHoverSkin = viewConfig ? viewConfig.gridMonthYearHoverSkin : null;

            if(model._kwebfw_.hSkinNode) {
                el = model._kwebfw_.hSkinNode;
            } else {
                el = $KD.parent(_handleSkinEvent.target);
            }

            kr = $KD.getAttr(el, 'kr');

            if(kr === 'date' && $KD.getAttr(el, 'cellskintype') !== 'gridCellInactiveDaysSkin') {
                if($KU.is(cellHoverSkin, 'string')) {
                    skin = cellHoverSkin;
                } else {
                    skin = '-kony-calendar-cell';
                }
            } else if(kr === 'month' || kr === 'year' ) {
                if($KU.is(monthYearHoverSkin, 'string')) {
                    skin = monthYearHoverSkin;
                } else {
                    skin = '-kony-calendar-cell';
                }
            } else if($KD.getAttr(el, 'kw') === 'Calendar') {
                skin = prop.hoverSkin;
            }

            return skin;
        },

        resetSkin: function(model, skin, type) {
            var $K = kony.$kwebfw$, $KU = $K.utils,
                $KD = $K.dom, el = model._kwebfw_.view;

            if(el) {
                if($KU.is(model, 'widget', 'RadioButtonGroup')
                || $KU.is(model, 'widget', 'CheckBoxGroup')
                || ($KU.is(model, 'widget', 'ListBox')
                && model.viewType === constants.LISTBOX_VIEW_TYPE_EDITVIEW)) {

                    if($KU.is(model, 'widget', 'ListBox') && type === 'hover' && model.hoverSkin){
                        $KD.removeCls(el, model.hoverSkin + '-hover');
                    }

                    if(type === 'hover' && model._kwebfw_.hSkinNode) {
                        el = model._kwebfw_.hSkinNode;
                        model._kwebfw_.hSkinNode = null;
                    } else if(type === 'focus' && model._kwebfw_.fSkinNode) {
                        el = model._kwebfw_.fSkinNode;
                        model._kwebfw_.fSkinNode = null;
                    } else {
                        return;
                    }
                } else if($KU.is(model, 'widget', 'TabPane')) {
                    if(type === 'focus'){
                        el = _handleSkinEvent.target;
                        if(($KD.hasAttr(el, 'kw')) || ($KD.hasAttr(el, 'kr'))) {
                            return;
                        }
                        //To handle the div inside li in case of tab pane (li -> div -> label(tab name))
                        //get the closest el that contains tabid
                        el = $KD.closest(el, 'tabid');
                    } else {
                        return;
                    }
                } else if($KU.is(model, 'widget', 'DataGrid')) {
                    if(type === 'hover' && model._kwebfw_.hSkinNode) {
                        el = $KD.closest(_handleSkinEvent.target, 'kr', 'row');
                        if(el !== model._kwebfw_.hSkinNode) {
                            el = model._kwebfw_.hSkinNode;
                        } else {
                            return;
                        }
                    }
                }
                _handleSkinEvent.dealWithSkinStateConfig(model, el, type, 'reset');
                el && $KD.removeCls(el, skin);
            }
        },

        resetSkinRecursively: function(model, type, upperBoundModel) {
            var $K = kony.$kwebfw$, $KW = $K.widget;

            $KW.closest(model, function(widget) {
                var $K = kony.$kwebfw$, $KU = $K.utils, skin = '';

                if(!_handleSkinEvent.shouldPropagateSkin(widget, type)) {
                    return false;
                } else if(upperBoundModel && upperBoundModel._kwebfw_.uid === widget._kwebfw_.uid) {
                    return false;
                } else {
                    skin = widget[(type+'Skin')];

                    if($KU.is(model, 'widget', 'ListBox') && widget.itemHoverSkin != ''
                    && model.viewType === constants.LISTBOX_VIEW_TYPE_EDITVIEW) {
                        skin = widget.itemHoverSkin;
                    }

                    if($KU.is(model, 'widget', 'TabPane')) {
                        skin = widget.activeFocusSkin;
                    }

                    if(($KU.is(skin, 'string') && skin) || model[type+'StateSkinProperties']) {
                        _handleSkinEvent.resetSkin(widget, (skin+'-'+type), type);
                    }
                }
            }, {owner:true, tabs:true});
        },

        setSkin: function(model, skin, type) {
            var $K = kony.$kwebfw$, $KU = $K.utils,
                $KD = $K.dom, el = model._kwebfw_.view, disabled = false,
                disabledkeys= model._kwebfw_.prop.disabledKeys;

            if(el) {
                if($KU.is(model, 'widget', 'RadioButtonGroup')
                || $KU.is(model, 'widget', 'CheckBoxGroup')
                || ($KU.is(model, 'widget', 'ListBox')
                && model.viewType === constants.LISTBOX_VIEW_TYPE_EDITVIEW)) {

                    if($KU.is(model, 'widget', 'ListBox') && type === 'hover' && model.hoverSkin){
                        $KD.addCls(el, model.hoverSkin + '-hover');
                    }
                    el = _handleSkinEvent.target;

                    if($KU.is(model, 'widget', 'ListBox') && type === 'hover'
                    && $KD.getAttr(el, 'kr') === 'option') {// prevent hover on disabled option
                        if(disabledkeys && disabledkeys.indexOf(el.getAttribute('value')) !== -1) {
                            disabled = true;
                        }
                    }

                    if($KD.hasAttr(el, 'kw') || $KD.hasAttr(el, 'kwf') ||  disabled) {
                        return;
                    }

                    while(!$KD.getAttr(el, 'kr') === 'option') {
                        el = $KD.parent(el);
                    }

                    if(type === 'hover') {
                        model._kwebfw_.hSkinNode = el;
                    } else {
                        model._kwebfw_.fSkinNode = el;
                    }
                } else if($KU.is(model, 'widget', 'TabPane')) {
                    if(type === 'focus'){
                        el = _handleSkinEvent.target;

                        if(($KD.hasAttr(el, 'kw')) || ($KD.hasAttr(el, 'kr'))) {
                            return;
                        }

                        el = $KD.closest(el, 'tabid');
                        $KD.removeCls(el, model.inactiveSkin);
                    } else {
                        return;
                    }
                } else if($KU.is(model, 'widget', 'Calendar')) {
                    if(type === 'focus') {
                        if(model._kwebfw_.picker && $KD.contains(model._kwebfw_.picker, _handleSkinEvent.target)) {
                            return;
                        }
                    }
                } else if($KU.is(model, 'widget', 'DataGrid')) {
                    if(type === 'hover') {
                        el = $KD.closest(_handleSkinEvent.target, 'kr', 'row');

                        if(el) {
                            model._kwebfw_.hSkinNode = el;
                        } else {
                            return;
                        }
                    }
                }
                _handleSkinEvent.dealWithSkinStateConfig(model, el, type, 'set');
                el && $KD.addCls(el, skin);
            }
        },


        setSkinConfig: function(el, skinObj, stateObj, model) {
            var $K = kony.$kwebfw$, $KU = $K.utils, $KD = $K.dom, value,
            $KW = $K.widget, _handlers = $KW.skinHandlers();

            $KU.each(skinObj, function(value, keey) {
                _handlers[keey] && _handlers[keey]({el: el, config: value, model: model});
            });
        },


        setSkinForCalendar: function(model, skin, type) {
            var $K = kony.$kwebfw$, $KU = $K.utils, $KD = $K.dom,
                el = '', kr = '', prop = model._kwebfw_.prop,
                viewConfig = prop.viewConfig ? prop.viewConfig.gridConfig : null,
                selectedSkin = '-kony-calendar-cell-selected';

            if(type === 'hover') {
                el = $KD.parent(_handleSkinEvent.target);
                kr = $KD.getAttr(el, 'kr');
                if(kr === 'month' || kr === 'year' || kr === 'date') {
                    model._kwebfw_.hSkinNode = el;
                    if($KD.getAttr(el, 'aria-selected')) {
                        if(viewConfig) {
                            if((kr === 'month' || kr === 'year') && viewConfig.gridMonthYearSelectedSkin) {
                                selectedSkin = viewConfig.gridMonthYearSelectedSkin;
                            } else if(kr === 'date' && viewConfig.gridCellSelectedSkin) {
                                selectedSkin = viewConfig.gridCellSelectedSkin;
                            }
                        }
                        $KD.removeCls(el, selectedSkin);
                    }
                } else {
                    return;
                }
                el && $KD.addCls(el, skin);
            }
        },

        resetSkinForCalendar: function(model, skin, type) {
            var $K = kony.$kwebfw$, $KU = $K.utils, $KD = $K.dom,
                el = '', kr = '', prop = model._kwebfw_.prop,
                viewConfig = prop.viewConfig ? prop.viewConfig.gridConfig : null,
                selectedSkin = '-kony-calendar-cell-selected';

            if(type === 'hover' && model._kwebfw_.hSkinNode) {
                el = model._kwebfw_.hSkinNode;
                kr = $KD.getAttr(el, 'kr');
                model._kwebfw_.hSkinNode = null;
                if($KD.getAttr(el, 'aria-selected')) {
                    if(viewConfig) {
                        if(viewConfig.gridMonthYearSelectedSkin && (kr === 'month' || kr === 'year')) {
                            selectedSkin = viewConfig.gridMonthYearSelectedSkin;
                        } else if(kr === 'date' && viewConfig.gridCellSelectedSkin) {
                            selectedSkin = viewConfig.gridCellSelectedSkin;
                        }
                    }
                    $KD.addCls(el, selectedSkin);
                }
                el && $KD.removeCls(el, skin);
            }
        },

        setSkinRecursively: function(model, type, upperBoundModel) {
            var $K = kony.$kwebfw$, $KW = $K.widget;

            $KW.closest(model, function(widget) {
                var $K = kony.$kwebfw$, $KU = $K.utils, skin = '';

                if(!_handleSkinEvent.shouldPropagateSkin(widget, type)) {
                    return false;
                } else if(upperBoundModel && upperBoundModel._kwebfw_.uid === widget._kwebfw_.uid) {
                    return false;
                } else {
                    skin = widget[(type+'Skin')];

                    if($KU.is(model, 'widget', 'ListBox') && widget.itemHoverSkin != ''
                    && model.viewType === constants.LISTBOX_VIEW_TYPE_EDITVIEW) {
                        skin = widget.itemHoverSkin;
                    }

                    if($KU.is(model, 'widget', 'TabPane')) {
                        skin = widget.activeFocusSkin;
                    }


                    if(($KU.is(skin, 'string') && skin) || widget[type+'StateSkinProperties']) {
                        _handleSkinEvent.setSkin(widget, (skin+'-'+type), type);
                    }
                }
            }, {owner:true, tabs:true});
        },

        //type can be focus|hover
        shouldPropagateSkin: function(model, type) {
            var $K = kony.$kwebfw$, $KW = $K.widget, flag = true;

            if(!$KW.interactable(model)) {
                flag = false;
            }

            return flag;
        }
    };


    var _handleSystemEvent = {
        blur: function $KE_handleSystemEvent_blur(evt) {
            var $K = kony.$kwebfw$, $KW = $K.widget, $KA = $K.app,
                cf = $KW.model($KA.currentFormUID);

            $K.apm.send(cf, 'AppTransition', {status: 'Background'});
            $K.apm.send(cf, 'FormExit');
        },

        error: function $KE_handleSystemEvent_error(evt) {
            var $K = kony.$kwebfw$, errInfo = {};

            if(evt.errorcode) {
                errInfo.exceptioncode = evt.errorcode;

                if(evt.name) errInfo.exceptionmsg = evt.name;
                if(evt.stack) errInfo.exceptionstacktrace = evt.stack;
                if(evt.fileName) errInfo.exceptionfile = evt.fileName;
                if(evt.lineNumber) errInfo.exceptionline = evt.lineNumber;
                if(evt.message) errInfo.exceptioncustommsg = evt.message;

                $K.apm.send(errInfo.exceptioncode, 'Exception', errInfo);
            } else {
                errInfo.errcode = '';

                if(evt.name) errInfo.errmsg = evt.name;
                if(evt.stack) errInfo.errstacktrace = evt.stack;
                if(evt.fileName) errInfo.errfile = evt.fileName;
                if(evt.lineNumber) errInfo.errline = evt.lineNumber;
                if(evt.message) errInfo.errcustommsg = evt.message;

                $K.apm.send(errInfo.errcode, 'Error', errInfo);
            }
        },

        focus: function $KE_handleSystemEvent_focus(evt) {
            var $K = kony.$kwebfw$, $KW = $K.widget, $KA = $K.app,
                cf = $KW.model($KA.currentFormUID);

            $K.apm.send(cf, 'AppTransition', {status: 'Foreground'});
            $K.apm.send(cf, 'FormEntry');
        },

        hashchange: function $KE_handleSystemEvent_hashchange(evt) {
            var $K = kony.$kwebfw$, $KW = $K.widget, $KA = $K.app,
                hash = location.hash, isFormAlreadyNavigated = null,
                cf = $KW.model($KA.currentFormUID), cfhash = null,
                _getHashString = function(fmodel) {
                    var _hash;
                    if($K.behavior.isCompositeApp) {
                        _hash = '#/'+fmodel.appName+'/'+fmodel.id;
                    } else {
                        _hash = '#_' + fmodel.id;
                    }
                    return _hash;
                },
                _splitHashString = function(hashStr) {
                    return hashStr.split('/');
                },
                formid = null, appName = null;

            $KA.lastInteractionAt = new Date();
            $KW.registerForIdleTimeout();

            cfhash = _getHashString(cf);

            if(hash !== cfhash) {
                hash = hash.substr(2, hash.length);
                isFormAlreadyNavigated = $KW.rootOfForm(hash);
                if(isFormAlreadyNavigated) {
                    if($KA.blocked || $KW.fire(cf, 'onDeviceBack', cf)) {
                        location.hash = cfhash;
                    } else {
                        hash = _splitHashString(hash);
                        if(window[hash[0]]) {
                            window[hash[0]].show();
                        } else {
                            formid = isFormAlreadyNavigated.id;
                            appName = isFormAlreadyNavigated.appName;
                            _kony.mvc.navigate(formid, appName);
                        }
                    }
                } else {
                    location.hash = cfhash;
                }
            }

        },

        orientationchange: function $KE_handleSystemEvent_orientationchange(evt) {
            var $K = kony.$kwebfw$, $KU = $K.utils, $KW = $K.widget, $KA = $K.app,
                cf = $KW.model($KA.currentFormUID), orientation = '', from = '';

            $KA.lastInteractionAt = new Date();
            $KW.registerForIdleTimeout();

            $K.ui.Form2.onOrientation.call(cf, evt);

            orientation = $KU.browser('orientation');

            if(orientation === 'portrait') {
                from = 'LANDSCAPE_TO_PORTRAIT';
            } else if(orientation === 'landscape') {
                from = 'PORTRAIT_TO_LANDSCAPE';
            }

            $K.apm.send(cf, 'Orientation', {from:from});
        },

        resize: function $KE_handleSystemEvent_resize(evt) {
            var $K = kony.$kwebfw$, $KW = $K.widget, $KA = $K.app,
                cf = $KW.model($KA.currentFormUID);

            $KA.lastInteractionAt = new Date();
            $KW.registerForIdleTimeout();
            $K.ui.Form2.onResize.call(cf, evt);
        }
    };


    var _registerEvents = function $KE_registerEvents() {
        var $K = kony.$kwebfw$, $KD = $K.dom, body = $KD.body();

        _registerSystemEvents();
        _registerNormalEvents(body);
        _registerTouchEvents(body);
        _registerSkinEvents(body);
    };


    var _registerFocusSkinEvent = function $KE_registerFocusSkinEvent(body) {
        var $K = kony.$kwebfw$, $KD = $K.dom, touchStartFired = false;

        $KD.on(body, ['mousedown', 'touchstart'], 'fskin', function(evt) {
            var $K = kony.$kwebfw$, $KW = $K.widget, $KD = $K.dom,
                $KA = $K.app, model = null, endEvent = '';

            if(evt.type === 'touchstart') touchStartFired = true;

            if(touchStartFired && evt.type === 'mousedown') {
                touchStartFired = false;
            } else {
                if(evt.type === 'touchstart') {
                    endEvent = ['touchend', 'touchcancel'];
                } else {
                    endEvent = ['mouseup', 'mouseout'];
                }

                //console.error(evt.type+' :: '+touchStartFired); //Don't delete this line
                model = $KW.getModelByNode(evt.target);
                $KA.lastInteractionAt = new Date();
                $KW.registerForIdleTimeout();

                if(model) { //Here evt.type === 'mousedown/touchstart'
                    $KD.on(body, endEvent, 'fskin', function(evt) {
                        var $K = kony.$kwebfw$, $KW = $K.widget, $KD = $K.dom, model = null;

                        //console.error(evt.type+' :: '+touchStartFired); //Don't delete this line
                        $KD.off(body, endEvent, 'fskin');
                        model = $KW.getModelByNode(evt.target);

                        if(model) { //Here evt.type === 'mouseup/mouseout/touchend/touchcancel'
                            if(!$KW.interactable(model)) {
                                $KD.preventDefault(evt);
                            } else {
                                _handleSkinEvent.dealWithFocusSkin(evt);
                            }
                        }
                    }, {passive:false});

                    if(!$KW.interactable(model)) {
                        $KD.preventDefault(evt);
                    } else {
                        _handleSkinEvent.dealWithFocusSkin(evt);
                    }
                }
            }
        }, {passive:false});
    };


    var _registerHoverSkinEvent = function $KE_registerHoverSkinEvent(body) {
        var $K = kony.$kwebfw$, $KU = $K.utils, $KD = $K.dom;

        $KD.on(
            body, 'mousemove', 'hskin',
            $KU.debounce(_handleSkinEvent.dealWithHoverSkin, 17),
            {passive:false}
        );
    };


    var _registerNormalEvents = function $KE_registerNormalEvents(body) {
        var $K = kony.$kwebfw$, $KD = $K.dom, events = [
                'click',
                'dblclick',
                'focusin',  //This will map to "focus"
                'focusout', //This will map to "blur"
                'input',    //Needed for character restriction, without any flickering
                'keyup',
                'keydown',
                'change'
            ];

        $KD.on(body, events, 'wnevent', function(evt) {
            var $K = kony.$kwebfw$, $KW = $K.widget, $KA = $K.app, propagate = true,
                model = $KW.getModelByNode(evt.target), internalHandlers = '',
                $KAR = $K.automation.recorder, code = evt.keyCode || evt.which;

            $KA.lastInteractionAt = new Date();
            $KW.registerForIdleTimeout();
            $KAR && $KAR.normalEventRecording(evt);

            if(model) {
                if(evt.type === 'click'
                || (evt.type === 'keyup' && ([13, 32].indexOf(code) >= 0))) {
                    _handleOwnerItemClick(evt, model);
                } else if(evt.type === 'focusin') {
                    _handleOwnerItemFocus(evt, model);
                } else if(evt.type === 'focusout') {
                    _handleOwnerItemBlur(evt, model);
                }

                if(!$KW.interactable(model)) {
                    $KD.preventDefault(evt);
                } else {
                    internalHandlers = _getInternalHandlers(evt);

                    if(internalHandlers) {
                        propagate = _widgetInternalEventCallback(internalHandlers, evt, model);
                    }

                    propagate && _widgetEventCallback(evt, model);
                }
            }
        }, {passive:false});
    };


    var _registerSkinEvents = function $KE_registerSkinEvents(body) {
        _registerFocusSkinEvent(body);
        _registerHoverSkinEvent(body);
    };


    var _registerSystemEvents = function $KE_registerSystemEvents() {
        var $K = kony.$kwebfw$, $KD = $K.dom, events = [
                'blur',
                'error',
                'focus',
                'hashchange',
                'orientationchange',
                'resize'
            ];

        $KD.on(window, events, 'sysevent', function(evt) {
            _handleSystemEvent[evt.type](evt);
        });
    };


    var _registerTouchEvents = function $KE_registerTouchEvents(body) {
        var $K = kony.$kwebfw$, $KD = $K.dom, propagate = true,
            touchStartFired = false, internalHandlers = '';

        $KD.on(body, ['mousedown', 'touchstart'], 'wtevent', function(evt) {
            var $K = kony.$kwebfw$, $KW = $K.widget, $KD = $K.dom,
                $KA = $K.app, $KAR = $K.automation.recorder,
                model = null, moveEvent = '', endEvent = '';

            if(evt.type === 'touchstart') touchStartFired = true;

            if(touchStartFired && evt.type === 'mousedown') {
                touchStartFired = false;
            } else {
                if(evt.type === 'touchstart') {
                    moveEvent = 'touchmove';
                    endEvent = 'touchend touchcancel';
                } else {
                    moveEvent = 'mousemove';
                    endEvent = 'mouseup mouseout';
                }

                //console.error(evt.type+' :: '+touchStartFired); //Don't delete this line
                model = $KW.getModelByNode(evt.target);
                $KA.lastInteractionAt = new Date();
                $KW.registerForIdleTimeout();
                $KAR && $KAR.touchEventRecording(evt);

                if(model) { //Here evt.type === 'mousedown/touchstart'
                    $KD.on(body, moveEvent, 'wtevent', function(evt) {
                        var $K = kony.$kwebfw$, $KW = $K.widget,
                            $KD = $K.dom, $KAR = $K.automation.recorder,
                            model = $KW.getModelByNode(evt.target);

                        $KAR && $KAR.touchEventRecording(evt);

                        if(model) { //Here evt.type === 'mousemove/touchmove'
                            if(!$KW.interactable(model)) {
                                $KD.preventDefault(evt);
                            } else {
                                internalHandlers = _getInternalHandlers(evt);

                                if(internalHandlers) {
                                    propagate = _widgetInternalEventCallback(internalHandlers, evt, model);
                                }

                                propagate && _widgetEventCallback(evt, model);
                            }
                        }
                    }, {passive:false});

                    $KD.on(body, endEvent, 'wtevent', function(evt) {
                        var $K = kony.$kwebfw$, $KW = $K.widget, $KD = $K.dom,
                            $KAR = $K.automation.recorder, model = null;

                        //console.error(evt.type+' :: '+touchStartFired); //Don't delete this line
                        propagate = true; //Reinitialize
                        $KD.off(body, moveEvent, 'wtevent');
                        $KD.off(body, endEvent, 'wtevent');
                        model = $KW.getModelByNode(evt.target);
                        $KAR && $KAR.touchEventRecording(evt);

                        if(model) { //Here evt.type === 'mouseup/mouseout/touchend/touchcancel'
                            if(!$KW.interactable(model)) {
                                $KD.preventDefault(evt);
                            } else {
                                internalHandlers = _getInternalHandlers(evt);

                                if(internalHandlers) {
                                    propagate = _widgetInternalEventCallback(internalHandlers, evt, model);
                                }

                                propagate && _widgetEventCallback(evt, model);
                            }
                        }
                    }, {passive:false});

                    if(!$KW.interactable(model)) {
                        $KD.preventDefault(evt);
                    } else {
                        internalHandlers = _getInternalHandlers(evt);

                        if(internalHandlers) {
                            propagate = _widgetInternalEventCallback(internalHandlers, evt, model);
                        }

                        propagate && _widgetEventCallback(evt, model);
                    }
                }
            }
        }, {passive:false});
    };


    //All the functions will be called in the scope of owner widget instance
    var _setOwnerSelectedIndex = {
        CollectionView: function $KE_setOwnerSelectedIndex_CollectionView(model) {
            //TODO
            var $K = kony.$kwebfw$, $KU = $K.utils, $KW = $K.widget,
                _ = this._kwebfw_, prop = _.prop,
                index = model._kwebfw_.ii.split(',');

            if($KW.isContainer(model)
            || $KU.is(model, 'widget', 'Image2')
            || $KU.is(model, 'widget', 'Label')) {
                index[0] = parseInt(index[0], 10);
                index[1] = parseInt(index[1], 10);

                _.setFocus = false;
                this.selectedItemIndex = [index[0], index[1]];
                delete _.setFocus;
            }
        },

        DataGrid: function $KE_setOwnerSelectedIndex_DataGrid(model) {
            var $K = kony.$kwebfw$, $KD = $K.dom, $KU = $K.utils,
                $KW = $K.widget, index = null, target = null,
                el = $KW.el(this, 'node');

            if($KU.is(model, 'dom')) { //Here model is evt.target
                $K.ui[$KW.name(this)].performSelection.call(this, model);
            } else if($KU.is(model, 'widget')) {
                //TODO:: need to improve logic
                index = model._kwebfw_.ii.split(',');
                index[0] = parseInt(index[0], 10);
                if(index[0] > -1 && el) {
                    target = $KD.find(el, '[kii="' + model._kwebfw_.ii + '"]')[0];
                    $K.ui[$KW.name(this)].performSelection.call(this, target);
                }
            }
        },

        SegmentedUI2: function $KE_setOwnerSelectedIndex_SegmentedUI2(model) {
            var $K = kony.$kwebfw$, $KU = $K.utils, $KW = $K.widget,
                _ = this._kwebfw_, prop = _.prop,
                selectedIndex = prop.selectedRowIndex,
                index = model._kwebfw_.ii.split(',');

            if($KW.isContainer(model)
            || $KU.is(model, 'widget', 'Image2')
            || $KU.is(model, 'widget', 'Label')) {
                index[0] = parseInt(index[0], 10);
                index[1] = parseInt(index[1], 10);

                if(prop.viewType !== constants.SEGUI_VIEW_TYPE_TABLEVIEW
                || prop.selectionBehavior === constants.SEGUI_DEFAULT_BEHAVIOR) {
                    if(!selectedIndex
                    || index[0] !== selectedIndex[0]
                    || index[1] !== selectedIndex[1]) {
                        if($KU.is(_.swipeContext, 'null') || !_.swipeContext.ignoreRowSelection) {
                            _.setFocus = false;
                            this.selectedRowIndex = [index[0], index[1]];
                            delete _.setFocus;
                        } else {
                            _.swipeContext.ignoreRowSelection = false;
                        }
                    }
                } else if(prop.viewType === constants.SEGUI_VIEW_TYPE_TABLEVIEW) {
                    _.setFocus = false;
                    this.selectedRowIndex = [index[0], index[1]];
                    delete _.setFocus;
                }
            }
        }
    };


    var _shouldPropagate = function $KE_shouldPropagate(konyEventType, model, fired) {
        var propogationEvents = ['onTouchStart', 'onTouchMove', 'onTouchEnd'],
            propagate = true, stopPropagation = {
                onClick: function(widget) {
                    var $K = kony.$kwebfw$, $KU = $K.utils, $KW = $K.widget,
                        passList = ['Image2', 'Label'];

                    if($KW.isContainer(widget) && !$KU.is(widget, 'widget', 'Form2')) {
                        return false;
                    } else if(passList.indexOf($KW.name(widget)) >= 0) {
                        return false;
                    } else {
                        return true;
                    }
                }
            };


        if(propogationEvents.indexOf(konyEventType) >= 0) {
            propagate = true;
        } else if(fired || (stopPropagation[konyEventType]
        && stopPropagation[konyEventType](model) === true)) {
            propagate = false;
        }

        return propagate;
    };


    var _widgetEventCallback = function $KE_widgetEventCallback(evt, model) {
        var $K = kony.$kwebfw$, $KU= $K.utils, $KW = $K.widget, $KD = $K.dom, payload = null,
            touch = null, konyEventType = _getKonyEventType(evt), hrefValue = null, el = null, $KAR = $K.automation.recorder;

        if($KAR && $KAR.isAssertMode()){
            $KAR.handleEventOnWidget(evt, model);
        } else {
            if(konyEventType === 'onClick') {
                $K.apm.send(model, 'Touch', {type:(model._kwebfw_.name+'_Click')});
            } else if(['onTouchStart', 'onTouchEnd'].indexOf(konyEventType) >= 0) {
                $K.apm.send(model, 'Touch', {type:konyEventType});
            }

            if(konyEventType === 'onClick' && $KU.is(model, 'widget', 'RichText')) {
                hrefValue = evt.target.getAttribute('href');
                if(hrefValue) {
                    if($KU.is(model.onClick, 'function')) {
                        $KD.preventDefault(evt);
                        if(!payload) payload = {};
                        payload.name = evt.target.innerText;
                        payload.href = {href:hrefValue};
                    } else if(hrefValue.charAt(0) === "#") {
                        $KD.preventDefault(evt);
                        hrefValue = hrefValue.substring(1, hrefValue.length);
                        el = document.getElementById(hrefValue);
                        if(!el) el = document.querySelector('a[name="' + hrefValue + '"]');
                        el && el.scrollIntoView(); //TODO:
                    }
                }
            }

            if(['onTouchStart', 'onTouchMove', 'onTouchEnd'].indexOf(konyEventType) >= 0) {
                touch = (evt.touches && evt.touches[0])
                    || (evt.changedTouches && evt.changedTouches[0])
                    || evt;

                if(!payload) payload = {};
                payload.x = touch.pageX || touch.clientX;
                payload.y = touch.pageY || touch.clientY;
                touch = $KD.point(model._kwebfw_.view);
                payload.x = (payload.x - touch.x);
                payload.y = (payload.y - touch.y);
            }

            $KW.closest(model, function(widget) {
                var $K = kony.$kwebfw$, $KW = $K.widget, $KD = $K.dom, $KU = $K.utils,
                    omodel = null, item = null, propagate = true, fired = false;

                if(!$KW.interactable(widget)) {
                    return false;
                } else {
                    fired = $KW.fire(widget, konyEventType, widget, payload);

                    if(['focusin', 'focusout'].indexOf(evt.type) === -1
                       && !fired && !$KW.pmodel(widget)) { //e.g. To fire Segment onRowClick
                        omodel = $KW.omodel(widget);

                        if(omodel) {
                            if($KU.is(omodel, 'widget', 'CollectionView') &&
                               ['click', 'keydown', 'keyup'].indexOf(evt.type) > -1) {
                                item = ['onItemSelect', 'onItemKeyDown', 'onItemKeyUp'][['click', 'keydown', 'keyup'].indexOf(evt.type)];
                                propagate = _widgetInternalEventCallback(item, evt, omodel);
                            } else {
                                item = $KD.closest(widget._kwebfw_.view, 'kr', 'item');

                                if(item && $KD.hasAttr(item, ('kwh-'+evt.type))) {
                                    item = $KD.getAttr(item, ('kwh-'+evt.type));
                                    propagate = _widgetInternalEventCallback(item, evt, omodel);
                                }
                            }
                        } else {
                            //Handling Tab onclick event for tab header with template
                            item = (widget._kwebfw_.view) ? $KD.parent(widget._kwebfw_.view) : null;

                            if(item && $KD.hasAttr(item, 'tabid') && $KD.hasAttr(item, ('kwh-'+evt.type))) {
                                omodel = $KW.getModelByNode(item);

                                if(omodel) {
                                    item =  $KD.getAttr(item, ('kwh-'+evt.type));
                                    propagate = _widgetInternalEventCallback(item, evt, omodel);
                                }
                            }
                        }
                    }

                    if(!propagate || !_shouldPropagate(konyEventType, widget, fired)) {
                        return false;
                    }
                }
            }, {owner:true, tabs:false});
        }
    };


    var _widgetInternalEventCallback = function $KE_widgetInternalEventCallback(handlers, evt, model) {
        var $K = kony.$kwebfw$, $KU = $K.utils, finalPropagation = true, $KAR = $K.automation.recorder;

        if($KAR && $KAR.isAssertMode()){
            finalPropagation = false;
            $KAR.handleEventOnWidget(evt, model);
        } else {

            $KU.each(handlers.split(','), function(handler) {
                var $K = kony.$kwebfw$, $KU = $K.utils, $KW = $K.widget, propagate = false;

                if(!$KU.is($K.ui[$KW.name(model)], 'object')) {
                    throw new Error('<$K.ui.'+$KW.name(model)+'> is not defined as an object.');
                } else {
                    if(!$KU.is($K.ui[$KW.name(model)][handler], 'function')) {
                        throw new Error('<$K.ui.'+$KW.name(model)+'.'+handler+'> is not defined as a function.');
                    } else {
                        propagate = $K.ui[$KW.name(model)][handler].call(this, evt);

                        if(!$KU.is(propagate, 'boolean')) {
                            throw new Error('Internal event should strictly return a boolean value.');
                        } else if(!propagate) {
                            finalPropagation = false;
                        }
                    }
                }
            }, model);
        }

        return finalPropagation;
    };


    _registerEvents();
}());