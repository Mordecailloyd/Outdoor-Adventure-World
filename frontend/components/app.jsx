import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import {Route, Redirect, Switch,
  Link, HashRouter } from 'react-router-dom';
import Navbar from './navbar/navbar_container';

const App = () => (
  <div>
    <div>
      < Navbar />
      <h1>Outdoor Amazing World</h1>
      < GreetingContainer />
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
    </div>
  </div>
);

export default App;
