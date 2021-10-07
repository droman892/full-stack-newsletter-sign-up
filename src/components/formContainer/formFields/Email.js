import React from "react";

document.addEventListener("DOMContentLoaded", function () {
  const textNeedCount = document.querySelectorAll("#email");
  M.CharacterCounter.init(textNeedCount);
});

const Email = () => {

    return (
        <div class="row">
            <div class="input-field col s12">
              <label class="active" for="email">Email</label>
              <input id="email" type="email" class="validate" data-length="50"/>
              <span class="helper-text" data-error="Please input a valid email"/>
            </div>
        </div>
        )
}
export default Email;