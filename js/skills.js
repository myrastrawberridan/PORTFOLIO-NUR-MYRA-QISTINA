const bars = document.querySelectorAll('.bar-fill');

bars.forEach(bar => {
  const width = bar.getAttribute('data-width');
  bar.style.width = width + '%';
});