import React from "react";
import "./Results.css";

const Results = props => (
    <div className="col-md-12 results">
    <h1 class="boxTitle">Search Results:</h1>
    <hr />
        {props.children}
        
    </div>
)

export default Results;