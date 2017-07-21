export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
import * as ProductUtil from '../util/product_api_util';


export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
});


export const requestProducts = () => dispatch => (
  ProductUtil.fetchProducts().then(
    products => dispatch(receiveProducts())
  )
);

export const requestProduct = (id) => dispatch =>(
  ProductUtil.fetchProduct(id).then(
    product => dispatch(receiveProduct())
  )
);
