import {merge} from "lodash";
import {RECEIVE_PRODUCT, RECEIVE_PRODUCTS} from "../actions/product_actions";
import {RECEIVE_ALL_MESSAGES, MAKE_MESSAGE} from "../actions/message_actions";


const nullState = {
  selectedProduct: {
    title: '',
    body: '',
    features: []
  },
  allProducts: {
    0: {
      title: '',
      body: ''
    }
  },
  messages: {
    0:{
      title: '',
      body: ''
    }
  }
};

const productReducer = (state = nullState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_PRODUCT:
      return Object.assign(newState,{selectedProduct: action.product});
    case RECEIVE_PRODUCTS:
      return Object.assign(newState,{allProducts: action.products});
    case RECEIVE_ALL_MESSAGES:
      return Object.assign(newState,{messages: action.messages});
    case MAKE_MESSAGE:
      const messages = Object.assign({}, newState.messages, {[action.message.id]:action.message});
      return Object.assign(newState, {messages});
    default:
      return state;
  }
};

export default productReducer;
