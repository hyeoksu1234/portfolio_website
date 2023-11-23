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
