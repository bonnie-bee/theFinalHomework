import React from "react";
import "./ArticleDetails.css"

const ArticleDetails = props => (
  <div className="text-center articleBits">
    <p id="articleTitle">{props.title}</p>
    <p id="articleSnippet">Snippet: {props.snippet}</p>
    <p id="articleDate">Date: {props.date}</p>
    <a id="articleLink" href={props.link}>Link</a>
    <hr/>
    <br/>
  </div>
);

export default ArticleDetails;
