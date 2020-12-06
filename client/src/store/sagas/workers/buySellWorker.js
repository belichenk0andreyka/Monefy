import {call, put, select} from "redux-saga/effects";
import { getToken } from 'store/seletors/userSelectors';
import { validateAction } from 'helpers/actionHelper';
import api from 'api/apiResources';
import { closeModal } from 'store/actions/uiActions';
import {MODAL_TYPES} from "../../../constants/constants";
import {notificationHelper} from "../../../helpers/notifications";

export function* getActions (action) {
    console.log(action);
}

export function* sendAction (action) {
    const { price, category, type, description }  = action.payload;
    const { validCategory, validPrice } = validateAction(category, price);
    if (validCategory && validPrice) {
        const action = { price, category, type, description }
        const token = yield select(state => getToken(state))
        const request = yield call(() => api.action.addAction(action, token));
        const typeAction = type ? 'income' : 'expense';
        if (request.data._id) {
            yield put(closeModal(MODAL_TYPES.ACTION_MODAL_CREATE));
            notificationHelper(
                'Success',
                `You have successfully added ${typeAction}`,
                'success'
            );
        } else {
            notificationHelper(
                'Error',
                `Failed to add your ${typeAction}`,
                'error'
            );
        }
    }
}
