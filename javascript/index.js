const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// MOBILE MENU
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
});

// SCROLL REVEAL ANIMATION
const reveals = document.querySelectorAll(`
  .card,
  .pricing-card,
  .testimonial-crd,
  .blog-card,
  .count-box,
  .clients-logos,
  .banner-section,
  .footer-content
`);

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll() {
  reveals.forEach((item) => {
    const windowHeight = window.innerHeight;
    const revealTop = item.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      item.classList.add("active");
    }
  });
}

revealOnScroll();