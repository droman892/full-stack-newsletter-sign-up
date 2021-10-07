import React from "react";

document.addEventListener("DOMContentLoaded", function () {
  const textNeedCount = document.querySelectorAll("#first_name, #last_name");
  M.CharacterCounter.init(textNeedCount);
});

const Names = () => {

    return (
        <div class="row">
            <div class="input-field col s6">
              <label class="active" for="first_name">First Name</label>
              <input id="first_name" type="text" class="validate" data-length="20"/>
              <span class="helper-text" data-error="Please input within the character limit"/>
            </div>
            <div class="input-field col s6">
              <label class="active" for="last_name">Last Name</label>
              <input id="last_name" type="text" class="validate" data-length="20"/>
              <span class="helper-text" data-error="Please input within the character limit"/>
            </div>
        </div>
        )
}
export default Names;