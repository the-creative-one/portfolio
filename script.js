// For Hamburger animation
const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  hamburger.classList.toggle("open");
});

// Active Nav Link
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

// Scroll animation
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

// Closing Menu

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");

    hamburger.classList.remove("open");
  });
});

// Current Year - Footer

const year = new Date().getFullYear();

const footerYear = document.querySelector(".footer-year");

if (footerYear) {
  footerYear.textContent = year;
}

// Top to Bottom Scroll

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  scrollTopBtn.classList.toggle("show", window.scrollY > 400);
});
