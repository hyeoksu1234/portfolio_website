document.addEventListener("DOMContentLoaded", function () {
  const photo = document.querySelector(".photo");

  photo.addEventListener("click", function () {
    if (window.innerWidth <= 1000) {
      // 모바일 화면 크기 기준 (1000px 이하)
      if (photo.style.transform === "scale(1.22)") {
        photo.style.transform = "scale(1)"; // 원래 크기로 되돌리기
      } else {
        photo.style.transform = "scale(1.22)"; // 이미지 크기를 1.5배로 확대
      }
    }
  });
});

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
