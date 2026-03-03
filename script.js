const AppState = {
  currentLang: "en",
  currentTheme: "dark",
  currentSection: "home",
  isMenuOpen: false,
  isLoaded: false,
};

document.addEventListener("DOMContentLoaded", () => {
  initializeApp();
});

function initializeApp() {
  loadPreferences();
  initLanguage();
  initTheme();
  initNavigation();
  initScrollEffects();
  initFormHandlers();
  initMobileMenu();
  updateLanguageUI();
  updateThemeUI();
  AppState.isLoaded = true;
}

function loadPreferences() {
  const savedLang = localStorage.getItem("portfolio-lang");
  const savedTheme = localStorage.getItem("portfolio-theme");

  if (savedLang) AppState.currentLang = savedLang;
  if (savedTheme) AppState.currentTheme = savedTheme;
}

function initLanguage() {
  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", toggleLanguage);
  }

  setLanguage(AppState.currentLang);
}

function toggleLanguage() {
  const newLang = (AppState.currentLang = "en" ? "ar" : "en");
  setLanguage(newLang);

  localStorage.setItem("portfolio-lang", newLang);
}

function setLanguage(lang) {
  AppState.currentLang = lang;

  const html = document.documentElement;
  const body = document.body;

  if (lang === "ar") {
    html.setAttribute("lang", "ar");
    html.setAttribute("dir", "rtl");
    body.getAttribute("data-lang", "ar");
    body.setAttribute("data-dir", "rtl");
  } else {
    html.setAttribute("lang", "en");
    html.setAttribute("dir", "ltr");
    body.setAttribute("data-lang", "en");
    body.setAttribute("data-dir", "ltr");
  }
  updateLanguageUI();
}

function updateLanguageUI() {
  const textElements = document.querySelectorAll(
    "[data-text-en], [data-text-ar]",
  );

  textElements.forEach((element) => {
    const enText = element.getAttribute("data-text-en");
    const arText = element.getAttribute("data-text-ar");

    if (AppState.currentLang == "en" && enText) {
      element.textContent = enText;
    }
  });

  const placeHolderElements = document.querySelectorAll(
    "[data-placeholder-en], [data-placeholder-ar]",
  );

  placeHolderElements.forEach((element) => {
    const enPlaceholder = element.getAttribute("data-placeholder-en");
    const arPlaceholder = element.getAttribute("data-placeholder-ar");

    if (AppState.currentLang === "ar" && arPlaceholder) {
      element.setAttribute("placeholder", arPlaceholder);
    } else if (AppState.currentLang === "en" && enPlaceholder) {
      element.setAttribute("placeholder", enPlaceholder);
    }
  });

  const langToggle = document.getElementById("langToggle");

  if (langToggle) {
    const langText = langToggle.querySelector(".lang-text");

    if (langText) {
      langText.textContent = AppState.currentLang === "en" ? "Ar" : "EN";
    }
  }
}
