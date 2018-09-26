import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Results from "./components/Results";
import Saved from "./components/Saved";
import ArticleDetails from "./components/ArticleDetails";
import SavedArticles from "./components/SavedArticles";
import API from "./utils/API";


class App extends Component {
  state = {
    result: [],
    saved: [],
    search: ""
  };

  componentDidMount() {
    this.searchNews("ranch dressing");
    this.loadArticles();
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

  loadArticles = () => {
    API.getArticles()
    .then(res=> this.setState({ saved: res.data}))
    .catch(err => console.log(err))
  };

  saveArticle = id => {
    const results = this.state.result
      console.log(results[id])
      if (results[id]) {
        API.saveArticle({
          title: results[id].Headline,
          date: results[id].Date,
          snippet: results[id].Snippet,
          url: results[id].Link,
          saved: true
        })
          .then(res => this.loadArticles())
          .catch(err => console.log(err));
      }
  };

  searchNews = query => {
    let result = [];
    API.search(query)
      .then(res => {
        const dataInfo = res.data.response.docs;
        dataInfo.forEach((element, i) => {
          let articleInfo = {
            Headline: element.headline.main,
            Link: element.web_url,
            Date: element.pub_date,
            Snippet: element.snippet,
            key: i
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
          {this.state.result.map((result,i) => result.Headline ? (
            <ArticleDetails
              title={result.Headline}
              date={result.Date}
              link={result.Link}
              snippet={result.Snippet}
              keyId={i}
              key={i}
              saveArticle={this.saveArticle}
            />
          ) : (
              <h3>No Results to Display</h3>
            ))}
        </Results>
        <Saved> {this.state.saved.map(result => result.saved ? (
          <SavedArticles
            title={result.title}
            date={result.date}
            link={result.url}
            snippet={result.snippet}
            // notes={result.Notes}
          />
        ) : (
            <h3>No Results to Display</h3>
          ))}
        </Saved>
      </div>
    );
  }
}

export default App;
