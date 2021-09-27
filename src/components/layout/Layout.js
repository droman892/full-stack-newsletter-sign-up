import React, {Component} from "react";

//  use FormControlUnstyled for validation support
// use FormGroup for checkbox and switch
export class Layout extends Component {

  render() {

    const navigator = this.props.navigator;
    const formContainer = this.props.formContainer;
    const footer = this.props.footer;

    return (
      <div>
        {navigator}
        {formContainer}
        {footer}
      </div>
    )
  }
}

export default Layout;