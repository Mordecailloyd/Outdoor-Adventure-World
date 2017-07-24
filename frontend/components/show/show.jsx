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
      <div>
        <div className = 'show-img'>
          <h1>test render show img</h1>
          <span><img src= {this.props.selectedProduct.image_url} /></span>
        </div>
        <div className = 'show-description'>
          <div className = 'product-info'>
            <span className="product-brand">{this.props.selectedProduct.brand}</span>
            <span className="product-title">{this.props.selectedProduct.title}</span>
            <span className="product-price">{this.props.selectedProduct.price}</span>

            <span className="product-body">{this.props.selectedProduct.body}</span>

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
