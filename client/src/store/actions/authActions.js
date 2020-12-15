export const AUTH_USER = 'AUTH_USER';
export const AUTH_USER_GOOGLE = 'AUTH_USER_GOOGLE';
export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS';

export const authUser = payload => ({ type: AUTH_USER, payload });
export const authUserSuccess = payload => ({ type: AUTH_USER_SUCCESS, payload });
export const authUserGoogle = payload => ({ type: AUTH_USER_GOOGLE, payload });
