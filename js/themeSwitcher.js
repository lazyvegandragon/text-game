const themeSwitcher = document.querySelector("#theme-toggle");

// Set initial theme based on user's preferred color scheme
let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Apply initial theme
document.documentElement.setAttribute("data-theme", isDark ? "🌑" : "☀️");

themeSwitcher.addEventListener("click", () => {
  isDark = !isDark;
  document.documentElement.setAttribute("data-theme", isDark ? "🌑" : "☀️");
});