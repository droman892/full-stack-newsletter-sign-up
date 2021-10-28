import React from 'react';
import {useSelector} from 'react-redux';
import './FormContainer.css';

import axios from 'axios';

import Names from "./formFields/Names";
import Phone from "./formFields/Phone";
import Email from "./formFields/Email";
import Checkboxes from "./formFields/Checkboxes";
import Radios from "./formFields/Radios";
import TextArea from "./formFields/TextArea";
import SubmitButton from "./formFields/SubmitButton";

const FormContainer = () => {

  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);
  const phoneNum = useSelector((state) => state.phoneNum);
  const email = useSelector((state) => state.email);
  const checkbox1 = useSelector((state) => state.checkbox1);
  const checkbox2 = useSelector((state) => state.checkbox2);
  const checkbox3 = useSelector((state) => state.checkbox3);
  const checkbox4 = useSelector((state) => state.checkbox4);
  const checkbox5 = useSelector((state) => state.checkbox5);
  const radioMarked = useSelector((state) => state.radioMarked);
  const comments = useSelector((state) => state.comments);

  const manageSubmit = (e) => {
    e.preventDefault();

    const formData = {
        '***FORM DATA POSTED TO': '/ ROUTE***',
        'First Name': firstName,
        'Last Name': lastName,
        'Phone Number': phoneNum,
        'Email': email,
        'Checkbox 1': checkbox1,
        'Checkbox 2': checkbox2,
        'Checkbox 3': checkbox3,
        'Checkbox 4': checkbox4,
        'Checkbox 5': checkbox5,
        'Radio': radioMarked,
        'Comments': comments
    };

    console.log(formData);

    axios.post('/', {
      '***FORM DATA POSTED TO': '/ ROUTE***',
      firstName, 
      lastName, 
      phoneNum, 
      email, 
      checkbox1, 
      checkbox2, 
      checkbox3, 
      checkbox4, 
      checkbox5, 
      radioMarked, 
      comments})
      .then((result) => {console.log(result)})
      .catch((error) => {console.log(error)});

  }

    return (
        <div class="row form-container"> 
          <div className="form-header">
            <h5 className='newsletter-head'>Newsletter Sign-up</h5>
          </div>
          <form class="col s12" onSubmit={manageSubmit} action='/' method='post'> 
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
          </form>
        </div>
    )
}

export default FormContainer;