const themeToggle = document.querySelector("#theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.documentElement.dataset.theme = "light";
}

themeToggle.addEventListener("click", () => {
  const isLight = document.documentElement.dataset.theme === "light";

  if (isLight) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.dataset.theme = "light";
    localStorage.setItem("theme", "light");
  }
});