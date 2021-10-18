import React from "react";

import {useSelector} from 'react-redux';


const ThankYou = () => {

    const firstName = useSelector((state) => state.firstName);

    return (
        <div>
            <h2>Thanks for submitting your info, {firstName}!</h2>
            <p>One of our agents will get back with you shortly.</p>
        </div>
        )
}
export default ThankYou;