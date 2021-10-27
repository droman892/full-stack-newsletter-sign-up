import React from 'react';
import Nav from  '../layout/Nav';
import Footer from '../layout/Footer';

const Careers = () => {

  document.title = 'Careers - DR Enterprises';

    return (
        <>
          <Nav/>

          <main>
            <h5 className='message'>You've been routed to the Careers page.</h5>
            <h5 className='message'>Thanks for stopping by!</h5>
          </main>

          <Footer/>
        </>
    )
}

export default Careers;