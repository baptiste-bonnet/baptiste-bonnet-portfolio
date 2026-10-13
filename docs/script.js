const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');
const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 24);
updateHeader(); window.addEventListener('scroll', updateHeader, { passive: true });
menuToggle?.addEventListener('click', () => { const open = menu?.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', String(Boolean(open))); });
menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { menu.classList.remove('open'); menuToggle?.setAttribute('aria-expanded', 'false'); }));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduceMotion || !('IntersectionObserver' in window)) document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
else { const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .1 }); document.querySelectorAll('.reveal').forEach((el) => observer.observe(el)); }
const year = document.querySelector('[data-year]'); if (year) year.textContent = String(new Date().getFullYear());
