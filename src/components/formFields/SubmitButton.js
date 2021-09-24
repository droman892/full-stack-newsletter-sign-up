import React, {Component} from 'react';
import M from "materialize-css";

export class SubmitButton extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
        <button class="btn waves-effect waves-light" type="submit" name="action">Submit</button>
        )
    }
}
export default SubmitButton;