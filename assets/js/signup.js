const controller = document.querySelector(".controller");
const userPassword = document.querySelector(".user-password");
const emailError = document.getElementById("emailError");
const floatingEmail = document.getElementById("floatingEmail");
const floatingPassword = document.getElementById("floatingPassword");
const passwordError = document.getElementById("passwordError");
const paswordReminder = document.querySelector(".pasword-reminder");
const eye = document.querySelector(".eye");

eye.addEventListener("click", () => {
  const eyeIcon = eye.querySelector("i");

  eyeIcon.classList.toggle("bi-eye");
  const currentType = floatingPassword.getAttribute("type");
  floatingPassword.setAttribute(
    "type",
    currentType === "password" ? "text" : "password"
  );
});
controller.addEventListener("click", () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.textContent = "";
  if (floatingEmail.value.trim() === "") {
    emailError.textContent = "Email is required";
  } else if (!emailRegex.test(floatingEmail.value)) {
    emailError.textContent = "Email is not valid";
  } else {
    userPassword.classList.remove("d-none");
  }
});

floatingEmail.addEventListener("input", () => {
  if (floatingEmail.value.trim() === "") {
    emailError.textContent = "Email is required";
  } else {
    emailError.textContent = "";
  }
});

floatingPassword.addEventListener("input", () => {
  paswordReminder.classList.remove("d-none");
  if (passwordError.value.length >= 5) {
    passwordError.style.color = "#388da8";
  }
});
