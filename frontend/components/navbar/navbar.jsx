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
        <nav className='navbar'>
          <div className="LeftNav">
            <Link to="/">
              <div id="index-route">
                <i id="oal_logo" aria-hidden="true"></i>
                <span id="nav-title"><img src = 'http://res.cloudinary.com/dt3tnq8um/image/upload/v1500489133/oaw_logo_heksfp.png'></img></span>
              </div>
            </Link>
            <Link to="/">
              <span id="index-nav-link">stuff</span>
            </Link>
          </div>
          <div className="MiddleNav">
          </div>
          <div className="RightNav">
            <button onClick={this.handleLogout.bind(this)} type="button" className="Logout Button">Logout</button>
            <a href="https://github.com/Mordecailloyd/Outdoor-Adventure-World" target="_blank">
              <i className="fa fa-github" id="github-link" aria-hidden="true"></i>
            </a>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className='navbar'>
          <div className="LeftNav">
            <Link to="/">
              <div id="index-route">
                <i id="oal_logo" aria-hidden="true"></i>
                <span id="nav-title"><img src = 'http://res.cloudinary.com/dt3tnq8um/image/upload/v1500489133/oaw_logo_heksfp.png'></img></span>
              </div>
            </Link>
          </div>
          <div className="MiddleNav">
          </div>
          <div className="RightNav">
            <Link to="/login">
              <button type="button" className='Login Button'>Login</button>
            </Link>
            <Link to="/signup">
              <button type="button" className="Signup Button">Sign Up</button>
            </Link>
            <a href="https://github.com/Mordecailloyd/Outdoor-Adventure-World" target="_blank">
              <i className="fa fa-github" id="github-link" aria-hidden="true"></i>
            </a>
          </div>
        </nav>
      );
    }
  }
}

export default withRouter(Navbar);
