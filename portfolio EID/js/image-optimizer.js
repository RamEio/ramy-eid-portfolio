/**
 * Image Optimizer
 * Handles lazy loading, responsive images, and performance optimization
 * Reduces initial page load time and improves Core Web Vitals
 */

class ImageOptimizer {
    constructor(config = {}) {
        this.config = {
            // Lazy loading
            enableLazyLoading: true,
            lazyLoadThreshold: 0.1, // Intersection Observer threshold
            
            // Responsive images
            enableResponsiveImages: true,
            breakpoints: {
                mobile: 480,
                tablet: 768,
                desktop: 1200
            },
            
            // Image quality
            defaultQuality: 85,
            webpQuality: 80,
            
            // Performance
            enablePreloading: true,
            preloadCriticalImages: true,
            
            ...config
        };
        
        this.observer = null;
        this.optimizedImages = new Set();
        
        this.init();
    }
    
    init() {
        console.log('🖼️ ImageOptimizer: Initializing...');
        
        if (this.config.enableLazyLoading) {
            this.setupLazyLoading();
        }
        
        if (this.config.enableResponsiveImages) {
            this.setupResponsiveImages();
        }
        
        if (this.config.enablePreloading) {
            this.preloadCriticalImages();
        }
        
        console.log('🖼️ ImageOptimizer: Initialization complete');
    }
    
    setupLazyLoading() {
        // Use Intersection Observer for modern browsers
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            this.loadImage(entry.target);
                            this.observer.unobserve(entry.target);
                        }
                    });
                },
                {
                    rootMargin: `${this.config.lazyLoadThreshold * 100}%`,
                    threshold: this.config.lazyLoadThreshold
                }
            );
            
            // Observe all images with data-src
            const lazyImages = document.querySelectorAll('img[data-src]');
            lazyImages.forEach(img => {
                this.observer.observe(img);
            });
            
            console.log(`🖼️ ImageOptimizer: Lazy loading setup for ${lazyImages.length} images`);
        } else {
            // Fallback for older browsers
            this.setupFallbackLazyLoading();
        }
    }
    
    setupFallbackLazyLoading() {
        console.log('🖼️ ImageOptimizer: Using fallback lazy loading');
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        const loadVisibleImages = () => {
            lazyImages.forEach(img => {
                if (this.isElementInViewport(img)) {
                    this.loadImage(img);
                }
            });
        };
        
        // Load images on scroll and resize
        window.addEventListener('scroll', this.throttle(loadVisibleImages, 100));
        window.addEventListener('resize', this.throttle(loadVisibleImages, 100));
        
        // Initial load
        loadVisibleImages();
    }
    
    isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    loadImage(img) {
        if (this.optimizedImages.has(img)) return;
        
        const src = img.getAttribute('data-src');
        if (!src) return;
        
        // Create new image to preload
        const newImg = new Image();
        
        newImg.onload = () => {
            img.src = src;
            img.classList.add('loaded');
            img.removeAttribute('data-src');
            this.optimizedImages.add(img);
            
            // Add fade-in animation
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease-in-out';
            
            setTimeout(() => {
                img.style.opacity = '1';
            }, 10);
        };
        
        newImg.onerror = () => {
            console.warn(`🖼️ ImageOptimizer: Failed to load image: ${src}`);
            img.classList.add('error');
        };
        
        newImg.src = src;
    }
    
    setupResponsiveImages() {
        const images = document.querySelectorAll('img[data-srcset]');
        
        images.forEach(img => {
            this.setupResponsiveImage(img);
        });
        
        console.log(`🖼️ ImageOptimizer: Responsive images setup for ${images.length} images`);
    }
    
    setupResponsiveImage(img) {
        const srcset = img.getAttribute('data-srcset');
        if (!srcset) return;
        
        // Parse srcset
        const sources = srcset.split(',').map(src => {
            const [url, width] = src.trim().split(' ');
            return { url, width: parseInt(width) };
        });
        
        // Find best image for current viewport
        const currentWidth = window.innerWidth;
        let bestSource = sources[0];
        
        for (const source of sources) {
            if (source.width <= currentWidth) {
                bestSource = source;
            }
        }
        
        // Set src if not already set
        if (!img.src) {
            img.src = bestSource.url;
        }
        
        // Update on resize
        window.addEventListener('resize', this.throttle(() => {
            this.updateResponsiveImage(img, sources);
        }, 250));
    }
    
    updateResponsiveImage(img, sources) {
        const currentWidth = window.innerWidth;
        let bestSource = sources[0];
        
        for (const source of sources) {
            if (source.width <= currentWidth) {
                bestSource = source;
            }
        }
        
        if (img.src !== bestSource.url) {
            img.src = bestSource.url;
        }
    }
    
    preloadCriticalImages() {
        if (!this.config.preloadCriticalImages) return;
        
        const criticalImages = [
            'assets/LOGO EID.png',
            'assets/photo profil.png',
            'assets/experiences_images/discovery phase.jpg'
        ];
        
        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
        
        console.log(`🖼️ ImageOptimizer: Preloaded ${criticalImages.length} critical images`);
    }
    
    // Utility methods
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // Public API
    optimizeImage(img) {
        if (this.optimizedImages.has(img)) return;
        
        // Add loading attribute
        img.loading = 'lazy';
        
        // Add decoding attribute
        img.decoding = 'async';
        
        // Add error handling
        img.onerror = () => {
            console.warn(`🖼️ ImageOptimizer: Image failed to load: ${img.src}`);
            img.classList.add('error');
        };
        
        this.optimizedImages.add(img);
    }
    
    optimizeAllImages() {
        const images = document.querySelectorAll('img:not([data-optimized])');
        images.forEach(img => {
            this.optimizeImage(img);
            img.setAttribute('data-optimized', 'true');
        });
        
        console.log(`🖼️ ImageOptimizer: Optimized ${images.length} images`);
    }
}

// Auto-initialization
document.addEventListener('DOMContentLoaded', function() {
    window.imageOptimizer = new ImageOptimizer();
    
    // Optimize all existing images
    setTimeout(() => {
        window.imageOptimizer.optimizeAllImages();
    }, 100);
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ImageOptimizer;
}
