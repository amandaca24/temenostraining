if (window && window.Windows && Windows && Windows.UI && Windows.UI.Popups) {
	kony.os.getBatteryState = function () {
	  return PWAWrapper.BatteryAPIWrapper.getBatteryState();
	}
	kony.os.getBatteryLevel = function () {
	  return PWAWrapper.BatteryAPIWrapper.getBatteryLevel();
	}
	kony.os.registerBatteryService = function (callBack) {
	  var events = new PWAWrapper.CallbackEvents();
	  events.addEventListener("callback", getWinRTFunctionObject(callBack));
	  PWAWrapper.BatteryAPIWrapper.registerBatteryService(events);
	}
	kony.os.unregisterBatteryService = function () {
	  PWAWrapper.BatteryAPIWrapper.unregisterBatteryService();
	}
}