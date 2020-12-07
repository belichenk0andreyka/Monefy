import { GET_DATE_RANGE_SUCCESS } from 'store/actions/buySellActions';

const initialState = {
    dateRange: {},
    actions: {},
};

const actionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATE_RANGE_SUCCESS:
            return { ...state, dateRange: action.payload };
        default:
            return state
    }
}

export default actionsReducer;
