import React from 'react';
import Test from './components/test/Test';
import Nav from  './components/navFooter/Nav';
import FormContainer from './components/formContainer/FormContainer';
import Footer from './components/navFooter/Footer';

//  use FormControlUnstyled for validation support
// use FormGroup for checkbox and switch
const App = () => {

    return (
      <div>
        <Nav/>
        <FormContainer/>
        <Footer/>

        {/* The Test component is for visualizing Redux state management
        <Test/> */}

      </div>
    )
}

export default App;