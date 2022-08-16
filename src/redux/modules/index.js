import { combineReducers } from 'redux';
import userReducer from './user';
import numberReducer from './number';

const rootReducer = combineReducers({
    userReducer,
    numberReducer,
});

export default rootReducer;
