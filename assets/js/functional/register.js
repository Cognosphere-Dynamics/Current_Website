const proceedBtn = document.getElementById("proceedBtn");
const submitBtn = document.getElementById("submitButton");

proceedBtn.addEventListener("click", function () {
  let form = document.getElementById("signupForm");
  let data = new FormData(form);
  const formData = Object.fromEntries(data);

  let emailField = document.querySelector('input[name="email"]');

  // check if email is right

  function validateEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  }

  if (!validateEmail(emailField.value)) {
    document.getElementById("loaderSection").classList.remove("d-none");
    document.querySelector(".loader").textContent = "Email cannot be empty!";
    document.querySelector(".loader").style.color = "red";
    setTimeout(() => {
      document.getElementById("loaderSection").classList.add("d-none");
    }, 5000);

    return;
  }

  // Hide the submit button and show loader
  document.getElementById("submitButton").classList.add("d-none");
  document.getElementById("loaderSection").classList.remove("d-none");

  // Perform the first step of form submission

  fetch(
    "https://api.cognospheredynamics.com/api/auth/sendMailForVerification",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Handle response
      if (data.success) {
        // Show OTP section
        document.getElementById("otpSection").classList.remove("d-none");
        document.getElementById("submitButton").classList.remove("d-none");
        document.getElementById("proceedBtn").classList.add("d-none");
      } else {
        document.getElementById("loaderSection").classList.remove("d-none");
        document.querySelector(".loader").textContent = data.errors.email[0];

        document.querySelector(".loader").style.color = "red";
        setTimeout(() => {
          document.getElementById("loaderSection").classList.add("d-none");
        }, 5000);
        emailField.value = "";
      }
      // Hide loader and show submit button
      document.getElementById("loaderSection").classList.add("d-none");
    })
    .catch((error) => {
      console.log(error);
      alert(error);
      // // Hide loader and show submit button
      document.getElementById("loaderSection").classList.add("d-none");
      document.getElementById("submitButton").classList.remove("d-none");
    });
});

// Add an event listener to handle OTP submission
submitBtn.addEventListener("click", function () {
  // Function to check if all fields are filled

  var otp = document.getElementById("otp").value;
  let form = document.getElementById("signupForm");
  let data = new FormData(form);
  const formData = Object.fromEntries(data);
  formData.velification_code = otp;

  console.log(formData);

  function areAllFieldsFilled(formData) {
    for (let key in formData) {
      if (formData[key].trim() === "") {
        return false;
      }
    }
    return true;
  }

  if (!areAllFieldsFilled(formData)) {
    alert("all Fields are required");
    return;
  }

  // Perform OTP verification
  fetch("https://api.cognospheredynamics.com/api/auth/verifyingCode", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle response
      if (data.success) {
        window.location.href = `./sphere_signin.html`;
        // Redirect or perform further actions
      } else {
        alert("Wrong OTP try again");
      }
    })
    .catch((error) => {
      alert("Error: ", error);
    });
});
