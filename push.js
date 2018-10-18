'use strict';

const push = require('web-push');

const GCM_API_KEY = 'AIzaSyAlOtQnWkoh0wFFyeFjuNyaSeBGU2CV2Iw';
push.setGCMAPIKey(GCM_API_KEY);

const data = {
    'endpoint': 'https://android.googleapis.com/gcm/send/ffAk2gTFRoc:APA91bF7eeFWARPtzc2TA_wEG27osacF7KXcHaD2DAYlocGNIDaz-mOPuCBPa5SKdOiyaJywyV42d-F-DXhgel0QZH5B2gJsNwCG2YtcXkmHw_i1m9cV4EeYvQtpYQuWS21_6YTEx8tq',
    'userAuth': 'F/+zHi590PB+0hsHSxjIBA==',
    'userPublicKey': 'BKGTtnlOb5bAeeOML76CyYSSHvwZTbpvL0bSpQXC81ZefpX6RB1EJC9DmievhJIkYQslkyzFdF9obn33nbO72kQ='
};

push.sendNotification(data.endpoint, {
    payload:       'push test for service worker',
    userAuth:      data.userAuth,
    userPublicKey: data.userPublicKey,
})
.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.error('fail', err);
});