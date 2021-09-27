import React, {Component} from "react";
import Layout from "./layout/Layout";
import Nav from  "./navFooter/Nav";
import FormContainer from "./formContainer/FormContainer";
import Footer from "./navFooter/Footer";

//  use FormControlUnstyled for validation support
// use FormGroup for checkbox and switch
export class App extends Component {

  render() {

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
}

export default App;