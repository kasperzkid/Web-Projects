const container = document.querySelector(".container"),
  pwShowHide = document.querySelectorAll(".showHidePw"),
  pwFields = document.querySelectorAll(".password"),
  signUp = document.querySelector(".signup-link"),
  login = document.querySelector(".login-link");

// Show/Hide Password Toggle
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";
        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwField.type = "password";
        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});

// Switch Forms
signUp.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.add("active");
});

login.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.remove("active");
});

// Email Validation
function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|hotmail\.com)$/i;
  return regex.test(email);
}

// Password Validation
function isValidPassword(password) {
  const lengthCheck = password.length >= 8;
  const upperCheck = /[A-Z]/.test(password);
  const lowerCheck = /[a-z]/.test(password);
  const digitCheck = /[0-9]/.test(password);
  const specialCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  return lengthCheck && upperCheck && lowerCheck && digitCheck && specialCheck;
}

// DOM Loaded
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".form.login form");
  const signupForm = document.querySelector(".form.signup form");

  // Login Handler
  loginForm.querySelector('input[type="button"]').addEventListener("click", function () {
    const email = loginForm.querySelector('input[placeholder="Enter your email"]').value.trim();

    if (!isValidEmail(email)) {
      alert("Please enter a valid Gmail, Yahoo, or Hotmail email address.");
      return;
    }

    // Login successful
    alert("Login successful!");
    // You can redirect here too if needed
    // window.location.href = "dashboard.html";
  });

  // Signup Handler
  signupForm.querySelector('input[type="button"]').addEventListener("click", function () {
    const email = signupForm.querySelector('input[placeholder="Enter your email"]').value.trim();
    const password = signupForm.querySelectorAll('input[type="password"]')[0].value.trim();
    const confirmPassword = signupForm.querySelectorAll('input[type="password"]')[1].value.trim();

    if (!isValidEmail(email)) {
      alert("Please enter a valid Gmail, Yahoo, or Hotmail email address.");
      return;
    }

    if (!isValidPassword(password)) {
      alert("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Signup successful
    alert("Signup successful!");
    window.location.href = "dashboard.html";
  });
});
