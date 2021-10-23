import React from 'react';
import Nav from  '../layout/Nav';
import FormContainer from '../formContainer/FormContainer';
import Footer from '../layout/Footer';

const Index = () => {
    return (
        <div>
          <Nav/>
          
          <main>
            <FormContainer/>
          </main>

          <Footer/>
        </div>
    )
}

export default Index;