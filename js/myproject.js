// ===== SAVE & LOAD THEME =====
const savedTheme = localStorage.getItem('theme');
if (savedTheme && savedTheme !== 'dark-blue') {
  document.body.classList.add(savedTheme);
}

// ===== THEME SWITCHER =====
const themeBtns = document.querySelectorAll('.theme-btn');

themeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.className = '';
    const theme = btn.dataset.theme;
    if (theme !== 'dark-blue') {
      document.body.classList.add(theme);
    }
    localStorage.setItem('theme', theme);
  });
});

// ===== ACTIVE NAV ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});