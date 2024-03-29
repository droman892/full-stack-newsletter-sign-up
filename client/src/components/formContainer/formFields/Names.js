import React, {useEffect} from "react";

import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../../state/index'

// document.addEventListener("DOMContentLoaded", function () {
//   const textNeedCount = document.querySelectorAll("#first_name, #last_name");
//   M.CharacterCounter.init(textNeedCount);
// });

import M from "materialize-css/dist/js/materialize.min.js";

const Names = () => {

  useEffect(() => {
    const textNeedCount = document.querySelectorAll("#first_name, #last_name");
    M.CharacterCounter.init(textNeedCount);
  }, []);

    const firstName = useSelector((state) => state.firstName);
    const lastName = useSelector((state) => state.lastName);
    const dispatch = useDispatch();
    const {inputFirstName, inputLastName} = bindActionCreators(actionCreators, dispatch);

    // console.log('First Name: ' + firstName)
    // console.log('Last Name: ' + lastName)

    return (
        <div class="row">
            <div class="input-field col s6">
              <label class="active" for="first_name">First Name</label>
              <input 
                id="first_name" 
                type="text" 
                name ='first_name'
                class="validate" 
                minLength='1'
                maxLength='20'
                data-length="20"
                onChange={(e) => inputFirstName(e.target.value)}
                required
              />
              <span class="helper-text" data-error="Please input within the character limit"/>
            </div>
            <div class="input-field col s6">
              <label class="active" for="last_name">Last Name</label>
              <input 
                id="last_name" 
                type="text" 
                name='last_name'
                class="validate"
                minLength='1'
                maxLength='20'
                data-length="20"
                onChange={(e) => inputLastName(e.target.value)}
                required
              />
              <span class="helper-text" data-error="Please input within the character limit"/>
            </div>
        </div>
        )
}
export default Names;