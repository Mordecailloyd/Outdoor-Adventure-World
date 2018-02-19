

import React from 'react';
import { Link } from 'react-router-dom';

class CartIcon extends React.Component {
  constructor(props) {
    super(props);
    this.cartCount=this.cartCount.bind(this);
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
    <img className="shop-cart" src="https://res.cloudinary.com/dt3tnq8um/image/upload/v1519074671/Shopping-Cart-icon_ifnsdc.png"/>
    {this.cartCount()}
    </Link>
  );}
}

export default CartIcon;
