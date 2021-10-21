import React from 'react';
import Nav from  '../layout/Nav';
import Footer from '../layout/Footer';

const Privacy = () => {
    return (
        <div>
          <Nav/>
          <div  className='message'>
            <h5>You've been routed to the Privacy page.  Thanks for stopping by!</h5>
          </div>
          <Footer/>
        </div>
    )
}

export default Privacy;