import React from "react";
import "./style.css";
import 'bootstrap';

function Search(props) {
  return (
      <div className="searchBlock md-form mt-0">
        <input placeholder="Put a letter to narrow your search!" className="inputBox blockItem form-control" type="text" value={props.search} onChange={props.handleInputChange} name="search" id="search"></input>
        <h3 className="blockItem">Sort By:</h3>
        <div className="blockItem">
            <button className="btn btn-secondary" type="button" onClick={props.sortName}>
            Sort By Name
            </button>
        </div>
      </div>
  );
}

export default Search;
