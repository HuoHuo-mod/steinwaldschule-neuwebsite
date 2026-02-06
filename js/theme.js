function initTheme() {
  const toggle = document.getElementById("themeToggle");

  // Set initial theme from localStorage
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    if (toggle) toggle.textContent = "☀️"; // sun for dark mode
  } else {
    document.documentElement.removeAttribute("data-theme");
    if (toggle) toggle.textContent = "🌙"; // moon for light mode
  }

  // Attach click listener
  if (toggle) {
    toggle.addEventListener("click", () => {
      const html = document.documentElement;
      const isDark = html.getAttribute("data-theme") === "dark";

      html.setAttribute("data-theme", isDark ? "light" : "dark");
      localStorage.setItem("theme", isDark ? "light" : "dark");

      // Update emoji
      toggle.textContent = isDark ? "🌙" : "☀️";
    });
  }
}
