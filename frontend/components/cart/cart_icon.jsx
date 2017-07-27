

import React from 'react';
import { Link } from 'react-router';

class CartIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestCart();
  }

  cartCount() {
    if (this.props.cart.length > 0) {
      return (
        <span className="cart-count">{this.props.cart.length}</span>
      );
    }
  }


  render() {
  return (
    <Link to ="/cart">
    <img className="shop-cart" src="http://icons.iconarchive.com/icons/iconsmind/outline/48/Shopping-Cart-icon.png"/>
    {this.cartCount()}
    </Link>
  );}
}

export default CartIcon;
