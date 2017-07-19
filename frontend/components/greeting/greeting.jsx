import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div>
    <h3>Welcome to Outdoor-Adventure-World!</h3>
  </div>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;




// <nav className="login-signup">
//   <Link to="/login">Login</Link>
//   &nbsp;or&nbsp;
//   <Link to="/signup">Sign up!</Link>
// </nav>
