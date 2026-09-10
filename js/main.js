/**
 * Custom JavaScript for AI & Data Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Adjust scroll position for fixed navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const animationOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const animateOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('slide-up-anim')) {
                    entry.target.style.animation = 'slideUp 0.8s ease forwards';
                } else if (entry.target.classList.contains('fade-in-anim')) {
                    entry.target.style.animation = 'fadeIn 1s ease forwards';
                }
                
                // Add visible class or change visibility
                entry.target.style.visibility = 'visible';
                observer.unobserve(entry.target);
            }
        });
    }, animationOptions);

    // Observe elements
    document.querySelectorAll('.slide-up-anim, .fade-in-anim').forEach(el => {
        animateOnScroll.observe(el);
    });

    // Add keyframes dynamically if not in CSS
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(styleSheet);
});
