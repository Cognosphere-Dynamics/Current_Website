const messageRegister = () => {
  document.querySelector(".email").value = "";
  document.querySelector(".name").value = "";
  document.querySelector(".phone").value = "";
  document.querySelector(".password").value = "";
  document.querySelector(".confirm-password").value = "";
};

let url = "https://api.cognospheredynamics.com";

const form = document.querySelector(".signup");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  const data = Object.fromEntries(formData);
  if (data.password === data.confirmPassword) {
    fetch(`${url}/api/auth/registerUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        messageRegister();
        window.location.href = `./sphere_signin.html`;
      })
      .catch((error) => console.log(error));
  } else {
    const message = document.querySelector(".signup-title");
    message.textContent = "Password didnt match";
    message.style.color = "salmon";

    setTimeout(() => {
      message.textContent = "";
    }, 4000);
  }
});
