
$KI.themes = (function() {
    
    

    var module = {

        initialCssLoadDone: false,

        setcurrenttheme: function(themeid, successcallback, errorcallback) {
            var dwCssFile = "konydesktop.css", headTag = null, link = null,
                i = 0, cssFile = null, existingTag = null, linktags = null,
                currentTheme = null;

            $KU.logExecuting('kony.theme.setCurrentTheme');
            $KU.logExecutingWithParams('kony.theme.setCurrentTheme', themeid, successcallback, errorcallback);
            if(!($KU.inArray($KG["themes"], themeid, true))) {
                errorcallback();
                $KU.logExecutingFinished('kony.theme.setCurrentTheme VIA if !($KU.inArray($KG["themes"], themeid, true)) is true');
            } else  if(module.initialCssLoadDone && themeid == module.getcurrenttheme()) {
                successcallback();
                $KU.logExecutingFinished('kony.theme.setCurrentTheme VIA if themeid == module.getcurrenttheme() is true');
            } else {
                headTag = document.head;
                cssFile = $KG.platformver + (themeid == "default" ? '' : themeid+'/') + dwCssFile;
                if($KG[themeid+'remoteurl']) cssFile = $KG[themeid+'remoteurl'];
                currentTheme = $KG["theme"];
                if($KG[currentTheme+'remoteurl']) dwCssFile = $KG[currentTheme+'remoteurl'];
                link = document.createElement("link");
                link.rel = "stylesheet";
                link.type = "text/css";
                link.href = cssFile;
                if(module.initialCssLoadDone) {
                    link.onload = function() {
                        $KG["theme"] = themeid;
                        successcallback();
                    };
                    link.onerror = function() {
                        errorcallback();
                    };
                }

                linktags = headTag.querySelectorAll('link');
                for(i = 0;i < linktags.length; i++) {
                    if(linktags[i].href.indexOf(dwCssFile) >= 0) {
                       existingTag = linktags[i];
                       break;
                    }
                }
                if(existingTag != null) {
                    headTag.replaceChild(link, existingTag);
                } else {
                    existingTag = headTag.querySelector('style');
                    headTag.insertBefore(link, existingTag);
                }

                if(!module.initialCssLoadDone) {
                    module.initialCssLoadDone = true;
                    $KG["theme"] = themeid;
                    successcallback();
                }

                $KU.logExecutingFinished('kony.theme.setCurrentTheme return 3');
            }
        },

        deletetheme: function(theme, successcallback, errorcallback) {
            $KU.logExecuting('kony.theme.deleteTheme');
            $KU.logExecutingWithParams('kony.theme.deleteTheme', theme, successcallback, errorcallback);
            var themeList = $KG["themes"];
            var initialThemeListLength = themeList.length;
            var finalThemeListLength = themeList.length;
            try {
                for(var i = 0; i < themeList.length; i++) {
                    if(themeList[i] == theme)
                        themeList.splice(i, 1);
                }
                $KG["themes"] = themeList;
                if($KG["theme"] == theme) {
                    module.setcurrenttheme("default", successcallback, errorcallback);
                    $KU.logExecutingFinished('kony.theme.deleteTheme VIA if ($KG["theme"] == theme) is true');
                    return;
                }
                finalThemeListLength = themeList.length;
                $KU.logExecutingFinished('kony.theme.deleteTheme VIA end of the function');
                if(initialThemeListLength - 1 == finalThemeListLength)
                    successcallback();
                else
                    errorcallback();
            } catch(e) {
                $KU.logErrorMessage('Error' + e);
                errorcallback();
            }
        },

        isthemepresent: function(theme) {
            $KU.logExecuting('kony.theme.isThemePresent');
            $KU.logExecutingWithParams('kony.theme.isThemePresent', theme);
            $KU.logExecutingFinished('kony.theme.isThemePresent');
            return $KU.inArray($KG["themes"], theme, true);
        },

        createtheme: function(url, themeIdentifer, onsuccesscallback, onerrorcallback) {
            
            $KU.logExecuting('kony.theme.createTheme');
            $KU.logExecutingWithParams('kony.theme.createTheme', url, themeIdentifer, onsuccesscallback, onerrorcallback);
            if(($KU.inArray($KG["themes"], themeIdentifer, true))) {
                onsuccesscallback();
                $KU.logExecutingFinished('kony.theme.createTheme VIA if ($KU.inArray($KG["themes"], themeIdentifer, true)) is true');
                return;
            }
            try {
                var req = new XMLHttpRequest();
                var cssFile = url;
                req.open("GET", cssFile, true);
                req.timeout = 60000;
                var headTag = document.getElementsByTagName("head");
                $KG[themeIdentifer + 'remoteurl'] = url;

                req.onreadystatechange = function() {
                    if(this.readyState == 4) {
                        if(this.status == 200) {
                            $KG["themes"].push(themeIdentifer);
                            onsuccesscallback();
                            req = null;
                        } else {
                            onerrorcallback();
                        }

                    }
                };
                req.ontimeout = function() {
                    onerrorcallback();
                };
                req.send(null);
                $KU.logExecutingFinished('kony.theme.createTheme VIA try block');
            } catch(e) {
                $KU.logErrorMessage('Error ' + e);
                onerrorcallback();
            }
        },

        allthemes: function() {
            return $KG["themes"];
        },

        getcurrentthemedata: function() {
            $KU.logExecuting('kony.theme.getCurrentThemeData');
            $KU.logExecutingWithParams('kony.theme.getCurrentThemeData');
            $KU.logExecutingFinished('kony.theme.getCurrentThemeData');
            return true;
        },

        getcurrenttheme: function() {
            $KU.logExecuting('kony.theme.getCurrentTheme');
            $KU.logExecutingWithParams('kony.theme.getCurrentTheme');
            $KU.logExecutingFinished('kony.theme.getCurrentTheme');
            return $KG["theme"];
        },

        packagedthemes: function(list) {
            var themeArray = ['default'];
            if(IndexJL == 1) themeArray.push(null);
            for(var i = IndexJL; i < (list.length); i++) {
                themeArray.push(list[i]);
            }
            $KG["themes"] = themeArray;
            $KG["theme"] = "default";
        }
    };


    return module;
}());
