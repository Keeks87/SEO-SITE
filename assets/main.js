// theme toggle
const root = document.documentElement;
const btn = document.getElementById('themeToggle');
const pref = localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
if (pref === 'light') root.classList.add('light');
btn?.addEventListener('click', () => {
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
});
// year
document.getElementById('year').textContent = new Date().getFullYear();
