import React from "react";
import "./ArticleDetails.css"

const ArticleDetails = props => (
  <div className="text-center articleBits">
    <p id="articleTitle">{props.title}</p>
    <p id="articleSnippet">Snippet: {props.snippet}</p>
    <p id="articleDate">Date: {props.date}</p>
    <a id="articleLink" href={props.link}>Link</a>
    <button
            type="submit"
            className="btn btn-primary"
            onClick={()=>{props.saveArticle(props.keyId)}}>Save Me!</button>
            {/* value={[
              title= props.title,
              snippet= props.snippet,
              date= props.date,
              url= props.link,
              saved= true
            ]} */}
    <hr/>
    <br/>
  </div>
);

export default ArticleDetails;
