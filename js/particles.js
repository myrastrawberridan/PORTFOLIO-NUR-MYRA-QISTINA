const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 60; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 10 + 6,
    dx: (Math.random() - 0.5) * 0.4,
    dy: (Math.random() - 0.5) * 0.4
  });
}

function drawStar(x, y, r) {
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    let outer = { x: x + r * Math.cos((i * 4 * Math.PI) / 5 - Math.PI / 2), y: y + r * Math.sin((i * 4 * Math.PI) / 5 - Math.PI / 2) };
    let inner = { x: x + (r / 2.5) * Math.cos(((i * 4 + 2) * Math.PI) / 5 - Math.PI / 2), y: y + (r / 2.5) * Math.sin(((i * 4 + 2) * Math.PI) / 5 - Math.PI / 2) };
    i === 0 ? ctx.moveTo(outer.x, outer.y) : ctx.lineTo(outer.x, outer.y);
    ctx.lineTo(inner.x, inner.y);
  }
  ctx.closePath();
  ctx.fillStyle = 'rgba(255, 182, 193, 0.5)';
  ctx.fill();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(star => {
    drawStar(star.x, star.y, star.r);
    star.x += star.dx;
    star.y += star.dy;
    if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
    if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
  });
  requestAnimationFrame(draw);
}

draw();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});