import React from 'react';
import { withRouter, Link } from 'react-router';
import SearchResults from './search_results';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      resultsShown: false,
      visibility: 'hide'
    };
    this.exitSearchBar = this.exitSearchBar.bind(this);
    this.show=this.show.bind(this);
    this.update=this.update.bind(this);
    this.hide=this.hide.bind(this);
  }

  show() {

    return (
    ( Object.keys(this.props.searchResults).length === 0 || this.state.query === "" )
    ?  false : true
    );
  }


  hide() {
    debugger;
    setTimeout(() => {
      debugger;
      this.setState({visibility: 'hide', query: "", resultsShown: false});
    },300);
  }

  update(field) {
    return (e) => {

      this.setState({
      [field]: e.currentTarget.value}, () => {
        if (this.state.query !== "") {
          this.props.clearSearch();
          this.props.searchProducts(this.state.query);
        }
      });
      this.setState({visibility: 'show'});
    };


  }
  exitSearchBar() {
    setTimeout(() => {
      this.setState({query: ""});
      this.props.clearSearch();
    }, 100);
  }


  render () {
    return (
      <ul className="search-container">
        <li>
          <input
          className="search-bar-input"
          type="text"
          placeholder="Search for items"
          onBlur={this.hide}
          value={this.state.query}
          onChange={this.update("query")}>
        </input></li>
          <SearchResults
            shown={this.show()}
            visibility = {this.state.visibility}
            results={this.props.searchResults}
          />
      </ul>
    );
  }
}

export default SearchBar;
