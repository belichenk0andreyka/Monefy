import { call } from 'redux-saga/effects';

import { history } from 'index';
import api from 'api/apiResources';
import { notificationHelper } from 'helpers/notifications';

export function* authWorker (action) {
    const { email, password } = action.payload;
    try {
        console.log(action.payload);
        const request = yield call(() => api.authorization.auth({ email, password }));
        console.log(request);
        if (request.data.token) {
            console.log('нормально авторизовался');
            notificationHelper(
                'Success',
                'Registration completed successfully',
                'success'
            );
            history.push('/register');
        } else {
            notificationHelper(
                'Error',
                'User already exists',
                'error'
            );
        }
    } catch (error) {
        notificationHelper(
            'Error',
            'This action is not available now, please try again later',
            'error'
        );
    }
}
