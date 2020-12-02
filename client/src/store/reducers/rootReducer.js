import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import {reducer as toastrReducer} from 'react-redux-toastr'

import userReducer from 'store/reducers/userReducer';

const rootReducer = (history) => combineReducers({
    user: userReducer,
    toastr: toastrReducer,
    router: connectRouter(history),
})

export default rootReducer;
