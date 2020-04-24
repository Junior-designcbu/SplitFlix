var joinRoomName = "";

document.querySelector("#jbutton").addEventListener("click", function(event) {
    event.preventDefault();
    sessionStorage.setItem("joinRoomName", document.getElementById("JoinPartyID").value);
    joinRoomName = sessionStorage.getItem("joinRoomName");
    console.log(joinRoomName);
    window.location.href = '/join.html';
}, false);