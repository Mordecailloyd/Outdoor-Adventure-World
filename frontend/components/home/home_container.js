import { connect } from 'react-redux';
import { requestProducts } from '../../actions/product_actions';
import Home from './home';

const mapStateToProps = ({ session }) => ({
  products: session.Products
});

const mapDispatchToProps = dispatch => ({
  products: () => dispatch(requestProducts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
