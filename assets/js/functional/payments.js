let url = "https://api.cognospheredynamics.com";

/// form submission

const form = document.querySelector(".payment_form_aida");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const params = new URLSearchParams(window.location.search);
  const business_type = params.get("business_type");
  const user = JSON.parse(localStorage.getItem("user"));

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  data.business_type = business_type;
  data.email = user["email"];
  data.phone = user["phone"];
  data.name = user["name"];

  fetch(`${url}/api/auth/payAidas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("server: ", data);
      let link = data.paymentLink;

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
