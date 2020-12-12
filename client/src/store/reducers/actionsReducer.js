import { forEach, reduce } from 'lodash';

import {
    GET_ACTIONS_SUCCESS,
    SEND_ACTION_SUCCESS,
    GET_DATE_RANGE_SUCCESS,
} from 'store/actions/buySellActions';

const initialState = {
    dateRange: {},
    actionsData: {},
};

const actionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATE_RANGE_SUCCESS:
            return { ...state, dateRange: action.payload };
        case GET_ACTIONS_SUCCESS:
            return {
                ...state,
                actionsData: {
                    ...action.payload,
                    categories: parseCategories(action.payload.categories),
                }
            };
        case SEND_ACTION_SUCCESS:
            return {
                ...state,
                actionsData: parseOneAction(state, action.payload),
            };
        default:
            return state
    }
}

const parseOneAction = (state, payload) => {
    console.log(payload);
    if (Object.keys(state.actionsData.categories).includes(payload.category)) {
        const returnObj =  {
            categories: {
                ...state.actionsData.categories,
                [payload.category]: {
                    ...state.actionsData.categories[payload.category],
                    [payload._id]: payload}
            },
            chartData: {
                ...state.actionsData.chartData,
                [payload.category]: Number([state.actionsData.chartData[payload.category]]) + payload.price,
            },
            financeInfo: {...state.actionsData.financeInfo, consumption: state.actionsData.financeInfo.consumption + payload.price}
        }
        console.log(returnObj);
        return returnObj;
    }
}

const parseCategories = (categories) => {
    const finalCategories = {};
    forEach(categories, (value, key) => {
        finalCategories[key] = reduce(value, function(result, value) {
            result[value._id] = value;
            return result;
        }, {});
    })
    return finalCategories;
};

export default actionsReducer;
