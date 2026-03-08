document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll using Intersection Observer
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.section, .fade-up, .project-card, .exp-item, .cert-item');
    revealElements.forEach(el => revealObserver.observe(el));

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.padding = '0.75rem 2rem';
            navbar.style.background = 'rgba(2, 6, 23, 0.95)';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            navbar.style.padding = '1rem 2rem';
            navbar.style.background = 'rgba(2, 6, 23, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-active');
            mobileMenu.classList.toggle('active');
        });
    }

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                navLinks.classList.remove('mobile-active');
            }
        });
    });
});

/* Dynamically injected animation styles moved to stylesheet or handled via classes */
const style = document.createElement('style');
style.textContent = `
    .fade-up {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .fade-up.active {
        opacity: 1;
        transform: translateY(0);
    }
    .section {
        opacity: 0;
        transform: translateY(40px);
        transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .section.active {
        opacity: 1;
        transform: translateY(0);
    }
    .project-card, .exp-item, .cert-item {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .project-card.active, .exp-item.active, .cert-item.active {
        opacity: 1;
        transform: translateY(0);
    }
    /* Mobile Menu Bars Transition */
    .menu-toggle.active .bar:nth-child(2) { opacity: 0; }
    .menu-toggle.active .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
    .menu-toggle.active .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
`;
document.head.appendChild(style);
