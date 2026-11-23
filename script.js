const themeToggle = document.getElementById("themeToggle");
const colorTheme = document.getElementById("color-theme");

themeToggle.addEventListener("click", function () {
  if (colorTheme.getAttribute("href") === "style.css") {
    colorTheme.setAttribute("href", "style-dark.css");
  } else {
    colorTheme.setAttribute("href", "style.css");
  }
});
