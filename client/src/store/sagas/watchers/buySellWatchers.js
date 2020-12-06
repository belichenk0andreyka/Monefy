import { takeLatest } from 'redux-saga/effects';

import { GET_ACTIONS, SEND_ACTION } from 'store/actions/buySellActions';
import { getActions, sendAction } from 'store/sagas/workers/buySellWorker';

export function* buySellWatcher() {
    yield takeLatest(GET_ACTIONS, getActions)
}

export function* sendBuySellWatcher() {
    yield takeLatest(SEND_ACTION, sendAction)
}
