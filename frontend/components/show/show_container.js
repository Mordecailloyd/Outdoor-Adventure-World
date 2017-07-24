import { connect } from 'react-redux';
import { requestProduct } from '../../actions/product_actions';
import Show from './show';
import { withRouter } from 'react-router';
import values from 'lodash/values';




const mapStateToProps = ( state ) => {
  const params = Object.keys(state.products.allProducts).map(product => (
      state.products.allProducts[product]
  ));
  return {
    allProducts: params,
    selectedProduct: state.products.selectedProduct
  };
};

const mapDispatchToProps = dispatch => ({
  requestProduct: () => dispatch(requestProduct())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Show));
