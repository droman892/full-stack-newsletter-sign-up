import React from 'react';
// import phoneReducer from '../../../state/reducers/phoneReducer';

import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../../state/index';

const Phone = ()  => {

    const phoneNum = useSelector((state) => state.phoneNum);
    const dispatch = useDispatch();
    const { inputPhoneNum } = bindActionCreators(actionCreators, dispatch);

    // console.log('Phone: ' + phoneNum)

    return (
        <div class="row">
            <div class="input-field col s12">
              <label class="active" for="tel">Phone #</label>
              <input 
                id="tel" 
                type="tel" 
                name='tel'
                class="validate" 
                maxLength='10' 
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                onChange={(e) => inputPhoneNum(e.target.value)}
                required
              />
              <span class="helper-text" data-error="Please use the proper format: XXX-XXX-XXXX"/>
            </div>
        </div>
        )
}
export default Phone;