if (window && window.Windows && Windows && Windows.UI && Windows.UI.Popups) {
    kony.contact.add = function (table) {
        return PWAWrapper.ContactsAPIWrapper.addContact(getWinRTObjectArray([table]));
    }
    kony.contact.find = function (search, needDetails, filterKeys) {
        return PWAWrapper.ContactsAPIWrapper.findContact(getWinRTObjectArray([search, needDetails, filterKeys]));
    }
    kony.contact.remove = function (table) {
        return PWAWrapper.ContactsAPIWrapper.deleteContact(getWinRTObjectArray([table]));
    }
}