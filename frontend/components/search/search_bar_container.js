import { connect } from 'react-redux';
import { requestSearchProducts, clearSearch } from '../../actions/search_actions';
import SearchBar from './search_bar';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  searchResults: state.search.searchResults
});

const mapDispatchToProps = dispatch => ({
  clearSearch: () => dispatch(clearSearch()),
  searchProducts: (query) => dispatch(requestSearchProducts(query))
});

export default withRouter (connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar));
