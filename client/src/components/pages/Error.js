import React from 'react';
import Nav from  '../layout/Nav';
import Footer from '../layout/Footer';

const Error = () => {
    return (
        <>
          <Nav/>

          <main>
            <h5 className='message'>Oops, it looks like the resource you requested doesn't exist, so you've
            been redirected to the Error page.</h5>
            <h5 className='message'>Thanks for stopping by!</h5>
          </main>
          
          <Footer/>
        </>
    )
}

export default Error;