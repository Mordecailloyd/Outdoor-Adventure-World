import sessionReducer from './sessions_reducer';
import { combineReducers } from 'redux';
import searchReducer from './search_reducer';
import productReducer from './products_reducer';



const rootReducer = combineReducers({
  session: sessionReducer,
  products: productReducer,
  search: searchReducer
});



export default rootReducer;
