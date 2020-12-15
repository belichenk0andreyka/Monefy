import { all } from 'redux-saga/effects';

import { authWatcher, authWatcherGoogle, authWatcherFacebook } from 'store/sagas/watchers/authWatchers';
import { registerWatcher } from 'store/sagas/watchers/registerWatcher';
import { buySellWatcher, sendBuySellWatcher, getDateRange } from 'store/sagas/watchers/buySellWatchers';

export default function* rootSaga() {
    yield all([
        authWatcher(),
        getDateRange(),
        buySellWatcher(),
        registerWatcher(),
        authWatcherGoogle(),
        authWatcherFacebook(),
        sendBuySellWatcher(),
    ])
}
