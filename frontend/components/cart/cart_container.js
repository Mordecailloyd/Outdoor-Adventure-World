import { connect } from 'react-redux';
import { requestDestroyCartItem, requestCart } from '../../actions/cart_actions';
import Cart from './cart';
import { withRouter } from 'react-router';

const mapStateToProps = ({ cart }) => ({
  cart
});

const mapDispatchToProps = dispatch => ({
  requestDestroyCartItem: (productId) => dispatch(requestDestroyCartItem(productId)),
  requestCart: () => dispatch(requestCart())

});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Cart);
