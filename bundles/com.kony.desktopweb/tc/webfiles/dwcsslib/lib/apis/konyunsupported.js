/* global kony */
/* global com */
(function() {
    var $K = kony.$kwebfw$, $KU = $K.utils,
        _notSupported = function(api, channel) {
            var $K = kony.$kwebfw$, $KU = $K.utils;
            $KU.unsupportedAPI(api, channel);
        };


    $K.defKonyProp(kony, [
        {keey:'accelerometer', value:{}}
    ]);
    $KU.defineProperty(kony.accelerometer, 'registerAccelerationEvents', function() {
        _notSupported('kony.accelerometer.registerAccelerationEvents');
    });
    $KU.defineProperty(kony.accelerometer, 'retrieveCurrentAcceleration', function() {
        _notSupported('kony.accelerometer.retrieveCurrentAcceleration');
    });
    $KU.defineProperty(kony.accelerometer, 'startMonitoringAcceleration', function() {
        _notSupported('kony.accelerometer.startMonitoringAcceleration');
    });
    $KU.defineProperty(kony.accelerometer, 'stopMonitoringAcceleration', function() {
        _notSupported('kony.accelerometer.stopMonitoringAcceleration');
    });
    $KU.defineProperty(kony.accelerometer, 'unregisterAccelerationEvents', function() {
        _notSupported('kony.accelerometer.unregisterAccelerationEvents');
    });


    $K.defKonyProp(kony, [
        {keey:'actionExtension', value:{}}
    ]);
    $KU.defineProperty(kony.actionExtension, 'setExtensionsCallbacks', function() {
        _notSupported('kony.actionExtension.setExtensionsCallbacks');
    });


    $KU.defineProperty(kony.application, 'addSettingsMenuItemAt', function() {
        _notSupported('kony.application.addSettingsMenuItemAt');
    });
    $KU.defineProperty(kony.application, 'beginBackgroundTask', function() {
        _notSupported('kony.application.beginBackgroundTask');
    });
    $KU.defineProperty(kony.application, 'createSettingsMenu', function() {
        _notSupported('kony.application.createSettingsMenu');
    });
    $KU.defineProperty(kony.application, 'endBackgroundTask', function() {
        _notSupported('kony.application.endBackgroundTask');
    });
    $KU.defineProperty(kony.application, 'getSettingValue', function() {
        _notSupported('kony.application.getSettingValue');
    });
    $KU.defineProperty(kony.application, 'getApplicationBadgeValue', function() {
        _notSupported('kony.application.getApplicationBadgeValue');
    });
    $KU.defineProperty(kony.application, 'getAppMenuBadgeValue', function() {
        _notSupported('kony.application.getAppMenuBadgeValue');
    });
    $KU.defineProperty(kony.application, 'getCurrentSettingsMenu', function() {
        _notSupported('kony.application.getCurrentSettingsMenu');
    });
    $KU.defineProperty(kony.application, 'isInMultiWindowMode', function() {
        _notSupported('kony.application.isInMultiWindowMode');
    });
    $KU.defineProperty(kony.application, 'openApplicationSettings', function() {
        _notSupported('kony.application.openApplicationSettings');
    });
    $KU.defineProperty(kony.application, 'registerOnKeyPress', function() {
        _notSupported('kony.application.registerOnKeyPress');
    });
    $KU.defineProperty(kony.application, 'removeSettingsMenuItemAt', function() {
        _notSupported('kony.application.removeSettingsMenuItemAt');
    });
    $KU.defineProperty(kony.application, 'removeSecondaryTile', function() {
        _notSupported('kony.application.removeSecondaryTile');
    });
    $KU.defineProperty(kony.application, 'requestReview', function() {
        _notSupported('kony.application.requestReview');
    });
    $KU.defineProperty(kony.application, 'setCheckBoxSelectionImageAlignment', function() {
        _notSupported('kony.application.setCheckBoxSelectionImageAlignment');
    });
    $KU.defineProperty(kony.application, 'setCurrentAppMenuFont', function() {
        _notSupported('kony.application.setCurrentAppMenuFont');
    });
    $KU.defineProperty(kony.application, 'setDefaultListboxPadding', function() {
        _notSupported('kony.application.setDefaultListboxPadding');
    });
    $KU.defineProperty(kony.application, 'setDefaultTextboxPadding', function() {
        _notSupported('kony.application.setDefaultTextboxPadding');
    });
    $KU.defineProperty(kony.application, 'setApplicationBadgeValue', function() {
        _notSupported('kony.application.setApplicationBadgeValue');
    });
    $KU.defineProperty(kony.application, 'setApplicationProperties', function() {
        _notSupported('kony.application.setApplicationProperties');
    });
    $KU.defineProperty(kony.application, 'setAppMenuBadgeValue', function() {
        _notSupported('kony.application.setAppMenuBadgeValue');
    });
    $KU.defineProperty(kony.application, 'setCurrentSettingsMenu', function() {
        _notSupported('kony.application.setCurrentSettingsMenu');
    });
    $KU.defineProperty(kony.application, 'seAppTitle', function() {
        _notSupported('kony.application.seAppTitle');
    });
    $KU.defineProperty(kony.application, 'setSecondaryTile', function() {
        _notSupported('kony.application.setSecondaryTile');
    });
    $KU.defineProperty(kony.application, 'setZoomedOutView', function() {
        _notSupported('kony.application.setZoomedOutView');
    });
    $KU.defineProperty(kony.application, 'zoomIn', function() {
        _notSupported('kony.application.zoomIn');
    });


    $K.defKonyProp(kony, [
        {keey:'backgroundtasks', value:{}}
    ]);
    $KU.defineProperty(kony.backgroundtasks, 'startTask', function() {
        _notSupported('kony.backgroundtasks.startTask');
    });
    $KU.defineProperty(kony.backgroundtasks, 'stopTask', function() {
        _notSupported('kony.backgroundtasks.stopTask');
    });
    $KU.defineProperty(kony.backgroundtasks, 'getTaskDetails', function() {
        _notSupported('kony.backgroundtasks.getTaskDetails');
    });


    $K.defKonyProp(kony, [
        {keey:'camera', value:{}}
    ]);
    $KU.defineProperty(kony.camera, 'releaseRawBytes', function() {
        _notSupported('kony.camera.releaseRawBytes');
    });


    $K.defKonyProp(kony, [
        {keey:'contact', value:{}}
    ]);
    $KU.defineProperty(kony.contact, 'add', function() {
        _notSupported('kony.contact.add');
    });
    $KU.defineProperty(kony.contact, 'details', function() {
        _notSupported('kony.contact.details');
    });
    $KU.defineProperty(kony.contact, 'find', function() {
        _notSupported('kony.contact.find');
    });
    $KU.defineProperty(kony.contact, 'remove', function() {
        _notSupported('kony.contact.remove');
    });


    $KU.defineProperty(kony.crypto, 'createHMacHash', function() {
        _notSupported('kony.crypto.createHMacHash');
    });
    $KU.defineProperty(kony.crypto, 'createPBKDF2Key', function() {
        _notSupported('kony.crypto.createPBKDF2Key');
    });


    $K.defKonyProp(kony, [
        {keey:'dragdrop', value:{}}
    ]);
    $KU.defineProperty(kony.dragdrop, 'DragInteraction', function() {
        _notSupported('kony.dragdrop.DragInteraction');
    });
    $KU.defineProperty(kony.dragdrop, 'DropInteraction', function() {
        _notSupported('kony.dragdrop.DropInteraction');
    });
    $KU.defineProperty(kony.dragdrop, 'removeDragInteraction', function() {
        _notSupported('kony.dragdrop.removeDragInteraction');
    });
    $KU.defineProperty(kony.dragdrop, 'removeDropInteraction', function() {
        _notSupported('kony.dragdrop.removeDropInteraction');
    });


    $K.defKonyProp(kony, [
        {keey:'filter', value:{}}
    ]);
    $KU.defineProperty(kony.filter, 'createFilter', function() {
        _notSupported('kony.filter.createFilter');
    });


    $K.defKonyProp(kony, [
        {keey:'forcetouch', value:{}}
    ]);
    $KU.defineProperty(kony.forcetouch, 'getQuickActionItems', function() {
        _notSupported('kony.forcetouch.getQuickActionItems');
    });
    $KU.defineProperty(kony.forcetouch, 'getStaticQuickActionItems', function() {
        _notSupported('kony.forcetouch.getStaticQuickActionItems');
    });
    $KU.defineProperty(kony.forcetouch, 'removeQuickActionItems', function() {
        _notSupported('kony.forcetouch.removeQuickActionItems');
    });
    $KU.defineProperty(kony.forcetouch, 'setQuickActionItems', function() {
        _notSupported('kony.forcetouch.setQuickActionItems');
    });


    $K.defKonyProp(kony, [
        {keey:'image', value:{}}
    ]);
    $KU.defineProperty(kony.image, 'createImage', function() {
        _notSupported('kony.image.createImage');
    });
    $KU.defineProperty(kony.image, 'createImageFromSnapShot', function() {
        _notSupported('kony.image.createImageFromSnapShot');
    });
    $KU.defineProperty(kony.image, 'cropImageInTiles', function() {
        _notSupported('kony.image.cropImageInTiles');
    });
    $KU.defineProperty(kony.image, 'cropImageInTilesForRects', function() {
        _notSupported('kony.image.cropImageInTilesForRects');
    });


    $K.defKonyProp(kony, [
        {keey:'iMessageExtensions', value:{}}
    ]);
    $KU.defineProperty(kony.iMessageExtensions, 'setExtensionsCallbacks', function() {
        _notSupported('kony.iMessageExtensions.setExtensionsCallbacks');
    });


    $K.defKonyProp(kony, [
        {keey:'intentExtension', value:{}}
    ]);
    $KU.defineProperty(kony.intentExtension, 'setExtensionsCallbacks', function() {
        _notSupported('kony.intentExtension.setExtensionsCallbacks');
    });


    $KU.defineProperty(kony.io.File.prototype, 'copyTo', function() {
        _notSupported('kony.io.File.copyTo');
    });
    $KU.defineProperty(kony.io.File.prototype, 'createDirectory', function() {
        _notSupported('kony.io.File.createDirectory');
    });
    $KU.defineProperty(kony.io.File.prototype, 'createFile', function() {
        _notSupported('kony.io.File.createFile');
    });
    $KU.defineProperty(kony.io.File.prototype, 'exists', function() {
        _notSupported('kony.io.File.exists');
    });
    $KU.defineProperty(kony.io.File.prototype, 'getFilesList', function() {
        _notSupported('kony.io.File.getFilesList');
    });
    $KU.defineProperty(kony.io.File.prototype, 'isDirectory', function() {
        _notSupported('kony.io.File.isDirectory');
    });
    $KU.defineProperty(kony.io.File.prototype, 'isFile', function() {
        _notSupported('kony.io.File.isFile');
    });
    $KU.defineProperty(kony.io.File.prototype, 'moveTo', function() {
        _notSupported('kony.io.File.moveTo');
    });
    $KU.defineProperty(kony.io.File.prototype, 'read', function() {
        _notSupported('kony.io.File.read');
    });
    $KU.defineProperty(kony.io.File.prototype, 'readAsText', function() {
        _notSupported('kony.io.File.readAsText');
    });
    $KU.defineProperty(kony.io.File.prototype, 'remove', function() {
        _notSupported('kony.io.File.remove');
    });
    $KU.defineProperty(kony.io.File.prototype, 'rename', function() {
        _notSupported('kony.io.File.rename');
    });
    $KU.defineProperty(kony.io.File.prototype, 'write', function() {
        _notSupported('kony.io.File.write');
    });


    /*$KU.defineProperty(kony.io, 'FileList', {});
    $KU.defineProperty(kony.io.FileList, 'item', function() {
        _notSupported('kony.io.FileList.item');
    });*/


    $KU.defineProperty(kony.io.FileSystem, 'copyBundledRawFileTo', function() {
        _notSupported('kony.io.FileSystem.copyBundledRawFileTo');
    });
    $KU.defineProperty(kony.io.FileSystem, 'getAppGroupDirectoryPath', function() {
        _notSupported('kony.io.FileSystem.getAppGroupDirectoryPath');
    });
    $KU.defineProperty(kony.io.FileSystem, 'getApplicationDirectoryPath', function() {
        _notSupported('kony.io.FileSystem.getApplicationDirectoryPath');
    });
    $KU.defineProperty(kony.io.FileSystem, 'getCacheDirectoryPath', function() {
        _notSupported('kony.io.FileSystem.getCacheDirectoryPath');
    });
    $KU.defineProperty(kony.io.FileSystem, 'getDatabaseDirectoryPath', function() {
        _notSupported('kony.io.FileSystem.getDatabaseDirectoryPath');
    });
    $KU.defineProperty(kony.io.FileSystem, 'getDataDirectoryPath', function() {
        _notSupported('kony.io.FileSystem.getDataDirectoryPath');
    });
    $KU.defineProperty(kony.io.FileSystem, 'getExternalStorageDirectoryPath', function() {
        _notSupported('kony.io.FileSystem.getExternalStorageDirectoryPath');
    });
    $KU.defineProperty(kony.io.FileSystem, 'getFile', function() {
        _notSupported('kony.io.FileSystem.getFile');
    });
    $KU.defineProperty(kony.io.FileSystem, 'getRawDirectoryPath', function() {
        _notSupported('kony.io.FileSystem.getRawDirectoryPath');
    });
    $KU.defineProperty(kony.io.FileSystem, 'getSupportDirectoryPath', function() {
        _notSupported('kony.io.FileSystem.getSupportDirectoryPath');
    });
    $KU.defineProperty(kony.io.FileSystem, 'isExternalStorageAvailable', function() {
        _notSupported('kony.io.FileSystem.isExternalStorageAvailable');
    });


    $K.defKonyProp(kony, [
        {keey:'keychain', value:{}}
    ]);
    $KU.defineProperty(kony.keychain, 'remove', function() {
        _notSupported('kony.keychain.remove');
    });
    $KU.defineProperty(kony.keychain, 'retrieve', function() {
        _notSupported('kony.keychain.retrieve');
    });
    $KU.defineProperty(kony.keychain, 'save', function() {
        _notSupported('kony.keychain.save');
    });


    $K.defKonyProp(kony, [
        {keey:'lang', value:{}}
    ]);
    $KU.defineProperty(kony.lang, 'getUncaughtExceptionHandler', function() {
        _notSupported('kony.lang.getUncaughtExceptionHandler');
    });
    $KU.defineProperty(kony.lang, 'setUncaughtExceptionHandler', function() {
        _notSupported('kony.lang.setUncaughtExceptionHandler');
    });


    $K.defKonyProp(kony, [
        {keey:'localAuthentication', value:{}}
    ]);
    $KU.defineProperty(kony.localAuthentication, 'authenticate', function() {
        _notSupported('kony.localAuthentication.authenticate');
    });
    $KU.defineProperty(kony.localAuthentication, 'getBiometryType', function() {
        _notSupported('kony.localAuthentication.getBiometryType');
    });
    $KU.defineProperty(kony.localAuthentication, 'cancelAuthentication', function() {
        _notSupported('kony.localAuthentication.cancelAuthentication');
    });
    $KU.defineProperty(kony.localAuthentication, 'getStatusForAuthenticationMode', function() {
        _notSupported('kony.localAuthentication.getStatusForAuthenticationMode');
    });


    $K.defKonyProp(kony, [
        {keey:'localnotifications', value:{}}
    ]);
    $KU.defineProperty(kony.localnotifications, 'cancel', function() {
        _notSupported('kony.localnotifications.cancel');
    });
    $KU.defineProperty(kony.localnotifications, 'create', function() {
        _notSupported('kony.localnotifications.create');
    });
    $KU.defineProperty(kony.localnotifications, 'getNotifications', function() {
        _notSupported('kony.localnotifications.getNotifications');
    });
    $KU.defineProperty(kony.localnotifications, 'setCallbacks', function() {
        _notSupported('kony.localnotifications.setCallbacks');
    });


    $K.defKonyProp(kony, [
        {keey:'map', value:{}}
    ]);
    $KU.defineProperty(kony.map, 'containsLocation', function() {
        _notSupported('kony.map.containsLocation');
    });
    $KU.defineProperty(kony.map, 'distanceBetween', function() {
        _notSupported('kony.map.distanceBetween');
    });
    $KU.defineProperty(kony.map, 'decode', function() {
        _notSupported('kony.map.decode');
    });
    $KU.defineProperty(kony.map, 'searchRoutes', function() {
        _notSupported('kony.map.searchRoutes');
    });


    $KU.defineProperty(kony.media, 'createFromFile', function() {
        _notSupported('kony.media.createFromFile');
    });
    $KU.defineProperty(kony.media, 'createFromUri', function() {
        _notSupported('kony.media.createFromUri');
    });


    $KU.defineProperty(kony.net, 'urlDecode', function() {
        _notSupported('kony.net.urlDecode');
    });
    $KU.defineProperty(kony.net, 'urlEncode', function() {
        _notSupported('kony.net.urlEncode');
    });


    $K.defKonyProp(kony.net, [
        {keey:'cache', value:{}}
    ]);
    $KU.defineProperty(kony.net.cache, 'setMemoryAndDiskCapacity', function() {
        _notSupported('kony.net.cache.setMemoryAndDiskCapacity');
    });
    $KU.defineProperty(kony.net.cache, 'getMemoryCapacity', function() {
        _notSupported('kony.net.cache.getMemoryCapacity');
    });
    $KU.defineProperty(kony.net.cache, 'getDiskCapacity', function() {
        _notSupported('kony.net.cache.getDiskCapacity');
    });
    $KU.defineProperty(kony.net.cache, 'getCurrentDiskUsage', function() {
        _notSupported('kony.net.cache.getCurrentDiskUsage');
    });
    $KU.defineProperty(kony.net.cache, 'getCurrentMemoryUsage', function() {
        _notSupported('kony.net.cache.getCurrentMemoryUsage');
    });
    $KU.defineProperty(kony.net.cache, 'setCacheConfig', function() {
        _notSupported('kony.net.cache.setCacheConfig');
    });


    $K.defKonyProp(kony, [
        {keey:'notificationContentExtension', value:{}},
    ]);
    $KU.defineProperty(kony.notificationContentExtension, 'setExtensionsCallbacks', function() {
        _notSupported('kony.notificationContentExtension.setExtensionsCallbacks');
    });


    $K.defKonyProp(kony, [
        {keey:'notificationsettings', value:{}}
    ]);
    $KU.defineProperty(kony.notificationsettings, 'createAction', function() {
        _notSupported('kony.notificationsettings.createAction');
    });
    $KU.defineProperty(kony.notificationsettings, 'createCategory', function() {
        _notSupported('kony.notificationsettings.createCategory');
    });
    $KU.defineProperty(kony.notificationsettings, 'registerCategory', function() {
        _notSupported('kony.notificationsettings.registerCategory');
    });


    $KU.defineProperty(kony.os, 'getDeviceId', function() {
        _notSupported('kony.os.getDeviceId');
    });
    $KU.defineProperty(kony.os, 'hasAccelerometerSupport', function() {
        _notSupported('kony.os.hasAccelerometerSupport');
    });
    $KU.defineProperty(kony.os, 'registerSpeechRecognizer', function() {
        _notSupported('kony.os.registerSpeechRecognizer');
    });
    $KU.defineProperty(kony.os, 'startSpeechRecognition', function() {
        _notSupported('kony.os.startSpeechRecognition');
    });
    $KU.defineProperty(kony.os, 'stopSpeechRecognition', function() {
        _notSupported('kony.os.stopSpeechRecognition');
    });
    $KU.defineProperty(kony.os, 'unregisterSpeechRecognizer', function() {
        _notSupported('kony.os.unregisterSpeechRecognizer');
    });
    $KU.defineProperty(kony.os, 'getBatteryLevel', function() {
        _notSupported('kony.os.getBatteryLevel');
    });
    $KU.defineProperty(kony.os, 'registerBatteryChange', function() {
        _notSupported('kony.os.registerBatteryChange');
    });
    $KU.defineProperty(kony.os, 'unregisterBatteryChange', function() {
        _notSupported('kony.os.unregisterBatteryChange');
    });


    $K.defKonyProp(kony, [
        {keey:'payment', value:{}}
    ]);
    $KU.defineProperty(kony.payment, 'canWeMakePayment', function() {
        _notSupported('kony.payment.canWeMakePayment');
    });
    $KU.defineProperty(kony.payment, 'getPaymentData', function() {
        _notSupported('kony.payment.getPaymentData');
    });
    $KU.defineProperty(kony.payment, 'getSupportedPaymentNetworks', function() {
        _notSupported('kony.payment.getSupportedPaymentNetworks');
    });
    $KU.defineProperty(kony.payment, 'updateTransactionResponse', function() {
        _notSupported('kony.payment.updateTransactionResponse');
    });


    $KU.defineProperty(kony.phone, 'addCalendarEvent', function() {
        _notSupported('kony.phone.addCalendarEvent');
    });
    $KU.defineProperty(kony.phone, 'cancelVibration', function() {
        _notSupported('kony.phone.cancelVibration');
    });
    $KU.defineProperty(kony.phone, 'findCalendarEvents', function() {
        _notSupported('kony.phone.findCalendarEvents');
    });
    $KU.defineProperty(kony.phone, 'getRemoveEventOptions', function() {
        _notSupported('kony.phone.getRemoveEventOptions');
    });
    $KU.defineProperty(kony.phone, 'hasVibratorSupport', function() {
        _notSupported('kony.phone.hasVibratorSupport');
    });
    $KU.defineProperty(kony.phone, 'openEmail', function() {
        _notSupported('kony.phone.openEmail');
    });
    $KU.defineProperty(kony.phone, 'performHapticFeedback', function() {
        _notSupported('kony.phone.performHapticFeedback');
    });
    $KU.defineProperty(kony.phone, 'removeCalendarEvent', function() {
        _notSupported('kony.phone.removeCalendarEvent');
    });
    $KU.defineProperty(kony.phone, 'sendSMS', function() {
        _notSupported('kony.phone.sendSMS');
    });
    $KU.defineProperty(kony.phone, 'startVibration', function() {
        _notSupported('kony.phone.startVibration');
    });



    $K.defKonyProp(kony, [
        {keey:'reactNative', value:{}}
    ]);
    $KU.defineProperty(kony.reactNative, 'setCallback', function() {
        _notSupported('kony.reactNative.setCallback');
    });
    $KU.defineProperty(kony.reactNative, 'sendResult', function() {
        _notSupported('kony.reactNative.sendResult');
    });


    $KU.defineProperty(kony, 'runOnMainThread', function() {
        _notSupported('kony.runOnMainThread');
    });
    $KU.defineProperty(kony, 'runOnWorkerThread', function() {
        _notSupported('kony.runOnWorkerThread');
    });


    $K.defKonyProp(kony, [
        {keey:'shareExtensions', value:{}}
    ]);
    $KU.defineProperty(kony.shareExtensions, 'popConfigurationViewController', function() {
        _notSupported('kony.shareExtensions.popConfigurationViewController');
    });
    $KU.defineProperty(kony.shareExtensions, 'pushConfigurationViewController', function() {
        _notSupported('kony.shareExtensions.pushConfigurationViewController');
    });
    $KU.defineProperty(kony.shareExtensions, 'setExtensionsCallbacks', function() {
        _notSupported('kony.shareExtensions.setExtensionsCallbacks');
    });


    $K.defKonyProp(kony, [
        {keey:'stream', value:{}}
    ]);
    $KU.defineProperty(kony.stream, 'registerDataStream', function() {
        _notSupported('kony.stream.registerDataStream');
    });
    $KU.defineProperty(kony.stream, 'deregisterDataStream', function() {
        _notSupported('kony.stream.deregisterDataStream');
    });
    $KU.defineProperty(kony.stream, 'setCallback', function() {
        _notSupported('kony.stream.setCallback');
    });


    $K.defKonyProp(kony, [
        {keey:'todayExtension', value:{}}
    ]);
    $KU.defineProperty(kony.todayExtension, 'setExtensionsCallbacks', function() {
        _notSupported('kony.todayExtension.setExtensionsCallbacks');
    });


    $K.defKonyProp(kony, [
        {keey:'types', value:{}}
    ]);
    $KU.defineProperty(kony.types, 'RawBytes', function() {
        _notSupported('kony.types.RawBytes');
    });
    $KU.defineProperty(kony.types.RawBytes.prototype, 'readAsText', function() {
        _notSupported('kony.types.RawBytes.readAsText');
    });


    $K.defKonyProp(kony, [
        {keey:'web', value:{}}
    ]);
    $KU.defineProperty(kony.web, 'WebAuthenticationSession', function() {
        _notSupported('kony.web.WebAuthenticationSession');
    });


    $K.defKonyProp(window, [
        {keey:'com', value:{}, items:[
            {keey:'kony', value:{}}
        ]},
    ]);


    $KU.defineProperty(com.kony, 'BeaconRegion', function() {
        _notSupported('com.kony.BeaconRegion');
    });
    $KU.defineProperty(com.kony, 'PeripheralManager', function() {
        _notSupported('com.kony.PeripheralManager');
    });
    $KU.defineProperty(com.kony, 'isPassLibraryAvailable', function() {
        _notSupported('com.kony.isPassLibraryAvailable');
    });


    $KU.defineProperty(com.kony, 'Beacon', function() {
        _notSupported('com.kony.Beacon');
    });
    $KU.defineProperty(com.kony.Beacon.prototype, 'getrssi', function() {
        _notSupported('com.kony.Beacon.getrssi');
    });
    $KU.defineProperty(com.kony.Beacon.prototype, 'getMajor', function() {
        _notSupported('com.kony.Beacon.getMajor');
    });
    $KU.defineProperty(com.kony.Beacon.prototype, 'getMinor', function() {
        _notSupported('com.kony.Beacon.getMinor');
    });
    $KU.defineProperty(com.kony.Beacon.prototype, 'getAccuracy', function() {
        _notSupported('com.kony.Beacon.getAccuracy');
    });
    $KU.defineProperty(com.kony.Beacon.prototype, 'getProximity', function() {
        _notSupported('com.kony.Beacon.getProximity');
    });
    $KU.defineProperty(com.kony.Beacon.prototype, 'getProximityUUIDString', function() {
        _notSupported('com.kony.Beacon.getProximityUUIDString');
    });


    $KU.defineProperty(com.kony, 'BeaconManager', function() {
        _notSupported('com.kony.BeaconManager');
    });
    $KU.defineProperty(com.kony.BeaconManager.prototype, 'getRangedRegions', function() {
        _notSupported('com.kony.BeaconManager.getRangedRegions');
    });
    $KU.defineProperty(com.kony.BeaconManager.prototype, 'authorizationStatus', function() {
        _notSupported('com.kony.BeaconManager.authorizationStatus');
    });
    $KU.defineProperty(com.kony.BeaconManager.prototype, 'getMonitoredRegions', function() {
        _notSupported('com.kony.BeaconManager.getMonitoredRegions');
    });
    $KU.defineProperty(com.kony.BeaconManager.prototype, 'requestStateForRegion', function() {
        _notSupported('com.kony.BeaconManager.requestStateForRegion');
    });
    $KU.defineProperty(com.kony.BeaconManager.prototype, 'stopRangingBeaconsInRegion', function() {
        _notSupported('com.kony.BeaconManager.stopRangingBeaconsInRegion');
    });
    $KU.defineProperty(com.kony.BeaconManager.prototype, 'startMonitoringBeaconRegion', function() {
        _notSupported('com.kony.BeaconManager.startMonitoringBeaconRegion');
    });
    $KU.defineProperty(com.kony.BeaconManager.prototype, 'startRangingBeaconsInRegion', function() {
        _notSupported('com.kony.BeaconManager.startRangingBeaconsInRegion');
    });
    $KU.defineProperty(com.kony.BeaconManager.prototype, 'stopMonitoringBeaconsRegion', function() {
        _notSupported('com.kony.BeaconManager.stopMonitoringBeaconsRegion');
    });
    $KU.defineProperty(com.kony.BeaconManager.prototype, 'isRangingAvailableForBeaconRegions', function() {
        _notSupported('com.kony.BeaconManager.isRangingAvailableForBeaconRegions');
    });
    $KU.defineProperty(com.kony.BeaconManager.prototype, 'setAuthorizationStatusChangedCallback', function() {
        _notSupported('com.kony.BeaconManager.setAuthorizationStatusChangedCallback');
    });
    $KU.defineProperty(com.kony.BeaconManager.prototype, 'setMonitoringStartedForRegionCallback', function() {
        _notSupported('com.kony.BeaconManager.setMonitoringStartedForRegionCallback');
    });
    $KU.defineProperty(com.kony.BeaconManager.prototype, 'isMonitoringAvailableForBeaconRegions', function() {
        _notSupported('com.kony.BeaconManager.isMonitoringAvailableForBeaconRegions');
    });


    $KU.defineProperty(com.kony, 'PeripheralManager', function() {
        _notSupported('com.kony.PeripheralManager');
    });
    $KU.defineProperty(com.kony.PeripheralManager.prototype, 'isAdvertising', function() {
        _notSupported('com.kony.PeripheralManager.isAdvertising');
    });
    $KU.defineProperty(com.kony.PeripheralManager.prototype, 'stopAdvertising', function() {
        _notSupported('com.kony.PeripheralManager.stopAdvertising');
    });
    $KU.defineProperty(com.kony.PeripheralManager.prototype, 'authorizationStatus', function() {
        _notSupported('com.kony.PeripheralManager.authorizationStatus');
    });
    $KU.defineProperty(com.kony.PeripheralManager.prototype, 'startAdvertisingWithMeasuredPower', function() {
        _notSupported('com.kony.PeripheralManager.startAdvertisingWithMeasuredPower');
    });


    $KU.defineProperty(com.kony, 'PassLibrary', function() {
        _notSupported('com.kony.PassLibrary');
    });
    $KU.defineProperty(com.kony.PassLibrary.prototype, 'addPassWithCompletionCallback', function() {
        _notSupported('com.kony.PassLibrary.addPassWithCompletionCallback');
    });
    $KU.defineProperty(com.kony.PassLibrary.prototype, 'addPassesWithCompletionCallback', function() {
        _notSupported('com.kony.PassLibrary.addPassesWithCompletionCallback');
    });
    $KU.defineProperty(com.kony.PassLibrary.prototype, 'containsPass', function() {
        _notSupported('com.kony.PassLibrary.containsPass');
    });
    $KU.defineProperty(com.kony.PassLibrary.prototype, 'getPassWithTypeIdentifierAndSerialNumber', function() {
        _notSupported('com.kony.PassLibrary.getPassWithTypeIdentifierAndSerialNumber');
    });
    $KU.defineProperty(com.kony.PassLibrary.prototype, 'getPasses', function() {
        _notSupported('com.kony.PassLibrary.getPasses');
    });
    $KU.defineProperty(com.kony.PassLibrary.prototype, 'removePass', function() {
        _notSupported('com.kony.PassLibrary.removePass');
    });
    $KU.defineProperty(com.kony.PassLibrary.prototype, 'replacePassWithPass', function() {
        _notSupported('com.kony.PassLibrary.replacePassWithPass');
    });
}());