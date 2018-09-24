import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Results from "./components/Results";
import Saved from "./components/Saved";
import ArticleDetails from "./components/ArticleDetails";
import API from "./utils/API";


class App extends Component {
  state = {
    result: {},
    search: ""
  };

  componentDidMount() {
    this.searchNews("Puppies");
  }

  searchNews = query => {
    API.search(query)
      .then(res => {
        this.setState({ result: res.data });
        console.log(this.state)
      })
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div>
        <Navbar />
        <Search />
        <Results>
          {this.state.result.Title ? (
            <ArticleDetails
              title={this.state.result.Title}
              year={this.state.result.Year}
              released={this.state.result.Released}
            />
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Results>
        <Saved />
      </div>
    );
  }
}

export default App;
