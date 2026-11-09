// Mobile menu, active link, fade-in, footer year
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".nav ul");
  if (btn) btn.addEventListener("click", () => menu.classList.toggle("open"));

  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav ul a").forEach(a => {
    if (a.getAttribute("href") === page) a.classList.add("active");
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  const y = document.getElementById("yr");
  if (y) y.textContent = new Date().getFullYear();
});
