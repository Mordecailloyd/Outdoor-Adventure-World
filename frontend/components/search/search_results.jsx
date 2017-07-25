
import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const SearchResults = ({shown, results}) => {
  if (shown) {


    const names = Object.keys(results).map(id => <Link to={"/products/"+ id}>
    <li className="search-result-item" >{results[id].title}</li></Link>);

    return (
      <ul className="search-results">
        {names}
      </ul>
    );
  }
  else {
  return  null;
  }
};


export default SearchResults;
