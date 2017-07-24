import { connect } from 'react-redux';
import { requestProduct } from '../../actions/product_actions';
import Show from './show';
import { withRouter } from 'react-router';
import values from 'lodash/values';




const mapStateToProps = ( state ) => {
  return {
    selectedProduct: state.products.selectedProduct
  };
};

const mapDispatchToProps = dispatch => ({
  requestProduct: (id) => dispatch(requestProduct(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Show));
