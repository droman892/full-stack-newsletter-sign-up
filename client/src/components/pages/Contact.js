import React from 'react';
import Nav from  '../navFooter/Nav';
import Footer from '../navFooter/Footer';

const Contact = () => {
    return (
        <div>
          <Nav/>
          <div  className='message'>
            <h1>You've been routed to the Contact page.  Thanks for stopping by!</h1>
          </div>
          <Footer/>
        </div>
    )
}

export default Contact;