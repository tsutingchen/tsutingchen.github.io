// Subtle fade-in on scroll for sections, project cards, photos.
const targets = document.querySelectorAll('.section, .project-card, .photo, .cv-row');
targets.forEach(el => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(el => io.observe(el));
} else {
  targets.forEach(el => el.classList.add('is-visible'));
}

// Photography page: block right-click and drag on images
if (document.body.classList.contains('page-photography')) {
  const block = (e) => e.preventDefault();
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', block);
    img.addEventListener('dragstart', block);
  });
}
