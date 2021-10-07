import React from 'react';
import Test from './components/test/Test';
import Nav from  './components/navFooter/Nav';
import FormContainer from './components/formContainer/FormContainer';
import Footer from './components/navFooter/Footer';

// import {useSelector, useDispatch} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {actionCreators} from './state/index'

//  use FormControlUnstyled for validation support
// use FormGroup for checkbox and switch
const App = () => {

    // const account = useSelector((state) => state.account);
    // const dispatch = useDispatch();

    // const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);

    return (
      <div>
        <Nav/>
        <FormContainer/>
        <Footer/>
        {/* <Test/> */}



        {/* <h1>{account}</h1>
        <button onClick={() => depositMoney(1000)}>Deposit</button>
        <button onClick={() => withdrawMoney(1000)}>Withdraw</button> */}

      </div>
    )
}

export default App;