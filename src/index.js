var db = firebase.firestore();

function storeData() {

    var nameText = document.getElementById("name_field").value;
    var emailText = document.getElementById("email_field").value;
    var passwordText = document.getElementById("password_field").value;
    // Add a new document in collection "cities"
    db.collection("Users").doc().set({
        name: nameText,
        email: emailText,
        password: passwordText

    }).then(function() {
        console.log("Document successfully written!");
    })
}
