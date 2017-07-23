import { Link, withRouter } from 'react-router-dom';
import React from 'react';


class Show extends React.Component {
  constructor(props) {
    super(props);
    this.newstate = {
    };
  }

  componentDidMount(){
    this.props.product();
  }
  render() {
    return (
      <div>
        <div className = 'show-img'>
          <h1>test render show</h1>
          <ul>
            {this.props.selectedProduct.title}
          </ul>
        </div>
        <div className = 'show-description'>
        </div>
        <div className = 'show-messages'>

        </div>
      </div>
    );
  }
}

export default Show;
