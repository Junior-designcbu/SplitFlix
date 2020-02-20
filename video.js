const videoElem = document.getElementById("video");
const startElem = document.getElementById("start");
const stopElem = document.getElementById("stop");

//constraints for media display
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

// this is the block of devDependency that existed in package json
// "devDependencies": {
//     "socket.io": "^2.3.0"
// }