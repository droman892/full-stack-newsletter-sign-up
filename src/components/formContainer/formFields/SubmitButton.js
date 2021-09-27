import React, {Component} from 'react';
import M from "materialize-css";

export class SubmitButton extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {

    const submitButtonLabel = this.props.submitButtonLabel;

    return (
        <button class="btn waves-effect waves-light" type="submit" name="action">{submitButtonLabel}</button>
        )
    }
}
export default SubmitButton;