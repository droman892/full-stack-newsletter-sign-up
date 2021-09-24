import React, {Component} from 'react';
import M from "materialize-css";

export class Checkboxes extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
        <div>
            <label>What real estate investing strategies do you want to learn more about?</label>
            <p>
                <label>
                <input type="checkbox" />
                <span>Checkbox 1</span>
                </label>
            </p>
            <p>
                <label>
                <input type="checkbox" />
                <span>Checkbox 2</span>
                </label>
            </p>
            <p>
                <label>
                <input type="checkbox" />
                <span>Checkbox 3</span>
                </label>
            </p>
        </div>
        )
    }
}
export default Checkboxes;