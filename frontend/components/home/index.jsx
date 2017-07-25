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
        <li key={`${productId}`} >
          <p>{product.title}</p>
          <Link to={`/products/${productId}`} >Product Show Page.</Link>
          <img src={product.image_url}></img>
        </li>
      );}
    );
    return (
      <div>
        <h1>test render home</h1>
        <div className = "splash">
          <Link to = "/">
          </Link>
          <img src = "http://res.cloudinary.com/dt3tnq8um/image/upload/q_auto:low/v1500914391/thomas-schweighofer-75393_ivuqvs.jpg" />
        </div>
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
        <div className = "footer">
          <ul>
            {productItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
