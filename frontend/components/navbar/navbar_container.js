import { connect } from 'react-redux';
import { requestLogout, requestLogin,
  requestSignup } from '../../actions/session_actions';
import Navbar from './navbar';
import { requestCart } from '../../actions/cart_actions';

const mapStateToProps = ({ session ,cart}) => ({
  currentUser: session.currentUser,
  cart
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(requestLogout()),
  login: user => dispatch(requestLogin(user)),
  signup: user => dispatch(requestSignup(user)),
  requestCart: () => dispatch(requestCart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
