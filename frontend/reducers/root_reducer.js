import sessionReducer from './sessions_reducer';
import { combineReducers } from 'redux';
import productReducer from './products_reducer';



const rootReducer = combineReducers({
  session: sessionReducer,
  products: productReducer
});



export default rootReducer;
