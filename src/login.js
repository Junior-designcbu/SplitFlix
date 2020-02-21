
// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in: ', user);
    } else {
        console.log('user logged out');
    }
})

// sign-up
const signupForm = document.querySelector('#sign-up_form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = signupForm['sign-up_email'].value;
    const password = signupForm['sign-up_password'].value;

    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        // close the signup modal & reset form
        document.querySelector('#sign-up_div');
        signupForm.reset();
    });
});

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    firebase.auth.signOut();
});

// login
const loginForm = document.querySelector('#login_form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = loginForm['login_email'].value;
    const password = loginForm['login_password'].value;

    // log the user in
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
        // close the sign-up modal & reset form
        const modal = document.querySelector('#login_div');
        modal.getInstance(modal).close();
        loginForm.reset();
    });

});
