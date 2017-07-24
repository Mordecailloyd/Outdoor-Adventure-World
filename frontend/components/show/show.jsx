import { Link, withRouter } from 'react-router-dom';
import React from 'react';


class Show extends React.Component {
  constructor(props) {
    super(props);
    this.newstate = {
    };
  }

  componentDidMount(){
    //this.props.id ?
    this.props.requestProduct(1).then (() => {
      console.log(this.props);
    });
  }
  render() {
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
          </div>
        </div>
        <div className = 'show-description'>
          <div className = 'product-info'>
            <p className="product-brand">{this.props.selectedProduct.brand}</p>
            <p className="product-title">{this.props.selectedProduct.title}</p>
            <p className="product-price">${this.props.selectedProduct.price}</p>

            <p className="product-body">{this.props.selectedProduct.body}</p>

          </div>
          <div className = 'product-features'>

          </div>
        </div>
        <div className = 'show-messages'>
          <messages />
        </div>
      </div>
    );
  }
}

export default Show;
