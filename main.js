/* ============================================================
   GlobeFarms Venture Agritech Ltd — Main Scripts
   main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. INITIALISE LUCIDE ICONS ---------- */
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  /* ---------- 2. NAVBAR SCROLL BEHAVIOUR ---------- */
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  /* ---------- 3. MOBILE MENU TOGGLE ---------- */
  window.toggleMenu = function () {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
      menu.classList.toggle('open');
    }
  };

  /* ---------- 4. SCROLL-REVEAL (IntersectionObserver) ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---------- 5. ANIMATED PROGRESS BARS ---------- */
  const progressBars = document.querySelectorAll('.progress-bar');

  const progressObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const targetWidth = bar.dataset.width;
          setTimeout(() => {
            bar.style.width = targetWidth + '%';
          }, 100);
          progressObserver.unobserve(bar);
        }
      });
    },
    { threshold: 0.5 }
  );

  progressBars.forEach((bar) => progressObserver.observe(bar));

  /* ---------- 6. INVESTMENT THESIS CARD HOVER ----------
     Cards use inline onmouseover/onmouseout in the HTML for
     simplicity; no additional JS needed here unless you prefer
     to centralise them.
  --------------------------------------------------------- */

  /* ---------- 7. CONTACT INFO CARD HOVER ----------
     Same as above — handled inline in HTML.
  --------------------------------------------------------- */

  /* ---------- 8. SMOOTH CLOSE MOBILE MENU ON LINK CLICK ---------- */
  const mobileLinks = document.querySelectorAll('#mobile-menu a');
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const menu = document.getElementById('mobile-menu');
      if (menu) menu.classList.remove('open');
    });
  });

});