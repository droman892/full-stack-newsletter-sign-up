import React from 'react';
// import phoneReducer from '../../../state/reducers/phoneReducer';

import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../../state/index';

const Phone = ()  => {

    const phone = useSelector((state) => state.phone);
    const dispatch = useDispatch();
    const { inputPhoneNum } = bindActionCreators(actionCreators, dispatch);

    // console.log(phone)

    return (
        <div class="row">
            <div class="input-field col s12">
              <label class="active" for="phone">Phone #</label>
              <input 
                id="phone" 
                type="text" 
                class="validate" 
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                onChange={(e) => inputPhoneNum(e.target.value)}
              />
              <span class="helper-text" data-error="Please use the proper format: XXX-XXX-XXXX"/>
            </div>
        </div>
        )
}
export default Phone;