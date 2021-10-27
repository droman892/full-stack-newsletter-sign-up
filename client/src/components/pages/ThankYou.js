import React from "react";
import Nav from  '../layout/Nav';
import Footer from '../layout/Footer';
import {useSelector} from 'react-redux';

const ThankYou = () => {

    document.title = 'Thank You - DR Enterprises';

    const firstName = useSelector((state) => state.firstName);

    return (
        <>
            <Nav/>

            <main>
                <h5 className='message'>Thanks for submitting your info, {firstName}!</h5>
                <h5 className='message'>One of our agents will get back with you shortly.</h5>
            </main>

            <Footer/>
        </>
    )
}

export default ThankYou;