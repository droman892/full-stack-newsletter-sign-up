import React, {Component} from 'react';
import M from "materialize-css";
import Names from "./formFields/Names";
import Phone from "./formFields/Phone";
import Email from "./formFields/Email";
import Calendar from "./formFields/Calendar";
import Checkboxes from "./formFields/Checkboxes";
import Range from "./formFields/Range";
import Radios from "./formFields/Radios";
import TextArea from "./formFields/TextArea";
import SubmitButton from "./formFields/SubmitButton";

//  use FormControlUnstyled for validation support
// use FormGroup for checkbox and switch
export class App extends Component {

  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  render() {

    return (
      <div>
        <div class="row">
          <form class="col s12"> 
            <Names/>
            <Phone/>
            <Email/>
            <Calendar/>
            <Checkboxes/>
            <Range/>
            <Radios/>
            <TextArea/>
            <SubmitButton/>    
          </form>
        </div>
      </div>
    )
  }
}

export default App;