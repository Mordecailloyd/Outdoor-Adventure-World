import React from 'react';
import CartItem from './cart_item';
import {Link} from 'react-router-dom';

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount(){
    this.props.requestCart();
    window.scrollTo(0, 0)
  }

  cartItem(product,idx) {


      const destroyItem = () => this.props.requestDestroyCartItem(product.id);
      return (
        <div className="cart-item" key = {idx}>
          <div className="cart-item-image">
            <img src={product.image_url}/>
          </div>
          <div className="cart-item-details">
            <Link to={`/products/${product.id}`}><div className="cart-item-title">{product.title}</div></Link>
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
  }


  render () {
    let explanation = () => (alert("This is where I would request credit card info. As this is a demo site it does nothing."));
    let subtotal;
    if (this.props.cart.length){
      subtotal = (this.props.cart.map(product => product.price).reduce((a, b) => parseFloat(a) + parseFloat(b),0)).toFixed(2);
    } else {
      subtotal = 0;
    }
    let tax = (subtotal * 0.085).toFixed(2);
    let shipping = (subtotal < 500 ? 10 : 0).toFixed(2);
    let grandtotal = (Number(subtotal) + Number(tax) + Number(shipping)).toFixed(2);
    if(this.props.cart.length === 0) {

      return (<h3 className="cart-empty">Cart Empty</h3>);
    } else {
      return (
        <div className="shopping-cart">
          <h1>Shopping Cart</h1>
          <div className="column-labels">
            <label className="cart-item-image">Image</label>
            <label className="cart-item-details">Product</label>
            <label className="cart-item-removal">Remove</label>
            <label className="cart-item-price">Price</label>
            <label className="right-edge"></label>
          </div>

          {this.props.cart.map( (product, idx) => {
            return (
              this.cartItem(product,idx)
            );
          }
        )
      }

          <div className="totals">
            <div className="totals-item">
              <label>Subtotal</label>
              <div className="totals-value" id="cart-subtotal">{subtotal}</div>
            </div>
            <div className="totals-item">
              <label>Tax (8.5%)</label>
              <div className="totals-value" id="cart-tax">{tax}</div>
            </div>
            <div className="totals-item">
              <label>Shipping</label>
              <div className="totals-value" id="cart-shipping">{shipping}</div>
            </div>
            <div className="totals-item totals-item-total">
              <label>Grand Total</label>
              <div className="totals-value" id="cart-total">{grandtotal}</div>
            </div>
          </div>
          <button onClick={explanation}className="checkout">Checkout</button>
        </div>
      );
    }}
  }

export default Cart;
