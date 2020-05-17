/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
document.addEventListener("DOMContentLoaded", function () {
  let nav = document.querySelector("#navbar__list");
  let sections = document.getElementsByTagName("section");
  let sectionsArray = [...sections];

  for (let i = 0; i < sectionsArray.length; i++) {
    let navItem = document.createElement("li");
    navItem.classList.add("menu__link");
    navItem.innerHTML += sectionsArray[i].attributes[1].nodeValue;
    nav.appendChild(navItem);
  }

  let navItems = document.getElementsByClassName("menu__link");
  navItems = [...navItems];

  function onScroll(e) {
    sectionsArray.forEach(function (section) {
      var rect = section.getBoundingClientRect();

      if (rect.top <= 0 && rect.bottom >= 0) {
        section.className = "active";
        navItems.forEach((item) =>
          item.innerHTML == section.getAttribute("data-nav")
            ? item.classList.add("active")
            : item.classList.remove("active")
        );
      } else {
        section.className = "";
      }
    });
  }

  function onClick(e) {
    let val = e.target.innerHTML;
    console.log(val);
    console.log(sectionsArray);

    sectionsArray.forEach((item) => {
      item.getAttribute("data-nav") == val
        ? window.scrollTo(0, item.offsetTop)
        : null;
    });
  }

  document.addEventListener("scroll", onScroll);

  document.querySelectorAll(".menu__link").forEach((item) => {
    item.addEventListener("click", onClick);
  });
});
