/**
 * Unified Carousel Controller
 * Consolidates all carousel functionality from multiple files
 * Handles desktop, mobile, experience, and mosaic carousels
 * Supports responsive design and performance optimization
 */

class UnifiedCarouselController {
    constructor(config = {}) {
        this.config = {
            // Carousel types
            type: 'universal', // 'universal', 'mobile-experience', 'mosaic'
            
            // Selectors
            rowClass: '.carousel-row',
            itemClass: '.carousel-item',
            mobileRowClass: '.mobile-carousel-row',
            mobileItemClass: '.mobile-carousel-item',
            
            // Animation speeds
            desktopSpeed: 60,
            mobileSpeed: 300,
            mosaicSpeed: 120,
            
            // Responsive breakpoints
            mobileBreakpoint: 768,
            
            // Configuration
            enableHoverPause: true,
            enableTouchPause: true,
            enableAutoPlay: true,
            
            ...config
        };
        
        this.carouselRows = [];
        this.isPaused = false;
        this.isInitialized = false;
        this.isMobile = window.innerWidth <= this.config.mobileBreakpoint;
        
        // Prevent multiple initializations
        this.preventMultipleInit();
        
        this.init();
    }
    
    preventMultipleInit() {
        const key = `unifiedCarousel_${this.config.type}`;
        if (window[key]) {
            console.log(`🎠 UnifiedCarouselController: ${this.config.type} already initialized, skipping`);
            return false;
        }
        window[key] = true;
        return true;
    }
    
    init() {
        console.log(`🎠 UnifiedCarouselController: Initializing ${this.config.type} carousel...`);
        
        // Find carousel rows based on type
        this.findCarouselRows();
        
        if (this.carouselRows.length === 0) {
            console.log(`🎠 UnifiedCarouselController: No carousel rows found for ${this.config.type}`);
            return;
        }
        
        console.log(`🎠 UnifiedCarouselController: Found ${this.carouselRows.length} carousel rows`);
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Apply animations
        this.applyAnimations();
        
        // Handle responsive changes
        this.handleResponsive();
        
        this.isInitialized = true;
        console.log(`🎠 UnifiedCarouselController: ${this.config.type} initialization complete`);
    }
    
    findCarouselRows() {
        const selectors = [];
        
        switch (this.config.type) {
            case 'universal':
                selectors.push(this.config.rowClass);
                break;
            case 'mobile-experience':
                selectors.push(this.config.mobileRowClass);
                break;
            case 'mosaic':
                selectors.push(this.config.rowClass, this.config.mobileRowClass);
                break;
        }
        
        this.carouselRows = [];
        selectors.forEach(selector => {
            const rows = document.querySelectorAll(selector);
            this.carouselRows.push(...Array.from(rows));
        });
    }
    
    applyAnimations() {
        const speed = this.getAnimationSpeed();
        
        this.carouselRows.forEach((row, index) => {
            this.applyAnimationToRow(row, index, speed);
        });
    }
    
    getAnimationSpeed() {
        if (this.isMobile) {
            switch (this.config.type) {
                case 'mobile-experience':
                    return this.config.mobileSpeed;
                case 'mosaic':
                    return this.config.mosaicSpeed;
                default:
                    return this.config.mobileSpeed;
            }
        } else {
            switch (this.config.type) {
                case 'mosaic':
                    return this.config.mosaicSpeed;
                default:
                    return this.config.desktopSpeed;
            }
        }
    }
    
    applyAnimationToRow(row, index, speed) {
        // Remove any existing animation
        row.style.animation = 'none';
        row.style.animationDuration = '0s';
        row.style.animationPlayState = 'paused';
        
        // Force reflow
        row.offsetHeight;
        
        // Apply new animation
        row.style.animation = `scrollCarousel ${speed}s linear infinite`;
        row.style.animationPlayState = this.config.enableAutoPlay ? 'running' : 'paused';
        
        console.log(`🎠 Carousel Row ${index + 1}: Animation applied (${speed}s)`);
    }
    
    setupEventListeners() {
        this.carouselRows.forEach((row, index) => {
            // Hover events
            if (this.config.enableHoverPause) {
                row.addEventListener('mouseenter', () => {
                    this.pauseAnimation();
                });
                
                row.addEventListener('mouseleave', () => {
                    this.resumeAnimation();
                });
            }
            
            // Touch events for mobile
            if (this.config.enableTouchPause) {
                row.addEventListener('touchstart', () => {
                    this.pauseAnimation();
                });
                
                row.addEventListener('touchend', () => {
                    setTimeout(() => {
                        this.resumeAnimation();
                    }, 1000);
                });
            }
        });
        
        // Responsive handling
        window.addEventListener('resize', () => {
            this.handleResponsive();
        });
    }
    
    handleResponsive() {
        const wasMobile = this.isMobile;
        this.isMobile = window.innerWidth <= this.config.mobileBreakpoint;
        
        if (wasMobile !== this.isMobile) {
            console.log(`🎠 UnifiedCarouselController: Device type changed to ${this.isMobile ? 'mobile' : 'desktop'}`);
            this.applyAnimations();
        }
    }
    
    pauseAnimation() {
        if (this.isPaused) return;
        
        this.carouselRows.forEach(row => {
            row.style.animationPlayState = 'paused';
        });
        
        this.isPaused = true;
        console.log('🎠 UnifiedCarouselController: Animation paused');
    }
    
    resumeAnimation() {
        if (!this.isPaused) return;
        
        this.carouselRows.forEach(row => {
            row.style.animationPlayState = 'running';
        });
        
        this.isPaused = false;
        console.log('🎠 UnifiedCarouselController: Animation resumed');
    }
    
    // Utility methods
    destroy() {
        this.carouselRows.forEach(row => {
            row.style.animation = 'none';
        });
        
        this.isInitialized = false;
        console.log(`🎠 UnifiedCarouselController: ${this.config.type} destroyed`);
    }
    
    refresh() {
        this.applyAnimations();
        console.log(`🎠 UnifiedCarouselController: ${this.config.type} refreshed`);
    }
}

// Auto-initialization for different carousel types
document.addEventListener('DOMContentLoaded', function() {
    const isMobile = window.innerWidth <= 768;
    
    // Initialize universal carousel (desktop)
    if (!isMobile) {
        new UnifiedCarouselController({
            type: 'universal',
            rowClass: '.carousel-row',
            itemClass: '.experience-item'
        });
    }
    
    // Initialize mobile experience carousel
    if (isMobile) {
        new UnifiedCarouselController({
            type: 'mobile-experience',
            rowClass: '.mobile-carousel-row',
            itemClass: '.mobile-carousel-item'
        });
    }
    
    // Initialize mosaic carousel if present
    const mosaicContainer = document.querySelector('.mosaic-container');
    if (mosaicContainer) {
        new UnifiedCarouselController({
            type: 'mosaic',
            rowClass: '.mosaic-row',
            itemClass: '.mosaic-item'
        });
    }
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UnifiedCarouselController;
}
