import { connect } from 'react-redux';
import { requestProduct } from '../../actions/product_actions';
import Show from './show';
import { withRouter } from 'react-router-dom';
import values from 'lodash/values';
import {requestAllMessages} from '../../actions/message_actions';
import {requestAddCartItem} from '../../actions/cart_actions';


const mapStateToProps = ( state) => {
  return {
    selectedProduct: state.products.selectedProduct,
    messages: values(state.products.messages)

  };
};

const mapDispatchToProps = dispatch => ({
  requestProduct: (id) => dispatch(requestProduct(id)),
  requestAllMessages: (productId) => dispatch(requestAllMessages(productId)),
  requestAddCartItem: (productId) => dispatch(requestAddCartItem(productId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Show));
