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
    window.scrollTo(0, 0)
  }

  render() {
    const productItems = this.props.allProducts.map(product => {
      const productId = product.id;
      return (
        <li key={`${productId}`} className = 'product-item' >
          <h4>{product.title}</h4>

          <Link to={`/products/${productId}`} >
            <img className="product-item-img" src={product.image_url}></img></Link>

        </li>
      );}
    );
    return (
      <div>
        <h1>test render home</h1>
        <ul className='product-items'>
          {productItems}
        </ul>
      </div>
    );
  }
}

export default Home;
