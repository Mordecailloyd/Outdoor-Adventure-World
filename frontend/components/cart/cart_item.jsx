import React from 'react';
import { Link } from 'react-router';

const CartItem = ({props}) => {
  console.log("made it to cartitem");
  debugger
  const destroyItem = () => destroyCartItem(product.id);
  return (
  <div className="cart-item">
      <div className="cart-item-image">
        <img src={product.image_url}/>
      </div>
      <div className="cart-item-details">
        <Link to={"/product/" + product.id}><div className="cart-item-title">{product.title}</div></Link>
        <p className="cart-item-description">{product.body}</p>
      </div>
      <div className="cart-item-removal">
        <button
          className="remove-cart-item"
          onClick={destroyItem}>
          Remove Item From Cart
        </button>
      </div>
      <div className="cart-item-price">{product.price}</div>
    </div>
  );
};

export default CartItem;
