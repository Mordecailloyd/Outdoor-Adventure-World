import {merge} from "lodash";
import {RECEIVE_PRODUCT, RECEIVE_PRODUCTS} from "../actions/product_actions";


const nullProduct = {
  currentProduct: null
};

const productReducer = (state = nullProduct, action) => {
  console.log('product reducer hit');
  console.log('action',action);
  Object.freeze(state);
  let newState = merge({}, nullProduct);
  switch(action.type){
    case RECEIVE_PRODUCT:
      return action.product;
    case RECEIVE_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};

export default productReducer;
