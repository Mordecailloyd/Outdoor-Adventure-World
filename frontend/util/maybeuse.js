http://localhost:3000/api/messages/?product_id=1

for testing and routing for messages of a given product

switch (action.type) {
  case REQUEST_CART:
    requestCart(receiveCartSuccess);
    return next(action);
  case ADD_CART_ITEM:
    addCartItem(action.id, receiveCartItemSuccess);
    return next(action);
  case DESTROY_CART_ITEM:
    destroyCartItem(action.id, destroyCartItemSuccess);
    return next(action);
  default:
    return next(action);
}
};

export default CartMiddleware;
export const destroyCartItem = (id) => ({
  type: DESTROY_CART_ITEM,
  id
});




// case RECEIVE_CART_ITEM:
//   newState = merge({}, state);
//   let newCartItem = action.cartItem;
//   return merge(newState, {[newCartItem.id]:
//   newCartItem});
// case REMOVE_CART_ITEM:
//   newState = merge({}, state);
//   // delete newState[action.cartItem.id];
//   return newState;


onBlur={this.exitSearchBar}

import React from 'react';
import { withRouter, Link } from 'react-router';

const defaultFieldTextClass = "default-field-text";
const defaultText = "Search for great gear!";
const activeHeaderText = "light-up-green";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: defaultText,
      placeHolder: true
    };

    this.setButtonClass = this.setButtonClass.bind(this);
    this.validEntry = this.validEntry.bind(this);

    this.submitSearch = this.submitSearch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
    this.formatKeywords = this.formatKeywords.bind(this);
  }

  // check if placeHolder is present and if entry is all whitespace/dashes
  validEntry() {
    return !this.state.placeHolder && !/^[\s-'"]+$/.test(this.state.value);
  }

  // Return value in state with excess space and dashes removed, and underscores
  //   converted to space, excess quotes to a single quote
  formatKeywords() {
    return this.state.value.replace(/-+/g, "-")
                           .replace(/_+/g, " ")
                           .replace(/"+/g, "'")
                           .replace(/'+/g, "'")
                           .replace(/\s+/g, " ")
                           .trim();
  }

  submitSearch(e) {
    e.preventDefault();
    if (this.validEntry()) {
      const pathName = '/search';

      let url = this.props.router.createPath({
        pathname: pathName,
        query: { keywords: this.formatKeywords() }
      });

      let currentURL = this.props.router.location.pathname +
                       this.props.router.location.search;

      // Don't create new search if duplicate request
      if (currentURL !== url) {
        this.props.router.push(url);

        // If the url pathname is not '/search', onEnter hook in root.jsx
        // will dispatch the search
        if (this.props.router.location.pathname === "/search") {
          this.props.search({
            keywords: url.slice(pathName.length)
          });
        }

        // Blur child input of form to reset placeholder when the form is
        // submitted via the Enter key; ensures that onFocus is triggered
        // if the user immediately wants to conduct a new search.
        e.target.childNodes[0].blur();
        this.setState({ value: defaultText, placeHolder: true });
      }
    }
  }

  setButtonClass() {
    let baseClass = "search-button";
    return this.validEntry() ? `${baseClass} ${activeHeaderText}` : baseClass;
  }

  resetInput() {
    this.setState({ value: defaultText, placeHolder: true });
  }

  handleInputChange() {
    const invalid = /[!@#\$%\^&\*\(\)=\[\]\{\}:;<>\?\\/,\.]/;
    return (e) => {
      if (!invalid.test(e.target.value[e.target.value.length - 1]))
          this.setState({ value: e.target.value, placeHolder: false });
    };
  }

  handleInputFocus() {
    return (e) => {
      if (this.state.placeHolder) {
        this.setState({value: "", placeHolder: true});
      }
    };
  }

  handleInputBlur() {
    return (e) => {
      if (this.state.value === "") {
        this.resetInput();
      }
    };
  }

  render() {
    return (
      <form className="header-search-bar" onSubmit={this.submitSearch}>
        <input className="search-bar-input"
               value={this.state.value}
               maxLength="70"
               onChange={ this.handleInputChange() }
               onFocus={ this.handleInputFocus() }
               onBlur={ this.handleInputBlur() }>
        </input>
        <button type="submit"
                className={this.setButtonClass()}>
          <i className="fa fa-search fa-lg" aria-hidden="true"></i>
        </button>
      </form>
    );
  }
}

export default SearchBar;
