import React from 'react';
import Nav from  './components/navFooter/Nav';
import FormContainer from './components/formContainer/FormContainer';
import Footer from './components/navFooter/Footer';
import StoreDisplay from './state/StoreDisplay';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

//  use FormControlUnstyled for validation support
// use FormGroup for checkbox and switch
const App = () => {
    return (
      <Router>
        <div>
          <Nav/>
          <FormContainer/>
          <Footer/>
          {/* Displays the state of all of the newsletter components */}
          <StoreDisplay/>
          {/* The Test component is for visualizing Redux state management
          <Test/> */}
        </div>
      </Router>
    )
}

export default App;