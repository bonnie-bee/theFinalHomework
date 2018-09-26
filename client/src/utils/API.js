import axios from "axios";

export default {
  search: function(query){
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&q=";
    const queryParams = "&api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    let fullQuery = queryURL+query+queryParams
    console.log(fullQuery);
    return axios.get(fullQuery)
  },
   getArticles: function() {
    return axios.get("/api/articles");
  },
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
}
