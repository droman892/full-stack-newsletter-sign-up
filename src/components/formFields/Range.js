import React, {Component} from 'react';
import M from "materialize-css";

export class Range extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
        <div>
          <label class="active" for="test5">What's your budget for a monthly mortgage payment?</label>
          <p class="range-field">
              <input type="range" id="test5" min="0" max="100" />
          </p>
        </div>
        )
    }
}
export default Range;