export const GET_ACTIONS = 'GET_ACTIONS';
export const SEND_ACTION = 'SEND_ACTION';

export const getActions = (payload) => ({ type: GET_ACTIONS, payload });
export const sendAction = (payload) => ({ type: SEND_ACTION, payload })
