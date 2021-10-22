import React from 'react';
import {Link} from "react-router-dom";

const SubmitButton = () => {

    return (
        <button 
            class="btn waves-effect waves-light" 
            type='submit'
            name="action">
            <Link to='/thank-you' class='grey-text text-lighten-3' type='submit'>Submit</Link>
        </button>
        )
}
export default SubmitButton;