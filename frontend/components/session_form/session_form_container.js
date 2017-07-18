import { connect } from 'react-redux';

import { requestLogout, requestLogin,
  requestSignup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? requestLogin : requestSignup;
  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    requestLogin: user => dispatch(requestLogin(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
