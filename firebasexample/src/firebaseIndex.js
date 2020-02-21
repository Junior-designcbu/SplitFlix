var db = firebase.firestore();

function storeData() {

    var nameText = document.getElementById("name_field").value;
    var emailText = document.getElementById("email_field").value;
    var PasswordText = document.getElementById("password_field").value;
    // Add a new document in collection "cities"
    db.collection("newUsers").doc().set({
        name: nameText,
        email: emailText,
        password: PasswordText

    }).then(function() {
        console.log("Document successfully written!");
    })
}

function storeLogin() {
    var loginEmailText = document.getElementById("login_email").value;
    var loginPasswordText = document.getElementById("login_password").value;
    // Add a new document in collection "cities"
    db.collection("currentUsers").doc().set({
        email: loginEmailText,
        password: loginPasswordText

    }).then(function() {
        console.log("Document successfully written!");
    })
}

