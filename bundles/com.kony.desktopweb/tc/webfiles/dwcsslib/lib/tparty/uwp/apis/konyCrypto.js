if (window && window.Windows && Windows && Windows.UI && Windows.UI.Popups) {
    kony.crypto.asymmetricEncrypt = function (alias, inputstring, propertiesTable) {
        return PWAWrapper.CryptoWrapper.asymmetricEncrypt(getWinRTObjectArray([alias, inputstring, propertiesTable]));
    }
    kony.crypto.asymmetricDecrypt = function (alias, encryptedString, propertiesTable) {
        return PWAWrapper.CryptoWrapper.asymmetricDecrypt(getWinRTObjectArray([alias, encryptedString, propertiesTable]));
    }
    kony.crypto.createHash = function (algo, inputstring) {
        return PWAWrapper.CryptoWrapper.createHash(getWinRTObjectArray([algo, inputstring]));
    }
    kony.crypto.createPBKDF2Key = function (algo, password, salt, iteration, klen) {
        return PWAWrapper.CryptoWrapper.createPBKDF2Key(getWinRTObjectArray([algo, password, salt, iteration, klen]));
    }
    kony.crypto.decrypt = function (algo, generatedkey, encryptedRawbytes, propertiesTable) {
        return PWAWrapper.CryptoWrapper.decrypt(getWinRTObjectArray([algo, generatedkey, encryptedRawbytes, propertiesTable], [generatedkey, encryptedRawbytes]));
    }
    kony.crypto.deleteKey = function (uniqueID) {
        return PWAWrapper.CryptoWrapper.deleteKey(getWinRTObjectArray([uniqueID]));
    }
    kony.crypto.encrypt = function (algo, generatedkey, inputstring, propertiesTable) {
        return PWAWrapper.CryptoWrapper.encrypt(getWinRTObjectArray([algo, generatedkey, inputstring, propertiesTable], [generatedkey]));
    }
    kony.crypto.generateAsymmetricKeyPair = function (propertiesTable) {
        return PWAWrapper.CryptoWrapper.generateAsymmetricKeyPair(getWinRTObjectArray([propertiesTable]));
    }
    kony.crypto.generateSecureRandom = function (propertiesTable) {
        return PWAWrapper.CryptoWrapper.generateSecureRandom(getWinRTObjectArray([propertiesTable]));
    }
    kony.crypto.newKey = function (algo, keystrength, propertiesTable) {
        return PWAWrapper.CryptoWrapper.newKey(getWinRTObjectArray([algo, keystrength, propertiesTable]));
    }
    kony.crypto.readKey = function (uniqueID) {
        return PWAWrapper.CryptoWrapper.readKey(getWinRTObjectArray([uniqueID]));
    }
    kony.crypto.retrieveAsymmetricPublicKey = function (alias) {
        return PWAWrapper.CryptoWrapper.retrieveAsymmetricPublicKey(getWinRTObjectArray([alias]));
    }
    kony.crypto.retrievePublicKey = function (algo, inputsource, islocalresource) {
        return PWAWrapper.CryptoWrapper.retrievePublicKey(getWinRTObjectArray([algo, inputsource, islocalresource]));
    }
    kony.crypto.saveKey = function (name, key) {
        return PWAWrapper.CryptoWrapper.saveKey(getWinRTObjectArray([name, key], [key]));
    }
}