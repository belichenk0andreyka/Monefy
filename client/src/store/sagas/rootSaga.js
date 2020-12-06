import { all } from 'redux-saga/effects';

import { authWatcher } from 'store/sagas/watchers/authWatchers';
import { registerWatcher } from 'store/sagas/watchers/registerWatcher';
import { buySellWatcher, sendBuySellWatcher } from 'store/sagas/watchers/buySellWatchers';

export default function* rootSaga() {
    yield all([
        authWatcher(),
        buySellWatcher(),
        registerWatcher(),
        sendBuySellWatcher(),
    ])
}
