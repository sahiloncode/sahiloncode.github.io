// Portfolio Website JS
document.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth < 768) {
    document.querySelectorAll('[data-aos]').forEach(el => {
      el.removeAttribute('data-aos');
    });
  }
  if (typeof AOS !== 'undefined') {
    AOS.init();
  }
});

function setThemeToggleState(theme) {
  const toggles = document.querySelectorAll('.theme-toggle');
  toggles.forEach(btn => {
    const iconSpan = btn.querySelector('.theme-toggle-icon');
    const label = btn.querySelector('.theme-toggle-label');
    if (!iconSpan) return;
    if (theme === 'light') {
      iconSpan.innerHTML = `<svg class="lucide lucide-moon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z"/></svg>`;
      if(label) label.textContent = 'Light';
    } else {
      iconSpan.innerHTML = `<svg class="lucide lucide-sun" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2m11-11h-2M4 12H2m17.657 6.343-1.414-1.414M6.343 6.343 4.929 4.929m12.728 0-1.414 1.414M6.343 17.657l-1.414 1.414"/></svg>`;
      if(label) label.textContent = 'Dark';
    }
  });
}
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
document.body.classList.remove('light', 'dark');
document.body.classList.add(savedTheme);
setThemeToggleState(savedTheme);

document.querySelectorAll('.theme-toggle').forEach(toggleBtn => {
  toggleBtn.addEventListener('click', () => {
    let currentTheme = document.body.classList.contains('light') ? 'light' : 'dark';
    let nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(nextTheme);
    localStorage.setItem('theme', nextTheme);
    setThemeToggleState(nextTheme);
  });
});

const menuToggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navOverlay = document.querySelector('.nav-overlay');

// Function to close mobile menu
function closeMobileMenu() {
  navLinks.classList.remove('show');
  navOverlay.classList.remove('show');
  document.body.style.overflow = '';
}

// Toggle menu on button click
menuToggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  navOverlay.classList.toggle('show');
  if (navLinks.classList.contains('show')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

// Close menu when clicking overlay
navOverlay.addEventListener('click', closeMobileMenu);

// Close menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', (e) => {
    closeMobileMenu();
  });
});

// Close menu when scrolling
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (Math.abs(scrollTop - lastScrollTop) > 10) {
    closeMobileMenu();
  }
  lastScrollTop = scrollTop;

  // Update active section
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav .nav-links a');
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !menuToggleBtn.contains(e.target)) {
    closeMobileMenu();
  }
});

// Sticky navbar after About section
const navbar = document.querySelector('nav');
const aboutSection = document.getElementById('about');

function handleStickyNav() {
  const trigger = aboutSection.offsetTop + aboutSection.offsetHeight - 20;
  if (window.scrollY > trigger) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

window.addEventListener('scroll', handleStickyNav);
window.addEventListener('resize', handleStickyNav);
document.addEventListener('DOMContentLoaded', handleStickyNav);

// ... (Paste all JS from <script> block here) ... 