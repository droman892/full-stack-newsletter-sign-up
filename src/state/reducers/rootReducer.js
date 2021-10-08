import { combineReducers } from 'redux';
import firstNameReducer from './firstNameReducer';
import lastNameReducer from './lastNameReducer';
import phoneReducer from './phoneReducer';
import emailReducer from './emailReducer';
import radioReducer from './radioReducer';
import checkbox1Reducer from './checkbox1Reducer';
import checkbox2Reducer from './checkbox2Reducer';
import checkbox3Reducer from './checkbox3Reducer';
import checkbox4Reducer from './checkbox4Reducer';
import checkbox5Reducer from './checkbox5Reducer';

import textAreaReducer from './textAreaReducer';

import accountReducer from './accountReducer';

const reducers = combineReducers({
    firstName: firstNameReducer,
    lastName: lastNameReducer,
    phoneNum: phoneReducer,
    email: emailReducer,
    checkbox1: checkbox1Reducer,
    checkbox2: checkbox2Reducer,
    checkbox3: checkbox3Reducer,
    checkbox4: checkbox4Reducer,
    checkbox5: checkbox5Reducer,



    
    radioMarked: radioReducer,
    comments: textAreaReducer,


    account: accountReducer
});

export default reducers;