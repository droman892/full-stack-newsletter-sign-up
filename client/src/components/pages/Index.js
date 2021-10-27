import React from 'react';
import Nav from  '../layout/Nav';
import FormContainer from '../formContainer/FormContainer';
import Footer from '../layout/Footer';

const Index = () => {

  document.title = 'DR Enterprises';

    return (
        <>
          <Nav/>
          
          <main>
            <FormContainer/>
          </main>

          <Footer/>
        </>
    )
}

export default Index;