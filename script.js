// Custom Tailwind Configuration
tailwind.config = {
  theme: {
    extend: {
      colors: {
        ivory: "#FDFDFB", // Main background
        charcoal: "#1A1A1A", // Deep text, dark backgrounds
        "soft-gold": "#C0A067", // Accents, buttons, borders
        "dark-gold": "#A78B58", // Hover for gold
        "light-gray": "#F5F5F5", // Secondary backgrounds
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
    },
  },
};

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 50,
  });

  // Initialize lucide icons

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  } else {
    console.error("Lucide icons script not loaded or failed to load. ");
  }
});

// set current year on the footer

document.getElementById("current-year").textContent = new Date().getFullYear();

// header scroll effect

const header = document.getElementById("navbar");
const logo = document.getElementById("logo");
const hamburgerBtn = document.getElementById("hamburger-btn");
const desktopNavLinks = document.querySelectorAll(".nav-link-desktop");
const desktopNavCta = document.getElementById("nav-cta-desktop");

const handleScroll = () => {
  const isScrolled = window.scrollY > 50;

  const isOpen = hamburgerBtn.classList.contains("open");

  if (isScrolled) {
    header.classList.add("scrolled");
    logo.classList.remove("text-ivory");
    logo.classList.add("text-charcoal");
    desktopNavLinks.forEach((link) => {
      link.classList.remove("text-ivory/80");
      link.classList.add("text-charcoal/80");
    });

    desktopNavCta.classList.remove("bg-ivory", "text-charcoal");
    desktopNavCta.classList.add("bg-charcoal", "text-ivory");
  } else {
    header.classList.remove("scrolled");
    logo.classList.add("text-ivory");
    logo.classList.remove("text-charcoal");

    desktopNavLinks.forEach((link) => {
      link.classList.add("text-ivory/80");
      link.classList.remove("text-charcoal/80");
    });

    desktopNavCta.classList.add("bg-ivory", "text-charcoal");
    desktopNavCta.classList.remove("bg-charcoal", "text-ivory");
  }

  // handle hamburger icon color

  if (!isOpen) {
    hamburgerBtn.querySelectorAll("span").forEach((span) => {
      if (isScrolled) {
        span.classList.remove("bg-ivory");
        span.classList.add("bg-charcoal");
      } else {
        span.classList.add("bg-ivory");
        span.classList.remove("bg-charcoal");
      }
    });
  }
};
window.addEventListener("scroll", handleScroll);

handleScroll();

const navOverlay = document.getElementById("nav-overlay");
hamburgerBtn.addEventListener("click", () => {
  const isOpen = hamburgerBtn.classList.toggle("open");
  navOverlay.classList.toggle("open");
  document.body.classList.toggle("overflow-hidden");

  // on toggle , force hamburger color

  hamburgerBtn.querySelectorAll("span").forEach((span) => {
    if (isOpen) {
      span.classList.remove("bg-charcoal");
      span.classList.add("bg-ivory");
    } else {
      handleScroll();
    }
  });
});

// close overlay when a link is clicked

navOverlay.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerBtn.classList.remove("open");
    navOverlay.classList.remove("open");
    document.body.classList.remove("overlay-hidden");
    handleScroll();
  });
});

// scroll indicator

const scrollIndicator = document.getElementById("scroll-indicator");

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollHeight > clientHeight) {
    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;

    scrollIndicator.style.width = `${scrollPercent}%`;
  }
});
// --- Number Counter for Statistics ---
const counters = [
  { id: "stat-1", target: 12, duration: 2000 },
  { id: "stat-2", target: 25, duration: 2000 },
  { id: "stat-3", target: 98, duration: 2000 },
];
