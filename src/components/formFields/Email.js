import React, {Component} from "react";
import M from "materialize-css";

document.addEventListener("DOMContentLoaded", function () {
  const textNeedCount = document.querySelectorAll("#email");
  M.CharacterCounter.init(textNeedCount);
});

export class Email extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
        <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">email</i>
              <label class="active" for="email">Email</label>
              <input id="email" type="email" class="validate" data-length="50"/>
              <span class="helper-text" data-error="Please input a valid email"/>
            </div>
        </div>
        )
    }
}
export default Email;