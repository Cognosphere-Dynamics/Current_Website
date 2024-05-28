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

const offcanvasElement = document.getElementById("offcanvasScrolling");
const dashboardPages = document.querySelectorAll(".dashboard-page");
const hideBtns = document.querySelectorAll(".hide-btn");
const hideText = document.querySelectorAll(".hide-text");

hideBtns.forEach((hideBtn) => {
  hideBtn.addEventListener("click", function () {
    offcanvasElement.classList.toggle("collapsed");

    dashboardPages.forEach((page) => {
      page.classList.toggle("collapsed");
    });
    hideText.forEach((txt) => {
      txt.classList.toggle("d-none");
    });
  });
});

// dashboard_items
const preview = document.getElementById("preview");
const conversations = document.getElementById("conversations");
const account_settings = document.getElementById("account_settings");
const ai_settings = document.getElementById("ai_settings");
const dashboard_link = document.getElementById("dashboard_link");
const conversation_link = document.getElementById("conversation_link");
const finetune_AI_link = document.getElementById("finetune_AI_link");
const account_settings_link = document.getElementById("account_settings_link");
const adds_marketing_link = document.getElementById("adds_marketing_link");
const ai_settings_link = document.getElementById("ai_settings_link");

function hide_dashboard_items() {
  preview.style.display = "none";
  conversations.style.display = "none";

  account_settings.style.display = "none";

  ai_settings.style.display = "none";
}

hide_dashboard_items();
preview.style.display = "block";
dashboard_link.querySelector("a").style.color = "#388da8"; // Highlight the first link by default

dashboard_link.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default behavior of the anchor tag
  hide_dashboard_items();
  preview.style.display = "block";
  removeActiveClassFromLinks();
  dashboard_link.querySelector("a").style.color = "#388da8";
});

conversation_link.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default behavior of the anchor tag
  hide_dashboard_items();
  conversations.style.display = "block";
  removeActiveClassFromLinks();
  conversation_link.querySelector("a").style.color = "#388da8";
});

ai_settings_link.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default behavior of the anchor tag
  hide_dashboard_items();
  ai_settings.style.display = "block";
  removeActiveClassFromLinks();
  ai_settings_link.querySelector("a").style.color = "#388da8";
});

account_settings_link.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default behavior of the anchor tag
  hide_dashboard_items();
  account_settings.style.display = "block";
  removeActiveClassFromLinks();
  account_settings_link.querySelector("a").style.color = "#388da8";
});

function removeActiveClassFromLinks() {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.style.color = "black";
  });
}

// const active_ai = document.getElementById("active_ai_models");
// const statistics = document.getElementById("usage_and_statistics");
// const statistics_btn = document.getElementById("statistics_btn");
// const active_ai_btn = document.getElementById("active_ai_btn");

// active_ai_btn.addEventListener("click", () => {
//   console.log("clicked");
//   removeClass();
//   statistics.classList.add("d-none");
// });

// statistics_btn.addEventListener("click", () => {
//   console.log("clicked");

//   removeClass();
//   active_ai.classList.add("d-none");
// });

// const removeClass = () => {
//   statistics.classList.remove("d-none");
//   active_ai.classList.remove("d-none");
// };

// // chat
// const options = {
//   series: [
//     {
//       name: "Users",
//       data: [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650], // Sample data for users
//     },
//   ],
//   chart: {
//     height: 350,
//     type: "line",
//     zoom: {
//       enabled: false,
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   stroke: {
//     curve: "smooth",
//   },
//   xaxis: {
//     categories: [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ],
//   },
// };

// var chart = new ApexCharts(document.querySelector("#lineGraph"), options);
// chart.render();

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
// setInterval(myAuthCheck, 3000);
