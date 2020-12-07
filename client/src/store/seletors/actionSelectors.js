import { createSelector } from 'reselect';
// selector
const getActionReducer = (state) => state.actions;
// reselect function
export const getDateRange = createSelector(
    getActionReducer,
    state => state.dateRange,
);
