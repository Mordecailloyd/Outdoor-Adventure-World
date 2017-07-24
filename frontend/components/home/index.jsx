import React from 'react';

class Index extends React.Component {
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
        <li>
          <p>{product.title}</p>
        </li>
      );}
    );
    return (
      <div>
        <h1>test render home</h1>
        <div className = "splash">
          <Link to = "/">
            <img src = "http://res.cloudinary.com/dt3tnq8um/image/upload/q_auto:low/v1500914391/thomas-schweighofer-75393_ivuqvs.jpg" />
          </Link>
        </div>
        <div className = "sample-product">
          <link to = "/">
            <img src = "http://res.cloudinary.com/dt3tnq8um/image/upload/q_auto:low/v1500915319/zoe-deal-223392_t53kui.jpg" />
          </link>
        </div>
        <div className = "sample-index">
          <Link to = "/">
            <img src="http://res.cloudinary.com/dt3tnq8um/image/upload/q_auto:low/v1500915526/rob-bye-125311_yvj1nw.jpg" />
          </Link>

        </div>
        <div className = "footer">

        </div>
      </div>
    );
  }
}

export default Index;
