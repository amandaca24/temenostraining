/* global kony */
(function() {
    var $K = kony.$kwebfw$;


    Object.defineProperty(kony.ui, 'ActionItem', {configurable:false, enumerable:false, writable:$K.defWritable(), value:(function() {
        var $K = kony.$kwebfw$;

        var ActionItem = function ActionItem() {};
        $K.utils.inherits(ActionItem, kony.ui.BasicWidget);

        var actionitem__render = function ActionItem$_render(tag) {
            var $super = kony.ui.FlexContainer.base.prototype,
                $K = kony.$kwebfw$, $KU = $K.utils, view = null;

            if(this.isVisible || $K.F.RIVW) {
                view = $super._render.call(this, tag);

                if(!this._kwebfw_.view && this._kwebfw_.ns === 'kony.ui.ActionItem') {
                    $KU.defineProperty(this._kwebfw_, 'view', view);
                }
            }

            return view;
        };

        var actionitem_addAction = function ActionItem$addAction() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.Toast().addAction');
        };

        var actionitem_setAnchorConfiguration = function ActionItem$setAnchorConfiguration() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.Toast().setAnchorConfiguration');
        };

        var actionitem_show = function ActionItem$show() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.Toast().show');
        };

        $K.defKonyProp(ActionItem.prototype, [
            {keey:'_render', value:actionitem__render},
            {keey:'addAction', value:actionitem_addAction},
            {keey:'setAnchorConfiguration', value:actionitem_setAnchorConfiguration},
            {keey:'show', value:actionitem_show}
        ]);

        return ActionItem;
    }())});


    Object.defineProperty(kony.ui, 'BottomSheet', {configurable:false, enumerable:false, writable:$K.defWritable(), value:(function() {
        var $K = kony.$kwebfw$;

        var BottomSheet = function BottomSheet() {};
        $K.utils.inherits(BottomSheet, kony.ui.BasicWidget);

        var bottomsheet__render = function BottomSheet$_render(tag) {
            var $super = kony.ui.FlexContainer.base.prototype,
                $K = kony.$kwebfw$, $KU = $K.utils, view = null;

            if(this.isVisible || $K.F.RIVW) {
                view = $super._render.call(this, tag);

                if(!this._kwebfw_.view && this._kwebfw_.ns === 'kony.ui.BottomSheet') {
                    $KU.defineProperty(this._kwebfw_, 'view', view);
                }
            }

            return view;
        };

        var bottomsheet_destroy = function BottomSheet$destroy() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.BottomSheet().destroy');
        };

        var bottomsheet_dismiss = function BottomSheet$dismiss() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.BottomSheet().dismiss');
        };

        var bottomsheet_show = function BottomSheet$show() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.BottomSheet().show');
        };

        var bottomsheet_setState = function BottomSheet$setState() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.BottomSheet().setState');
        };

        $K.defKonyProp(BottomSheet.prototype, [
            {keey:'_render', value:bottomsheet__render},
            {keey:'destroy', value:bottomsheet_destroy},
            {keey:'dismiss', value:bottomsheet_dismiss},
            {keey:'show', value:bottomsheet_show},
            {keey:'setState', value:bottomsheet_setState}
        ]);

        return BottomSheet;
    }())});


    Object.defineProperty(kony.ui, 'CordovaBrowser', {configurable:false, enumerable:false, writable:$K.defWritable(), value:(function() {
        var $K = kony.$kwebfw$;

        var CordovaBrowser = function CordovaBrowser() {};
        $K.utils.inherits(CordovaBrowser, kony.ui.BasicWidget);

        var cordovabrowser__render = function CordovaBrowser$_render(tag) {
            var $super = kony.ui.FlexContainer.base.prototype,
                $K = kony.$kwebfw$, $KU = $K.utils, view = null;

            if(this.isVisible || $K.F.RIVW) {
                view = $super._render.call(this, tag);

                if(!this._kwebfw_.view && this._kwebfw_.ns === 'kony.ui.CordovaBrowser') {
                    $KU.defineProperty(this._kwebfw_, 'view', view);
                }
            }

            return view;
        };

        var cordovabrowser_canGoBack = function CordovaBrowser$canGoBack() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.CordovaBrowser().canGoBack');
        };

        var cordovabrowser_canGoForward = function CordovaBrowser$canGoForward() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.CordovaBrowser().canGoForward');
        };

        var cordovabrowser_clearHistory = function CordovaBrowser$clearHistory() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.CordovaBrowser().clearHistory');
        };

        var cordovabrowser_evaluateJavaScript = function CordovaBrowser$evaluateJavaScript() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.CordovaBrowser().evaluateJavaScript');
        };

        var cordovabrowser_getHTMLFilesInWebFolder = function CordovaBrowser$getHTMLFilesInWebFolder() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.CordovaBrowser().getHTMLFilesInWebFolder');
        };

        var cordovabrowser_goBack = function CordovaBrowser$goBack() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.CordovaBrowser().goBack');
        };

        var cordovabrowser_goForward = function CordovaBrowser$goForward() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.CordovaBrowser().goForward');
        };

        var cordovabrowser_isCordovaAppsEnabled = function CordovaBrowser$isCordovaAppsEnabled() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.CordovaBrowser().isCordovaAppsEnabled');
        };

        var cordovabrowser_isHtmlPreviewEnabled = function CordovaBrowser$isHtmlPreviewEnabled() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.CordovaBrowser().isHtmlPreviewEnabled');
        };

        var cordovabrowser_isWebAppDevelopmentEnabled = function CordovaBrowser$isWebAppDevelopmentEnabled() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.CordovaBrowser().isWebAppDevelopmentEnabled');
        };

        var cordovabrowser_loadData = function CordovaBrowser$loadData() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.CordovaBrowser().loadData');
        };

        var cordovabrowser_registerForPeekandPop = function CordovaBrowser$registerForPeekandPop() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.CordovaBrowser().registerForPeekandPop');
        };

        var cordovabrowser_reload = function CordovaBrowser$reload() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.CordovaBrowser().reload');
        };

        var cordovabrowser_setOnPeek = function CordovaBrowser$setOnPeek() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.CordovaBrowser().setOnPeek');
        };

        var cordovabrowser_setOnPop = function CordovaBrowser$setOnPop() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.CordovaBrowser().setOnPop');
        };

        var cordovabrowser_unregisterForPeekandPop = function CordovaBrowser$unregisterForPeekandPop() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.CordovaBrowser().unregisterForPeekandPop');
        };

        $K.defKonyProp(CordovaBrowser.prototype, [
            {keey:'_render', value:cordovabrowser__render},
            {keey:'canGoBack', value:cordovabrowser_canGoBack},
            {keey:'canGoForward', value:cordovabrowser_canGoForward},
            {keey:'clearHistory', value:cordovabrowser_clearHistory},
            {keey:'evaluateJavaScript', value:cordovabrowser_evaluateJavaScript},
            {keey:'getHTMLFilesInWebFolder', value:cordovabrowser_getHTMLFilesInWebFolder},
            {keey:'goBack', value:cordovabrowser_goBack},
            {keey:'goForward', value:cordovabrowser_goForward},
            {keey:'isCordovaAppsEnabled', value:cordovabrowser_isCordovaAppsEnabled},
            {keey:'isHtmlPreviewEnabled', value:cordovabrowser_isHtmlPreviewEnabled},
            {keey:'isWebAppDevelopmentEnabled', value:cordovabrowser_isWebAppDevelopmentEnabled},
            {keey:'loadData', value:cordovabrowser_loadData},
            {keey:'registerForPeekandPop', value:cordovabrowser_registerForPeekandPop},
            {keey:'reload', value:cordovabrowser_reload},
            {keey:'setOnPeek', value:cordovabrowser_setOnPeek},
            {keey:'setOnPop', value:cordovabrowser_setOnPop},
            {keey:'unregisterForPeekandPop', value:cordovabrowser_unregisterForPeekandPop}
        ]);

        return CordovaBrowser;
    }())});


    Object.defineProperty(kony.ui, 'NativeContainer', {configurable:false, enumerable:false, writable:$K.defWritable(), value:(function() {
        var $K = kony.$kwebfw$;

        var NativeContainer = function NativeContainer() {};
        $K.utils.inherits(NativeContainer, kony.ui.BasicWidget);

        var nativecontainer__render = function NativeContainer$_render(tag) {
            var $super = kony.ui.FlexContainer.base.prototype,
                $K = kony.$kwebfw$, $KU = $K.utils, view = null;

            if(this.isVisible || $K.F.RIVW) {
                view = $super._render.call(this, tag);

                if(!this._kwebfw_.view && this._kwebfw_.ns === 'kony.ui.NativeContainer') {
                    $KU.defineProperty(this._kwebfw_, 'view', view);
                }
            }

            return view;
        };

        var nativecontainer_getContainerView = function NativeContainer$getContainerView() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.NativeContainer().getContainerView');
        };

        var nativecontainer_registerForPeekandPop = function NativeContainer$registerForPeekandPop() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.NativeContainer().registerForPeekandPop');
        };

        var nativecontainer_setOnPeek = function NativeContainer$setOnPeek() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.NativeContainer().setOnPeek');
        };

        var nativecontainer_setOnPop = function NativeContainer$setOnPop() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.NativeContainer().setOnPop');
        };

        var nativecontainer_unregisterForPeekandPop = function NativeContainer$unregisterForPeekandPop() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.NativeContainer().unregisterForPeekandPop');
        };

        $K.defKonyProp(NativeContainer.prototype, [
            {keey:'_render', value:nativecontainer__render},
            {keey:'getContainerView', value:nativecontainer_getContainerView},
            {keey:'registerForPeekandPop', value:nativecontainer_registerForPeekandPop},
            {keey:'setOnPeek', value:nativecontainer_setOnPeek},
            {keey:'setOnPop', value:nativecontainer_setOnPop},
            {keey:'unregisterForPeekandPop', value:nativecontainer_unregisterForPeekandPop}
        ]);

        return NativeContainer;
    }())});


    Object.defineProperty(kony.ui, 'ReactNativeContainer', {configurable:false, enumerable:false, writable:$K.defWritable(), value:(function() {
        var $K = kony.$kwebfw$;

        var ReactNativeContainer = function ReactNativeContainer() {};
        $K.utils.inherits(ReactNativeContainer, kony.ui.BasicWidget);

        var reactnativecontainer__render = function ReactNativeContainer$_render(tag) {
            var $super = kony.ui.FlexContainer.base.prototype,
                $K = kony.$kwebfw$, $KU = $K.utils, view = null;

            if(this.isVisible || $K.F.RIVW) {
                view = $super._render.call(this, tag);

                if(!this._kwebfw_.view && this._kwebfw_.ns === 'kony.ui.ReactNativeContainer') {
                    $KU.defineProperty(this._kwebfw_, 'view', view);
                }
            }

            return view;
        };

        $K.defKonyProp(ReactNativeContainer.prototype, [
            {keey:'_render', value:reactnativecontainer__render}
        ]);

        return ReactNativeContainer;
    }())});


    Object.defineProperty(kony.ui, 'Toast', {configurable:false, enumerable:false, writable:$K.defWritable(), value:(function() {
        var $K = kony.$kwebfw$;

        var Toast = function Toast() {};
        $K.utils.inherits(Toast, kony.ui.BasicWidget);

        var toast__render = function Toast$_render(tag) {
            var $super = kony.ui.FlexContainer.base.prototype,
                $K = kony.$kwebfw$, $KU = $K.utils, view = null;

            if(this.isVisible || $K.F.RIVW) {
                view = $super._render.call(this, tag);

                if(!this._kwebfw_.view && this._kwebfw_.ns === 'kony.ui.Toast') {
                    $KU.defineProperty(this._kwebfw_, 'view', view);
                }
            }

            return view;
        };

        var toast_show = function Toast$show() {
            var $K = kony.$kwebfw$, $KU = $K.utils;

            $KU.unsupportedAPI('new kony.ui.Toast().show');
        };

        $K.defKonyProp(Toast.prototype, [
            {keey:'_render', value:toast__render},
            {keey:'show', value:toast_show}
        ]);

        return Toast;
    }())});


    /*
    Object.defineProperty(kony.ui, 'UnsupportedWidget01', {configurable:false, enumerable:false, writable:$K.defWritable(), value:(function() {
        var $K = kony.$kwebfw$;

        var UnsupportedWidget01 = function UnsupportedWidget01() {};
        $K.utils.inherits(UnsupportedWidget01, kony.ui.BasicWidget);

        var unsupported01__render = function UnsupportedWidget01$_render(tag) {
            var $super = kony.ui.FlexContainer.base.prototype,
                $K = kony.$kwebfw$, $KU = $K.utils, view = null;

            if(this.isVisible || $K.F.RIVW) {
                view = $super._render.call(this, tag);

                if(!this._kwebfw_.view && this._kwebfw_.ns === 'kony.ui.UnsupportedWidget01') {
                    $KU.defineProperty(this._kwebfw_, 'view', view);
                }
            }

            return view;
        };

        $K.defKonyProp(UnsupportedWidget01.prototype, [
            {key:'_render', value:unsupported01__render}
        ]);

        return UnsupportedWidget01;
    }())});


    Object.defineProperty(kony.ui, 'UnsupportedWidget02', {configurable:false, enumerable:false, writable:false, value:(function() {
        var $K = kony.$kwebfw$;

        var UnsupportedWidget02 = function UnsupportedWidget02() {};
        $K.utils.inherits(UnsupportedWidget02, kony.ui.BasicWidget);

        var unsupported02__render = function UnsupportedWidget02$_render(tag) {
            var $super = kony.ui.FlexContainer.base.prototype,
                $K = kony.$kwebfw$, $KU = $K.utils, view = null;

            if(this.isVisible || $K.F.RIVW) {
                view = $super._render.call(this, tag);

                if(!this._kwebfw_.view && this._kwebfw_.ns === 'kony.ui.UnsupportedWidget02') {
                    $KU.defineProperty(this._kwebfw_, 'view', view);
                }
            }

            return view;
        };

        $K.defKonyProp(UnsupportedWidget02.prototype, [
            {key:'_render', value:unsupported02__render}
        ]);

        return UnsupportedWidget02;
    }())});
    //*/
}());