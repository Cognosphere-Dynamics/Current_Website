document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("user");

  if (!isLoggedIn) {
    window.location.href = "/sphere_signin.html"; // Redirect to login page
  }
});
