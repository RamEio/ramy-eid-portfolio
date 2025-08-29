/**
 * Enhanced Lazy Loading for Mobile Performance Optimization
 * Implements intersection observer for efficient image loading
 * Includes preloading for critical above-the-fold images
 */

class EnhancedLazyLoading {
    constructor() {
        this.observer = null;
        this.preloadQueue = [];
        this.criticalImages = [
            'assets/optimized/profilePictureRamE-optimized.jpg',
            'assets/optimized/LOGO EID-optimized.png'
        ];
        this.init();
    }

    init() {
        console.log('🚀 Enhanced Lazy Loading: Initializing...');
        this.setupIntersectionObserver();
        this.preloadCriticalImages();
        this.enhanceExistingLazyLoading();
        this.addPerformanceMonitoring();
    }

    setupIntersectionObserver() {
        // Create intersection observer for lazy loading
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadImage(entry.target);
                    this.observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '50px 0px', // Start loading 50px before image enters viewport
            threshold: 0.1
        });

        // Observe all images with lazy loading
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => {
            this.observer.observe(img);
        });
    }

    preloadCriticalImages() {
        console.log('📦 Preloading critical images...');
        
        this.criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
            
            // Also preload the actual image
            const img = new Image();
            img.src = src;
            this.preloadQueue.push(img);
        });
    }

    loadImage(imgElement) {
        if (imgElement.dataset.src) {
            imgElement.src = imgElement.dataset.src;
            imgElement.removeAttribute('data-src');
            
            // Add loading animation
            imgElement.style.opacity = '0';
            imgElement.style.transition = 'opacity 0.3s ease-in-out';
            
            imgElement.onload = () => {
                imgElement.style.opacity = '1';
                this.logImageLoad(imgElement.src);
            };
        }
    }

    enhanceExistingLazyLoading() {
        // Enhance existing lazy loading attributes
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            // Add loading placeholder
            if (!img.dataset.src) {
                img.dataset.src = img.src;
                img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+';
            }
            
            // Add error handling
            img.onerror = () => {
                console.warn(`Failed to load image: ${img.dataset.src || img.src}`);
                img.style.display = 'none';
            };
        });
    }

    addPerformanceMonitoring() {
        // Monitor image loading performance
        const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach(entry => {
                if (entry.entryType === 'resource' && entry.initiatorType === 'img') {
                    this.logImagePerformance(entry);
                }
            });
        });
        
        observer.observe({ entryTypes: ['resource'] });
    }

    logImageLoad(src) {
        console.log(`✅ Image loaded: ${src}`);
    }

    logImagePerformance(entry) {
        const loadTime = entry.responseEnd - entry.fetchStart;
        console.log(`📊 Image performance: ${entry.name} - ${loadTime.toFixed(2)}ms`);
        
        // Log slow loading images
        if (loadTime > 1000) {
            console.warn(`⚠️ Slow image load: ${entry.name} took ${loadTime.toFixed(2)}ms`);
        }
    }

    // Public method to manually trigger lazy loading for specific images
    loadImageNow(imgElement) {
        this.loadImage(imgElement);
    }

    // Public method to preload specific images
    preloadImage(src) {
        const img = new Image();
        img.src = src;
        this.preloadQueue.push(img);
    }
}

// Initialize enhanced lazy loading when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.enhancedLazyLoading = new EnhancedLazyLoading();
    });
} else {
    window.enhancedLazyLoading = new EnhancedLazyLoading();
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EnhancedLazyLoading;
}
