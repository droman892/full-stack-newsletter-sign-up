import React from 'react';
import Nav from  '../layout/Nav';
import Footer from '../layout/Footer';

const Error = () => {
    return (
        <div>
          <Nav/>

          <main  className='message'>
            <h5>You've been routed to the Error page.  Thanks for stopping by!</h5>
          </main>
          
          <Footer/>
        </div>
    )
}

export default Error;