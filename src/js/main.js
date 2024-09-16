import Splide from "@splidejs/splide";
import "@splidejs/splide/css/core";
import "../scss/style.scss";

new Splide(".splide").mount();

let regionButtons = document.querySelectorAll(
  "ul.map__header__region-list li button"
);
let mapList = document.querySelectorAll("div.map__map-view__regions img");

regionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let selectedRegion = button.id.substring(4);
    console.log(selectedRegion);

    regionButtons.forEach((_button) => {
      if(button == _button) {
        _button.parentElement.classList.add("map__header__region-item_active");
      } else {
        _button.parentElement.classList.remove("map__header__region-item_active");
      }
    });

    if (button.id.substring(4) === "all") {
      mapList.forEach((map) => {
        map.style.display = "block";
      });
      return;
    }

    mapList.forEach((map) => {
      if (map.id == "map_" + selectedRegion) {
        map.style.display = "block";
      } else {
        map.style.display = "none";
      }
    });
  });
});

let subMenuToggler = document.querySelector('.map__header__toggler');

subMenuToggler.addEventListener("click", () => {
  let subMenu = document.querySelector('.map__sub-menu');
  let togglerArrow = document.querySelector('.map__header__toggler img')

  if(subMenu.classList.contains('map__sub-menu_visible')) {
    subMenu.animate({opacity: [1, 0],"top":"-300px"}, {duration: 600, easing: "ease-in", fill: 'forwards'});
    togglerArrow.animate({ transform: "rotate(0deg)"}, {duration: 300, easing: "ease-in", fill: 'forwards'});
    subMenu.classList.remove('map__sub-menu_visible');
  } else {
    subMenu.animate({opacity: [0, 1],"top":"100px"}, {duration: 600, easing: "ease-in", fill: 'forwards'});
    togglerArrow.animate({ transform: "rotate(180deg)"}, {duration: 300, easing: "ease-in", fill: 'forwards'});
    subMenu.classList.add('map__sub-menu_visible');
  }
});
