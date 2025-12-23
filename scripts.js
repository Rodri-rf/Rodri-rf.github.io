// ============================================
// SMOOTH SCROLL FOR NAVIGATION
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offset = 80; // Offset for fixed header if needed
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(section);
});

// ============================================
// ACTIVE NAVIGATION HIGHLIGHTING
// ============================================

const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
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

// ============================================
// HEADER BACKGROUND ON SCROLL (OPTIONAL)
// ============================================

const socialIcons = document.querySelector('.social-icons-fixed');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        socialIcons?.classList.add('scrolled');
    } else {
        socialIcons?.classList.remove('scrolled');
    }
});

// ============================================
// ENHANCED HOVER EFFECTS FOR PROJECT CARDS
// ============================================

const projectCards = document.querySelectorAll('.project-card, .quote-card, .publication-item');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// ============================================
// LAZY LOADING FOR IMAGES (IF ADDED LATER)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// ============================================
// PREVENT SCROLL JANK ON MOBILE
// ============================================

let ticking = false;
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Any scroll-based animations go here
            ticking = false;
        });
        
        ticking = true;
    }
});

// ============================================
// ACCESSIBILITY: KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', (e) => {
    // Add keyboard shortcuts if needed
    // For example: pressing 'H' could scroll to home
});

// ============================================
// PERFORMANCE: DEBOUNCE FUNCTION
// ============================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// CONSOLE MESSAGE (OPTIONAL EASTER EGG)
// ============================================

console.log('%c👋 Hi there!', 'font-size: 20px; font-weight: bold; color: #047857;');
console.log('%cLooking for something? Check out my GitHub: https://github.com/Rodri-rf', 'font-size: 14px; color: #1a365d;');
console.log('%cOr if you found a bug, please let me know!', 'font-size: 12px; color: #6b7280;');