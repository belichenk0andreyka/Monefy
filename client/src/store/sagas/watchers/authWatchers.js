import { takeLatest } from 'redux-saga/effects';

import { AUTH_USER } from 'store/actions/authActions';
import { authWorker } from 'store/sagas/workers/authWorker';

export function* authWatcher() {
    yield takeLatest(AUTH_USER, authWorker)
}
