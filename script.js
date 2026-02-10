// Category filter functionality
const categoryButtons = document.querySelectorAll(".category-btn");
const bentoCards = document.querySelectorAll(".bento-card");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Update active state
    categoryButtons.forEach((btn) =>
      btn.classList.remove("active", "bg-white/10"),
    );
    button.classList.add("active", "bg-white/10");

    // Filter cards
    const category = button.dataset.category;
    bentoCards.forEach((card) => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
        }, 10);
      } else {
        card.style.opacity = "0";
        card.style.transform = "scale(0.95)";
        setTimeout(() => {
          card.style.display = "none";
        }, 300);
      }
    });
  });
});

// Add smooth transitions to cards
bentoCards.forEach((card) => {
  card.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
});

// Parallax effect on scroll
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(".float-animation");

  parallaxElements.forEach((element) => {
    const speed = element.dataset.speed || 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all bento cards
bentoCards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  observer.observe(card);
});

// Add ripple effect on click
document.addEventListener("click", (e) => {
  if (e.target.closest(".bento-card")) {
    const card = e.target.closest(".bento-card");
    const ripple = document.createElement("div");
    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.classList.add("ripple");

    card.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }
});

// add css for ripple effect

const style = document.createElement("style");

style.textContent = `
.ripple {
  position: absolute;
     border-radius: 50%;
     background: rgba(255, 255, 255, 0.1);
     transform: scale(0);
     animation: ripple-animation 0.6s ease-out;
  pointer-events: none;
}
   @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
                 .bento-card {
                position: relative;
                overflow: hidden;
            }


`;

document.head.appendChild(style);

// newsletter from submission

const newsletterForm = document.querySelector("input[type='email']");

const subscribingButton = newsletterForm?.nextElementSibling;

if (subscribingButton) {
  subscribingButton.addEventListener("click", (e) => {
    e.preventDefault();

    const email = newsletterForm.value;

    if (email && email.includes("@")) {
      const originalText = subscribingButton.innerHTML;

      subscribingButton.innerHTML =
        '<i class="fas fa-check mr-2"></i>Subscribed!';

      subscribingButton.classList.add("bg-green-500");
      newsletterForm.value = "";

      setTimeout(() => {
        subscribingButton.innerHTML = originalText;

        subscribingButton.classList.remove("bg-green-500");
      }, 3000);
    }
  });
}

// Search functionality
const searchButton = document.querySelector(".fa-search").parentElement;
searchButton.addEventListener("click", () => {
  // Create search modal
  const searchModal = document.createElement("div");
  searchModal.className =
    "fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/80 backdrop-blur-sm";
  searchModal.innerHTML = `
                <div class="w-full max-w-2xl mx-4">
                    <div class="glass rounded-2xl p-6">
                        <div class="flex items-center space-x-4 mb-4">
                            <i class="fas fa-search text-purple-400"></i>
                            <input type="text" placeholder="Search articles, topics, authors..." class="flex-1 bg-transparent outline-none text-lg" autofocus>
                            <button class="close-search p-2 hover:bg-white/10 rounded-lg transition-colors">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        <div class="text-sm text-gray-400">
                            <p>Popular searches: AI, Web3, Design Systems, Rust</p>
                        </div>
                    </div>
                </div>
            `;

  document.body.appendChild(searchModal);

  // close modal

  searchModal.querySelector(".close-search").addEventListener("click", () => {
    searchModal.remove();
  });

  searchModal.addEventListener("click", (e) => {
    if (e.target === searchModal) {
      searchModal.remove();
    }
  });
});
