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

    let delayCounter = 0;
    let delayTimer = null;

    const animateOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Staggering effect for cards
                const delay = delayCounter * 0.15;
                entry.target.style.animationDelay = `${delay}s`;
                
                if (entry.target.classList.contains('slide-up-anim')) {
                    entry.target.style.animation = `slideUp 0.8s ease forwards ${delay}s`;
                } else if (entry.target.classList.contains('fade-in-anim')) {
                    entry.target.style.animation = `fadeIn 1s ease forwards ${delay}s`;
                }
                
                entry.target.style.visibility = 'visible';
                observer.unobserve(entry.target);
                
                delayCounter++;
                clearTimeout(delayTimer);
                delayTimer = setTimeout(() => {
                    delayCounter = 0;
                }, 300); // Reset stagger counter after brief pause
            }
        });
    }, animationOptions);

    // Observe elements
    document.querySelectorAll('.slide-up-anim, .fade-in-anim').forEach(el => {
        animateOnScroll.observe(el);
    });

    // Initialize Typed.js
    if (document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: ['Inteligência Artificial.', 'Data Engineering.', 'Pipeline MLOps.', 'Sistemas Escaláveis.'],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 1500,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    // Initialize Particles.js
    if (document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#00d2ff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.4, "random": true },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#00d2ff", "opacity": 0.2, "width": 1 },
                "move": { "enable": true, "speed": 1.5, "direction": "none", "random": true, "out_mode": "out" }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } },
                    "push": { "particles_nb": 3 }
                }
            },
            "retina_detect": true
        });
    }

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
