import React from "react";
import "./Saved.css";

const Saved =(props)=>(
    <div className = "col-md-12 saved">
    <h1 class="boxTitle">Saved Articles:</h1>
    <hr />
    {props.children}
        </div>
)

export default Saved; 