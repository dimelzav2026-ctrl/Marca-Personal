const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');
const navLinks = [...document.querySelectorAll('.main-nav a')];

function setMenu(open) {
  if (!menuToggle || !mainNav) return;
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  mainNav.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
}

menuToggle?.addEventListener('click', () => {
  setMenu(!mainNav.classList.contains('is-open'));
});

navLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));

const revealItems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => revealObserver.observe(item));

const sectionLinks = new Map(navLinks.map((link) => [link.getAttribute('href').slice(1), link]));
const observedSections = [...sectionLinks.keys()]
  .map((id) => document.getElementById(id))
  .filter(Boolean);
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const link = sectionLinks.get(entry.target.id);
    if (link && entry.isIntersecting) {
      navLinks.forEach((item) => item.classList.remove('active'));
      link.classList.add('active');
    }
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
observedSections.forEach((section) => sectionObserver.observe(section));

const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  formStatus.textContent = 'Tu mensaje está listo. Conecta este formulario a tu correo profesional antes de publicar.';
  contactForm.reset();
});
