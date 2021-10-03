/* global kony */
Object.defineProperty(kony, 'theme', {configurable:false, enumerable:false, writable:false, value:(function() {
    var _ns = {}, _remoteUrl = {}, _appLoadThemeCall = true, $K = kony.$kwebfw$;


    var _applyStyleSheet = function(identifier) {
        var $K = kony.$kwebfw$, $KU = $K.utils, $KA = $K.app,
            index = $KA.supportedThemes.indexOf(identifier),
            enabled = false, disabled = false;

        if(index >= 0 && identifier !== $KA.currentTheme) {
            $KU.each(document.styleSheets, function(sheet) {
                var $K = kony.$kwebfw$, $KA = $K.app, theme = '';

                if(sheet.ownerNode.tagName === 'LINK'
                && sheet.ownerNode.hasAttribute('ktheme')) {
                    theme = sheet.ownerNode.getAttribute('ktheme');

                    if(enabled && disabled) {
                        return true;
                    } else {
                        if(theme === identifier) {
                            enabled = true;
                            sheet.disabled = false;
                        } else if($KA.currentTheme === theme) {
                            disabled = true;
                            sheet.disabled = true;
                        }
                    }
                }
            });

            $KA.currentTheme = identifier;
        }
    };


    var _createTheme = function(url, identifier, onsuccesscallback, onerrorcallback) {
        var $K = kony.$kwebfw$, $KU = $K.utils, $KG = $K.globals, $KA = $K.app;

        $KU.log({api:'kony.theme.createTheme', enter:true});

        //NOTE:: From VIZ, sometime we get 'defaultTheme' and sometime 'default'
        if(identifier === 'defaultTheme') identifier = 'default';

        if($KA.supportedThemes.indexOf(identifier) >= 0) {
            $KU.log({api:'kony.theme.createTheme', exit:true});

            if($KU.is(onsuccesscallback, 'function')) {
                onsuccesscallback();
            }
        } else {
            $KU.loadStyle(url, {ktheme:identifier},
                function() {
                    var $K = kony.$kwebfw$, $KU = $K.utils, $KA = $K.app,
                        stylesheet = $KU.getThemeStyleSheet(identifier);

                    if(stylesheet) {
                        stylesheet.disabled = true;
                        _remoteUrl[identifier] = url;
                        $KA.supportedThemes.push(identifier);
                        $KU.log({api:'kony.theme.createTheme', exit:true});

                        if($KU.is(onsuccesscallback, 'function')) {
                            onsuccesscallback();
                        }
                    } else {
                        $KU.log({api:'kony.theme.createTheme', exit:true});

                        if($KU.is(onerrorcallback, 'function')) {
                            onerrorcallback();
                        }
                    }
                },

                function() {
                    var $K = kony.$kwebfw$, $KU = $K.utils;

                    $KU.log({api:'kony.theme.createTheme', exit:true});

                    if($KU.is(onerrorcallback, 'function')) {
                        onerrorcallback();
                    }
                }
            );
        }
    };


    var _deleteTheme = function(identifier, onsuccesscallback, onerrorcallback) {
        var $K = kony.$kwebfw$, $KU = $K.utils,
            $KA = $K.app, link = null, index = -1;

        $KU.log({api:'kony.theme.deleteTheme', enter:true});

        if(_remoteUrl[identifier]) {
            delete _remoteUrl[identifier];
            $KA.supportedThemes.splice(index, 1);

            if(identifier === $KA.currentTheme) {
                _setCurrentTheme('default');
            }

            link = document.head.querySelector('link[ktheme="'+identifier+'"]');
            link && document.head.removeChild(link);
            $KU.log({api:'kony.theme.deleteTheme', exit:true});

            if($KU.is(onsuccesscallback, 'function')) {
                onsuccesscallback();
            }
        } else {
            if($KU.is(onerrorcallback, 'function')) {
                onerrorcallback();
            }
            $KU.log({api:'kony.theme.deleteTheme', exit:true});
        }
    };


    var _getAllThemes = function() {
        var $K = kony.$kwebfw$, $KU = $K.utils, $KA = $K.app;

        $KU.log({api:'kony.theme.getAllThemes', enter:true});
        $KU.log({api:'kony.theme.getAllThemes', exit:true});

        return $KA.supportedThemes.slice(0);
    };


    var _getCurrentTheme = function() {
        var $K = kony.$kwebfw$, $KU = $K.utils, $KA = $K.app;

        $KU.log({api:'kony.theme.getCurrentTheme', enter:true});
        $KU.log({api:'kony.theme.getCurrentTheme', exit:true});

        return $KA.currentTheme;
    };


    var _getCurrentThemeData = function() {
        var $K = kony.$kwebfw$, $KU = $K.utils;

        $KU.log({api:'kony.theme.getCurrentThemeData', enter:true});
        $KU.log({api:'kony.theme.getCurrentThemeData', exit:true});

        return null;
    };

    var _isThemePresent = function(identifier) {
        var $K = kony.$kwebfw$, $KU = $K.utils, $KA = $K.app;

        $KU.log({api:'kony.theme.isThemePresent', enter:true});
        //NOTE:: From VIZ, sometime we get 'defaultTheme' and sometime 'default'
        if(identifier === 'defaultTheme') identifier = 'default';
        $KU.log({api:'kony.theme.isThemePresent', exit:true});

        return ($KA.supportedThemes.indexOf(identifier) >= 0) ? true : false;
    };


    var _packagedthemes = function(themes) {
        var $K = kony.$kwebfw$, $KU = $K.utils, $KA = $K.app, index = -1;

        $KU.log({api:'kony.theme.packagedthemes', enter:true});

        //NOTE:: From VIZ, sometime we get 'defaultTheme' and sometime 'default'
        index = themes.indexOf('defaultTheme');

        if(index !== -1) {
            themes.splice(index, 1);

            if(themes.indexOf('default') === -1) {
                themes.splice(index, 0, 'default');
            }
        }

        $KA.supportedThemes = themes;

        $KU.log({api:'kony.theme.packagedthemes', exit:true});
    };


    var _setCurrentTheme = function(identifier, onsuccesscallback, onerrorcallback) {
        var $K = kony.$kwebfw$, $KU = $K.utils,
            $KG = $K.globals, $KA = $K.app, src = '';

        $KU.log({api:'kony.theme.setCurrentTheme', enter:true});

        //NOTE:: From VIZ, sometime we get 'defaultTheme' and sometime 'default'
        if(identifier === 'defaultTheme') identifier = 'default';

        if($KA.supportedThemes.indexOf(identifier) === -1) {
            $KU.log({api:'kony.theme.setCurrentTheme', exit:true});

            if($KU.is(onerrorcallback, 'function')) {
                onerrorcallback(); //Theme not supported
            }
        } else if(identifier === $KA.currentTheme) {
            $KU.log({api:'kony.theme.setCurrentTheme', exit:true});

            if($KU.is(onsuccesscallback, 'function')) {
                onsuccesscallback(); //Asked theme is same as current theme
            }
        } else if($KU.getThemeStyleSheet(identifier)) {
            _applyStyleSheet(identifier); //Theme was used once previously
            $KU.log({api:'kony.theme.setCurrentTheme', exit:true});

            if($KU.is(onsuccesscallback, 'function')) {
                onsuccesscallback();
            }
        } else { //Theme was never used, so loading it from network
            src = ($KG.platform + '/themes/' + identifier + '/theme.css');

            $KU.loadStyle(src, {ktheme:identifier},
                function() {
                    var $K = kony.$kwebfw$, $KU = $K.utils;

                    _applyStyleSheet(identifier);
                    $KU.log({api:'kony.theme.setCurrentTheme', exit:true});

                    if(!_appLoadThemeCall && $KU.is(onsuccesscallback, 'function')) {
                        onsuccesscallback(); //Successfully loaded theme from network
                    }

                    _appLoadThemeCall = false;
                },

                function() {
                    var $K = kony.$kwebfw$, $KU = $K.utils;

                    $KU.log({api:'kony.theme.setCurrentTheme', exit:true});

                    if(!_appLoadThemeCall && $KU.is(onerrorcallback, 'function')) {
                        onerrorcallback(); //Failed to load theme from network
                    }

                    _appLoadThemeCall = false;
                }
            );

            if(_appLoadThemeCall && $KU.is(onsuccesscallback, 'function')) {
                onsuccesscallback();
            }
        }
    };

    var _setSkinsProperties = function(skinObj) {
        var $K = kony.$kwebfw$, $KU = $K.utils, $KA = $K.app, $KW = $K.widget,
            stylesheet = null, rules, skins = Object.keys(skinObj),
            _handlers = $KW.skinHandlers();

        stylesheet = $KU.getThemeStyleSheet($KA.currentTheme);

        rules = stylesheet.cssRules || stylesheet.rules;
        $KU.each(skins, function(skin) {
            $KU.each(rules, function(rule) {
                if(rule.selectorText.indexOf(skin + ',') === 1) {
                    $KU.each(skinObj[skin], function(value, keey) {
                        _handlers[keey] && _handlers[keey]({rule: rule, config: value});
                    });
                    return true;
                }
            });
        });
    };

    $K.defKonyProp(_ns, [
        {keey:'createTheme', value:_createTheme},
        {keey:'deleteTheme', value:_deleteTheme},
        {keey:'getAllThemes', value:_getAllThemes},
        {keey:'getCurrentTheme', value:_getCurrentTheme},
        {keey:'getCurrentThemeData', value:_getCurrentThemeData},
        {keey:'isThemePresent', value:_isThemePresent},
        {keey:'packagedthemes', value:_packagedthemes},
        {keey:'setCurrentTheme', value:_setCurrentTheme},
        {keey:'setSkinsProperties', value:_setSkinsProperties}
    ]);


    return _ns;
}())});
