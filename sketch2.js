document.addEventListener("DOMContentLoaded", function () {
  // =============================================
  // Menu Toggle (New nav style)
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
  // Legacy: Clickable links letter spacing
  // =============================================
  const clickableLinks = document.querySelectorAll(".clickable");

  clickableLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 800) {
        if (link.style.letterSpacing === "0px") {
          link.style.letterSpacing = "5px";
        } else {
          link.style.letterSpacing = "0px";
        }
      }
    });
  });

  // Project filtering + grouped 'All'
  const filterBar = document.querySelector(".filters");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const grid = document.querySelector(".projects-grid");
  const allCards = Array.from(document.querySelectorAll(".project-card"));

  // Categories: combine Web/App + AI into Development
  // Order: Design → Development → PD
  const categoryOrder = ["design", "dev", "pd"]; // display order
  const categoryLabel = {
    design: "Design",
    dev: "Development",
    pd: "PD",
  };

  function clearGrid() {
    while (grid.firstChild) grid.removeChild(grid.firstChild);
  }

  function renderCategory(cat) {
    grid.classList.remove("grouped");
    clearGrid();
    allCards.forEach((card) => {
      card.classList.remove("hidden");
      if (card.getAttribute("data-category") === cat) {
        grid.appendChild(card);
      }
    });
  }

  function renderAllGrouped() {
    grid.classList.add("grouped");
    clearGrid();
    categoryOrder.forEach((cat) => {
      const groupCards = allCards.filter((c) => c.getAttribute("data-category") === cat);
      if (groupCards.length === 0) return;

      const section = document.createElement("section");
      section.className = "category-group";
      const title = document.createElement("h4");
      title.className = "category-title";
      title.textContent = categoryLabel[cat] || cat;
      section.appendChild(title);

      // Single-row layout for every category, including Development
      const wrap = document.createElement("div");
      wrap.className = "category-grid";
      groupCards.forEach((c) => wrap.appendChild(c));
      section.appendChild(wrap);

      grid.appendChild(section);
    });
  }

  if (filterBar && grid) {
    // Initial render as grouped All
    renderAllGrouped();
    filterBar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;

      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const target = btn.dataset.filter;
      if (target === "all") {
        renderAllGrouped();
      } else {
        renderCategory(target);
      }
    });
  }
});

function openProjectsPage() {
  window.location.href = "projects.html"; // Replace 'projects.html' with the actual path to your projects page
}

// document.addEventListener("DOMContentLoaded", () => {
//   const skillsData = [
//     { name: "Photoshop", level: 100 },
//     { name: "Illustrator", level: 100 },
//     { name: "Premiere Pro", level: 100 },
//     { name: "After Effects", level: 80 },
//     { name: "C4D", level: 80 },
//     { name: "3D Max", level: 70 },
//     { name: "Chat GPT", level: 80 },
//   ];

//   const skillsChart = document.querySelector(".skills-chart");

//   skillsData.forEach((skill) => {
//     const skillItem = document.createElement("div");
//     skillItem.classList.add("skill-item");

//     const skillName = document.createElement("div");
//     skillName.classList.add("skill-name");
//     skillName.textContent = skill.name;

//     const skillBar = document.createElement("div");
//     skillBar.classList.add("skill-bar");

//     const skillBarFill = document.createElement("div");
//     skillBarFill.classList.add("skill-bar-fill", "orange");
//     skillBarFill.style.width = `${skill.level}%`;
//   });
// });
