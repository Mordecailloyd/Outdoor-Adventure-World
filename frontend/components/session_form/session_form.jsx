import React from 'react';
import { Link, withRouter, Redirect} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleDemo(e) {
  e.preventDefault();
  let name = "BobBelcher";
  let password = "password";
  for (let i = 0; i < name.length; i++) {
    setTimeout(() => this.setState({
      username: name.slice(0, i + 1)}), (i * 100));
  }
  for (let j = 0; j < password.length; j++) {
    setTimeout(() => this.setState({
      password: password.slice(0, j + 1)}), ((j + 5) * 100));
  }
  const user = {
    username: 'Nicholas',
    password: 'password'
  };
  setTimeout(() => this.props.requestLogin({user}), 2000);
}

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  changeUserName(e) {
    this.setState({username: e.target.value});
  }

  changePassword(e)  {
    this.setState({password: e.target.value});
  }


  renderErrors() {
    return(

      <ul>
        {this.props.errors.map((error, i) => (
          <div className="alert alert-dismissible alert-danger" key={error}>
            <li key={i}>
              {error}
            </li>
          </div>
        ))}
      </ul>
    );
  }

  render() {
    if (this.props.user){
      return(<Redirect to= "/" />);
    }
    return (
      <div className="login-form-container">
        <div>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <br/>
            Please {this.props.formType} or {this.navLink()}
            {this.renderErrors() }
            <div className="login-form">
              <br/>
              <label>Username:
                <input type="text"
                  value={this.state.username}
                  onChange={this.changeUserName}
                  className="login-input"
                />
              </label>
              <br/>
              <label>Password :
                <input type="password"
                  value={this.state.password}
                  onChange={this.changePassword}
                  className="login-input"
                />
              </label>
              <br/>
              <div className = "handle-submits">
                <input href="#" className="btn btn-success"
                  type="submit" value="Submit" />
                <button href="#" className="btn btn-info" type='submit'
                  onClick={this.handleDemo}>Demo Log-in</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
