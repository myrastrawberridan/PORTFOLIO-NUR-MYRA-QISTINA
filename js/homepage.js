// 1. HIGHLIGHT active nav link based on current page
const links = document.querySelectorAll("nav ul li a");
links.forEach(link => {
  if (link.href === window.location.href) {
    link.style.fontWeight = "bold";
    link.style.textDecoration = "underline";
  }
});


// 2. SMOOTH SCROLL when clicking nav links
document.querySelectorAll("a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
  });
});


// 3. FADE IN the hero section when page loads
window.addEventListener("load", function () {
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.opacity = "0";
    hero.style.transition = "opacity 1s ease";
    setTimeout(() => {
      hero.style.opacity = "1";
    }, 100);
  }
});