const formInformation = document.querySelector(".payment_form_aida");
const accountErrors = document.querySelectorAll(".account-feedback");
const Error = document.querySelector(".error");

const emailInput = document.getElementById("email");
const otpInput = document.getElementById("otp");
const proceedBtn = document.querySelector(".proceed_btn1");

// email verification
const feedBackBox = document.querySelector(".verification-box");
const emailFeedBack = document.querySelector(".veryfyemail");
const otpFeedBack = document.querySelector(".otp-box");

// OTP verification
const otpFeedBackBox = document.querySelector(".checkotp");
const accountDetails = document.querySelector(".accounts-details");
const businessProfile = document.querySelector(".profile-and-payments");

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}

proceedBtn.addEventListener("click", () => {
  const otpValue = otpInput.value.trim();

  const emailValue = document.querySelector(".email").value;
  const name = document.querySelector(".name").value;
  const username = document.querySelector(".username").value;
  const phone = document.querySelector(".phone").value;
  const password = document.querySelector(".password").value;
  const confirmPassword = document.querySelector(".confirm").value;

  const allFieldsFilled =
    emailValue && name && username && phone && password && confirmPassword;
  const passwordsMatch = password === confirmPassword;
  if (!allFieldsFilled) {
    Error.textContent = "All Fields Are required";
    return;
  }
  if (!passwordsMatch) {
    Error.textContent = "Password didn't match";
    return;
  }
  if (!validateEmail(emailValue)) {
    Error.textContent = "Invalid email";
    return;
  }

  if (otpValue === "") {
    // Send verification email
    feedBackBox.classList.remove("d-none");
    Error.classList.add("d-none");

    setTimeout(() => {
      emailFeedBack.classList.add("d-none");
      otpFeedBack.classList.remove("d-none");
    }, 500);

    const userRegister = { email: emailValue, name, username, phone, password };
    fetch(
      `https://api.cognospheredynamics.com/api/auth/sendMailForVerification`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userRegister),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          emailFeedBack.classList.add("d-none");
          otpFeedBack.classList.remove("d-none");
          accountDetails.classList.add(".hidden-div");
        } else {
          Error.classList.remove("d-none");
          otpFeedBack.classList.add("d-none");
          let errorMessage = data.errors.email[0];
          Error.textContent = errorMessage;
          console.log(errorMessage);
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        emailFeedBack.textContent = error.TypeError;
      });
  } else {
    // Verify OTP

    otpFeedBackBox.classList.remove("d-none");

    const verifyingObject = { email: emailValue, velification_code: otpValue };
    fetch(`https://api.cognospheredynamics.com/api/auth/verifyingCode`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(verifyingObject),
    })
      .then((res) => res.json())
      .then((data) => {
        otpFeedBackBox.classList.remove("d-none");
        if (data.success) {
          document.querySelector(".otpSuccessMessage").textContent =
            data.message + "...";
          setTimeout(() => {
            document
              .querySelector(".otpSuccessMessage")
              .classList.add("d-none");
          }, 5000);

          otpFeedBackBox.classList.add("d-none");
          accountDetails.classList.add("d-none");

          businessProfile.classList.remove("d-none");
          proceedBtn.classList.add("d-none");
        } else {
          otpFeedBackBox.classList.add("d-none");
          document.querySelector(".emailError").textContent =
            data.message + "...";
          document.querySelector(".emailError").style.color = "red";
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        let data = JSON.parse(error);
        let errorMessage = data.errors.email[0];
        console.log(errorMessage);
      });
  }
});
