import { Link, withRouter } from 'react-router-dom';
import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.newstate = {

    };
  }


  render() {
    return (
      <h1>test render home</h1>
    );
  }
}

export default withRouter(Home);
