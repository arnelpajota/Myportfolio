
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*===== ANIMATION  SA SCROLL2=====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1500,
  delay: 100,
  //     reset: true
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });


/* darkmode function*/

function toggleDarkMode() {
  const body = document.body;
  const darkModeToggle = document.getElementById("darkModeToggle");

  
  setTimeout(() => {
    if (darkModeToggle.checked) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, 300);

  const isDarkMode = darkModeToggle.checked;
  localStorage.setItem("darkMode", isDarkMode);
}

const savedDarkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.getElementById("darkModeToggle");

if (savedDarkMode === "true") {
  darkModeToggle.checked = true;
  toggleDarkMode();
}

darkModeToggle.addEventListener("change", toggleDarkMode);

/* Preloader*/
document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loaded");
});
