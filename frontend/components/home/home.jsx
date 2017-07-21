import { Link, withRouter } from 'react-router-dom';
import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.newstate = {
    };
  }

  componentDidMount(){
    this.props.products();
  }
  render() {
    console.log('allproducts',this.props.allProducts);
    const productItems = this.props.allProducts.map(product => {
      const productId = product.id;
      return (
        <li>
          <p>{product.title}</p>
        </li>
      );}
    );
    return (
      <div>
        <h1>test render home</h1>
        <ul>
          {productItems}
        </ul>
      </div>
    );
  }
}

export default Home;
