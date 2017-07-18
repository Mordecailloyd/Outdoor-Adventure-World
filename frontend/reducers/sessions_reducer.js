import {merge} from "lodash";
import {RECEIVE_ERRORS, RECEIVE_LOGOUT_SUCCESS,
  RECEIVE_CURRENT_USER} from "../actions/session_actions";


const nullUser = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state=nullUser,action)=>{
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return{
        currentUser: action.currentUser,
        errors:[]
      };
    case RECEIVE_ERRORS:
      return Object.assign({},state,{errors: action.errors});
    case RECEIVE_LOGOUT_SUCCESS:
      return merge({},nullUser);
    default:
      return state;
  }
};

export default sessionReducer;

//
// const nullUser = Object.freeze({
//   currentUser: null,
//   errors: []
// });
//
// const SessionReducer = (state = nullUser, action) => {
//   Object.freeze(state)
//   switch(action.type) {
//     case RECEIVE_CURRENT_USER:
//       const currentUser = action.currentUser;
//       return merge({}, nullUser, {
//         currentUser
//       });
//     case RECEIVE_ERRORS:
//       const errors = action.errors;
//       return merge({}, nullUser, {
//         errors
//       });
//     default:
//       return state;
//   }
// };
