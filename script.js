lucide.createIcons();

// --- Mobile Menu Toggle ---
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// --- Custom Cursor Logic ---
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");
const magneticElements = document.querySelectorAll(".magnetic");

window.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e;
  gsap.to(cursorDot, { x, y, duration: 0.3, ease: "power2.out" });
  gsap.to(cursorOutline, { x, y, duration: 0.7, ease: "power2.out" });
});

magneticElements.forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    cursorOutline.classList.add("hovered");
    const rect = el.getBoundingClientRect();
    gsap.to(el, {
      x: (e.clientX - rect.left - rect.width / 2) * 0.3,
      y: (e.clientY - rect.top - rect.height / 2) * 0.3,
      duration: 0.5,
      ease: "power2.out",
    });
  });
  el.addEventListener("mouseleave", () => {
    cursorOutline.classList.remove("hovered");
    gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
  });
});

// --- Interactive Particle Background ---
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
let particles = [];
let mouse = { x: null, y: null };

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.color = "rgba(10, 191, 83, 0.5)";
  }
  update() {
    if (mouse.x && mouse.y) {
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 100) {
        this.x -= dx / 20;
        this.y -= dy / 20;
      }
    }
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.01;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}
initParticles();

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
    if (particles[i].size <= 0.2) {
      particles.splice(i, 1);
      i--;
      particles.push(new Particle());
    }
  }
  requestAnimationFrame(animateParticles);
}
animateParticles();

// --- GSAP Animations ---
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  // Header animation
  gsap.from("#header", {
    y: "0",
    duration: 1,
    ease: "power3.out",
    delay: 0.5, // Reduced delay for faster visibility
  });

  // Header scroll background
  gsap.to("#header", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "200px top",
      scrub: 1,
    },
    backgroundColor: "rgba(10, 10, 10, 0.8)",
    backdropFilter: "blur(10px)",
  });

  // Hero animations
  const heroTl = gsap.timeline({ delay: 0.5 });
  heroTl
    .to("#hero-title", {
      text: "Visionary Digital Craft",
      duration: 2,
      ease: "power1.inOut",
    })
    .to(
      "#hero-subtitle",
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.5",
    )
    .to(
      "#hero-cta",
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.7",
    );

  // About Section Border Animation
  gsap.from("#about-border", {
    scale: 0.5,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%", // Adjusted for better visibility
      toggleActions: "play none none none",
    },
  });

  // General section reveal animation
  const revealElements = document.querySelectorAll(".gsap-reveal");
  revealElements.forEach((el) => {
    gsap.fromTo(
      el,
      { y: 70, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%", // Adjusted for better trigger timing
          toggleActions: "play none none none",
        },
      },
    );
  });

  // portfolio image parallax scroll

  const portfolioImages = document.querySelectorAll(".portfolio-image");

  portfolioImages.forEach((img) => {
    gsap.to(img, {
      y: "-10%",
      ease: "none",
      scrollTrigger: {
        trigger: img.closest(".group"),
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
});
