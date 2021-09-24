import React, {Component} from 'react';
import M from "materialize-css";

export class Radios extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
        <div>
            <label class="active" >Within what range do you want to make your down-payment?</label>
            <p>
              <label>
                <input class="with-gap" name="group1" type="radio"  />
                <span>Radio 1</span>
              </label>
            </p>
            <p>
              <label>
                <input class="with-gap" name="group1" type="radio"  />
                <span>Radio 2</span>
              </label>
            </p>
            <p>
              <label>
                <input class="with-gap" name="group1" type="radio"  />
                <span>Radio 3</span>
              </label>
            </p>
        </div>
        )
    }
}
export default Radios;