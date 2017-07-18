export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_LOGOUT_SUCCESS = 'RECEIVE_LOGOUT_SUCCESS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
import * as APIUtil from '../util/session_api_util';

//SYNC ACTIONS
export const receiveCurrentUser = currentUser =>({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveLogoutSuccess =()=>({
  type: RECEIVE_LOGOUT_SUCCESS
});

export const receiveErrors = (error) => ({
  type: RECEIVE_ERRORS,
  error
});

//ASYNC ACTIONS

export const requestLogin = (user) => dispatch =>(
  APIUtil.login(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    error => dispatch(receiveErrors(error.responseJSON))
  )
);

export const requestSignup = (user) => dispatch =>(
  APIUtil.signup(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    error => dispatch(receiveErrors(error.responseJSON))
  )
);

export const requestLogout = () => dispatch => (
  APIUtil.logout().then(
    () => dispatch(receiveLogoutSuccess())
  )
);
