import axios from "axios";
// import request from "request";

// export default {
//   search: function(query){
//     request.get({
//       url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
//       qs: {
//         'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
//         'q': query
//       },
//     }, function(err, response, body) {
//       body = JSON.parse(body);
//       console.log(body);
//       return body;
//     })
//   }
// }
export default {
  search: function(query){
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&q=";
    const queryParams = "&api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    let fullQuery = queryURL+query+queryParams
    console.log(fullQuery);
    return axios.get(fullQuery)
  }
}
