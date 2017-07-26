export const REQUEST_CART = 'REQUEST_CART';
export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const RECEIVE_CART = 'RECEIVE_CART';
export const CLEAR_CART = 'CLEAR_CART';
import * as CartUtil from '../util/cart_api_util';

export const DESTROY_CART_ITEM = 'DESTROY_CART_ITEM';


export const requestCart = () => dispatch =>(
  CartUtil.fetchCart().then(
    cart => dispatch(receiveCart(cart))
  )
);


export const requestAddCartItem = (productId) => dispatch =>(
  CartUtil.addCartItem(productId).then(
    itemId => dispatch(receiveCartItem(itemId))
  )
);

export const requestDestroyCartItem = (productId) => dispatch =>(
  CartUtil.destroyCartItem(productId).then(
    itemId => dispatch(removeCartItem(itemId))
  )
);


export const receiveCart = (cart) => ({
  type: RECEIVE_CART,
  cart
});

export const addCartItem = (id) => ({
  type: ADD_CART_ITEM,
  id
});

export const receiveCartItem = (cart) => ({
  type: RECEIVE_CART_ITEM,
  cart
});

export const removeCartItem = (cart) => ({
  type: REMOVE_CART_ITEM,
  cart
});

export const clearCart = () => ({
  type: CLEAR_CART
});
