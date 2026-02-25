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

// Theme Management
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
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

// Event Listeners
function setupEventListeners() {
  // Theme toggle
  themeToggle.addEventListener("click", toggleTheme);

  // Mobile menu
  mobileMenuToggle.addEventListener("click", toggleMobileMenu);

  // Scroll to top
  scrollToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Header scroll effect
  window.addEventListener("scroll", handleScroll);

  // Newsletter form
  newsletterForm.addEventListener("submit", handleNewsletterSubmit);

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
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

  // Header scroll effect
  if (scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // Scroll to top button
  if (scrollY > 300) {
    scrollToTop.classList.add("show");
  } else {
    scrollToTop.classList.remove("show");
  }
}

// Newsletter
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const email = document.getElementById("emailInput").value;

  if (!email) {
    showToast("Please enter your email address", "error");
    return;
  }

  if (!isValidEmail(email)) {
    showToast("Please enter a valid email address", "error");
    return;
  }

  // Simulate API call
  showToast("Subscribing...", "info");

  setTimeout(() => {
    showToast("Successfully subscribed! 🎉", "success");
    document.getElementById("emailInput").value = "";
  }, 1000);
}

function isValidEmail(email) {
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

// Content Population
function populatePodcasts() {
  const podcastsGrid = document.getElementById("podcastsGrid");

  mockPodcasts.forEach((podcast, index) => {
    const podcastCard = createPodcastCard(podcast);
    podcastCard.style.animationDelay = `${index * 0.1}s`;
    podcastsGrid.appendChild(podcastCard);
  });
}

function createPodcastCard(podcast) {
  const card = document.createElement("div");
  card.className = "podcast-card";
  card.innerHTML = `
    <div class="podcast-image">
      <img src="${podcast.image}" alt="${podcast.title}" loading="lazy">
      <div class="podcast-category">${podcast.category}</div>
      <button class="play-button" data-episode="${podcast.id - 1}">▶️</button>
    </div>
    <div class="podcast-content">
      <h3>${podcast.title}</h3>
      <p class="podcast-author">by ${podcast.author}</p>
      <p class="podcast-description">${podcast.description}</p>
      <div class="podcast-meta">
        <span>${podcast.episodes} episodes • ${podcast.duration}</span>
        <span>⭐ ${podcast.rating}</span>
      </div>
      <div class="podcast-footer">
        <span>${podcast.subscribers} subscribers</span>
        <button class="btn-text" data-episode="${podcast.id - 1}">Listen</button>
      </div>
    </div>
  `;

  // Add event listeners for play buttons
  const playButtons = card.querySelectorAll("[data-episode]");
  playButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      const episodeId = parseInt(button.dataset.episode);
      playEpisode(mockEpisodes[episodeId]);
    });
  });

  return card;
}

function populateEpisodes() {
  const episodesTrack = document.getElementById("episodesTrack");

  mockEpisodes.forEach((episode, index) => {
    const episodeCard = createEpisodeCard(episode);
    episodeCard.style.animationDelay = `${index * 0.1}s`;
    episodesTrack.appendChild(episodeCard);
  });

  setupCarouselDots();
}

function createEpisodeCard(episode) {
  const card = document.createElement("div");
  card.className = "episode-card";

  const publishDate = new Date(episode.publishDate).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
    },
  );

  card.innerHTML = `
    <div class="episode-image">
      <img src="${episode.image}" alt="${episode.title}" loading="lazy">
      ${episode.isNew ? '<div class="episode-new">New</div>' : ""}
      <button class="play-button" data-episode-id="${episode.id}">▶️</button>
    </div>
    <div class="episode-content">
      <h3>${episode.title}</h3>
      <p class="episode-description">${episode.description}</p>
      <div class="episode-meta">
        <span>${publishDate} • ${episode.duration}</span>
        <span>${episode.plays} plays</span>
      </div>
      <button class="btn btn-secondary" data-episode-id="${episode.id}">
        ▶️ Play Episode
      </button>
    </div>
  `;

  // Add event listeners for play buttons
  const playButtons = card.querySelectorAll("[data-episode-id]");
  playButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      playEpisode(episode);
    });
  });

  return card;
}

function populateCategories() {
  const categoriesGrid = document.getElementById("categoriesGrid");

  categories.forEach((category, index) => {
    const categoryCard = createCategoryCard(category);
    categoryCard.style.animationDelay = `${index * 0.1}s`;
    categoriesGrid.appendChild(categoryCard);
  });
}

function createCategoryCard(category) {
  const card = document.createElement("div");
  card.className = "category-card";
  card.innerHTML = `
    <div class="category-icon" style="background: ${category.color}">${category.icon}</div>
    <h3 class="category-name">${category.name}</h3>
    <p class="category-count">${category.count} podcasts</p>
    <div class="category-progress">
      <div class="category-progress-fill" style="background: ${category.color}"></div>
    </div>
  `;

  return card;
}

// episodes carousel

function setupCarousel() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  prevBtn.addEventListener("click", () => moveCarousel(-1));
  nextBtn.addEventListener("click", () => moveCarousel(1));

  updateCarouselButtons();
}

function setupCarouselDots() {
  const carouselDots = document.getElementById("carouselDots");
  const maxIndex = Math.max(0, mockEpisodes.length - 3);

  for (let i = 0; i < maxIndex; i++) {
    const dot = document.createElement("button");
    dot.className = "carousel-dot";
    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      episodeCarouselIndex = i;
      updateCarousel();
      updateCarouselDots();
      updateCarouselButtons();
    });
    carouselDots.appendChild(dot);
  }
}

function moveCarousel(direction) {
  const maxIndex = Math.max(0, mockEpisodes.length - 3);
  episodeCarouselIndex += direction;

  if (episodeCarouselIndex < 0) episodeCarouselIndex = 0;
  if (episodeCarouselIndex > maxIndex) episodeCarouselIndex = maxIndex;

  updateCarousel();
  updateCarouselDots();
  updateCarouselButtons();
}

function updateCarousel() {
  const episodesTrack = document.getElementById("episodesTrack");
  const translateX = episodeCarouselIndex * (100 / 3);
  episodesTrack.style.transform = `translateX(${translateX}%)`;
}

function updateCarouselDots() {
  const dots = document.querySelectorAll(".carousel-dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === episodeCarouselIndex);
  });
}

function updateCarouselButtons() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const maxIndex = Math.max(0, mockEpisodes.length - 3);

  prevBtn.disabled = episodeCarouselIndex === 0;
  nextBtn.disabled = episodeCarouselIndex >= maxIndex;
}
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

// Theme Management
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
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

// Event Listeners
function setupEventListeners() {
  // Theme toggle
  themeToggle.addEventListener("click", toggleTheme);

  // Mobile menu
  mobileMenuToggle.addEventListener("click", toggleMobileMenu);

  // Scroll to top
  scrollToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Header scroll effect
  window.addEventListener("scroll", handleScroll);

  // Newsletter form
  newsletterForm.addEventListener("submit", handleNewsletterSubmit);

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
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

  // Header scroll effect
  if (scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // Scroll to top button
  if (scrollY > 300) {
    scrollToTop.classList.add("show");
  } else {
    scrollToTop.classList.remove("show");
  }
}

// Newsletter
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const email = document.getElementById("emailInput").value;

  if (!email) {
    showToast("Please enter your email address", "error");
    return;
  }

  if (!isValidEmail(email)) {
    showToast("Please enter a valid email address", "error");
    return;
  }

  // Simulate API call
  showToast("Subscribing...", "info");

  setTimeout(() => {
    showToast("Successfully subscribed! 🎉", "success");
    document.getElementById("emailInput").value = "";
  }, 1000);
}

function isValidEmail(email) {
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

// Content Population
function populatePodcasts() {
  const podcastsGrid = document.getElementById("podcastsGrid");

  mockPodcasts.forEach((podcast, index) => {
    const podcastCard = createPodcastCard(podcast);
    podcastCard.style.animationDelay = `${index * 0.1}s`;
    podcastsGrid.appendChild(podcastCard);
  });
}

function createPodcastCard(podcast) {
  const card = document.createElement("div");
  card.className = "podcast-card";
  card.innerHTML = `
    <div class="podcast-image">
      <img src="${podcast.image}" alt="${podcast.title}" loading="lazy">
      <div class="podcast-category">${podcast.category}</div>
      <button class="play-button" data-episode="${podcast.id - 1}">▶️</button>
    </div>
    <div class="podcast-content">
      <h3>${podcast.title}</h3>
      <p class="podcast-author">by ${podcast.author}</p>
      <p class="podcast-description">${podcast.description}</p>
      <div class="podcast-meta">
        <span>${podcast.episodes} episodes • ${podcast.duration}</span>
        <span>⭐ ${podcast.rating}</span>
      </div>
      <div class="podcast-footer">
        <span>${podcast.subscribers} subscribers</span>
        <button class="btn-text" data-episode="${podcast.id - 1}">Listen</button>
      </div>
    </div>
  `;

  // Add event listeners for play buttons
  const playButtons = card.querySelectorAll("[data-episode]");
  playButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      const episodeId = parseInt(button.dataset.episode);
      playEpisode(mockEpisodes[episodeId]);
    });
  });

  return card;
}

function populateEpisodes() {
  const episodesTrack = document.getElementById("episodesTrack");

  mockEpisodes.forEach((episode, index) => {
    const episodeCard = createEpisodeCard(episode);
    episodeCard.style.animationDelay = `${index * 0.1}s`;
    episodesTrack.appendChild(episodeCard);
  });

  setupCarouselDots();
}

function createEpisodeCard(episode) {
  const card = document.createElement("div");
  card.className = "episode-card";

  const publishDate = new Date(episode.publishDate).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
    },
  );

  card.innerHTML = `
    <div class="episode-image">
      <img src="${episode.image}" alt="${episode.title}" loading="lazy">
      ${episode.isNew ? '<div class="episode-new">New</div>' : ""}
      <button class="play-button" data-episode-id="${episode.id}">▶️</button>
    </div>
    <div class="episode-content">
      <h3>${episode.title}</h3>
      <p class="episode-description">${episode.description}</p>
      <div class="episode-meta">
        <span>${publishDate} • ${episode.duration}</span>
        <span>${episode.plays} plays</span>
      </div>
      <button class="btn btn-secondary" data-episode-id="${episode.id}">
        ▶️ Play Episode
      </button>
    </div>
  `;

  // Add event listeners for play buttons
  const playButtons = card.querySelectorAll("[data-episode-id]");
  playButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      playEpisode(episode);
    });
  });

  return card;
}

function populateCategories() {
  const categoriesGrid = document.getElementById("categoriesGrid");

  categories.forEach((category, index) => {
    const categoryCard = createCategoryCard(category);
    categoryCard.style.animationDelay = `${index * 0.1}s`;
    categoriesGrid.appendChild(categoryCard);
  });
}

function createCategoryCard(category) {
  const card = document.createElement("div");
  card.className = "category-card";
  card.innerHTML = `
    <div class="category-icon" style="background: ${category.color}">${category.icon}</div>
    <h3 class="category-name">${category.name}</h3>
    <p class="category-count">${category.count} podcasts</p>
    <div class="category-progress">
      <div class="category-progress-fill" style="background: ${category.color}"></div>
    </div>
  `;

  return card;
}

// Episodes Carousel
function setupCarousel() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  prevBtn.addEventListener("click", () => moveCarousel(-1));
  nextBtn.addEventListener("click", () => moveCarousel(1));

  updateCarouselButtons();
}

function setupCarouselDots() {
  const carouselDots = document.getElementById("carouselDots");
  const maxIndex = Math.max(0, mockEpisodes.length - 3);

  for (let i = 0; i <= maxIndex; i++) {
    const dot = document.createElement("button");
    dot.className = "carousel-dot";
    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      episodeCarouselIndex = i;
      updateCarousel();
      updateCarouselDots();
      updateCarouselButtons();
    });

    carouselDots.appendChild(dot);
  }
}

function moveCarousel(direction) {
  const maxIndex = Math.max(0, mockEpisodes.length - 3);
  episodeCarouselIndex += direction;

  if (episodeCarouselIndex < 0) episodeCarouselIndex = 0;
  if (episodeCarouselIndex > maxIndex) episodeCarouselIndex = maxIndex;

  updateCarousel();
  updateCarouselDots();
  updateCarouselButtons();
}

function updateCarousel() {
  const episodesTrack = document.getElementById("episodesTrack");
  const translateX = -(episodeCarouselIndex * (100 / 3));
  episodesTrack.style.transform = `translateX(${translateX}%)`;
}

function updateCarouselDots() {
  const dots = document.querySelectorAll(".carousel-dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === episodeCarouselIndex);
  });
}

function updateCarouselButtons() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const maxIndex = Math.max(0, mockEpisodes.length - 3);

  prevBtn.disabled = episodeCarouselIndex === 0;
  nextBtn.disabled = episodeCarouselIndex >= maxIndex;
}

// Audio Player
function setupAudioPlayer() {
  const playPauseBtn = document.getElementById("playPauseBtn");
  const closePlayerBtn = document.getElementById("closePlayerBtn");
  const progressSlider = document.getElementById("progressSlider");
  const volumeSlider = document.getElementById("volumeSlider");
  const volumeBtn = document.getElementById("volumeBtn");

  playPauseBtn.addEventListener("click", togglePlayPause);
  closePlayerBtn.addEventListener("click", closePlayer);
  progressSlider.addEventListener("input", seekAudio);
  volumeSlider.addEventListener("input", changeVolume);
  volumeBtn.addEventListener("click", toggleMute);

  audioElement.addEventListener("timeupdate", updateProgress);
  audioElement.addEventListener("loadedmetadata", updateDuration);
  audioElement.addEventListener("ended", () => {
    isPlaying = false;
    updatePlayButton();
  });

  // Setup audio visualizer
  setupAudioVisualizer();
}

function playEpisode(episode) {
  currentAudio = episode;
  isPlaying = true;

  // Update player UI
  document.getElementById("playerImage").src = episode.image;
  document.getElementById("playerTitle").textContent = episode.title;
  document.getElementById("playerDescription").textContent =
    episode.description;

  // Load and play audio
  audioElement.src = episode.audioUrl;
  audioElement.play();

  // Show player
  audioPlayer.classList.add("show");
  audioPlayer.style.display = "block";

  updatePlayButton();
  updateVisualizer();
}

function togglePlayPause() {
  if (isPlaying) {
    audioElement.pause();
    isPlaying = false;
  } else {
    audioElement.play();
    isPlaying = true;
  }
  updatePlayButton();
  updateVisualizer();
}

function updatePlayButton() {
  const playPauseBtn = document.getElementById("playPauseBtn");
  playPauseBtn.textContent = isPlaying ? "⏸️" : "▶️";
}

function closePlayer() {
  audioPlayer.classList.remove("show");
  setTimeout(() => {
    audioPlayer.style.display = "none";
    audioElement.pause();
    audioElement.src = "";
    isPlaying = false;
    currentAudio = null;
  }, 300);
}

function seekAudio() {
  const progressSlider = document.getElementById("progressSlider");
  const seekTime = (progressSlider.value / 100) * audioElement.duration;
  audioElement.currentTime = seekTime;
}

function changeVolume() {
  const volumeSlider = document.getElementById("volumeSlider");
  audioElement.volume = volumeSlider.value / 100;

  const volumeBtn = document.getElementById("volumeBtn");
  volumeBtn.textContent = volumeSlider.value > 0 ? "🔊" : "🔇";
}

function toggleMute() {
  const volumeSlider = document.getElementById("volumeSlider");
  const volumeBtn = document.getElementById("volumeBtn");

  if (audioElement.volume > 0) {
    audioElement.volume = 0;
    volumeSlider.value = 0;
    volumeBtn.textContent = "🔇";
  } else {
    audioElement.volume = 0.8;
    volumeSlider.value = 80;
    volumeBtn.textContent = "🔊";
  }
}

function updateProgress() {
  const progressSlider = document.getElementById("progressSlider");
  const progressFill = document.getElementById("progressFill");
  const currentTimeSpan = document.getElementById("currentTime");

  const progress = (audioElement.currentTime / audioElement.duration) * 100;
  progressSlider.value = progress || 0;
  progressFill.style.width = `${progress || 0}%`;

  currentTimeSpan.textContent = formatTime(audioElement.currentTime);
}

function updateDuration() {
  const durationSpan = document.getElementById("duration");
  durationSpan.textContent = formatTime(audioElement.duration);
}

function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function setupAudioVisualizer() {
  const visualizer = document.getElementById("audioVisualizer");

  // Create visualizer bars
  for (let i = 0; i < 20; i++) {
    const bar = document.createElement("div");
    bar.className = "visualizer-bar";
    bar.style.animationDelay = `${i * 0.1}s`;
    visualizer.appendChild(bar);
  }
}

function updateVisualizer() {
  const visualizerBars = document.querySelectorAll(".visualizer-bar");

  visualizerBars.forEach((bar, index) => {
    if (isPlaying) {
      const height = Math.random() * 20 + 5;
      bar.style.height = `${height}px`;
      bar.style.animationPlayState = "running";
    } else {
      bar.style.height = "5px";
      bar.style.animationPlayState = "paused";
    }
  });
}

// Scroll Animations
function setupScrollAnimations() {
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

  // Observe all animated elements
  const animatedElements = document.querySelectorAll(
    ".podcast-card, .episode-card, .category-card, .section-header",
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
    observer.observe(el);
  });
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Auto-update visualizer when playing
setInterval(() => {
  if (isPlaying) {
    updateVisualizer();
  }
}, 100);
