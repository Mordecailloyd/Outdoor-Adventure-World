import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import {Route, Redirect, Switch,
  Link, HashRouter } from 'react-router-dom';
import Navbar from './navbar/navbar_container';
import {AuthRoute} from '../util/route_util';

const App = () => (
  <div>
    <div className = 'app'>
      < Navbar />
      <div>
        <div className='spacer' ></div>
        < GreetingContainer />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </div>
    </div>
  </div>
);

export default App;
