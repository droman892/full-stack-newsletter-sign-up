import React from 'react';

import Index from './components/pages/Index';
import About from './components/pages/About';
import Careers from './components/pages/Careers';
import Contact from './components/pages/Contact';
import Error from './components/pages/Error';
import Press from './components/pages/Press';
import Privacy from './components/pages/Privacy';
import Solutions from './components/pages/Solutions';
import ThankYou from './components/pages/ThankYou';
import StoreDisplay from './state/StoreDisplay';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

const App = () => {
    return (
      <Router>

          <Switch>
            <Route path='/home' exact component={Index}/>
            <Route path='/about' component={About}/>
            <Route path='/careers' component={Careers}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/press' component={Press}/>
            <Route path='/privacy' component={Privacy}/>
            <Route path='/solutions' component={Solutions}/>
            <Route path='/thank-you' component={ThankYou}/>
            <Route path='/*' component={Error}/>
          </Switch>
          
          {/* Displays the state of all of the newsletter components */}
          <StoreDisplay/>
          {/* The Test component is for visualizing Redux state management
          <Test/> */}

      </Router>
    )
}

export default App;