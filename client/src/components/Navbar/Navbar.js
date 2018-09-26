import React from "react";
import "./Navbar.css";

const Navbar = () => (
    <div className="jumbotron">
        <h1 className="display-4">New York Times Search</h1>
        <p className="lead">Search for articles in the New York Times</p>
        <hr className="my-4" />
        <p>Save the articles you like so you can peruse them at a later date</p>
    </div>
);

export default Navbar;