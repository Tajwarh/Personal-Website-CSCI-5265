const btn = document.getElementById("toggle-theme");
const KEY = "theme"; // saved in browser

function applyTheme(theme) {
  if (theme === "light") document.body.classList.add("light");
  else document.body.classList.remove("light");
}

function updateButton() {
  const isLight = document.body.classList.contains("light");
  if (btn) btn.textContent = isLight ? "Dark Theme" : "Light Theme";
}

// Load saved theme
const saved = localStorage.getItem(KEY);
if (saved) applyTheme(saved);
updateButton();

// Toggle + save
btn?.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light");
  localStorage.setItem(KEY, isLight ? "light" : "dark");
  updateButton();
});
