import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"
import { auth } from "./firebase"
/* import { showMessage } from "./showMessage.js"; */



const signUpForm = document.querySelector('#signup-form');

signUpForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = signUpForm["signup-email"].value;
    const password = signUpForm["signup-password"].value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredential)

        const signUpModal = document.querySelector('#signupModal');
        const modal = bootstrap.Modal.getInstance(signUpModal);
        modal.hide();

        // reset the form
        /* signUpForm.reset(); */

        // show welcome message
        /* showMessage("Welcome" + userCredentials.user.email); */

    } catch (error) {
        console.log(error);
        /* if (error.code === 'auth/email-already-in-use') {
          showMessage("Email already in use", "error")
        } else if (error.code === 'auth/invalid-email') {
          showMessage("Invalid email", "error")
        } else if (error.code === 'auth/weak-password') {
          showMessage("Weak password", "error")
        } else if (error.code) {
          showMessage("Something went wrong", "error")
        } */
    }
});