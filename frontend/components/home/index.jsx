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
      <div className= 'product-items'>
        <div className = "splash">
          <div className = "splash-text"><h1> Outdoor Adventure World, the E-Commerce site for all your sporting needs!</h1>
          </div>
          <Link to = "/">
          </Link>
          <img src = "https://res.cloudinary.com/dt3tnq8um/image/upload/c_limit,h_1000/v1500914391/thomas-schweighofer-75393_ivuqvs.jpg" />
        </div>

          <div className = "sample-product sample-item">
            <link to = "/">
            </link>

          </div>
          <div className = "sample-index sample-item">
            <Link to = "/">
            </Link>
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
