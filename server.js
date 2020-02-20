const httpServer = require('http');
const io = require('socket.io')(httpServer);

const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'server.js',  'video.js', 'index.html'));
});

io.on("connection", socket => {
    console.log("Socket connected.");
});

app.listen(process.env.PORT || 4000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
