import React, {Component} from 'react';
import Layout from './components/layout/Layout';
import Nav from  './components/navFooter/Nav';
import FormContainer from './components/formContainer/FormContainer';
import Footer from './components/navFooter/Footer';

import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from './state/index'

//  use FormControlUnstyled for validation support
// use FormGroup for checkbox and switch
const App = () => {

    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);

    console.log(state);

    return (
      <div>
        <Layout 
          navigator={<Nav/>} 
          formContainer={<FormContainer/>} 
          footer={<Footer/>}
        />
      </div>
    )
}

export default App;