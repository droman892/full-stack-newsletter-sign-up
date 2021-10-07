import { combineReducers } from 'redux';
import firstNameReducer from './firstNameReducer';
import lastNameReducer from './lastNameReducer';
import accountReducer from './accountReducer';

const reducers = combineReducers({
    firstName: firstNameReducer,
    lastName: lastNameReducer,
    account: accountReducer
});

export default reducers;