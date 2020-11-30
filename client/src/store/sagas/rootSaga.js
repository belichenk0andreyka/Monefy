import { all } from 'redux-saga/effects';

import { authWatcher } from 'store/sagas/watchers/authWatchers';
import { registerWatcher } from 'store/sagas/watchers/registerWatcher';

export default function* rootSaga() {
    yield all([
        registerWatcher(),
        authWatcher(),
    ])
}
