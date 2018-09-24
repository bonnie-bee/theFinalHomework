import React from "react";

const ArticleDetails = props => (
  <div className="text-center">
    <h3>Title: {props.title}</h3>
    <h3>Date: {props.year}</h3>
    <h3>Link: {props.released}</h3>
  </div>
);

export default ArticleDetails;
