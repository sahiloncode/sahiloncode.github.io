function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('active');
}

// Close menu when clicking on a link
document.querySelectorAll('.menu-items a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.menu-items').classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const menu = document.querySelector('.menu-items');
    const hamburger = document.querySelector('.hamburger');
    if (!menu.contains(e.target) && !hamburger.contains(e.target) && menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});

// Add scroll event listener for navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-lg');
    } else {
        nav.classList.remove('shadow-lg');
    }
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, { threshold: 0.1 });

// Observe all menu cards
document.querySelectorAll('.menu-card').forEach(card => {
    card.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
    observer.observe(card);
});

document.addEventListener('DOMContentLoaded', function() {
    // Remove filtering logic so all menu cards are visible
});

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-item')) {
        const card = e.target.closest('.menu-card');
        if (card) card.remove();
    }
}); 