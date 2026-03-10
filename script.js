document.addEventListener("DOMContentLoaded", function () {
  // Theme Toggle
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;
  const currentTheme = localStorage.getItem("theme") || "light-theme";

  body.classList.add(currentTheme);
  themeToggle.textContent = currentTheme === "light-theme" ? "☀️" : "🌙";

  themeToggle.addEventListener("click", () => {
    if (body.classList.contains("light-theme")) {
      body.classList.replace("light-theme", "dark-theme");
      themeToggle.textContent = "🌙";
      localStorage.setItem("theme", "dark-theme");
    } else {
      body.classList.replace("dark-theme", "light-theme");
      themeToggle.textContent = "☀️";
      localStorage.setItem("theme", "light-theme");
    }
  });

  // Header Scroll Effect
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile Menu
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  mobileMenuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
  });

  // Scroll to Top Button
  const scrollToTop = document.getElementById("scrollToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTop.classList.add("show");
    } else {
      scrollToTop.classList.remove("show");
    }
  });

  scrollToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Toast Notification
  function showToast(message) {
    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toastMessage");

    toastMessage.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

  // Newsletter Form
  const newsletterForm = document.getElementById("newsletterForm");

  newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const emailInput = document.getElementById("emailInput");
    const email = emailInput.value;

    if (email) {
      showToast("Thank you for subscribing!");
      newsletterForm.reset();
    } else {
      showToast("Please enter a valid email address.");
    }
  });

  // Audio Player
  const audioElement = document.getElementById("audioElement");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const progressContainer = document.querySelector(".progress-container");
  const progressFill = document.getElementById("progressFill");
  const progressSlider = document.getElementById("progressSlider");
  const currentTimeDisplay = document.getElementById("currentTime");
  const durationDisplay = document.getElementById("duration");
  const volumeBtn = document.getElementById("volumeBtn");
  const volumeSlider = document.getElementById("volumeSlider");
  const audioVisualizer = document.getElementById("audioVisualizer");

  // Sample audio source
  audioElement.src = "https://www.computerhope.com/jargon/m/example.mp3";

  // Play/Pause functionality
  playPauseBtn.addEventListener("click", () => {
    if (audioElement.paused) {
      audioElement.play();
      playPauseBtn.textContent = "⏸️";
      playPauseBtn.dataset.playing = "true";
    } else {
      audioElement.pause();
      playPauseBtn.textContent = "▶️";
      playPauseBtn.dataset.playing = "false";
    }
  });

  // Update progress bar
  function updateProgress() {
    const { currentTime, duration } = audioElement;
    const progressPercent = (currentTime / duration) * 100;
    progressFill.style.width = `${progressPercent}%`;
    currentTimeDisplay.textContent = formatTime(currentTime);
  }

  audioElement.addEventListener("timeupdate", updateProgress);

  // Set progress on click
  progressContainer.addEventListener("click", (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audioElement.duration;
    audioElement.currentTime = (clickX / width) * duration;
    updateProgress();
  });

  // Drag progress slider
  progressSlider.addEventListener("input", () => {
    const seekTime = (progressSlider.value / 100) * audioElement.duration;
    audioElement.currentTime = seekTime;
    updateProgress();
  });

  // Format time
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }

  // Get audio duration on load
  audioElement.addEventListener("loadedmetadata", () => {
    durationDisplay.textContent = formatTime(audioElement.duration);
  });

  // Volume control
  volumeBtn.addEventListener("click", () => {
    if (audioElement.muted) {
      audioElement.muted = false;
      volumeBtn.textContent = "🔊";
      volumeSlider.value = audioElement.volume * 100;
    } else {
      audioElement.muted = true;
      volumeBtn.textContent = "🔇";
      volumeSlider.value = 0;
    }
  });

  volumeSlider.addEventListener("input", () => {
    audioElement.volume = volumeSlider.value / 100;
    if (audioElement.volume === 0) {
      volumeBtn.textContent = "🔇";
    } else {
      volumeBtn.textContent = "🔊";
    }
  });

  // Audio Visualizer (Placeholder)
  function createVisualizerBars() {
    const numberOfBars = 32;
    for (let i = 0; i < numberOfBars; i++) {
      const bar = document.createElement("div");
      bar.classList.add("visualizer-bar");
      audioVisualizer.appendChild(bar);
    }
  }

  createVisualizerBars();

  function simulateAudioPlayback() {
    // Simulate audio analysis and visualizer updates
    const visualizerBars = document.querySelectorAll(".visualizer-bar");
    visualizerBars.forEach((bar, index) => {
      const randomHeight = Math.random() * 30; // Random height for simulation
      bar.style.height = `${randomHeight}px`;
    });
  }

  // Featured Card Play Button
  const featuredPlayButton = document.querySelector(
    ".featured-card .play-button",
  );
  if (featuredPlayButton) {
    featuredPlayButton.addEventListener("click", function () {
      const episodeIndex = this.dataset.episode || "0";
      playEpisode(parseInt(episodeIndex));
    });
  }
  // Episode-specific functionality
  initializeEpisodePage();
});

function initializeEpisodePage() {
  // Check if we're on the episode page
  if (!document.querySelector(".episode-main")) return;

  // Timestamp navigation
  const timestampLinks = document.querySelectorAll(".timestamp-link");
  timestampLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const time = parseInt(this.dataset.time);
      seekToTime(time);
      showToast("Jumped to " + formatTime(time));
    });
  });

  // Episode play buttons
  const episodePlayButtons = document.querySelectorAll(
    ".episode-play-btn, .episode-play-button",
  );
  episodePlayButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const episodeIndex = this.dataset.episode || "0";
      playEpisode(parseInt(episodeIndex));
    });
  });

  // Sidebar form submission
  const sidebarForm = document.querySelector(".sidebar-form");
  if (sidebarForm) {
    sidebarForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      if (email) {
        showToast("Successfully subscribed to episode updates!");
        this.reset();
      }
    });
  }

  // Related episode play buttons
  const relatedPlayButtons = document.querySelectorAll(
    ".related-episode .btn-text",
  );
  relatedPlayButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const episodeIndex = this.dataset.episode;
      if (episodeIndex) {
        playEpisode(parseInt(episodeIndex));
      }
    });
  });
}

function seekToTime(seconds) {
  const audioElement = document.getElementById("audioElement");
  if (audioElement && !audioElement.paused) {
    audioElement.currentTime = seconds;
    updateProgress();
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function playEpisode(index) {
  // Get episode data
  const episode = episodesData[index] || episodesData[0];

  // Update player UI
  const playerImage = document.getElementById("playerImage");
  const playerTitle = document.getElementById("playerTitle");
  const playerDescription = document.getElementById("playerDescription");

  if (playerImage) playerImage.src = episode.image;
  if (playerTitle) playerTitle.textContent = episode.title;
  if (playerDescription) playerDescription.textContent = episode.description;

  // Show player
  const audioPlayer = document.getElementById("audioPlayer");
  if (audioPlayer) {
    audioPlayer.style.display = "block";
    audioPlayer.classList.add("show");
  }

  // Update play button state
  const playPauseBtn = document.getElementById("playPauseBtn");
  if (playPauseBtn) {
    playPauseBtn.textContent = "⏸️";
    playPauseBtn.dataset.playing = "true";
  }

  // Show toast
  showToast(`Now playing: ${episode.title}`);

  // Start audio (simulated)
  simulateAudioPlayback();
}

// Enhanced episodes data for the episode page
const episodesData = [
  {
    title: "The Future of AI in Everyday Life",
    description:
      "How artificial intelligence is transforming our daily experiences",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400",
    duration: "42:15",
    category: "Technology",
  },
  {
    title: "Blockchain Revolution",
    description: "Understanding the impact of blockchain technology",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
    duration: "38:42",
    category: "Technology",
  },
  {
    title: "Quantum Computing Basics",
    description: "An introduction to quantum computing principles",
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=400",
    duration: "45:12",
    category: "Science",
  },
  {
    title: "Cybersecurity in 2024",
    description: "Latest trends in cybersecurity and data protection",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400",
    duration: "52:30",
    category: "Technology",
  },
];
