document.addEventListener('DOMContentLoaded', function () {

  // ── HAMBURGER MENU ──
  const hamburger = document.getElementById('hamburger');
  const navMobile = document.getElementById('navMobile');

  hamburger.addEventListener('click', () => {
    navMobile.classList.toggle('open');
  });

  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navMobile.classList.remove('open'));
  });

  // ── GALLERY SWAP ──
  document.querySelectorAll('.thumb').forEach(thumb => {
    thumb.addEventListener('click', function () {
      const targetId = this.dataset.target;
      const mainImg = document.getElementById(targetId);

      // swap src
      const tempSrc = mainImg.src;
      const tempAlt = mainImg.alt;
      mainImg.src = this.src;
      mainImg.alt = this.alt;
      this.src = tempSrc;
      this.alt = tempAlt;

      // active state
      document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // ── NAV ACTIVE ON SCROLL ──
  const sections = document.querySelectorAll('section[id]');
  const navAs = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAs.forEach(a => {
          a.style.color = a.getAttribute('href') === '#' + entry.target.id
            ? 'var(--text)'
            : '';
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));

  // ── FADE IN ON SCROLL ──
  const fadeEls = document.querySelectorAll('.skill-block, .proj-card, .info-card');
  fadeEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  });

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 60 * (Array.from(fadeEls).indexOf(entry.target) % 6));
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeEls.forEach(el => fadeObserver.observe(el));

});