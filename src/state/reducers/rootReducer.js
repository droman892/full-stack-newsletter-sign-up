import { combineReducers } from 'redux';
import firstNameReducer from './firstNameReducer';
import lastNameReducer from './lastNameReducer';
import phoneReducer from './phoneReducer';
import emailReducer from './emailReducer';

import radioReducer from './radioReducer';
import checkboxReducer from './checkboxReducer';

import textAreaReducer from './textAreaReducer';

// import accountReducer from './accountReducer';

const reducers = combineReducers({
    firstName: firstNameReducer,
    lastName: lastNameReducer,
    phoneNum: phoneReducer,
    email: emailReducer,
    checkboxesMarked: checkboxReducer,
    radioMarked: radioReducer,
    comments: textAreaReducer


    // account: accountReducer
});

export default reducers;