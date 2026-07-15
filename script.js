// =======================================
// Learning & Quiz Tool - script.js
// =======================================

// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    console.log("Learning & Quiz Tool Loaded Successfully");

    // ==========================
    // REGISTER PAGE VALIDATION
    // ==========================

    const registerForm = document.querySelector('form[action="/register"]');

    if (registerForm) {

        registerForm.addEventListener("submit", function (event) {

            const password = document.querySelector('input[name="password"]').value;
            const confirmPassword = document.querySelector('input[name="confirm_password"]').value;

            if (password.length < 6) {

                alert("Password must be at least 6 characters.");

                event.preventDefault();

                return;

            }

            if (password !== confirmPassword) {

                alert("Passwords do not match!");

                event.preventDefault();

                return;

            }

        });

    }

    // ==========================
    // LOGIN VALIDATION
    // ==========================

    const loginForm = document.querySelector('form[action="/login"]');

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            const email = document.querySelector('input[name="email"]').value.trim();

            const password = document.querySelector('input[name="password"]').value.trim();

            if (email === "" || password === "") {

                alert("Please enter Email and Password.");

                event.preventDefault();

            }

        });

    }

    // ==========================
    // PASSWORD SHOW / HIDE
    // ==========================

    const passwordFields = document.querySelectorAll('input[type="password"]');

    passwordFields.forEach(function (field) {

        const button = document.createElement("button");

        button.type = "button";

        button.innerHTML = "Show";

        button.style.marginTop = "8px";
        button.style.marginLeft = "10px";

        field.parentNode.appendChild(button);

        button.addEventListener("click", function () {

            if (field.type === "password") {

                field.type = "text";

                button.innerHTML = "Hide";

            } else {

                field.type = "password";

                button.innerHTML = "Show";

            }

        });

    });

    // ==========================
    // QUIZ TIMER
    // ==========================

    const timer = document.getElementById("time");

    if (timer) {

        let seconds = 60;

        const countdown = setInterval(function () {

            timer.innerHTML = seconds;

            seconds--;

            if (seconds < 0) {

                clearInterval(countdown);

                alert("Time is over! Quiz submitted.");

                document.forms[0].submit();

            }

        }, 1000);

    }

    // ==========================
    // BUTTON LOADING EFFECT
    // ==========================

    const buttons = document.querySelectorAll("button");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            if (button.type === "submit") {

                button.innerHTML = "Please Wait...";

            }

        });

    });

    // ==========================
    // SMOOTH SCROLL
    // ==========================

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (anchor) {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

});