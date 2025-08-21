/**
 * Experience Carousel Controller
 * Auto-scrolling carousel with hover pause and smooth animations
 */

class ExperienceCarousel {
                    constructor() {
         this.carouselRows = [];
         this.isPaused = false;
         this.scrollSpeed = 60; // seconds for full cycle (FASTER FOR VISIBLE INFINITE LOOP)
         this.init();
     }

    init() {
        // Initialize all carousel rows
        this.carouselRows = [
            document.getElementById('carousel-row-1'),
            document.getElementById('carousel-row-2'),
            document.getElementById('carousel-row-3')
        ];
        
        if (this.carouselRows.every(row => !row)) {
            console.warn('Experience carousel rows not found');
            return;
        }

        this.setupEventListeners();
        this.optimizePerformance();
        this.addAccessibilityFeatures();
        
        console.log('🎠 Experience Carousel: Initialized with 3-row auto-scroll and hover pause');
    }

    setupEventListeners() {
        // Setup event listeners for all rows
        this.carouselRows.forEach(row => {
            if (row) {
                // Pause on hover
                row.addEventListener('mouseenter', () => {
                    this.pauseAnimation();
                });

                row.addEventListener('mouseleave', () => {
                    this.resumeAnimation();
                });

                // Touch events for mobile
                row.addEventListener('touchstart', () => {
                    this.pauseAnimation();
                });

                row.addEventListener('touchend', () => {
                    setTimeout(() => {
                        this.resumeAnimation();
                    }, 1000); // Resume after 1 second of no touch
                });
            }
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

        // Observe all carousel rows
        this.carouselRows.forEach(row => {
            if (row) {
                observer.observe(row);
            }
        });
    }

    pauseAnimation() {
        if (!this.isPaused) {
            this.carouselRows.forEach(row => {
                if (row) {
                    row.style.animationPlayState = 'paused';
                }
            });
            this.isPaused = true;
            this.addPauseIndicator();
        }
    }

    resumeAnimation() {
        if (this.isPaused) {
            this.carouselRows.forEach(row => {
                if (row) {
                    row.style.animationPlayState = 'running';
                }
            });
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
        this.carouselRows.forEach(row => {
            if (row) {
                row.classList.add('carousel-paused');
            }
        });
    }

    removePauseIndicator() {
        this.carouselRows.forEach(row => {
            if (row) {
                row.classList.remove('carousel-paused');
            }
        });
    }

    optimizePerformance() {
        // Optimize all carousel rows
        this.carouselRows.forEach(row => {
            if (row) {
                // Use transform3d for hardware acceleration
                row.style.transform = 'translate3d(0, 0, 0)';
                
                // Optimize images loading
                const images = row.querySelectorAll('img');
                images.forEach(img => {
                    img.loading = 'lazy';
                    img.decoding = 'async';
                });
            }
        });
    }

    addAccessibilityFeatures() {
        // Add ARIA labels to all rows
        this.carouselRows.forEach((row, index) => {
            if (row) {
                row.setAttribute('role', 'region');
                row.setAttribute('aria-label', `Experience showcase carousel row ${index + 1}`);
                row.setAttribute('aria-live', 'polite');
            }
        });

        // Add pause/resume instructions to first row
        if (this.carouselRows[0]) {
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
            
            this.carouselRows[0].appendChild(instructions);
        }
    }

    // Public methods for external control
    setSpeed(seconds) {
        this.scrollSpeed = seconds;
        this.carouselRows.forEach(row => {
            if (row) {
                row.style.animationDuration = `${seconds}s`;
            }
        });
    }

    getStatus() {
        return {
            isPaused: this.isPaused,
            scrollSpeed: this.scrollSpeed,
            isVisible: this.carouselRows.some(row => row && row.offsetParent !== null)
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
