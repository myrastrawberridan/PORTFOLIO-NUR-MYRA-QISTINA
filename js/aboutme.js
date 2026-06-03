// ===== THEME =====
const saved = localStorage.getItem('theme');
if (saved && saved !== 'dark-blue') document.body.classList.add(saved);

const themeBtns = document.querySelectorAll('.theme-btn');
themeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.className = '';
    const theme = btn.dataset.theme;
    if (theme !== 'dark-blue') document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  });
});

// ===== SKILLS PROGRESS BAR ANIMATION =====
const skillFills = document.querySelectorAll('.skill-fill');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      const width = fill.getAttribute('data-width');
      fill.style.width = width + '%';
    }
  });
}, { threshold: 0.3 });

skillFills.forEach(fill => observer.observe(fill));