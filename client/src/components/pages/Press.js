import React from 'react';
import Nav from  '../navFooter/Nav';
import Footer from '../navFooter/Footer';

const Press = () => {
    return (
        <div>
          <Nav/>
          <div  className='message'>
            <h5>You've been routed to the Press page.  Thanks for stopping by!</h5>
          </div>
          <Footer/>
        </div>
    )
}

export default Press;