import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import {Route, Redirect, Switch,
  Link, HashRouter } from 'react-router-dom';


const App = () => (
  <div>
    <div>
      <h1>Outdoor Amazing World</h1>
      < GreetingContainer />
    </div>
    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
