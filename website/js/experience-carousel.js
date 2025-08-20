/**
 * Experience Carousel Controller
 * Auto-scrolling carousel with hover pause and smooth animations
 */

class ExperienceCarousel {
               constructor() {
               this.carousel = null;
               this.isPaused = false;
               this.scrollSpeed = 90; // seconds for full cycle (increased for more images)
               this.init();
           }

    init() {
        this.carousel = document.getElementById('experience-carousel');
        if (!this.carousel) {
            console.warn('Experience carousel not found');
            return;
        }

        this.setupEventListeners();
        this.optimizePerformance();
        this.addAccessibilityFeatures();
        
        console.log('🎠 Experience Carousel: Initialized with auto-scroll and hover pause');
    }

    setupEventListeners() {
        // Pause on hover
        this.carousel.addEventListener('mouseenter', () => {
            this.pauseAnimation();
        });

        this.carousel.addEventListener('mouseleave', () => {
            this.resumeAnimation();
        });

        // Touch events for mobile
        this.carousel.addEventListener('touchstart', () => {
            this.pauseAnimation();
        });

        this.carousel.addEventListener('touchend', () => {
            setTimeout(() => {
                this.resumeAnimation();
            }, 1000); // Resume after 1 second of no touch
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                this.toggleAnimation();
            }
        });

        // Intersection Observer for performance
        this.setupIntersectionObserver();
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.resumeAnimation();
                    } else {
                        this.pauseAnimation();
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(this.carousel);
    }

    pauseAnimation() {
        if (!this.isPaused) {
            this.carousel.style.animationPlayState = 'paused';
            this.isPaused = true;
            this.addPauseIndicator();
        }
    }

    resumeAnimation() {
        if (this.isPaused) {
            this.carousel.style.animationPlayState = 'running';
            this.isPaused = false;
            this.removePauseIndicator();
        }
    }

    toggleAnimation() {
        if (this.isPaused) {
            this.resumeAnimation();
        } else {
            this.pauseAnimation();
        }
    }

    addPauseIndicator() {
        // Add visual indicator that carousel is paused
        this.carousel.classList.add('carousel-paused');
    }

    removePauseIndicator() {
        this.carousel.classList.remove('carousel-paused');
    }

    optimizePerformance() {
        // Use transform3d for hardware acceleration
        this.carousel.style.transform = 'translate3d(0, 0, 0)';
        
        // Optimize images loading
        const images = this.carousel.querySelectorAll('img');
        images.forEach(img => {
            img.loading = 'lazy';
            img.decoding = 'async';
        });
    }

    addAccessibilityFeatures() {
        // Add ARIA labels
        this.carousel.setAttribute('role', 'region');
        this.carousel.setAttribute('aria-label', 'Experience showcase carousel');
        this.carousel.setAttribute('aria-live', 'polite');

        // Add pause/resume instructions
        const instructions = document.createElement('div');
        instructions.className = 'carousel-instructions';
        instructions.innerHTML = `
            <span class="sr-only">
                Auto-scrolling experience showcase. 
                Hover to pause, press spacebar to toggle animation.
            </span>
        `;
        instructions.style.position = 'absolute';
        instructions.style.top = '-9999px';
        instructions.style.left = '-9999px';
        
        this.carousel.appendChild(instructions);
    }

    // Public methods for external control
    setSpeed(seconds) {
        this.scrollSpeed = seconds;
        this.carousel.style.animationDuration = `${seconds}s`;
    }

    getStatus() {
        return {
            isPaused: this.isPaused,
            scrollSpeed: this.scrollSpeed,
            isVisible: this.carousel.offsetParent !== null
        };
    }
}

// Initialize carousel when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.experienceCarousel = new ExperienceCarousel();
    });
} else {
    window.experienceCarousel = new ExperienceCarousel();
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ExperienceCarousel;
}
