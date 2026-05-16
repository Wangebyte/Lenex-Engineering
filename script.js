/* =============================================
   LENEX ENGINEERING CONSULTANTS – script.js
   ============================================= */

// === NAVBAR: Scroll effect & active link ===
const navbar   = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

function handleNavScroll() {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

function setActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 90;
    if (window.scrollY >= top) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', () => {
  handleNavScroll();
  setActiveLink();
  handleBackTop();
  revealOnScroll();
});

handleNavScroll(); // run on load

// === HAMBURGER MENU ===
const hamburger    = document.getElementById('hamburger');
const navLinksMenu = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksMenu.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksMenu.classList.remove('open');
  });
});

// === BACK TO TOP BUTTON ===
const backTop = document.getElementById('backTop');

function handleBackTop() {
  if (window.scrollY > 400) {
    backTop.classList.add('visible');
  } else {
    backTop.classList.remove('visible');
  }
}

backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// === SCROLL REVEAL ===
const revealEls = document.querySelectorAll(
  '.service-card, .project-card, .training-card, .why-card, .value-card, .about-text, .about-images, .contact-info, .contact-form, .section-header'
);

revealEls.forEach(el => el.classList.add('reveal'));

function revealOnScroll() {
  revealEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}

revealOnScroll(); // run on load

// === SMOOTH SCROLL for all anchor links ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// === STAGGERED ANIMATION for grids ===
document.querySelectorAll('.services-grid .service-card').forEach((card, i) => {
  card.style.transitionDelay = (i * 80) + 'ms';
});
document.querySelectorAll('.training-grid .training-card').forEach((card, i) => {
  card.style.transitionDelay = (i * 70) + 'ms';
});
document.querySelectorAll('.why-grid .why-card').forEach((card, i) => {
  card.style.transitionDelay = (i * 60) + 'ms';
});