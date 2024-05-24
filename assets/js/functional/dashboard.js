function updateView(x) {
  let offcanvas = document.querySelector(".offcanvas");

  if (x.matches) {
    offcanvas.classList.remove("show");
  } else {
    offcanvas.classList.add("show");
  }
}

let x = window.matchMedia("(max-width: 720px)");

updateView(x);

x.addEventListener("change", function () {
  updateView(x);
});

let aida_dashboard = document.getElementById("aida_dashboard");
let twogere_dashboard = document.getElementById("twogere_dashboard");
let default_dashboard = document.getElementById("default_dashboard");

let aida_ui = document.querySelector(".aida_dashboard");
let twogere_ui = document.querySelector(".twogere_dashboard");
let default_ui = document.querySelector(".default_dashboard");
let payment_form_ui = document.getElementById("payment_form");

aida_ui.style.display = "none";
twogere_ui.style.display = "none";
payment_form_ui.style.display = "none";

aida_dashboard.addEventListener("click", () => {
  hide_dashboard();
  aida_ui.style.display = "block";
});

default_dashboard.addEventListener("click", () => {
  hide_dashboard();
  default_ui.style.display = "block";
});
twogere_dashboard.addEventListener("click", () => {
  hide_dashboard();
  twogere_ui.style.display = "block";
});

function show_payment_form() {
  hide_dashboard();
  payment_form_ui.style.display = "block";
}
function hide_dashboard() {
  aida_ui.style.display = "none";
  default_ui.style.display = "none";
  twogere_ui.style.display = "none";
  payment_form_ui.style.display = "none";
}

// const timeout = 1 * 30 * 1000;
// setTimeout(() => {
//   localStorage.removeItem("bearer_token");
// }, timeout);

// async function myAuthCheck() {
//   let bearer_token = localStorage.getItem("bearer_token");
//   if (bearer_token) {
//     console.log(bearer_token);
//   } else {
//     console.log("expired");
//   }
// }
setInterval(myAuthCheck, 3000);
