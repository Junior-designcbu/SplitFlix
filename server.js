const express = require('express');
const app = express();
const path = require('path');
const httpServer = require('http');
const io = require('socket.io')(httpServer);
var bodyParser = require("body-parser");

// //for requests
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

// our express middleware, serving all files under directory of root
app.use(express.static(path.join("root")));

//upon get request to server, respond with index.html
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'landingPage.html'));
});

app.get('/video_page.html', function(req, res) {
    res.sendFile(path.join(__dirname, 'video_page.html'));
});

app.get('/video.js', function(req, res) {
    res.sendFile(path.join(__dirname, 'video.js'));
});

app.get('/join.js', function(req, res) {
    res.sendFile(path.join(__dirname, 'join.js'));
});

app.get('/join.html', function(req,res) {
    res.sendFile(path.join(__dirname, 'join.html'));
})

app.get('/join.html', function(req,res) {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/server.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'server.js'));
});

app.get("/video.js", function (req, res) {
    res.sendFile(path.join(__dirname, 'video.js'));
});

io.on("connection", socket => {
    console.log("Socket connected.");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
