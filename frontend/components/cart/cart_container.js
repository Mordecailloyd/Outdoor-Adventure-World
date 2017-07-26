import { connect } from 'react-redux';
import { destroyCartItem } from '../../actions/cart_actions';
import Cart from './cart';
import { withRouter } from 'react-router';

const mapStateToProps = ({ cart }) => ({
  cart
});

const mapDispatchToProps = dispatch => ({
  destroyCartItem: (productId) => dispatch(destroyCartItem(productId))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Cart);
