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