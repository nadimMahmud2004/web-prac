// Global variables
let currentTestimonialIndex = 0;
let currentScheduleDay = 1;

// Speakers data
const speakers = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Principal Engineer",
    company: "Meta",
    image:
      "https://images.unsplash.com/photo-1637589267610-6c66fc2a086b?auto=format&fit=crop&w=400&q=80",
    bio: "Sarah is a Principal Engineer at Meta with over 10 years of experience in distributed systems and machine learning infrastructure. She leads the development of next-generation AI platforms.",
    twitter: "@sarahchen",
    linkedin: "/in/sarahchen",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "CTO",
    company: "TechFlow",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    bio: "Marcus is the CTO of TechFlow, a leading fintech company. He specializes in blockchain technology and has been instrumental in developing secure payment systems.",
    twitter: "@marcusrod",
    linkedin: "/in/marcusrodriguez",
  },
  {
    id: 3,
    name: "Emily Watson",
    title: "VP of Engineering",
    company: "CloudScale",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    bio: "Emily leads engineering teams at CloudScale, focusing on cloud infrastructure and DevOps practices. She's a strong advocate for sustainable technology practices.",
    twitter: "@emilywatson",
    linkedin: "/in/emilywatson",
  },
  {
    id: 4,
    name: "David Kim",
    title: "Senior Staff Engineer",
    company: "Google",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "David is a Senior Staff Engineer at Google working on Chrome's performance team. He's passionate about web technologies and has contributed to numerous open-source projects.",
    twitter: "@davidkim",
    linkedin: "/in/davidkim",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    title: "Head of AI Research",
    company: "OpenAI",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=400&q=80",
    bio: "Lisa leads AI research initiatives at OpenAI, focusing on natural language processing and ethical AI development. She holds a PhD in Computer Science from Stanford.",
    twitter: "@lisathompson",
    linkedin: "/in/lisathompson",
  },
  {
    id: 6,
    name: "Alex Rivera",
    title: "Founder & CEO",
    company: "DevTools Inc",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    bio: "Alex founded DevTools Inc, creating innovative development tools used by millions of developers worldwide. He's a frequent speaker at tech conferences globally.",
    twitter: "@alexrivera",
    linkedin: "/in/alexrivera",
  },
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Jennifer Lee",
    title: "Senior Developer",
    company: "TechCorp",
    content:
      "TechConf 2023 was absolutely incredible! The speakers were world-class and the networking opportunities were unparalleled. I learned so much and made connections that have already led to new opportunities.",
    avatar:
      "https://images.unsplash.com/photo-1637589267610-6c66fc2a086b?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "CTO",
    company: "StartupX",
    content:
      "The workshops at TechConf were hands-on and practical. I implemented several techniques I learned directly into our production systems. This conference delivers real value for tech professionals.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    title: "Product Manager",
    company: "InnovateLab",
    content:
      "TechConf brings together the brightest minds in technology. The insights I gained about AI and machine learning have completely transformed how we approach product development at our company.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 4,
    name: "Robert Kim",
    title: "Engineering Manager",
    company: "DataFlow",
    content:
      "Every year, TechConf exceeds my expectations. The quality of content is exceptional, and the community is incredibly welcoming. It's become an essential part of my professional development.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
];

// Schedule data
const scheduleData = {
  1: [
    {
      time: "9:00 AM",
      title: "Registration & Welcome Coffee",
      type: "networking",
      description: "Check-in, networking, and light refreshments",
    },
    {
      time: "10:00 AM",
      title: "Opening Keynote: The Future of AI",
      speaker: "Sarah Chen",
      type: "keynote",
      description:
        "Exploring the transformative potential of artificial intelligence in the next decade",
    },
    {
      time: "11:00 AM",
      title: "Building Scalable Web Applications",
      speaker: "Marcus Rodriguez",
      type: "talk",
      description:
        "Best practices for creating web applications that scale to millions of users",
    },
    {
      time: "12:00 PM",
      title: "Lunch Break",
      type: "break",
      description: "Networking lunch with fellow attendees",
    },
    {
      time: "1:30 PM",
      title: "Cloud Infrastructure Workshop",
      speaker: "Emily Watson",
      type: "workshop",
      description:
        "Hands-on session on designing and implementing cloud-native architectures",
    },
    {
      time: "3:30 PM",
      title: "Coffee Break",
      type: "break",
      description: "Refreshments and networking",
    },
    {
      time: "4:00 PM",
      title: "Web Performance Optimization",
      speaker: "David Kim",
      type: "talk",
      description:
        "Advanced techniques for optimizing web application performance",
    },
    {
      time: "5:00 PM",
      title: "Day 1 Wrap-up & Networking",
      type: "networking",
      description: "End-of-day discussion and networking reception",
    },
  ],
  2: [
    {
      time: "9:00 AM",
      title: "Morning Coffee & Networking",
      type: "networking",
      description: "Start your day with coffee and connections",
    },
    {
      time: "10:00 AM",
      title: "AI Ethics and Responsible Development",
      speaker: "Lisa Thompson",
      type: "keynote",
      description:
        "Exploring the ethical implications of AI and best practices for responsible development",
    },
    {
      time: "11:00 AM",
      title: "Developer Tools Revolution",
      speaker: "Alex Rivera",
      type: "talk",
      description:
        "The latest innovations in developer tooling and productivity",
    },
    {
      time: "12:00 PM",
      title: "Lunch Break",
      type: "break",
      description: "Networking lunch and vendor expo",
    },
    {
      time: "1:30 PM",
      title: "Machine Learning Workshop",
      speaker: "Sarah Chen",
      type: "workshop",
      description:
        "Building and deploying ML models in production environments",
    },
    {
      time: "3:30 PM",
      title: "Coffee Break",
      type: "break",
      description: "Afternoon refreshments",
    },
    {
      time: "4:00 PM",
      title: "Blockchain and Web3",
      speaker: "Marcus Rodriguez",
      type: "talk",
      description: "Understanding blockchain technology and its applications",
    },
    {
      time: "5:00 PM",
      title: "Evening Networking Event",
      type: "networking",
      description: "Casual networking with food and drinks",
    },
  ],
  3: [
    {
      time: "9:00 AM",
      title: "Final Day Welcome",
      type: "networking",
      description: "Last day kickoff with coffee and pastries",
    },
    {
      time: "10:00 AM",
      title: "The Future of Software Development",
      speaker: "Emily Watson",
      type: "keynote",
      description:
        "Predictions and trends shaping the next generation of software development",
    },
    {
      time: "11:00 AM",
      title: "Open Source Contributions",
      speaker: "David Kim",
      type: "talk",
      description: "How to contribute effectively to open source projects",
    },
    {
      time: "12:00 PM",
      title: "Lunch Break",
      type: "break",
      description: "Final networking lunch",
    },
    {
      time: "1:30 PM",
      title: "Startup Tech Stack Workshop",
      speaker: "Alex Rivera",
      type: "workshop",
      description: "Choosing the right technologies for your startup",
    },
    {
      time: "3:30 PM",
      title: "Coffee Break",
      type: "break",
      description: "Last coffee break of the conference",
    },
    {
      time: "4:00 PM",
      title: "Closing Keynote: Building the Future",
      speaker: "Lisa Thompson",
      type: "keynote",
      description: "Inspiring closing thoughts on innovation and collaboration",
    },
    {
      time: "5:00 PM",
      title: "Conference Closing & Final Networking",
      type: "networking",
      description: "Closing remarks and farewell networking",
    },
  ],
};

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

// Initialize the application
function initializeApp() {
  setupNavigation();
  setupCountdown();
  setupSpeakers();
  setupSchedule();
  setupTestimonials();
  setupRegistrationForm();
  setupScrollAnimations();
  setupBackToTop();
}

// Navigation functionality
function setupNavigation() {
  const navbar = document.getElementById("navbar");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");
  const navLinks = document.querySelectorAll(".nav-link");

  // Scroll effect
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  mobileMenuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    const icon = mobileMenuBtn.querySelector("i");
    icon.className = mobileNav.classList.contains("active")
      ? "fas fa-times"
      : "fas fa-bars";
  });

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      scrollToSection(targetId.substring(1));
      mobileNav.classList.remove("active");
      mobileMenuBtn.querySelector("i").className = "fas fa-bars";
    });
  });
}

// Smooth scroll to section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const navHeight = document.getElementById("navbar").offsetHeight;
    const elementPosition = element.offsetTop - navHeight;
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
}

// Countdown timer
function setupCountdown() {
  const eventDate = new Date("2026-03-30T09:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days
        .toString()
        .padStart(2, "0");
      document.getElementById("hours").textContent = hours
        .toString()
        .padStart(2, "0");
      document.getElementById("minutes").textContent = minutes
        .toString()
        .padStart(2, "0");
      document.getElementById("seconds").textContent = seconds
        .toString()
        .padStart(2, "0");
    }
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Speakers section
function setupSpeakers() {
  const speakersGrid = document.getElementById("speakersGrid");

  speakers.forEach((speaker, index) => {
    const speakerCard = document.createElement("div");
    speakerCard.className = "speaker-card fade-in";
    speakerCard.style.animationDelay = `${index * 0.1}s`;
    speakerCard.onclick = () => openSpeakerModal(speaker);

    speakerCard.innerHTML = `
      <img src="${speaker.image}" alt="${speaker.name}" class="speaker-image">
      <div class="speaker-info">
        <h3 class="speaker-name">${speaker.name}</h3>
        <p class="speaker-title">${speaker.title}</p>
        <p class="speaker-company">${speaker.company}</p>
      </div>
    `;

    speakersGrid.appendChild(speakerCard);
  });
}

// Speaker modal
function openSpeakerModal(speaker) {
  const modal = document.getElementById("speakerModal");

  document.getElementById("modalSpeakerImage").src = speaker.image;
  document.getElementById("modalSpeakerImage").alt = speaker.name;
  document.getElementById("modalSpeakerName").textContent = speaker.name;
  document.getElementById("modalSpeakerTitle").textContent = speaker.title;
  document.getElementById("modalSpeakerCompany").textContent = speaker.company;
  document.getElementById("modalSpeakerBio").textContent = speaker.bio;
  document.getElementById("modalTwitter").href = "#";
  document.getElementById("modalLinkedIn").href = "#";

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeSpeakerModal() {
  const modal = document.getElementById("speakerModal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Close modal when clicking outside
document.getElementById("speakerModal").addEventListener("click", (e) => {
  if (e.target.id === "speakerModal") {
    closeSpeakerModal();
  }
});

// Close modal with escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSpeakerModal();
  }
});

// Schedule section
function setupSchedule() {
  showScheduleDay(1);
}

function showScheduleDay(day) {
  currentScheduleDay = day;
  const scheduleContent = document.getElementById("scheduleContent");
  const tabBtns = document.querySelectorAll(".tab-btn");

  // Update active tab
  tabBtns.forEach((btn, index) => {
    btn.classList.toggle("active", index + 1 === day);
  });

  // Clear previous content
  scheduleContent.innerHTML = "";

  // Add schedule items for the day
  scheduleData[day].forEach((item, index) => {
    const scheduleItem = document.createElement("div");
    scheduleItem.className = "schedule-item fade-in";
    scheduleItem.style.animationDelay = `${index * 0.1}s`;

    scheduleItem.innerHTML = `
      <div class="schedule-time">
        <i class="fas fa-clock"></i>
        ${item.time}
      </div>
      <div class="schedule-details">
        <div class="schedule-type ${item.type}">${item.type}</div>
        <h3 class="schedule-title">${item.title}</h3>
        ${item.speaker ? `<p class="schedule-speaker">Speaker: ${item.speaker}</p>` : ""}
        <p class="schedule-description">${item.description}</p>
      </div>
    `;

    scheduleContent.appendChild(scheduleItem);
  });

  // Trigger animations
  setTimeout(() => {
    scheduleContent
      .querySelectorAll(".fade-in")
      .forEach((el) => el.classList.add("visible"));
  }, 100);
}

// Testimonials section
function setupTestimonials() {
  showTestimonial(0);
  createTestimonialDots();

  // Auto-rotate testimonials
  setInterval(() => {
    nextTestimonial();
  }, 5000);
}

function showTestimonial(index) {
  const testimonial = testimonials[index];
  const content = document.getElementById("testimonialContent");

  content.innerHTML = `
    <div class="testimonial-text">"${testimonial.content}"</div>
    <div class="testimonial-author">
      <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
      <div class="testimonial-info">
        <h4>${testimonial.name}</h4>
        <p>${testimonial.title} at ${testimonial.company}</p>
      </div>
    </div>
  `;

  updateTestimonialDots(index);
}

function createTestimonialDots() {
  const dotsContainer = document.getElementById("testimonialDots");
  dotsContainer.innerHTML = "";

  testimonials.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.onclick = () => {
      currentTestimonialIndex = index;
      showTestimonial(index);
    };
    dotsContainer.appendChild(dot);
  });
}

function updateTestimonialDots(activeIndex) {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === activeIndex);
  });
}

function nextTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  showTestimonial(currentTestimonialIndex);
}

function prevTestimonial() {
  currentTestimonialIndex =
    (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonialIndex);
}

// Registration form
function setupRegistrationForm() {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const submitBtn = document.getElementById("submitBtn");
      const originalText = submitBtn.innerHTML;

      // Show loading state
      submitBtn.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Processing...';
      submitBtn.disabled = true;

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Show success message
      document.querySelector(".registration-content").style.display = "none";
      document.getElementById("successMessage").classList.remove("hidden");

      // Reset button
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  });
}

function validateForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");

  let isValid = true;

  // Clear previous errors
  clearErrors();

  // Validate name
  if (!name.value.trim()) {
    showError("name", "Name is required");
    isValid = false;
  }

  // Validate email
  if (!email.value.trim()) {
    showError("email", "Email is required");
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    showError("email", "Please enter a valid email address");
    isValid = false;
  }

  // Validate phone
  if (!phone.value.trim()) {
    showError("phone", "Phone number is required");
    isValid = false;
  } else if (!/^\+?[\d\s-()]{10,}$/.test(phone.value)) {
    showError("phone", "Please enter a valid phone number");
    isValid = false;
  }

  return isValid;
}

function showError(fieldName, message) {
  const field = document.getElementById(fieldName);
  const errorDiv = document.getElementById(fieldName + "Error");

  field.classList.add("error");
  errorDiv.textContent = message;
  errorDiv.classList.add("show");
}

function clearErrors() {
  const fields = ["name", "email", "phone"];
  fields.forEach((field) => {
    const input = document.getElementById(field);
    const error = document.getElementById(field + "Error");

    input.classList.remove("error");
    error.classList.remove("show");
    error.textContent = "";
  });
}

function resetForm() {
  document.getElementById("registrationForm").reset();
  document.querySelector(".registration-content").style.display = "grid";
  document.getElementById("successMessage").classList.add("hidden");
  clearErrors();
}

// Scroll animations
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe all fade-in elements
  document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el);
  });
}

function setupBackToTop() {
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.pageXOffset > 300) {
      backToTopBtn.classList.remove("hidden");
    } else {
      backToTopBtn.classList.add("hidden");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

document.getElementById(".newsletter-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = e.target.querySelector('input[type="email"]').value;

  if (email) {
    alert("Thank you for subscribing to out newsletter !");
    e.target.reset();
  }
});
