import React, {Component} from "react";
import M from "materialize-css";

document.addEventListener("DOMContentLoaded", function () {
  const textNeedCount = document.querySelectorAll("#first_name, #last_name");
  M.CharacterCounter.init(textNeedCount);
});

export class Names extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
        <div class="row">
            <div class="input-field col s6">
            <i class="material-icons prefix">person_pin</i>
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
}
export default Names;