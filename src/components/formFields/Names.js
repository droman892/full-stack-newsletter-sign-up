import React, {Component} from 'react';
import M from "materialize-css";

export class Names extends Component {

  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  render() {
    return (
        <div class="row">
            <div class="input-field col s6">
            <input placeholder="First Name" id="first_name" type="text" class="validate"/>
            {/* <label for="first_name">First Name</label> */}
            </div>
            <div class="input-field col s6">
            <input placeholder="Last Name" id="last_name" type="text" class="validate"/>
            {/* <label for="last_name">Last Name</label> */}
            </div>
        </div>
        )
    }
}
export default Names;