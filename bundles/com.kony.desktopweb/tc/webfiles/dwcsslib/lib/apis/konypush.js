//kony push notifications

Object.defineProperty(kony, 'push', {configurable:false, enumerable:false, writable:false, value:(function() {
    var _ns = {}, $K = kony.$kwebfw$, $KU = $K.utils, $KW = $K.widget;

    var onsuccessfulregistration, onfailureregistration,
        onlinenotification, offlinenotification,
        onsuccessfulderegistration, onfailurederegistration, messaging;


    (function() {
        var config = localStorage.getItem(kony.$kwebfw$.app.id + '_' + 'pushConfig');
        if(config) {
            config = JSON.parse(config);
            if(!messaging) {
                firebase.initializeApp(config);
                messaging = firebase.messaging();
                messaging.usePublicVapidKey(config.publicKey);
            }
            messaging.onMessage(function(payload) {
                $KU.log('Push notification received data is '+ JSON.stringify(payload));
                onlinenotification && onlinenotification(payload);
            });
        }
    })();


    function __getPermission(config) {
        messaging.requestPermission().then(function() {
            $KU.log('Notification permission granted.');
            //konySwRegistration at PWA level.
            if(konySwRegistration) {
                $KU.log('Service worker registration succeeded.');
                messaging.useServiceWorker(konySwRegistration);
                localStorage.setItem(kony.$kwebfw$.app.id + '_' + 'pushConfig', JSON.stringify(config));
                __getToken(messaging);
            } else {
               $KU.log('Service worker registration failed:'+ error);
                onfailureregistration && onfailureregistration({'errorCode' : '1406',
                                                                'errormessage' : 'Service worker registration failed'});
            }
         }).catch(function(err) {
            $KU.log('Unable to get permission to notify.'+ err);
            onfailureregistration && onfailureregistration({'errorCode' : '1403',
                                                            'errormessage' : 'permission is not available'});
        });
    }


    function __getToken(messaging) {
        messaging.getToken().then(function(token) {
            if(token) {
                localStorage.setItem(kony.$kwebfw$.app.id + '_' + 'pushId', token);
                $KU.log('token is '+ token);
                messaging.onMessage(function(payload) {
                    $KU.log('Push notification received. Data is '+ JSON.stringify(payload));
                    onlinenotification && onlinenotification(payload);
                });
                onsuccessfulregistration(token);
            } else {
                $KU.log('No Instance ID token available. Request permission to generate one.');
                onfailureregistration && onfailureregistration({'errorCode' : '1403',
                                                                'errormessage' : 'Unknown Error'});
            }
        }).catch(function(err) {
            $KU.log('An error occurred while retrieving token. '+ err);
            onfailureregistration && onfailureregistration({'errorCode' : '1402',
                                                            'errormessage' : 'PNS token is not available'});

        })
    }


    var deRegister = function() {
        $KU.log({api:'kony.push.deRegister', enter:true});
        var config = localStorage.getItem(kony.$kwebfw$.app.id + '_' + 'pushConfig');
        config =  JSON.parse(config);
        var token =localStorage.getItem(kony.$kwebfw$.app.id + '_' + 'pushId');

        if(config && token) {
            $KU.log('kony.push.deRegister');
            messaging.deleteToken(token).then(function() {
                $KU.log('succssfully unregistered from FCM.');
                onsuccessfulderegistration && onsuccessfulderegistration();
                localStorage.removeItem(kony.$kwebfw$.app.id + '_' + 'pushId');
                localStorage.removeItem(kony.$kwebfw$.app.id + '_' + 'pushConfig');
            }).catch(function(err) {
                console.error('unable to unregister from FCM. '+ JSON.stringify(err));
                onfailurederegistration && onfailurederegistration();
            })
        } else {
            console.warn('User is not subscribed for FCM');
        }
        $KU.log({api:'kony.push.deRegister', exit:true});
    };


    var register = function(config) {
        $KU.log({api:'kony.push.register', enter:true});
        if (!firebase.messaging.isSupported()) {
            console.warn('Browser does not have the Push Notifications support');
            return;
        }
        if(!messaging) {
            firebase.initializeApp(config);
            messaging = firebase.messaging();
            messaging.usePublicVapidKey(config.publicKey);
            __getPermission(config);
        }
        $KU.log({api:'kony.push.register', exit:true});
    };


    var setCallbacks = function(data) {
        $KU.log({api:'kony.push.setCallbacks', enter:true});
        //$KU.log('kony.push.setCallbacks', data);
        onsuccessfulregistration  = data.onsuccessfulregistration;
        onfailureregistration = data.onfailureregistration;
        onlinenotification = data.onlinenotification;
        offlinenotification = data.offlinenotification;
        onsuccessfulderegistration = data.onsuccessfulderegistration;
        onfailurederegistration = data.onfailurederegistration;
        $KU.log({api:'kony.push.setCallbacks', exit:true});
    };


    $K.defKonyProp(_ns, [
        {keey:'setCallbacks', value:setCallbacks},
        {keey:'register', value:register},
        {keey:'deRegister', value:deRegister}
    ]);

    return _ns;
}())});
