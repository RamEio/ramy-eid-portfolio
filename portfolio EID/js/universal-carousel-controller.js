/**
 * Universal Carousel Controller
 * Handles both homepage and about page carousels with configurable speeds
 * Supports mobile and desktop optimization
 */

// Universal Carousel Controller - OPTIMIZED VERSION
class UniversalCarouselController {
    constructor(config = {}) {
        this.config = {
            rowClass: '.carousel-row',
            itemClass: '.carousel-item',
            scrollSpeed: 60,
            mobileScrollSpeed: 300,
            isMobile: false,
            ...config
        };
        
        this.carouselRows = [];
        this.isPaused = false;
        this.isInitialized = false;
        
        // Prevent multiple initializations
        if (this.config.rowClass === '.mobile-carousel-row' && window.mobileExperienceCarouselController) {
            console.log('🎠 UniversalCarouselController: Mobile carousel already initialized, skipping');
            return;
        }
        
        this.init();
    }
    
    init() {
        console.log('🎠 UniversalCarouselController: Initializing...');
        
        // Find carousel rows
        this.carouselRows = document.querySelectorAll(this.config.rowClass);
        
        if (this.carouselRows.length === 0) {
            console.log('🎠 UniversalCarouselController: No carousel rows found');
            return;
        }
        
        console.log(`🎠 UniversalCarouselController: Found ${this.carouselRows.length} carousel rows`);
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Force animation application
        this.forceAnimation();
        
        this.isInitialized = true;
        console.log('🎠 UniversalCarouselController: Initialization complete');
    }
    
    forceAnimation() {
        const speed = this.config.isMobile ? this.config.mobileScrollSpeed : this.config.scrollSpeed;
        
        this.carouselRows.forEach((row, index) => {
            this.forceAnimationForRow(row, index);
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
        this.carouselRows.forEach((row, index) => {
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
                }, 1000);
            });
            
            console.log(`🎠 Carousel Row ${index + 1}: Event listeners attached`);
        });
    }
    
    pauseAnimation() {
        if (this.isPaused) return;
        
        this.carouselRows.forEach(row => {
            row.style.animationPlayState = 'paused';
        });
        
        this.isPaused = true;
        console.log('🎠 UniversalCarouselController: Animation paused');
    }
    
    resumeAnimation() {
        if (!this.isPaused) return;
        
        this.carouselRows.forEach(row => {
            row.style.animationPlayState = 'running';
        });
        
        this.isPaused = false;
        console.log('🎠 UniversalCarouselController: Animation resumed');
    }
    
    destroy() {
        this.carouselRows.forEach(row => {
            row.style.animation = 'none';
        });
        
        this.isInitialized = false;
        console.log('🎠 UniversalCarouselController: Destroyed');
    }
}

// Auto-initialization for existing carousels - OPTIMIZED
document.addEventListener('DOMContentLoaded', function() {
    // Initialize desktop carousel controller
    if (document.querySelector('.carousel-row') && !window.desktopCarouselController) {
        window.desktopCarouselController = new UniversalCarouselController({
            rowClass: '.carousel-row',
            itemClass: '.experience-item',
            scrollSpeed: 60,
            mobileScrollSpeed: 300,
            isMobile: false
        });
    }
    
    // Mobile carousel controllers are initialized by their respective scripts
    // to prevent conflicts
});
