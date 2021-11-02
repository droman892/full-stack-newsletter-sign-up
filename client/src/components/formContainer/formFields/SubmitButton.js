import React from 'react';
import {Link} from "react-router-dom";

const SubmitButton = () => {

    return (
        <button 
            class="btn purple text-lighten-3 waves-effect waves-light" 
            type='submit'
            name="action">
            <Link to='/thank-you' type='submit'>
                <span className='submitter'>
                    Submit
                </span>
            </Link>
        </button>
        )
}
export default SubmitButton;