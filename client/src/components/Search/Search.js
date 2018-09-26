import React from "react";
import "./Search.css";

const Search = (props) => (
    <form>
  <div className="form-group">
    <label >Search Articles</label>
    <input 
      type="text" 
      className="form-control" 
      id="searchTerm" 
      placeholder="ranch dressing"
      name="search"
      value={props.value}
      onChange={props.handleInputChange}

      />
  </div>
  <button 
  type="submit" 
  className="btn btn-primary" 
  onClick={props.handleFormSubmit}>Submit</button>
</form>
)

export default Search;