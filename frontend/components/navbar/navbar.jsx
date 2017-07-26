import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchBarContainer from '../search/search_bar_container';

class Navbar extends React.Component {


  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }



  render() {
    const logo = "https://res.cloudinary.com/dt3tnq8um/image/upload/c_scale,h_80/v1500489133/oaw_logo_heksfp.png";
    if (this.props.currentUser){
      return (
        <div className = 'navbar-container'>
          <nav className='navbar'>
            <div className="LeftNav">
              <Link to="/">
                <div id="index-route">
                  <i id="oal_logo" aria-hidden="true"></i>
                  <span id="nav-title"><img src={logo} /></span>
                </div>
              </Link>
              <Link to="/">
                <span id="index-nav-link"></span>
              </Link>
            </div>
            <div className="MiddleNav">
              <SearchBarContainer />
            </div>
            <div className="RightNav">
              <button onClick={this.handleLogout.bind(this)} type="button" className="session-button">Logout</button>
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
                    <img src = {logo} />
                  </span>
                </div>
              </Link>
            </div>
            <div className="MiddleNav">
              <SearchBarContainer />
            </div>
            <div className="RightNav">
              <Link to="/login" className='session-button'>
                Login
              </Link>
              <Link to="/signup" className="session-button">
                Sign Up
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
