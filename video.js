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
    // if (navigator.getDisplayMedia) {
    //     return navigator.getDisplayMedia({video: true});
    // } else if (navigator.mediaDevices.getDisplayMedia) {
    //     return navigator.mediaDevices.getDisplayMedia({video: true});
    // } else {
    //     return navigator.mediaDevices.getUserMedia({video: true});
    // }
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

module.exports;

// this is the block of whatever that existed in package json
// "devDependencies": {
//     "socket.io": "^2.3.0"
// }