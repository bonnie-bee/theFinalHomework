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
    result: [],
    search: ""
  };

  componentDidMount() {
    this.searchNews("pierogies");

  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchNews(this.state.search);
  };


  searchNews = query => {
    let result = [];
    API.search(query)
      .then(res => {
        const dataInfo = res.data.response.docs;
        dataInfo.forEach(element => {
          let articleInfo = {
            Headline: element.headline.main,
            Link: element.web_url,
            Date: element.pub_date,
            Snippet: element.snippet
          }
          result.push(articleInfo);
          this.setState({ result: result });
          console.log(this.state)
        });
      })
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div>
        <Navbar />
        <Search
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Results>
          {this.state.result.map(result => result.Headline ? (
            <ArticleDetails
              title={result.Headline}
              date={result.Date}
              link={result.Link}
              snippet={result.Snippet}
            />
          ) : (
              <h3>No Results to Display</h3>
            ))}
        </Results>
        <Saved />
      </div>
    );
  }
}

export default App;
