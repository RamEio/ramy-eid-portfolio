/**
 * Universal Carousel Controller
 * Handles both homepage and about page carousels with configurable speeds
 * Supports mobile and desktop optimization
 */

class UniversalCarouselController {
    constructor(config = {}) {
        this.config = {
            containerSelector: config.containerSelector || '.carousel-container',
            rowClass: config.rowClass || 'carousel-row',
            itemClass: config.itemClass || 'carousel-item',
            scrollSpeed: config.scrollSpeed || 60, // seconds for full cycle
            mobileScrollSpeed: config.mobileScrollSpeed || 300, // slower for mobile
            isMobile: window.innerWidth <= 768,
            ...config
        };
        
        this.carouselRows = [];
        this.isPaused = false;
        this.init();
    }

    init() {
        console.log(`🎠 Universal Carousel: Initializing with ${this.config.isMobile ? 'mobile' : 'desktop'} mode`);
        
        // Find carousel rows
        this.carouselRows = document.querySelectorAll(this.config.rowClass);
        
        if (this.carouselRows.length === 0) {
            console.warn(`Universal carousel rows not found with selector: ${this.config.rowClass}`);
            return;
        }

        // FORCE CSS ANIMATION IMMEDIATELY
        this.forceAnimation();
        
        this.setupEventListeners();
        this.optimizePerformance();
        this.addAccessibilityFeatures();
        
        const speed = this.config.isMobile ? this.config.mobileScrollSpeed : this.config.scrollSpeed;
        console.log(`🎠 Universal Carousel: Initialized with ${speed}s animation speed`);
        
        // Performance monitoring
        setTimeout(() => {
            this.carouselRows.forEach((row, index) => {
                if (row) {
                    const computedStyle = window.getComputedStyle(row);
                    const animation = computedStyle.animation;
                    const animationDuration = computedStyle.animationDuration;
                    const animationPlayState = computedStyle.animationPlayState;
                    console.log(`🎠 Carousel Row ${index + 1} animation:`, animation);
                    console.log(`🎠 Carousel Row ${index + 1} duration:`, animationDuration);
                    console.log(`🎠 Carousel Row ${index + 1} play state:`, animationPlayState);
                    
                    // Force animation if not working
                    if (animationDuration === '0s' || animationPlayState === 'paused') {
                        console.log(`🎠 Carousel Row ${index + 1}: Forcing animation restart`);
                        this.forceAnimationForRow(row, index);
                    }
                }
            });
        }, 1000);
    }
    
    forceAnimation() {
        const speed = this.config.isMobile ? this.config.mobileScrollSpeed : this.config.scrollSpeed;
        console.log(`🎠 Universal Carousel: Force applying ${speed}s animation to all rows`);
        
        this.carouselRows.forEach((row, index) => {
            if (row) {
                // Remove any existing animation
                row.style.animation = 'none';
                row.style.animationDuration = '0s';
                row.style.animationPlayState = 'paused';
                
                // Force reflow
                row.offsetHeight;
                
                // Apply new animation
                row.style.animation = `scrollCarousel ${speed}s linear infinite`;
                row.style.animationPlayState = 'running';
                
                console.log(`🎠 Carousel Row ${index + 1}: Animation forced to ${speed}s`);
            }
        });
    }
    
    forceAnimationForRow(row, index) {
        const speed = this.config.isMobile ? this.config.mobileScrollSpeed : this.config.scrollSpeed;
        
        // Remove any existing animation
        row.style.animation = 'none';
        row.style.animationDuration = '0s';
        row.style.animationPlayState = 'paused';
        
        // Force reflow
        row.offsetHeight;
        
        // Apply new animation
        row.style.animation = `scrollCarousel ${speed}s linear infinite`;
        row.style.animationPlayState = 'running';
        
        console.log(`🎠 Carousel Row ${index + 1}: Animation re-forced to ${speed}s`);
    }

    setupEventListeners() {
        this.carouselRows.forEach(row => {
            if (row) {
                // Pause on hover/touch
                row.addEventListener('mouseenter', () => this.pauseAnimation());
                row.addEventListener('mouseleave', () => this.resumeAnimation());
                row.addEventListener('touchstart', () => this.pauseAnimation(), { passive: true });
                row.addEventListener('touchend', () => {
                    setTimeout(() => this.resumeAnimation(), 1000);
                }, { passive: true });

                // Click to refresh (for about page mosaic)
                row.addEventListener('click', (e) => {
                    if (e.target.classList.contains(this.config.itemClass) || 
                        e.target.classList.contains(this.config.rowClass) ||
                        e.target.tagName === 'IMG') {
                        this.refreshCarousel();
                    }
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
        }
    }

    toggleAnimation() {
        if (this.isPaused) {
            this.resumeAnimation();
        } else {
            this.pauseAnimation();
        }
    }

    refreshCarousel() {
        // Add visual feedback
        this.carouselRows.forEach(row => {
            if (row) {
                row.classList.add('clicked');
                setTimeout(() => {
                    row.classList.remove('clicked');
                }, 150);
            }
        });
        
        // Trigger refresh event for about page mosaic
        const event = new CustomEvent('carouselRefresh', {
            detail: { source: 'universal-controller' }
        });
        document.dispatchEvent(event);
    }

    optimizePerformance() {
        this.carouselRows.forEach(row => {
            if (row) {
                // Performance optimizations
                row.style.willChange = 'transform';
                row.style.backfaceVisibility = 'hidden';
                row.style.transform = 'translateZ(0)';
                
                // Mobile-specific optimizations
                if (this.config.isMobile) {
                    row.style.contain = 'layout style paint';
                    row.style.isolation = 'isolate';
                }
            }
        });
        
        // Optimize images in carousel
        const images = document.querySelectorAll(`${this.config.rowClass} img`);
        images.forEach(img => {
            img.loading = 'lazy';
            img.decoding = 'async';
            img.style.willChange = 'transform';
        });
    }

    addAccessibilityFeatures() {
        this.carouselRows.forEach(row => {
            if (row) {
                row.setAttribute('role', 'region');
                row.setAttribute('aria-label', 'Auto-scrolling image carousel');
                row.setAttribute('tabindex', '0');
            }
        });
    }

    // Method to update speed dynamically
    updateSpeed(newSpeed) {
        this.config.scrollSpeed = newSpeed;
        this.carouselRows.forEach(row => {
            if (row) {
                const currentAnimation = getComputedStyle(row).animation;
                const newAnimation = currentAnimation.replace(/\d+s/, `${newSpeed}s`);
                row.style.animation = newAnimation;
            }
        });
        console.log(`🎠 Universal Carousel: Speed updated to ${newSpeed}s`);
    }
}

// Auto-initialize for existing carousels
document.addEventListener('DOMContentLoaded', function() {
    // Initialize for homepage carousel
    if (document.querySelector('.carousel-row')) {
        console.log('🎠 Universal Carousel: Initializing homepage carousel');
        new UniversalCarouselController({
            rowClass: '.carousel-row',
            itemClass: '.experience-item',
            scrollSpeed: 60,
            mobileScrollSpeed: 300
        });
    }
    
    // Initialize for about page mobile carousel
    if (document.querySelector('.mobile-carousel-row')) {
        console.log('🎠 Universal Carousel: Initializing about page mobile carousel');
        new UniversalCarouselController({
            rowClass: '.mobile-carousel-row',
            itemClass: '.mobile-carousel-item',
            scrollSpeed: 300,
            mobileScrollSpeed: 300
        });
    }
});
