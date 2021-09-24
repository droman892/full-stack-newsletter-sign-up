import React, {Component} from 'react';
import M from "materialize-css";
import Checkboxes from "./formFields/Names";

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
            
            <Checkboxes/>
            
            
            
            <div class="row">
              <div class="input-field col s12">
                <input placeholder="Phone #"id="password" type="password" class="validate"/>
                {/* <label for="password">Password</label> */}
              </div>
            </div>
            
            
            
            <div class="row">
              <div class="input-field col s12">
                <input placeholder="Email" id="email" type="email" class="validate"/>
                {/* <label for="email">Email</label> */}
              </div>
            </div>
            
            
            
            
            {/* Calender Picker */}
            <input placeholder="Please select your ideal move-in date" type="text" class="datepicker"/>
            
            
            
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
            
            
            
            
            <p class="range-field">
              <input type="range" id="test5" min="0" max="100" />
            </p>
            
            
            
            
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
            
            
            
            
            
            <div class="row">
              <div class="input-field col s12">
                <textarea placeholder="Additional Comments (Optional)" id="textarea1" class="materialize-textarea"></textarea>
              </div>
            </div>
            
            
            
            
            <button class="btn waves-effect waves-light" type="submit" name="action">Submit</button>
          
          
          
          
          
          
          
          
          </form>
        </div>
      </div>
    )
  }
}

export default App;