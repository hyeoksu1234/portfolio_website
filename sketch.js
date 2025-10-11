document.addEventListener("DOMContentLoaded", function () {
  const clickableLinks = document.querySelectorAll(".clickable");

  clickableLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 1000) {
        // 모바일 화면 크기 기준 (1000px 이하)
        if (link.style.letterSpacing === "0px") {
          link.style.letterSpacing = "5px"; // 원래 간격으로 되돌리기
        } else {
          link.style.letterSpacing = "0px"; // 글자 간격을 15px로 확장
        }
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    menu.classList.toggle("open");
  });
});

function openProjectsPage() {
  window.location.href = "projects.html"; // Replace 'projects.html' with the actual path to your projects page
}

document.addEventListener("DOMContentLoaded", function () {
  const skills = [
    { name: "Photoshop", level: 1 },
    { name: "Illustrator", level: 1 },
    { name: "Premiere Pro", level: 1 },
    { name: "After Effects", level: 0.9 },
    { name: "AI", level: 0.9 },
  ];

  function updateSkillDots() {
    const skillsSection = document.querySelector("#skills");
    const skillWidth = skillsSection.offsetWidth;
    const isMobile = window.innerWidth <= 800;
    const maxDots = isMobile
      ? Math.min(14, Math.floor(skillWidth / 25))
      : Math.min(10, Math.floor(skillWidth / 43));

    skills.forEach((skill, index) => {
      const skillDots = document.querySelectorAll(".skill-dots")[index];
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
});
