kony.events = {
    widgetEventMap: {},
    hiddenIFrame: null,
    isFrameworkEventsRegistered: false,

    addEvent: function(kEventType, kWidgetType, kEventHandler) {
        kony.events.widgetEventMap[kWidgetType] = kony.events.widgetEventMap[kWidgetType] || {};
        kony.events.widgetEventMap[kWidgetType][kEventType] = kEventHandler;
    },

    getEventHandler: function(eventObject) {
        eventObject = eventObject || window.event;
        
        
        var targetWidget = eventObject.target || eventObject.srcElement;
        var preventDefault = true, widget;
        var eventData, cellTemplateNode = null;

        if($KAR && $KAR.isAssertMode()) {
            kony.events.preventDefault(eventObject);
            return;
        }

        
        if($KG["__idletimeout"] && $KG["__idletimeout"]["enabled"]) {
            var reset = $KI.appevents.resettimer();
            if(reset === false) return;
        }


        if(eventObject.type != "mousedown")
            $KW.Appmenu && $KW.Appmenu.hidemoreappmenuitems();

        cellTemplateNode = $KU.getParentByAttribute(targetWidget, 'kcelltemplate');
        if(cellTemplateNode != null) {
            targetWidget = cellTemplateNode.parentElement;
        }

        
        if(targetWidget.getAttribute('w-type') != "Calendar" && targetWidget.getAttribute('kwidgettype') != "Calendar") {
            $KW.Calendar && $KW.Calendar.destroyCalendar(null, null, targetWidget);
        }
        if(targetWidget.getAttribute('w-type-inactive')) {
            return;
        }


        
        if(eventObject.type == "click" && typeof cvox == "undefined" && ($KU.isTouchSupported || $KU.isPointerSupported) && $KG["targetWidget"] && ($KG["moved"] || ($KG["targetWidget"] && targetWidget != $KG["targetWidget"] && (targetWidget.getAttribute('w-type') != "Calendar")))) {
            
            if(targetWidget.tagName == 'A' && targetWidget.getAttribute('href')) {
                kony.events.stopPropagation(eventObject);
                kony.events.preventDefault(eventObject);
            }
            
            $KG["targetWidget"] = "";
            $KG["moved"] = false;

            var src = eventObject.srcElement;
            
            if((src.getAttribute && src.getAttribute("kwidgettype") == "Calendar") || (src.parentNode && src.parentNode.getAttribute && src.parentNode.getAttribute("kwidgettype") == "Calendar")) {
                
            } else {
                return;
            }
        }

        if(targetWidget) {
            var targetWidgetType = targetWidget.getAttribute(kony.constants.KONY_WIDGET_TYPE);

            if(targetWidget.tagName == 'A')
                eventData = [targetWidget.innerText, targetWidget.getAttribute('href')];

            if(targetWidget.getAttribute('tpwidgettype')) {
                return;
            } else if(!targetWidgetType) {
                
                var targetChild = targetWidget.childNodes[0];
                if(targetWidget.getAttribute("index") && targetChild && targetChild.getAttribute("kwidgettype") == "Segment") {
                    targetWidget = targetChild;
                    targetWidgetType = "Segment";
                } else {
                    
                    var konyWidget = $KU.getParentByAttribute(targetWidget, kony.constants.KONY_WIDGET_TYPE);
                    
                    if(targetWidget && targetWidget.tagName == "CANVAS" && $KU.isIE11 && konyWidget && konyWidget.getAttribute("kwidgettype") == "googlemap") {
                        return;
                    }
                    var thirdPartyWidget = $KU.getParentByAttribute(targetWidget, 'tpwidgettype');
                    targetWidget = konyWidget;
                    
                    if(!targetWidget || thirdPartyWidget) {
                        return;
                    }
                    targetWidgetType = targetWidget.getAttribute(kony.constants.KONY_WIDGET_TYPE);
                }
            }

            if(targetWidgetType == 'RadioButtonGroup' || targetWidgetType == 'CheckBoxGroup' || targetWidgetType == 'ListBox') {
                
                if($KU.preventClickEvent(eventObject, targetWidget))
                    return;
            }

            
            var widgetModel = $KU.getModelByNode(targetWidget);
            if(widgetModel && widgetModel.disabled)
                return;


            var widgetEventObj = kony.events.widgetEventMap[targetWidgetType];
            if(widgetEventObj && widgetEventObj[eventObject.type]) {
                

                
                if(!$KW.Utils.isWidgetInteractable(targetWidget, true)) {
                    return;
                }

                
                var eventHandler = widgetEventObj[eventObject.type];
                if(targetWidgetType == 'RichText') {
                    
                    if(!widgetModel.onclick)
                        preventDefault = false;
                }
                var target = eventObject.target || eventObject.srcElement;
                if(!(targetWidgetType == "TextField" || targetWidgetType == "CheckBoxGroup" || targetWidgetType == "TextArea" ||
                        targetWidgetType == "RadioButtonGroup" || targetWidgetType == "ListBox" || (targetWidgetType == "DataGrid" && target.type == "checkbox"))) {
                    if(eventObject.type == 'keydown' ) {
                        preventDefault = false;
                        if(eventObject.keyCode == 13 || eventObject.keyCode == 32) {
                            preventDefault = true;
                        }
                    }
                    if(preventDefault) {
                        kony.events.stopPropagation(eventObject);
                        kony.events.preventDefault(eventObject);
                    }
                }

                var editableCombos = document.querySelectorAll("div[name='SelectOptions']");
                if(editableCombos) {
                    for(var i = 0; i < editableCombos.length; i++) {
                        if(editableCombos[i].style.display == "block") {
                            if(targetWidget.id != editableCombos[i].parentNode.id)
                                editableCombos[i].style.display = "none";
                        }
                    }
                }

                
                
                if(targetWidgetType == 'RichText' && eventData) 
                    eventHandler(eventObject, targetWidget, eventData);
                else
                    eventHandler(eventObject, targetWidget, target);

                if(!kony.system.activity.hasActivity()) {
                    $KW.unLoadWidget();
                }
            }
        }
    },

    addEventListener: function(object, type, listener, bCapture) {
        if(!object)
            return;
        if(!listener)
            listener = kony.events.getEventHandler;
        if(!bCapture)
            bCapture = false;

        if(object.addEventListener)
            object.addEventListener(type, listener, bCapture); 
        else if(object.attachEvent)
            object.attachEvent('on' + type, listener); 
    },

    removeEventListener: function(object, type, listener, bCapture) {
        if(!object)
            return;
        if(!listener)
            listener = kony.events.getEventHandler;
        if(!bCapture)
            bCapture = false;

        if(object.removeEventListener)
            object.removeEventListener(type, listener, bCapture); 
        else if(object.attachEvent)
            object.detachEvent('on' + type, listener); 
    },

    preventDefault: function(eventObject) {
        if(!eventObject)
            return;

        if(eventObject.preventDefault)
            eventObject.preventDefault();
        else
            eventObject.returnValue = false;
    },

    stopPropagation: function(eventObject) {
        if(!eventObject)
            return;
        if(eventObject.stopPropagation) {
            eventObject.stopPropagation();
            eventObject.stopImmediatePropagation && eventObject.stopImmediatePropagation();
        } else
            eventObject.cancelBubble = true;
    },

    ontouchstartHandler: function(e) {
        if(($KU.isIE || $KU.isPointerSupported ? e : e.changedTouches)) {
            var target = e.changedTouches ? (e.changedTouches[0].target || e.changedTouches[0].srcElement) : (e.target || e.srcElement);
            var widgetNode;
            if(target.nodeType == 3)
                target = target.parentNode;
            $KG["targetWidget"] = target;
            $KG["moved"] = false;
        }
    },

    ontouchmoveHandler: function(e) {
        var up = false;
        var down = false;
            $KG["moved"] = true;

    },

    registerDocumentEvents: function() {
        var main = ($KU.isWindowsPhone && $KU.isIE9) ? document : document.getElementById("__MainContainer");

        kony.events.addEventListener(main, 'click');
        kony.events.addEventListener(main, 'contextmenu');
        kony.events.addEventListener(main, 'mousedown');
        kony.events.addEventListener(main, 'mouseup');
        kony.events.addEventListener(main, 'input');
        kony.events.addEventListener(main, 'change');
        kony.events.addEventListener(main, 'keydown');
        kony.events.addEventListener(main, 'keyup');
        if($KG["useNativeScroll"]) {
            kony.events.addEventListener(main, 'touchstart', function() {});
            kony.events.addEventListener(main, 'touchmove', function() {});
        }
        kony.appinit.initializeWidgets();
        kony.events.orientationregistration();
        kony.events.addEventListener(window, 'unload', kony.events.unregisterListeners);
        window.onbeforeunload = function(e) {
            if(window.refreshMessage) {
                setTimeout(function() {
                    $KG["__appservice"] && $KG["__appservice"]({
                        isRefresh: true,
                        refreshForm: $KG["__currentForm"]
                    });
                }, 500);
                return refreshMessage;
            }
        }
        kony.events.isFrameworkEventsRegistered = true;
        kony.events.formDisableonModalPopup();
    },

    formDisableonModalPopup: function() {
        kony.events.addEventListener(document, "focus", function(event) {
            var modalpopup = document.querySelector("div.popupcontainer form");

            if(modalpopup) {
                kony.web.logger("log", modalpopup + " " + modalpopup.id);
                var dialog = document.getElementById(modalpopup.id);
                if(dialog && !dialog.contains(event.target)) {
                    event.stopPropagation();
                    
                    if(kony.appinit.isChrome) {
                        var inpElement = dialog.querySelector('select,input,a,textarea');
                        inpElement && inpElement.focus();
                    } else {
                        dialog.tabIndex = -1;
                        dialog.focus();
                    }
                }
            }
        }, true);
    },

    unregisterListeners: function(formID) {
        var main = $KU.isWindowsPhone ? document : document.getElementById("__MainContainer");
        kony.events.removeEventListener(main, 'click');
        kony.events.removeEventListener(main, 'touchstart');
        kony.events.removeEventListener(main, 'touchmove');
        kony.events.removeEventListener(main, 'change');
        kony.events.removeEventListener(main, 'keydown');
        kony.events.removeEventListener(main, 'keyup');
        kony.events.removeEventListener(main, 'touchstart');
        kony.events.removeEventListener(main, 'mousedown');
        kony.events.removeEventListener(main, 'mouseup');



        
        if($KU.hashChange) {
            kony.events.removeEventListener(window, 'hashchange');
        }

        
        $KW.Form.delistSystemTimerActions();
    },

    windowSizeChange: function() {
        if($KG.appbehaviors["responsive"] === true) {
            var resizeDelay =  $KU.orientationDelay;
            
            
            if(kony.appinit.isIDevice && kony.appinit.isPWAStandalone()) {
                resizeDelay = 100;
            }
            setTimeout(function () {
                if($KW.FlexUtils.isFlexContainer($KG["__currentForm"])) {
                    $KW.Form.initializeFlexContainersIfNeeded($KG["__currentForm"], function(formNode) {
                        formNode.style.height = $KW.Form.getFormHeight();
                        $KW.Form.resizeHandler($KG["__currentForm"], $KU.getWindowWidth());
                    });
                    $KG.__currentForm.forceLayout();
                } else {
                    $KW.Form.resizeHandler($KG["__currentForm"], $KU.getWindowWidth());
                }
            }, resizeDelay);
        }
    },
    

    windowOrientationChange: function() {
        var event = window.event;
        var orientation = $KU.detectOrientation();
        var winNewWidth = $KU.getWindowWidth();
        var winNewHeight = $KU.getWindowHeight();

        if(orientation != undefined && orientation == $KG["__orientation"]) {
            if(kony.appinit.isMob || kony.appinit.isTablet) {
                $KW.Form.initializeFlexContainersIfNeeded($KG["__currentForm"], function() {
                    $KW.Form.setFormDimensions($KG["__currentForm"]);
                });
            }
            return;
        }
        else
            $KG["__orientation"] = orientation;
        if($KG["__currentForm"]) {

            
            window.clearTimeout(kony.events.orientationTimeoutId);
            kony.events.orientationTimeoutId = setTimeout(function() {
                
                var eventList = kony.events.widgetEventMap || {};
                for(var k in eventList) {
                    var widgetType = eventList[k];
                    var eventHandler = widgetType["onorientationchange"] || widgetType["onresize"];
                    eventHandler && eventHandler($KG["__currentForm"].id, $KG["__orientation"]);
                }

                $KW.Form.resizeForm($KG["__currentForm"].id, true);

            }, $KU.orientationDelay);
        }
        

    },

    orientationregistration: function() {
        $KG["__orientation"] = $KU.detectOrientation();
        kony.events.addEventListener(window, "resize", kony.events.windowSizeChange);
        if(!kony.appinit.isMob && !kony.appinit.isTablet) {
            return;
        }
        var orientationEvent = ($KU.isOrientationSupported && !$KU.isAndroid) ? "orientationchange" : "resize";
        kony.events.addEventListener(window, orientationEvent, kony.events.windowOrientationChange);
        if($KU.isOrientationSupported && $KU.isAndroid)
            kony.events.addEventListener(window, "orientationchange", kony.events.windowOrientationChange);
    },

    canExecuteEventHandler: function(widgetModel, event) {
        if(widgetModel[event]) {
            return true;
        }
        return false;
    },

    executeBoxEvent: function(wModel, rowdata, containerModel) {
        if(rowdata && containerModel) { 
            var rowModelData = null,
                clickHandler = null,
                extendedModel = null,
                context;

            if(containerModel.wType == 'Segment' || containerModel.wType == "CollectionView") {
                var sectionIndex = containerModel.currentIndex[0];
                var rowIndex = containerModel.currentIndex[1];
                var clonedTemplate = $KW.Utils.getClonedModelByContainerUsingIndex(containerModel, rowIndex, sectionIndex);

                if(!clonedTemplate) {
                    return false;
                }
                wModel = $KU.getValueFromObjectByPath($KW.Utils.getWidgetPathByModel(wModel), clonedTemplate);
                if(containerModel.wType == 'Segment') {
                    context = {
                        sectionIndex: sectionIndex,
                        rowIndex: rowIndex,
                        widgetInfo: containerModel
                    };
                } else {
                    context = {
                        sectionIndex: sectionIndex,
                        itemIndex: rowIndex,
                        widgetInfo: containerModel
                    };
                }
            }

            parentModel = wModel;

            while(parentModel) {
                var widgetData = containerModel.widgetdatamap ? rowdata[containerModel.widgetdatamap[parentModel.id]] : rowdata[parentModel.id];

                if(widgetData && (containerModel.wType != 'Segment') && (containerModel.wType != 'CollectionView')) {
                    rowModelData = $KU.cloneObj(widgetData);
                    if(typeof rowModelData === 'string') {
                        rowModelData = (parentModel.wType === 'Image') ? {
                            "src": rowModelData
                        } : {
                            "text": rowModelData
                        };
                    }
                    if(!IndexJL) {
                        for(var p in rowModelData) {
                            if(rowModelData.hasOwnProperty(p) && p !== p.toLowerCase()) {
                                rowModelData[p.toLowerCase()] = rowModelData[p];
                            }
                        }
                    }

                    clickHandler = rowModelData.onclick || parentModel.onclick;
                    if(clickHandler && rowModelData.enable !== false) {
                        extendedModel = $KU.extend(rowModelData, parentModel);
                        this.fireBoxEvent(extendedModel, context);
                        return true;
                    }
                } else if(this.canExecuteEventHandler(parentModel, "onclick") && parentModel.enable !== false) {
                    this.fireBoxEvent(parentModel, context);
                    return true;
                }

                parentModel = parentModel.parent;
                if(!parentModel) return false;
            }
        } else {
            var formId = wModel.pf;
            var pModel = wModel;
            var form = $KG['__currentForm'] || $KU.getTemplateModel(formId, wModel.appName);
            while(pModel) {
                
                if(this.canExecuteEventHandler(pModel, "onclick") || (pModel.parent && formId == pModel.parent.id && pModel.parent.wType != 'HBox') || pModel.id == form.id) {
                    if(this.canExecuteEventHandler(pModel, "onclick")) {
                        this.fireBoxEvent(pModel);
                        return true;
                    }
                    return false;
                }
                
                if(form.topLayerFCModal && pModel === form.topLayerFCModal) {
                    return true;
                }
                pModel = pModel.parent;
            }
            return false;
        }
    },



    
    fireBoxEvent: function(widgetModel, context) {
        var eventReference = $KU.returnEventReference(widgetModel.onclick);
        eventReference && (context ? $KU.executeWidgetEventHandler(widgetModel, eventReference, context) : $KU.executeWidgetEventHandler(widgetModel, eventReference));
        $KU.onEventHandler(widgetModel);
    },

    
    executeActionOnContainer: function(containerModel, params) {
        var execActionBeforeChildFlag = params.execActionBeforeChildFlag;

        for(var i = 0; i < containerModel.children.length; i++) {
            var childModel = containerModel[containerModel.children[i]];
            childModel = $KW.Utils.getActualWidgetModel(childModel);

            if(childModel.isContainerWidget) {
                if(execActionBeforeChildFlag) {
                    kony.events.executeActionEvt(childModel, params);
                }
                kony.events.executeActionOnContainer(childModel, params);
                if(!execActionBeforeChildFlag) {
                    kony.events.executeActionEvt(childModel, params);
                }
            }
        }
    },

    
    executeActionOnComponent: function(wArray, params) {
        var i = 0,
            wModel = null;
        var execActionBeforeChildFlag = params.execActionBeforeChildFlag;

        for(i; i < wArray.length; i++) {
            if(wArray[i].isContainerWidget) {
                wModel = $KW.Utils.getActualWidgetModel(wArray[i]);
                if(execActionBeforeChildFlag) {
                    kony.events.executeActionEvt(wModel, params);
                }
                kony.events.executeActionOnContainer(wModel, params);
                if(!execActionBeforeChildFlag) {
                    kony.events.executeActionEvt(wModel, params);
                }
            }
        }
    },

    executeActionEvt: function(widgetModel, params) {
        var eventType = params.eventType;
        var actionEvt = widgetModel[eventType];

        if(!actionEvt) return;
        if(widgetModel.isMaster || widgetModel.wType == "Form") {
            var actionref = $KU.returnEventReference(actionEvt);
            if(eventType == "onbreakpointhandler" || eventType == "onbreakpointchange") {
                actionref && $KU.executeWidgetEventHandler(widgetModel, actionref, params.bodyWidth);
            } else {
                actionref && $KU.executeWidgetEventHandler(widgetModel, actionref);
            }
        }
    },

    browserback: {
        currentHash: window.location.hash,

        HASH_LENGTH: 2,

        
        handleBrowserBackEvent: function() {
            var showForm = false;
            var prevFormId, prevHash, prevAppName;
            if($KG["__idletimeout"] && $KG["__idletimeout"]["enabled"]) {
                $KI.appevents.resettimer();
            }
            
            

            if(location.hash && kony.events.browserback.currentHash && location.hash !== kony.events.browserback.currentHash) {
                showForm = true;
            }

            var formModel = $KG["__currentForm"];
            if(showForm && formModel) {
                var ondeviceback = $KU.returnEventReference(formModel.ondeviceback);
                if(ondeviceback) {
                    
                    kony.events.browserback.updateURLWithLocation(formModel.id, formModel.appName);
                    ondeviceback();
                    return;
                }
                $KI.window.dismissLoadingScreen();
                $KW.Calendar && $KW.Calendar.destroyCalendar();
                prevHash = location.hash.substr(kony.events.browserback.HASH_LENGTH);

                if(prevHash === "") {
                    
                    window.history.go(-1);
                    return;
                }

                prevFormId = $KU.getFormInfoFromURL().formId;
                prevAppName = $KU.getFormInfoFromURL().appName;

                var previousFormModel = $KU.getFormModel(prevFormId, prevAppName);
                if(previousFormModel && prevFormId !== formModel.id) {
                    previousFormModel["isfromBrowserBack"] = true;
                    if(previousFormModel.konyControllerName) {
                        _kony.mvc.navigate(prevFormId, prevAppName);
                    } else {
                        previousFormModel.show();
                    }

                }
            }
        },

        
        
        updateURLWithLocation: function(formID, appName) {
            if(formID) {
                if($KG.appbehaviors['isCompositeApp'] == true) {
                    location.hash = kony.events.browserback.currentHash =
                    '#/' + appName +'/' +formID;
                } else {
                    location.hash = kony.events.browserback.currentHash =
                    '#_' + formID;
                }
            }
        },

        setHistory: function() {
            if(kony.events.hiddenIFrame.location.hash != location.hash) {
                
                kony.events.hiddenIFrame.document.open();
                kony.events.hiddenIFrame.document.close();
                kony.events.hiddenIFrame.location.hash = location.hash;
            }
        }

    }
};


window.onload = function() {
    setTimeout(function() {
        window.scrollTo(0, 1);
    }, 100);
};

window.onbeforeprint = function(e) {
    var formModel = kony.application.getCurrentForm(),
        formNode = $KU.getNodeByModel(formModel);

    formModel.media = {type:'print', height:formNode.style.height, width:document.body.style.width};
    formNode.style.height = formNode.scrollHeight + 'px';
    document.body.style.width = formModel.media.width;
};

window.onafterprint = function(e) {
    var formModel = kony.application.getCurrentForm(),
        formNode = $KU.getNodeByModel(formModel);

    document.body.style.width = formModel.media.width;
    formNode.style.height = formModel.media.height;
    delete formModel.media;
};
