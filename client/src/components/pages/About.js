import React from 'react';
import Nav from  '../layout/Nav';
import Footer from '../layout/Footer';

const About = () => {
    return (
        <>
          <Nav/>

          <main>
            <h5 className='message'>You've been routed to the About page.</h5>
            <h5 className='message'>Thanks for stopping by!</h5>
          </main>
          
          <Footer/>
        </>
    )
}

export default About;