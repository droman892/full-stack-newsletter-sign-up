import React from 'react';
import Nav from  './components/navFooter/Nav';
import FormContainer from './components/formContainer/FormContainer';
import Footer from './components/navFooter/Footer';
import StoreDisplay from './state/StoreDisplay';
import {
  BrowserRouter,
  Route
} from "react-router-dom";

import TestExpress from './components/test/TestExpress';

// import Test from './components/test/Test';

//  use FormControlUnstyled for validation support
// use FormGroup for checkbox and switch
const App = () => {



    return (
      <BrowserRouter>
        <div>

          <Nav/>
          <FormContainer/>
          <Footer/>
          <TestExpress/>
          
          {/* Displays the state of all of the newsletter components */}
          <StoreDisplay/>

          {/* The Test component is for visualizing Redux state management
          <Test/> */}

        </div>
      </BrowserRouter>
    )
}

export default App;