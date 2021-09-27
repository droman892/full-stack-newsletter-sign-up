import React, {Component} from "react";

document.addEventListener("DOMContentLoaded", function () {
  const textNeedCount = document.querySelectorAll("#email");
  M.CharacterCounter.init(textNeedCount);
});

export class Email extends Component {

  render() {

    const email = this.props.email;

    return (
        <div class="row">
            <div class="input-field col s12">
              <label class="active" for="email">{email}</label>
              <input id="email" type="email" class="validate" data-length="50"/>
              <span class="helper-text" data-error="Please input a valid email"/>
            </div>
        </div>
        )
    }
}
export default Email;