import React from "react";
import Nav from  '../navFooter/Nav';
import Footer from '../navFooter/Footer';
import {useSelector} from 'react-redux';

const ThankYou = () => {

    const firstName = useSelector((state) => state.firstName);

    return (
        <div>
            <Nav/>
                <div className='message'>
                    <h5>Thanks for submitting your info, {firstName}!</h5>
                    <p>One of our agents will get back with you shortly.</p>
                </div>
            <Footer/>
        </div>
        
        )
}
export default ThankYou;