import React from "react";

import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../../state/index';

document.addEventListener("DOMContentLoaded", function () {
  const textNeedCount = document.querySelectorAll("#email");
  M.CharacterCounter.init(textNeedCount);
});

const Email = () => {

    const email = useSelector((state) => state.email);
    const dispatch = useDispatch();
    const { inputEmail } = bindActionCreators(actionCreators, dispatch);

    // console.log(email)

    return (
        <div class="row">
            <div class="input-field col s12">
              <label class="active" for="email">Email</label>
              <input 
                id="email" 
                type="email" 
                class="validate" 
                data-length="50"
                onChange={(e) => inputEmail(e.target.value)}
              />
              <span class="helper-text" data-error="Please input a valid email"/>
            </div>
        </div>
        )
}
export default Email;