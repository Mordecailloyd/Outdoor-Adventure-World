import {merge} from "lodash";
import {RECEIVE_PRODUCT, RECEIVE_PRODUCTS} from "../actions/product_actions";


const nullState = {
  selectedProduct: {
    title: '',
    body: ''
  },
  allProducts: {
    0: {
      title: '',
      body: ''
    }
  }
};

const productReducer = (state = nullState, action) => {
  Object.freeze(state);
  let newState = merge({}, nullState);
  switch(action.type){
    case RECEIVE_PRODUCT:
      return Object.assign(newState,{selectedProduct: action.product});
    case RECEIVE_PRODUCTS:
      return Object.assign(newState,{allProducts: action.products});
    default:
      return state;
  }
};

export default productReducer;
