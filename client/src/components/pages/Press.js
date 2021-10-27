import React from 'react';
import Nav from  '../layout/Nav';
import Footer from '../layout/Footer';

const Press = () => {

  document.title = 'Press - DR Enterprises';

    return (
        <>
          <Nav/>  

          <main>
            <h5 className='message'>You've been routed to the Press page.</h5>
            <h5 className='message'>Thanks for stopping by!</h5>
          </main>
          
          <Footer/>
        </>
    )
}

export default Press;