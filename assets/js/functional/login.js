let url = "https://api.cognospheredynamics.com";

const form = document.querySelector(".signin");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  
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
      } else {
        console.log(data);
        const user = {
          access_token: data.access_token,
          email: data.user["email"],
          phone: data.user["phone"],
          name: data.user["name"],
        };

        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = `/sphere_dashboard.html`;
      }

      // console.log(data.access_token)
    })
    .catch((error) => console.log(error));
});
