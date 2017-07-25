import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
      <div className= 'product-items'>
        <h1>test render home</h1>
        <div className = "splash">
          <Link to = "/">
          </Link>
          <img src = "http://res.cloudinary.com/dt3tnq8um/image/upload/q_auto:low/v1500914391/thomas-schweighofer-75393_ivuqvs.jpg" />
        </div>
        <div>
          <div className = "sample-product">
            <link to = "/">
            </link>
            <img src = "http://res.cloudinary.com/dt3tnq8um/image/upload/q_auto:low/v1500915319/zoe-deal-223392_t53kui.jpg" />
          </div>
          <div className = "sample-index">
            <Link to = "/">
            </Link>
            <img src="http://res.cloudinary.com/dt3tnq8um/image/upload/q_auto:low/v1500915526/rob-bye-125311_yvj1nw.jpg" />
          </div>
        </div>
        <div className = "footer">
          <ul className='product-items'>
            {productItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
