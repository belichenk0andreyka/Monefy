import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import {reducer as toastrReducer} from 'react-redux-toastr'

import uiReducer from 'store/reducers/uiReducer';

const rootReducer = (history) => combineReducers({
    ui: uiReducer,
    toastr: toastrReducer,
    router: connectRouter(history),
})

export default rootReducer;
