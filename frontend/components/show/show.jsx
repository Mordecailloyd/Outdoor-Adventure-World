import { Link, withRouter } from 'react-router-dom';
import React from 'react';


class Show extends React.Component {
  constructor(props) {
    super(props);
    this.newstate = {

    };
  }

  componentWillReceiveProps(nextProps){
    //check if location has changed - call fetchProduct by id if so
    const productId = parseInt(this.props.match.params.productId);
    if (productId !==  parseInt(nextProps.match.params.productId)){

      //this.props.id ?
      this.props.requestProduct(nextProps.match.params.productId);
    }
  }

  componentDidMount(){
    const productId = parseInt(this.props.match.params.productId);
    //this.props.id ?
    this.props.requestProduct(productId);
  }
  render() {
    const featuresList = this.props.selectedProduct.features.map(feature => {
      return (
        <li key={feature} >
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
          <div className = "checkout">
            <p className = 'img-price'>${this.props.selectedProduct.price}</p>
            <p><input href="#" className="btn btn-success"
              type="submit" value="Add To Cart" /></p>
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
          <messages />
        </div>
      </div>
    );
  }
}
// test removing withRouter
export default Show;
