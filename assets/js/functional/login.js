let url = "https://api.cognospheredynamics.com";

const form = document.querySelector(".signin");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  console.log("data: ", data);
  fetch(`${url}/api/auth/loginUser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        const message = document.querySelector(".signin-title");
        message.textContent = data.error;
        message.style.color = "salmon";
        setTimeout(() => {
          message.textContent = "";
        }, 4000);
      }

      // console.log(data.access_token)

      localStorage.setItem("bearer_token", JSON.stringify(data.access_token));
      window.location.href = `/index.html`;
    })
    .catch((error) => console.log(error));
});
