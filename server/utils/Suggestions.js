const MongoClient = require('mongodb').MongoClient;

module.exports = {
  getSuggestions: function() {
    return new Promise(function(resolve, reject) {
      MongoClient.connect('mongodb://localhost:27017', function(err, client) {
        client.db('corona-light-virus').collection('suggestions', function(err, collection) {
          collection.find().toArray(function(err, items) {
            resolve(items);
          });
        });
      });
    }).then(function(result) {
      return result;
    })
  },
  insertSuggestion: function(suggestion) {
    MongoClient.connect('mongodb://localhost:27017', function(err, client) {
      client.db('corona-light-virus').collection('suggestions', function(err, collection) {
        collection.insert(suggestion);
      });
    });
  }
}
