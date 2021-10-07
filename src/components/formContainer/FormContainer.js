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

const FormContainer = () => {

    return (
      <div className="form">
        <div class="row form-container">
          
          <div className="form-header">
            <h5>Newsletter Sign-up</h5>
          </div>
          
          
          <form class="col s12"> 
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
            <Calendar
              calendar={"Your ideal move-in date?"}
            />
            <Checkboxes
              checkbox1="Buy and Hold"
              checkbox2="Fix and Flip"
              checkbox3="Wholesaling"
              checkbox4="BRRR"
              checkbox5="Long-term Rentals"
            />
            <Range
              rangeLabel="What's your budget for a monthly mortgage payment?"
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
          </form>
        </div>
      </div>
    )
}

export default FormContainer;