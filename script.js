const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");
const themeToggle = document.getElementById("themeToggle");

menuToggle.addEventListener("click", () => {
  const open = navigation.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "✕" : "☰";
});

navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

themeToggle.addEventListener("click", () => {
  const dark = document.body.classList.toggle("dark");
  themeToggle.textContent = dark ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
});

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll("#navigation a[href^='#']");
const updateActiveLink = () => {
  let current = "home";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 150) current = section.id;
  });
  navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
};
window.addEventListener("scroll", updateActiveLink, { passive: true });
updateActiveLink();
