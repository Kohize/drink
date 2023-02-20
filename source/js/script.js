/* в этот файл добавляет скрипты*/
let navMenu = document.querySelector(".nav-menu");
let navMenuToggle = document.querySelector(".nav-menu__button");

navMenu.classList.remove("nav-menu--no-js");

navMenuToggle.addEventListener("click", function () {
  if (navMenu.classList.contains("nav-menu--closed")) {
    navMenu.classList.remove("nav-menu--closed");
    navMenu.classList.add("nav-menu--opened");
  } else {
    navMenu.classList.add("nav-menu--closed");
    navMenu.classList.remove("nav-menu--opened");
  }
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false,
  pagination: {
    el: ".promo__pagination",
    clickable: true,
    bulletElement: "button",
    bulletActiveClass: "promo__pagination-item--active",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const map = L.map("map").setView([59.96835, 30.31755], 20);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const myIcon = L.icon({
  iconUrl: "../img/png/map-pin.png",
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const marker = L.marker([59.96835, 30.31755], { icon: myIcon }).addTo(map);
