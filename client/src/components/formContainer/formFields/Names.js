import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../../state/index'

document.addEventListener("DOMContentLoaded", function () {
  const textNeedCount = document.querySelectorAll("#first_name, #last_name");
  M.CharacterCounter.init(textNeedCount);
});

const Names = () => {

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
                class="validate" 
                data-length="20"
                onChange={(e) => inputFirstName(e.target.value)}
              />
              <span class="helper-text" data-error="Please input within the character limit"/>
            </div>
            <div class="input-field col s6">
              <label class="active" for="last_name">Last Name</label>
              <input 
                id="last_name" 
                type="text" 
                class="validate" 
                data-length="20"
                onChange={(e) => inputLastName(e.target.value)}
              />
              <span class="helper-text" data-error="Please input within the character limit"/>
            </div>
        </div>
        )
}
export default Names;