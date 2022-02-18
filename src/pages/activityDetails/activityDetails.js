const starArr = document.querySelectorAll(".g__overview-star");
if (starArr.length) {
  starArr.forEach((star) => {
    star.addEventListener("click", () => {
      star.classList.toggle("active");
    });
  });
}
const nav = document.getElementById("hub-navigation");
if (window.innerWidth <= 728) {
  nav.style.display = "none";
}
