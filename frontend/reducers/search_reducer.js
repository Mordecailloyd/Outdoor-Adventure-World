import { SEARCH_RESULTS, CLEAR_SEARCH } from '../actions/search_actions';
import merge from 'lodash/merge';

const defaultState = {
  searchResults:{}
};

const SearchReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SEARCH_RESULTS:
      return {searchResults: action.products};
    case CLEAR_SEARCH:
      return defaultState;
    default:
      return state;
  }
};

export default SearchReducer;
