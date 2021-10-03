if (window && window.Windows && Windows && Windows.UI && Windows.UI.Popups) {
    kony.store.clear = function () {
        return PWAWrapper.IO.StoreWrapper.clear();
    }
    kony.store.getItem = function (keyname) {
        var returnValue = PWAWrapper.IO.StoreWrapper.getItem(getWinRTObjectArray([keyname]));
        return getJSArray(returnValue);
    }
    kony.store.removeItem = function (keyname) {
        return PWAWrapper.IO.StoreWrapper.removeItem(getWinRTObjectArray([keyname]));
    }
    kony.store.setItem = function (key, value) {
        return PWAWrapper.IO.StoreWrapper.setItem(getWinRTObjectArray([key, value]));
    }
    kony.store.key = function (index) {
        return PWAWrapper.IO.StoreWrapper.key(getWinRTObjectArray([index]));
    }
    kony.store.length = function () {
        return PWAWrapper.IO.StoreWrapper.lengthOfItems();
    }

    kony.ds.read = function (name, storeContext) {
        var returnValue = PWAWrapper.IO.DataStoreWrapper.read(getWinRTObjectArray([name, storeContext]));
        return getJSArray(returnValue);
    }
    kony.ds.remove = function (name, storeContext) {
        return PWAWrapper.IO.DataStoreWrapper.remove(getWinRTObjectArray([name, storeContext]));
    }
    kony.ds.save = function (inputtable, name, metainfo, storeContext) {
        return PWAWrapper.IO.DataStoreWrapper.save(getWinRTObjectArray([inputtable, name, metainfo, storeContext]));
    }
}