import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.zip array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="zip">Place:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="zip"
          list="zips"
          type="text"
          className="form-control"
          placeholder="Type in a zip to begin"
          id="zip"
        />
       
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
