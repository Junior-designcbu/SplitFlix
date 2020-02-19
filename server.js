// import socketIO from "socket.io";
// import createServer from "http";

const express = require('express');
const app = express();
const path = require('path');
// const httpServer = createServer(app);
// const io = socketIO(httpServer);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 4000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

// io.on("connection", socket => {
//     console.log("Socket connected.");
// });
