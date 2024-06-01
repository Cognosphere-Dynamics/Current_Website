const emailValue = document.querySelector(".email").value;
const proceedBtn = document.querySelector(".proceed_btn1");
const otpFeedBack = document.querySelector(".otp-box");
const loader = document.querySelector(".loader");
const otpInput = document.querySelector(".otp-input");
const formBox = document.querySelector(".form-box");
const otp = document.getElementById("otp");
const submitBtn = document.querySelector(".submit-btn");
const otpText = document.querySelector(".title-otp");
const submitDiv = document.querySelector(".submit-div");
const editEmail = document.querySelector(".editEmail");

editEmail.addEventListener("click", () => {
  location.reload();
  formBox.classList.toggle("disabled-div");
});

proceedBtn.addEventListener("click", () => {
  const emailValue = document.querySelector(".email").value;
  const username = document.querySelector(".username").value;
  const name = document.querySelector(".name").value;
  const phone = document.querySelector(".phone").value;
  const password = document.querySelector(".password").value;
  const confirmPassword = document.querySelector(".confirm-password").value;

  const allFieldsFilled =
    emailValue && username && phone && password && confirmPassword;
  const passwordsMatch = password === confirmPassword;

  if (otp.value.trim() === "") {
    if (allFieldsFilled) {
      if (passwordsMatch) {
        otpFeedBack.classList.remove("d-none");
        editEmail.classList.remove("d-none");
        formBox.classList.add("disabled-div");

        // send mail for verification

        const userRegister = {
          email: emailValue,
          name,
          username,
          phone,
          password,
        };
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
              loader.classList.add("d-none");
              otpInput.classList.remove("d-none");
            } else {
              loader.classList.add("d-none");
              otpInput.classList.remove("d-none");
              otp.classList.add("d-none");
              let errorMessage = data.errors.email[0];
              otpText.textContent = errorMessage;
              otpText.style.color = "red";
              // return;
            }
          })
          .catch((error) => {
            console.log("Error:", error);
            emailFeedBack.textContent = error.TypeError;
          });
      } else {
        const message = document.querySelector(".signup-title");
        message.textContent = "Password didn't match";
        message.style.color = "salmon";
      }
    } else {
      const message = document.querySelector(".signup-title");
      message.textContent = "All Fields are required";
      message.style.color = "salmon";
    }
  } else {
    otpFeedBack.classList.remove("d-none");
    loader.classList.remove("d-none");

    const verifyingObject = {
      email: emailValue,
      velification_code: otp.value.trim(),
    };
    fetch(`https://api.cognospheredynamics.com/api/auth/verifyingCode`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(verifyingObject),
    })
      .then((res) => res.json())
      .then((data) => {
        otpInput.classList.remove("d-none");

        if (data.success) {
          submitDiv.classList.remove("d-none");
          otpInput.classList.add("d-none");
          otpFeedBack.classList.add("d-none");
          loader.classList.add("d-none");
          window.location.href = `./sphere_signin.html`;
        } else {
          otpInput.classList.add("d-none");
          otpFeedBack.classList.add("d-none");
          otpText.textContent = "Wrong OTP";
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }
});
