import React from 'react';
import Nav from  '../layout/Nav';
import Footer from '../layout/Footer';

const Careers = () => {
    return (
        <div>
          <header>
          <Nav/>
          </header>

          <main  className='message'>
            <h5>You've been routed to the Careers page.  Thanks for stopping by!</h5>
          </main>

          <Footer/>
        </div>
    )
}

export default Careers;