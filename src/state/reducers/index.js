import { combineReducers } from 'redux';
import nameReducer from './nameReducer';
import accountReducer from './accountReducer';

const reducers = combineReducers({
    name: nameReducer,
    account: accountReducer
});

export default reducers;