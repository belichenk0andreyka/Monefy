import { combineReducers } from 'redux'
import namesReducer from 'store/reducers/namesReducer';

const rootReducer = combineReducers({
    name: namesReducer
})

export default rootReducer;
