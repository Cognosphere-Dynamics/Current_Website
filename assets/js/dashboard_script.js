"use strict";

function $(selector) {
  return document.querySelector(selector);
}

function find(el, selector) {
  let finded;
  return (finded = el.querySelector(selector)) ? finded : null;
}

function siblings(el) {
  const siblings = [];
  for (let sibling of el.parentNode.children) {
    if (sibling !== el) {
      siblings.push(sibling);
    }
  }
  return siblings;
}

const showAsideBtn = $(".show-side-btn");
const sidebar = $(".sidebar");
const wrapper = $("#wrapper");

showAsideBtn.addEventListener("click", function () {
  $(`#${this.dataset.show}`).classList.toggle("show-sidebar");
  wrapper.classList.toggle("fullwidth");
  var sidebarWidth = window.getComputedStyle(sidebar).width;
  if (parseInt(sidebarWidth) > 240) {
    sidebar.classList.add("hide-items");
  } else {
    setTimeout(() => {
      sidebar.classList.remove("hide-items");
    }, 200);
  }
});

if (window.innerWidth < 767) {
  sidebar.classList.add("show-sidebar");
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 767) {
    sidebar.classList.remove("show-sidebar");
  }
});

// dropdown menu in the side nav
let slideNavDropdown = $(".sidebar-dropdown");

$(".sidebar .categories").addEventListener("click", function (event) {
  event.preventDefault();

  const item = event.target.closest(".has-dropdown");

  if (!item) {
    return;
  }

  item.classList.toggle("opened");

  siblings(item).forEach((sibling) => {
    sibling.classList.remove("opened");
  });

  if (item.classList.contains("opened")) {
    const toOpen = find(item, ".sidebar-dropdown");

    if (toOpen) {
      toOpen.classList.add("active");
    }

    siblings(item).forEach((sibling) => {
      const toClose = find(sibling, ".sidebar-dropdown");

      if (toClose) {
        toClose.classList.remove("active");
      }
    });
  } else {
    find(item, ".sidebar-dropdown").classList.toggle("active");
  }
});

$(".sidebar .close-aside").addEventListener("click", function () {
  $(`#${this.dataset.close}`).classList.add("show-sidebar");
  wrapper.classList.remove("margin");
});

const links = document.querySelectorAll(".categories a");
const sections = document.querySelectorAll(".dashboard-section");

function showSection(targetId) {
  sections.forEach((section) => {
    section.classList.toggle("active", section.id === targetId);
  });
}

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("data-target");
    showSection(targetId);
  });
});

showSection("main_preview");

// individual page navs
console.log("Straigh: ", document.getElementById("nav_btn"));

const pageLinks = document.getElementById("nav_btn");
console.log(pageLinks);
function show_active_ai_models() {
  console.log("clicked");
}
