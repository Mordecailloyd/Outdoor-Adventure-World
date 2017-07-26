import {RECEIVE_CART_ITEM, REMOVE_CART_ITEM, RECEIVE_CART, CLEAR_CART
} from '../actions/cart_actions';

import merge from 'lodash/merge';

const defaultCart = {
};

const cartReducer = (state = defaultCart, action) => {
  Object.freeze(state);
  let newState = {
  };
  switch (action.type) {
    case RECEIVE_CART:
    //
      return newState;
    case REMOVE_CART_ITEM:
    //
      return newState;
    case RECEIVE_CART_ITEM:
      return action.cart;
    case CLEAR_CART:
      return defaultCart;
    default:
      return state;
  }
};

export default cartReducer;
