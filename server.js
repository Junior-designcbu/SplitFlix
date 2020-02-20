const express = require('express');
const app = express();
const path = require('path');
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);

// our express middleware, serving all files under directory of root
app.use(express.static(path.join(__dirname, "root")));

//upon get request to server, respond with index.html
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

io.on("connection", socket => {
    console.log("Socket connected.");
});

app.listen(process.env.PORT || 4000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
