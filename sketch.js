/**
 * Hero Portfolio - Vanilla JavaScript
 * Blur text animation, theme toggle, menu interactions
 */

document.addEventListener("DOMContentLoaded", function () {
  // =============================================
  // Menu Toggle
  // =============================================
  const menuBtn = document.getElementById("menuBtn");
  const dropdownMenu = document.getElementById("dropdownMenu");

  if (menuBtn && dropdownMenu) {
    menuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      menuBtn.classList.toggle("open");
      dropdownMenu.classList.toggle("open");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!menuBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
        menuBtn.classList.remove("open");
        dropdownMenu.classList.remove("open");
      }
    });

    // Close menu when clicking a menu item
    dropdownMenu.querySelectorAll(".menu-item").forEach(function (item) {
      item.addEventListener("click", function () {
        menuBtn.classList.remove("open");
        dropdownMenu.classList.remove("open");
      });
    });
  }

  // =============================================
  // Theme Toggle
  // =============================================
  const themeToggle = document.getElementById("themeToggle");

  if (themeToggle) {
    // Initialize theme based on body class
    const isDark = document.body.classList.contains("dark");

    themeToggle.addEventListener("click", function () {
      const currentlyDark = document.body.classList.contains("dark");

      if (currentlyDark) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
      } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
      }

      // Save preference to localStorage
      localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
    });

    // Load saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.body.classList.remove("dark", "light");
      document.body.classList.add(savedTheme);
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(savedTheme);
    }
  }

  // =============================================
  // Blur Text Animation
  // =============================================
  function animateBlurText() {
    const blurTexts = document.querySelectorAll(".blur-text");

    blurTexts.forEach((element) => {
      const spans = element.querySelectorAll("span");
      const delay = parseInt(element.dataset.delay) || 100;

      // First add will-animate to set initial state (hidden)
      element.classList.add("will-animate");

      // Stagger the animation for each letter
      spans.forEach((span, index) => {
        span.style.transitionDelay = `${index * delay}ms`;
      });

      // After a brief delay, add animate class to trigger animation
      setTimeout(() => {
        element.classList.add("animate");
      }, 50);
    });
  }

  // Blur Text Words Animation (for tagline)
  function animateBlurTextWords() {
    const blurTextWords = document.querySelectorAll(".blur-text-words");

    blurTextWords.forEach((element) => {
      const spans = element.querySelectorAll("span");
      const delay = parseInt(element.dataset.delay) || 150;

      // First add will-animate to set initial state (hidden)
      element.classList.add("will-animate");

      // Stagger the animation for each word
      spans.forEach((span, index) => {
        span.style.transitionDelay = `${index * delay}ms`;
      });

      // After a brief delay, add animate class to trigger animation
      setTimeout(() => {
        element.classList.add("animate");
      }, 50);
    });
  }

  // =============================================
  // Intersection Observer for animations
  // =============================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;

        if (element.classList.contains("blur-text")) {
          const spans = element.querySelectorAll("span");
          const delay = parseInt(element.dataset.delay) || 100;

          element.classList.add("animate");
          spans.forEach((span, index) => {
            span.style.transitionDelay = `${index * delay}ms`;
          });
        }

        if (element.classList.contains("blur-text-words")) {
          const spans = element.querySelectorAll("span");
          const delay = parseInt(element.dataset.delay) || 150;

          element.classList.add("animate");
          spans.forEach((span, index) => {
            span.style.transitionDelay = `${index * delay}ms`;
          });
        }

        observer.unobserve(element);
      }
    });
  }, observerOptions);

  // Observe blur text elements
  document.querySelectorAll(".blur-text, .blur-text-words").forEach((el) => {
    observer.observe(el);
  });

  // =============================================
  // Scroll Indicator
  // =============================================
  const scrollIndicator = document.getElementById("scrollIndicator");

  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", function () {
      const contentSections = document.querySelector(".content-sections");
      if (contentSections) {
        contentSections.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // =============================================
  // Profile Image Click (navigate to about page)
  // =============================================
  const profileImg = document.querySelector(".profile-img");

  if (profileImg) {
    profileImg.addEventListener("click", function () {
      window.location.href = "about.html";
    });
  }

  // =============================================
  // Initial animations (trigger on load)
  // =============================================
  setTimeout(() => {
    animateBlurText();
    animateBlurTextWords();
  }, 100);
});

// =============================================
// Legacy functions for other pages
// =============================================

// Hamburger menu for projects/about pages
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      menu.classList.toggle("open");
    });
  }
});

// Open projects page function
function openProjectsPage() {
  window.location.href = "projects.html";
}

// Skills dots visualization (for legacy pages if needed)
document.addEventListener("DOMContentLoaded", function () {
  const skillsSection = document.querySelector("#skills .skills-graph");

  // Only run if we have the old-style skills section
  if (skillsSection && document.querySelectorAll(".skill-dots").length > 0) {
    const skills = [
      { name: "Photoshop", level: 1 },
      { name: "Illustrator", level: 1 },
      { name: "Premiere Pro", level: 1 },
      { name: "After Effects", level: 0.9 },
      { name: "AI", level: 0.9 },
    ];

    function updateSkillDots() {
      const skillWidth = skillsSection.offsetWidth;
      const isMobile = window.innerWidth <= 800;
      const maxDots = isMobile
        ? Math.min(14, Math.floor(skillWidth / 25))
        : Math.min(10, Math.floor(skillWidth / 43));

      skills.forEach((skill, index) => {
        const skillDots = document.querySelectorAll(".skill-dots")[index];
        if (!skillDots) return;

        skillDots.innerHTML = "";
        const dotCount = Math.floor(maxDots * skill.level);

        for (let i = 0; i < maxDots; i++) {
          const dot = document.createElement("span");
          dot.classList.add("dot");
          if (i < dotCount) {
            dot.classList.add("filled");
          }
          skillDots.appendChild(dot);
        }
      });
    }

    updateSkillDots();
    window.addEventListener("resize", updateSkillDots);
  }
});
