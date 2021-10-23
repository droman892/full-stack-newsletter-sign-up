import React from "react";

import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../../state/index'

document.addEventListener("DOMContentLoaded", function () {
  const textNeedCount = document.querySelectorAll("#comments");
  M.CharacterCounter.init(textNeedCount);
});

const TextArea = () => {

    const comments = useSelector((state) => state.comments);
    const dispatch = useDispatch();
    const { inputTextArea } = bindActionCreators(actionCreators, dispatch);

    // console.log('Comments: ' + comments)

    return (
        <div class="row">
          <div class="input-field col s12">
            <label class="active" for="comments">Additional Comments (Optional)</label>  
            <textarea 
              id="comments" 
              class="materialize-textarea" 
              maxLength='200'
              data-length="200"
              spellCheck= 'true'
              pattern='[A-Za-z0-9_]'
              onChange={(e) => inputTextArea(e.target.value)}
            />      
          </div>
        </div>
        )
}

export default TextArea;