var roomName = "";

document.querySelector("#cbutton").addEventListener("click", function(event) {
    event.preventDefault();
    sessionStorage.setItem("roomName", document.getElementById("CreatePartyID").value);
    roomName = sessionStorage.getItem("roomName");
    console.log(roomName)
    window.location.href = '/video_page.html';
}, false);

