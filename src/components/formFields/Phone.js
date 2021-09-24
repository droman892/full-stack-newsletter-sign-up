import React, {Component} from 'react';
import M from "materialize-css";

export class Phone extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
        <div class="row">
            <div class="input-field col s12">
              <label class="active" for="phone">Phone # </label>
              <input id="phone" type="text" class="validate" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
              <span class="helper-text" data-error="Please use the proper format: XXX-XXX-XXXX"/>
            </div>
        </div>
        )
    }
}
export default Phone;