import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchContainer from '../search/search_container';

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
                <i id="book-logo" className="fa fa-book" aria-hidden="true"></i>
                <span id="nav-title">Outdoor-Adventure-World</span>
              </div>
            </Link>
            <Link to="/">
              <span id="my-books-nav-link">stuff</span>
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
                <i id="book-logo" className="fa fa-book" aria-hidden="true"></i>
                <span id="nav-title">SuperScrolls</span>
              </div>
            </Link>
          </div>
          <div className="MiddleNav">
            <SearchContainer />
          </div>
          <div className="RightNav">
            <Link to="/login">
              <button type="button" className='Login Button'>Login</button>
            </Link>
            <Link to="/signup">
              <button type="button" className="Signup Button">Sign Up</button>
            </Link>
            <a href="https://github.com/Monte47/Super-Scrolls-FS" target="_blank">
              <i className="fa fa-github" id="github-link" aria-hidden="true"></i>
            </a>
          </div>
        </nav>
      );
    }
  }
}

export default withRouter(Navbar);
