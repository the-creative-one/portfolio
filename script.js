// ============================
// MOBILE MENU
// ============================

const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  hamburger.classList.toggle("open");
});

// ============================
// ACTIVE NAV LINK
// ============================

const sections = document.querySelectorAll("section");

const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  links.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ============================
// SCROLL REVEAL
// ============================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

document
  .querySelectorAll(
    ".section-heading,.about-card,.project-card,.achievement-card,.contact-card,.timeline-item,.skill-category",
  )
  .forEach((item) => {
    item.classList.add("fade-up");

    observer.observe(item);
  });

// ============================
// SMOOTH CLOSE MENU
// ============================

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");

    hamburger.classList.remove("open");
  });
});

// ============================
// CURRENT YEAR
// ============================

const year = new Date().getFullYear();

const footerYear = document.querySelector(".footer-year");

if (footerYear) {
  footerYear.textContent = year;
}
