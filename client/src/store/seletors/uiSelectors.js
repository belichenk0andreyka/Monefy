import { createSelector } from 'reselect';
// selector
const getUiReducer = (state) => state.ui;
// reselect function
export let getNotification = () => createSelector(
    getUiReducer,
    state => state.notification,
);
