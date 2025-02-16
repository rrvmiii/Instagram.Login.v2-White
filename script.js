/* script.js */
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("toggle-password");
    const loginForm = document.getElementById("login-form");

    togglePassword.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    });

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = passwordInput.value;

        if (email.trim() === "" || password.trim() === "") {
            alert("Please fill in both fields.");
            return;
        }

        alert("Login successful (Demo only)");
    });
});
