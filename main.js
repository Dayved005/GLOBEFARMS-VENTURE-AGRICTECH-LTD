/* ============================================================
   GlobeFarms Venture Agritech Ltd — Main Scripts
   Cleaned & Optimized Version
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. INITIALISE LUCIDE ICONS ---------- */
  function initLucide() {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }
  initLucide();

  /* ---------- 2. NAVBAR SCROLL BEHAVIOUR ---------- */
  const navbar = document.getElementById('navbar');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* ---------- 3. MOBILE MENU TOGGLE ---------- */
  let menuOpen = false;

  window.toggleMenu = function () {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menuIcon');

    if (!menu || !icon) return;

    menuOpen = !menuOpen;

    if (menuOpen) {
      menu.style.maxHeight = menu.scrollHeight + 'px';
      icon.setAttribute('data-lucide', 'x');
    } else {
      menu.style.maxHeight = '0px';
      icon.setAttribute('data-lucide', 'menu');
    }

    initLucide();
  };

  /* ---------- 4. SCROLL REVEAL (IntersectionObserver) ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target); // improves performance
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealEls.forEach((el) => el.classList.add('visible'));
  }

  /* ---------- 5. ANIMATED PROGRESS BARS ---------- */
  const progressBars = document.querySelectorAll('.progress-bar');

  if ('IntersectionObserver' in window && progressBars.length > 0) {
    const progressObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            const targetWidth = bar.dataset.width || 0;

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
  }

  const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");

let isOpen = false;

menuBtn.addEventListener("click", () => {
  isOpen = !isOpen;

  mobileMenu.classList.toggle("active");

  // Force icon change
  menuIcon.innerHTML = isOpen
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
});

// Close menu when clicking a link
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuIcon.setAttribute("data-lucide", "menu");

    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  });
});

  /* ---------- 6. MOBILE MENU LINK CLICK HANDLER ---------- */
  const menuLinks = document.querySelectorAll('#mobile-menu a');

  if (menuLinks.length > 0) {
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        setTimeout(() => {
          const menu = document.getElementById('mobile-menu');
          const icon = document.getElementById('menuIcon');

          if (!menu || !icon) return;

          menuOpen = false;
          menu.style.maxHeight = '0px';
          icon.setAttribute('data-lucide', 'menu');

          initLucide();
        }, 300);
      });
    });
  }

});

