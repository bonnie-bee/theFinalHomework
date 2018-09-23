import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar"
import Search from "./components/Search"
import Results from "./components/Results"
import Saved from "./components/Saved"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Search />
        <Results />
        <Saved />
      </div>
    );
  }
}

export default App;
