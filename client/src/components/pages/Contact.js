import React from 'react';
import Nav from  '../layout/Nav';
import Footer from '../layout/Footer';

const Contact = () => {

  document.title = 'Contact - DR Enterprises';

    return (
        <>
          <Nav/>
        
          <main>
            <h5 className='message'>You've been routed to the Contact page.</h5>
            <h5 className='message'>Thanks for stopping by!</h5>
          </main>

          <Footer/>
        </>
    )
}

export default Contact;