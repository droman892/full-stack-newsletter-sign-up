import React from "react";

document.addEventListener("DOMContentLoaded", function () {
  const textNeedCount = document.querySelectorAll("#comments");
  M.CharacterCounter.init(textNeedCount);
});

const TextArea = () => {

    return (
        <div class="row">
          <div class="input-field col s12">
            <label class="active" for="comments">Additional Comments (Optional)</label>  
            <textarea id="comments" class="materialize-textarea" data-length="200"></textarea>        
          </div>
        </div>
        )
}
export default TextArea;