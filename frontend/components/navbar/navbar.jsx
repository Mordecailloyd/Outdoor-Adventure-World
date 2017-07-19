import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {


  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }



  render() {
    if(this.props.currentUser) {
      return (
        <div>
        <nav className='navbar'>
          <div className="LeftNav">
            <Link to="/">
              <div id="index-route">
                <i id="oal_logo" aria-hidden="true"></i>
                <span id="nav-title"><img src = 'http://res.cloudinary.com/dt3tnq8um/image/upload/v1500489133/oaw_logo_heksfp.png'></img></span>
              </div>
            </Link>
            <Link to="/">
              <span id="index-nav-link"></span>
            </Link>
          </div>
          <div className="MiddleNav">
          </div>
          <div className="RightNav">
            <button onClick={this.handleLogout.bind(this)} type="button" className="logout-button">Logout</button>
            <a href="https://github.com/Mordecailloyd/Outdoor-Adventure-World" target="_blank">
              <img className="github" src="http://res.cloudinary.com/dt3tnq8um/image/upload/v1500497806/icons8-GitHub-64_jtd9e1.png" id="github-link" aria-hidden="true" />
            </a>
          </div>
        </nav>
        </div>
      );
    } else {
      return (
        <div className ='navbar-container'>
          <nav className='navbar'>
            <div className="LeftNav">
              <Link to="/">
                <div id="index-route">
                  <i id="oal_logo" aria-hidden="true"></i>
                  <span id="nav-title">
                    <img src = 'http://res.cloudinary.com/dt3tnq8um/image/upload/v1500489133/oaw_logo_heksfp.png' />
                  </span>
                </div>
              </Link>
            </div>
            <div className="MiddleNav">
            </div>
            <div className="RightNav">
              <Link to="/login">
                <button type="button" className='login-button'>Login</button>
              </Link>
              <Link to="/signup">
                <button type="button" className="signup-button">Sign Up</button>
              </Link>
              <a href="https://github.com/Mordecailloyd/Outdoor-Adventure-World" target="_blank">
                <img className="github" src="http://res.cloudinary.com/dt3tnq8um/image/upload/v1500497806/icons8-GitHub-64_jtd9e1.png" id="github-link" aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      );
    }
  }
}

export default withRouter(Navbar);
