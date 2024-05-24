document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("bearer_token");

  if (!isLoggedIn) {
    window.location.href = "/sphere_signin.html"; // Redirect to login page
  }
});
