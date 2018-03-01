import { Link, withRouter } from 'react-router-dom';
import React from 'react';
import MessageForm from './message_form';
import MessageShow from './message_show';

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.newstate = {

    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentWillReceiveProps(nextProps){
    //check if location has changed - call fetchProduct by id if so
    const productId = parseInt(this.props.match.params.productId);
    if (productId !==  parseInt(nextProps.match.params.productId)){

      //this.props.id ?
      this.props.requestProduct(nextProps.match.params.productId);
      this.props.requestAllMessages(nextProps.match.params.productId);
    }
  }

  componentDidMount(){
    const productId = parseInt(this.props.match.params.productId);
    //this.props.id ?
    this.props.requestProduct(productId);
    this.props.requestAllMessages(productId);
  }




  handleAddToCart(e) {
    e.preventDefault();
    const productId = parseInt(this.props.match.params.productId);
    this.props.requestAddCartItem(productId);
  }


  render() {

    const featuresList = this.props.selectedProduct.features.map(feature => {
      return (
        <li key={feature.length} >
          {feature}
        </li>
      );}
    );

    return (
      <div className = "show-page">
        <div className = 'img-and-checkout'>
          <div className = 'show-img'>
            <div className = 'img-info'>
              <p className = 'img-title'>{this.props.selectedProduct.title}</p>
            </div>
            <p className = "show-img-container"><img src= {this.props.selectedProduct.image_url} /></p>
          </div>
          <div className = "show-checkout">
            <p className = 'img-price'>${this.props.selectedProduct.price}</p>
            <p><button className="checkout-button" type="submit"  onClick={this.handleAddToCart}>Add To Cart</button></p>
          </div>
        </div>
        <div className = 'show-description'>
          <div className = 'product-info'>
            <p className="product-body">{this.props.selectedProduct.body}</p>

          </div>
          <div className = 'product-features'>
            <ul>
              <h3>Features:</h3>
              {featuresList}
            </ul>

          </div>
        </div>
        <div className = 'show-messages'>
          <div>
            <MessageForm {...this.props} key = 'form'/>

          </div>
          <ul>{this.props.messages.map(
              message=>
              <li key={message.id}>
                <MessageShow key={message.id} message={message}/>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
// test removing withRouter
export default Show;
