import React from 'react';
import M from "materialize-css";
import Names from "./formFields/Names";
import Phone from "./formFields/Phone";
import Email from "./formFields/Email";
import Checkboxes from "./formFields/Checkboxes";
import Radios from "./formFields/Radios";
import TextArea from "./formFields/TextArea";
import SubmitButton from "./formFields/SubmitButton";

// import Calendar from "./formFields/Calendar";
// import Range from "./formFields/Range";

const FormContainer = () => {

    const manageSubmit = (e) => {
      e.preventDefault();
    }
    
    return (
      <div className="form">
        <div class="row form-container"> 
          <div className="form-header">
            <h5>Newsletter Sign-up</h5>
          </div>
          <form class="col s12" onSubmit={manageSubmit} action='/home' method='POST'> 
            <Names
              firstName={"First Name"}
              lastName={"Last Name"}
            />
            <Phone
              phoneNum={"Phone #"}
            />
            <Email
              email={"Email"}
            />           
            <Checkboxes
              checkbox1="Buy and Hold"
              checkbox2="Fix and Flip"
              checkbox3="Wholesaling"
              checkbox4="BRRR"
              checkbox5="Long-term Rentals"
            />        
            <Radios
              radioLabel="Within what range do you want to make your down-payment?"
              radio1="0% - 10%"
              radio2="10% - 20%"
              radio3="20% - 50%"
              radio4="+50%"
            />
            <TextArea
              textAreaLabel="Additional Comments (Optional)"
            />
            <SubmitButton
              submitButtonLabel="Submit"
            />    

            {/* <Calendar
              calendar={"Your ideal move-in date?"}
            /> */}

            {/* <Range
              rangeLabel="What's your budget for a monthly mortgage payment?"
            /> */}

          </form>
        </div>
      </div>
    )
}

export default FormContainer;