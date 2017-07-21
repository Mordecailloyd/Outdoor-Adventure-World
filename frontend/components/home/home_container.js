import { connect } from 'react-redux';
import { requestProducts } from '../../actions/product_actions';
import Home from './home';
import { withRouter } from 'react-router';
import values from 'lodash/values';




const mapStateToProps = ( state ) => {
  const params = Object.keys(state.products.allProducts).map(product => (
      state.products.allProducts[product]
  ));
  console.log('state',state);
  console.log('params',params);
  console.log('values',values);
  console.log('this.products in container', state.products.allProducts);
  return {
    allProducts: params,
    product: state.products.selectedProduct
  };
};

const mapDispatchToProps = dispatch => ({
  products: () => dispatch(requestProducts())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));
