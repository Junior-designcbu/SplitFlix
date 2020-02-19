import socketIO from "socket.io";
import createServer from "http";

const express = require('express');
const app = express();
const path = require('path');
const httpServer = createServer(app);
const io = socketIO(httpServer);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 4000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

io.on("connection", socket => {
    console.log("Socket connected.");
});

const videoElem = document.getElementById("video");
const startElem = document.getElementById("start");
const stopElem = document.getElementById("stop");
const logElem = document.getElementById("log");

const displayMediaOptions = {
    video: {
        cursor: "never"
    },
    audio: true
};

// Set event listeners for the start and stop buttons
startElem.addEventListener("click", function() {
    startCapture();
}, false);

stopElem.addEventListener("click", function() {
    stopCapture();
}, false);


async function startCapture() {
    logElem.innerHTML = "";
    try {
        videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
        dumpOptionsInfo();
    } catch(err) {
        console.error("Error: " + err);
    }
}

function stopCapture(evt) {
    let tracks = videoElem.srcObject.getTracks();
    tracks.forEach(track => track.stop());
    videoElem.srcObject = null;
}

function dumpOptionsInfo() {
    const videoTrack = videoElem.srcObject.getVideoTracks()[0];

    console.info("Track settings:");
    console.info(JSON.stringify(videoTrack.getSettings(), null, 2));
    console.info("Track constraints:");
    console.info(JSON.stringify(videoTrack.getConstraints(), null, 2));
}