let url = "https://api.cognospheredynamics.com";

/// form submission

const form = document.querySelector(".payment_form_aida");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const infoForm = document.getElementById("signupForm");

  const infoFormData = new FormData(infoForm);
  const infoData = Object.fromEntries(infoFormData);

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  const mergedData = { ...infoData, ...data };
  console.log("client: ", mergedData);

  fetch(`${url}/api/auth/payAida`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mergedData),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("server: ", data);
      let link = data.paymentLink;
      console.log(link);

      window.location.href = link;
    })

    .catch((error) => {
      if (error) {
        document.querySelector(".errorMessage").innerHTML = `<div>
          <h4 class="text-danger">Something went wrong!</h4>
          <p>here are possible solutions.</p>
          <ul>
          <li>make sure all fields are filled</li>
          <li>check your internet connection</li>
          <li>contact us</li>
          </ul>
          </div>`;
        document.querySelector(".errorMessage").classList.add("border");
      }
    });
});
