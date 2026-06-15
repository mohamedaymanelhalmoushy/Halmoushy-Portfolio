/**
 * Portfolio Main JS
 * Mohamed Ayman El-Halmoushy | Intelligent Systems Engineering
 */

// ─── Navbar scroll effect ──────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ─── Hamburger menu ────────────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('nav-mobile');

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMobile.classList.toggle('open');
});

// Close on link click
navMobile?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navMobile.classList.remove('open');
  });
});

// ─── Language toggle ───────────────────────────────────────────────────────
let currentLang = 'en';
const langBtn = document.getElementById('langBtn');
const langBtnMobile = document.getElementById('langBtnMobile');

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  const isAr = currentLang === 'ar';

  document.documentElement.dir = isAr ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang;

  document.querySelectorAll('[data-en]').forEach(el => {
    const key = isAr ? 'ar' : 'en';
    if (el.dataset[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = el.dataset[key];
      } else {
        el.textContent = el.dataset[key];
      }
    }
  });

  const label = isAr ? 'EN' : 'AR';
  if (langBtn)       langBtn.textContent = label;
  if (langBtnMobile) langBtnMobile.textContent = label;
}

langBtn?.addEventListener('click', toggleLanguage);
langBtnMobile?.addEventListener('click', toggleLanguage);

// ─── Scroll reveal ─────────────────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ─── Active nav link on scroll ────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-links a, .nav-mobile a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, {
  threshold: 0.4
});

sections.forEach(sec => sectionObserver.observe(sec));

// ─── Lightbox for certifications ──────────────────────────────────────────
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

document.querySelectorAll('.cert-card').forEach(card => {
  card.addEventListener('click', () => {
    const img = card.querySelector('img');
    if (img && lightboxImg && lightbox) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});

lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

function closeLightbox() {
  lightbox?.classList.remove('active');
  document.body.style.overflow = '';
}

// ─── Typed text effect in hero ────────────────────────────────────────────
class TypeWriter {
  constructor(el, words, waitMs = 2000) {
    this.el = el;
    this.words = words;
    this.txt = '';
    this.wordIdx = 0;
    this.waitMs = waitMs;
    this.isDeleting = false;
    this.tick();
  }

  tick() {
    const current = this.wordIdx % this.words.length;
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.textContent = this.txt;

    let typeSpeed = 80;
    if (this.isDeleting) typeSpeed = 40;

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.waitMs;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIdx++;
      typeSpeed = 300;
    }

    setTimeout(() => this.tick(), typeSpeed);
  }
}

const typeEl = document.getElementById('typed-title');
if (typeEl) {
  const words = typeEl.dataset.words ? JSON.parse(typeEl.dataset.words) : ['ML & Intelligent Systems Engineer'];
  new TypeWriter(typeEl, words, 2200);
}

// ─── Contact form submission ───────────────────────────────────────────────
const contactForm = document.getElementById('contact-form');
const formStatus  = document.getElementById('form-status');

contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const btn = contactForm.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = 'Sending...';
  btn.disabled = true;

  const data = new FormData(contactForm);

  try {
    const res = await fetch(contactForm.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      formStatus.textContent = '✓ Message sent successfully!';
      formStatus.style.color = 'var(--cyan-bright)';
      contactForm.reset();
    } else {
      throw new Error('Failed');
    }
  } catch {
    formStatus.textContent = '✗ Failed to send. Please email directly.';
    formStatus.style.color = '#ff6b6b';
  } finally {
    btn.textContent = originalText;
    btn.disabled = false;
    setTimeout(() => { formStatus.textContent = ''; }, 5000);
  }
});

// ─── Smooth scroll for anchor links ──────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ─── Nav active style injection ───────────────────────────────────────────
const activeStyle = document.createElement('style');
activeStyle.textContent = `
  .nav-links a.active,
  .nav-mobile a.active {
    color: var(--cyan-bright) !important;
  }
  .nav-links a.active::after {
    width: 60%;
  }
`;
document.head.appendChild(activeStyle);
