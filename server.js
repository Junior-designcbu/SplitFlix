import socketIO from "socket.io";
// import createServer from "http";
// const httpServer = require('https');
// const io = require('socket.io')(httpServer);
//
// const express = require('express');
// const app = express();
// const path = require('path');
// // const httpServer = createServer(app);
// // const io = socketIO(httpServer);
//
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });
//
// io.on("connection", socket => {
//     console.log("Socket connected.");
// });
//
// app.listen(process.env.PORT || 4000, function(){
//     console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });

var app = require('express')(),
    http = require('http').createServer(app),
    io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + 'index.html');
});

io.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});

http.listen(process.env.PORT || 3000, function () {
    console.log('listening on *:3000');
});
