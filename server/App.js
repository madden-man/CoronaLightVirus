const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const suggestionUtils = require('./utils/Suggestions');

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.on('initial_data', function( data, callback ) {
    suggestionUtils.getSuggestions().then(function(suggestionResult) {
      callback(suggestionResult);
    });
  })

  socket.on('new_suggestion', function( data ) {
    suggestionUtils.insertSuggestion(data);

    io.sockets.emit('show_suggestion', data);
  });

  socket.on('disconnect', function(){
    console.log('disconnected');
  });
});

http.listen(8080, function() {
  console.log('listening on localhost:8080');
});
