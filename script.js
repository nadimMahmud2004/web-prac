const { isValidElement } = require("react");

const mockPodcasts = [
  {
    id: 1,
    title: "Tech Innovators",
    description:
      "Exploring the latest in technology and innovation with industry leaders.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400",
    category: "Technology",
    episodes: 45,
    subscribers: "125K",
    rating: 4.8,
    author: "Sarah Chen",
    duration: "35 min avg",
  },
  {
    id: 2,
    title: "Mindful Moments",
    description:
      "Daily meditation and mindfulness practices for busy professionals.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
    category: "Health & Wellness",
    episodes: 78,
    subscribers: "89K",
    rating: 4.9,
    author: "Dr. Michael Park",
    duration: "15 min avg",
  },
  {
    id: 3,
    title: "Creative Minds",
    description:
      "Conversations with artists, designers, and creative professionals.",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400",
    category: "Arts & Culture",
    episodes: 62,
    subscribers: "67K",
    rating: 4.7,
    author: "Emma Rodriguez",
    duration: "42 min avg",
  },
  {
    id: 4,
    title: "Business Breakthrough",
    description:
      "Strategies and insights from successful entrepreneurs and business leaders.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    category: "Business",
    episodes: 93,
    subscribers: "156K",
    rating: 4.6,
    author: "James Wilson",
    duration: "48 min avg",
  },
  {
    id: 5,
    title: "Science Spotlight",
    description:
      "Making complex scientific discoveries accessible to everyone.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400",
    category: "Science",
    episodes: 34,
    subscribers: "78K",
    rating: 4.8,
    author: "Dr. Lisa Thompson",
    duration: "38 min avg",
  },
  {
    id: 6,
    title: "Storyteller's Corner",
    description: "Immersive storytelling experiences from around the world.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400",
    category: "Entertainment",
    episodes: 51,
    subscribers: "94K",
    rating: 4.9,
    author: "Maria Garcia",
    duration: "28 min avg",
  },
];

const mockEpisodes = [
  {
    id: 1,
    podcastId: 1,
    title: "The Future of AI in Everyday Life",
    description:
      "How artificial intelligence is transforming our daily experiences.",
    duration: "42:15",
    publishDate: "2024-01-15",
    audioUrl: "https://www.soundjay.com/misc/sounds/beep-07.mp3",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400",
    plays: "12.5K",
    isNew: true,
  },
  {
    id: 2,
    podcastId: 2,
    title: "5-Minute Morning Meditation",
    description:
      "Start your day with clarity and intention through guided meditation.",
    duration: "05:32",
    publishDate: "2024-01-14",
    audioUrl: "https://www.soundjay.com/misc/sounds/beep-07.mp3",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400",
    plays: "8.9K",
    isNew: true,
  },
  {
    id: 3,
    podcastId: 3,
    title: "Digital Art Revolution",
    description: "Exploring how technology is changing the art world forever.",
    duration: "38:22",
    publishDate: "2024-01-13",
    audioUrl: "https://www.soundjay.com/misc/sounds/beep-07.mp3",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400",
    plays: "15.2K",
    isNew: false,
  },
  {
    id: 4,
    podcastId: 4,
    title: "Building a Startup from Scratch",
    description:
      "Real stories and practical advice from successful entrepreneurs.",
    duration: "51:08",
    publishDate: "2024-01-12",
    audioUrl: "https://www.soundjay.com/misc/sounds/beep-07.mp3",
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400",
    plays: "22.1K",
    isNew: false,
  },
  {
    id: 5,
    podcastId: 5,
    title: "Climate Science Updates",
    description:
      "Latest research and findings in climate science and environmental protection.",
    duration: "33:45",
    publishDate: "2024-01-11",
    audioUrl: "https://www.soundjay.com/misc/sounds/beep-07.mp3",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400",
    plays: "9.8K",
    isNew: false,
  },
  {
    id: 6,
    podcastId: 6,
    title: "Myths and Legends",
    description:
      "Ancient stories retold for the modern world with expert analysis.",
    duration: "29:17",
    publishDate: "2024-01-10",
    audioUrl: "https://www.soundjay.com/misc/sounds/beep-07.mp3",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400",
    plays: "18.2K",
    isNew: false,
  },
];

const categories = [
  {
    name: "Technology",
    count: 156,
    color: "linear-gradient(135deg, #b3d9ff, #9fb5ff)",
    icon: "💻",
  },
  {
    name: "Health & Wellness",
    count: 89,
    color: "linear-gradient(135deg, #b8e6b8, #9fd89f)",
    icon: "🧘",
  },
  {
    name: "Business",
    count: 234,
    color: "linear-gradient(135deg, #ffd4b3, #ffb399)",
    icon: "💼",
  },
  {
    name: "Arts & Culture",
    count: 67,
    color: "linear-gradient(135deg, #ffb3d9, #ff99cc)",
    icon: "🎨",
  },
  {
    name: "Science",
    count: 98,
    color: "linear-gradient(135deg, #b3ffff, #99f2f2)",
    icon: "🔬",
  },
  {
    name: "Entertainment",
    count: 178,
    color: "linear-gradient(135deg, #d4b3ff, #c299ff)",
    icon: "🎭",
  },
  {
    name: "Education",
    count: 143,
    color: "linear-gradient(135deg, #fff2b3, #ffe599)",
    icon: "📚",
  },
  {
    name: "News & Politics",
    count: 87,
    color: "linear-gradient(135deg, #d9d9d9, #cccccc)",
    icon: "📰",
  },
];

// Global variables
let currentEpisodeIndex = 0;
let isPlaying = false;
let currentAudio = null;
let episodeCarouselIndex = 0;

// DOM elements
const themeToggle = document.getElementById("themeToggle");
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const scrollToTop = document.getElementById("scrollToTop");
const audioPlayer = document.getElementById("audioPlayer");
const audioElement = document.getElementById("audioElement");
const newsletterForm = document.getElementById("newsletterForm");
const toast = document.getElementById("toast");
const header = document.getElementById("header");

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  initializeTheme();
  setupEventListeners();
  populatePodcasts();
  populateEpisodes();
  populateCategories();
  setupScrollAnimations();
  setupCarousel();
  setupAudioPlayer();
});

// Theme  Management

function initializeTheme() {
  const savedTheme = localStorage.getItem("theme");

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark;

  if (shouldBeDark) {
    document.body.classList.add("dark-theme");
    themeToggle.textContent = "☀️";
  } else {
    document.body.classList.remove("dark-theme");
    themeToggle.textContent = "🌙";
  }
}

function toggleTheme() {
  const isDark = document.body.classList.contains("dark-theme");

  if (isDark) {
    document.body.classList.remove("dark-theme");
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.add("dark-theme");
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  }
}

// Events Listener

function setupEventListeners() {
  // theme toggle

  themeToggle.addEventListener("click", toggleTheme);

  // mobile menu

  mobileMenuToggle.addEventListener("click", toggleMobileTheme);

  // scroll to top

  scrollToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", handleScroll);

  // newsletter form

  newsletterForm.addEventListener("submit", handleNewsletterSubmit);

  // smooth scroll for navigation links

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });

        if (mobileMenu.classList.contains("show")) {
          toggleMobileMenu();
        }
      }
    });
  });
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("show");
}

function handleScroll() {
  const scrollY = window.scrollY;

  // header scroll effect

  if (scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    scrollToTop.classList.remove("scrolled");
  }

  // scroll to top button

  if (scrollY > 300) {
    scrollToTop.classList.add("show");
  } else {
    scrollToTop.classList.remove("show");
  }
}

// newsletter

function handleNewsletterSubmit(e) {
  e.preventDefault();
  const email = document.getElementById("emailInput").value;

  if (!email) {
    showToast("Please enter your email address ", "error");
    return;
  }

  if (!isValidEmail(email)) {
    showToast("Please enter your email address", "error");
    return;
  }

  // simulate API call

  showToast("Subscribing...", "info");

  setTimeout(() => {
    showToast("Successfully subscribed! 🎉", "success");

    document.getElementById("emailInput").value = "";
  }, 1000);
}

function isValidElement(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showToast(message, type = "info") {
  const toastMessage = document.getElementById("toastMessage");
  toastMessage.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// content population

function populatePodcasts() {
  const podcastsGrid = document.getElementById("podcastsGrid");

  mockPodcasts.forEach((podcast, index) => {
    const podcastCard = createPodcastCard(podcast);
    podcastCard.style.animationDelay = `${index * 0.1}s`;
    podcastsGrid.appendChild(podcastCard);
  });
}
