var axios = require('axios');

var helper = {

    // This function serves our purpose of running the query to NYTimes API.
    runQuery: function(term, begin, end) {

        var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

        var qs = '?api-key=446cb566e3c24dcba27e21e2bd9a4899&q=' + term;

        if (begin) {
            qs += '&begin_date=' + begin + '0101';
        }

        if (end) {
            qs += '&end_date=' + end + '1231';
        }

        return axios.get(queryURL + qs).then(function(response) {
            // If we get a result, return objects with the desired parts of the responses.
            if (response.data.response.docs.length > 0) {
                var responses = [];

                for (var i = 0; i < 5; i++) {
                    var doc = response.data.response.docs[i];
                    var articleID = doc._id;
                    var article = {
                        title: doc.headline.main,
                        url: doc.web_url,
                        date: doc.pub_date.split('T')[0],
                        articleID: articleID
                    };

                    responses.push(article);
                }
                return responses;

            } else {
                //  empty string if no result
                return false;
            }
        });
    },

    // retrieves the records of query results
    getSaved: function() {
        return axios.get("/api/saved");
    },

    //  posts new searches to our database.
    postSaved: function(article) {
        return axios.post('/api/saved', article);
    },

    // deletes new searches from our database.
    deleteSaved: function(articleID) {
        return axios.delete('/api/saved/' + articleID);
    }
};

module.exports = helper;