//server side code
var express = require('express');
var socket = require('socket.io');


//sets up App
var app = express();
var server = app.listen(4000, function () {
    console.log('Listening to requests on port 4000');
});


//static files
app.use(express.static('public'));


//socket io setup
var io = socket(server);

io.on('connection', function (socket) {
    console.log('Established socket connection', socket.id);

    //listen for message sent from client
    socket.on('chat', function (data) {
        io.sockets.emit('chat', data);
    });

    //broadcasting message to all other sockets
    socket.on('typing', function (data) {
        socket.broadcast.emit('typing', data);
    });
});