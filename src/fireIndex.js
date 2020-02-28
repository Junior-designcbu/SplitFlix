// Your web app's Firebase configuration
(function() {
    var firebaseConfig = {
        apiKey: "AIzaSyD-XesmW_0wA7e7DtNYhUECmhgJssPYf3w",
        authDomain: "splitflix-17650.firebaseapp.com",
        databaseURL: "https://splitflix-17650.firebaseio.com",
        projectId: "splitflix-17650",
        storageBucket: "splitflix-17650.appspot.com",
        messagingSenderId: "761563690321",
        appId: "1:761563690321:web:61c178c393597089534f70",
        measurementId: "G-63BMXK45X9"
    };

    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    // GET DOM ELEMENTS
    const emailTxt = document.getElementById("email_field");
    const passwordTxt = document.getElementById("password_field");
    const btnLogin = document.getElementById("sign_in_btn");

    // add login event
    btnLogin.addEventListener('click', e => {
        // get email and password
        const email = emailTxt.value;
        const password = passwordTxt.value;
        const auth = firebase.auth();
    })

}());


