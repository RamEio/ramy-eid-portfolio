/**
 * Mobile Optimization JavaScript
 * Enhanced mobile interactions, touch gestures, and performance optimizations
 * Phase 1: Mobile-First CSS Optimization
 */

class MobileOptimization {
    constructor() {
        this.isMobile = window.innerWidth <= 768;
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.touchEndX = 0;
        this.touchEndY = 0;
        this.minSwipeDistance = 50;
        this.init();
    }

    init() {
        this.setupMobileDetection();
        this.setupTouchInteractions();
        this.setupMobileNavigation();
        this.setupMobileCarousel();
        this.setupPerformanceOptimizations();
        this.setupAccessibilityEnhancements();
        this.setupMobileAnalytics();
    }

    /**
     * Mobile Detection and Responsive Behavior
     */
    setupMobileDetection() {
        // Add mobile class to body for CSS targeting
        if (this.isMobile) {
            document.body.classList.add('mobile-device');
        }

        // Handle orientation changes
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                this.handleOrientationChange();
            }, 100);
        });

        // Handle resize events
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 250);
        });
    }

    handleOrientationChange() {
        // Recalculate carousel dimensions
        this.updateCarouselDimensions();
        
        // Update mobile detection
        this.isMobile = window.innerWidth <= 768;
        
        // Trigger resize event for CSS updates
        window.dispatchEvent(new Event('resize'));
    }

    handleResize() {
        const wasMobile = this.isMobile;
        this.isMobile = window.innerWidth <= 768;
        
        // Update body class if mobile state changed
        if (wasMobile !== this.isMobile) {
            document.body.classList.toggle('mobile-device', this.isMobile);
        }
        
        // Update carousel dimensions
        this.updateCarouselDimensions();
    }

    /**
     * Touch Interactions and Gestures
     */
    setupTouchInteractions() {
        // Enhanced touch feedback for buttons
        this.setupTouchFeedback();
        
        // Swipe gestures for navigation
        this.setupSwipeGestures();
        
        // Touch-optimized scrolling
        this.setupTouchScrolling();
        
        // Prevent zoom on double tap
        this.preventDoubleTapZoom();
    }

    setupTouchFeedback() {
        const touchElements = document.querySelectorAll('.btn, .nav-toggle, .nav-menu a, .project-card, .experience-item');
        
        touchElements.forEach(element => {
            element.addEventListener('touchstart', (e) => {
                element.classList.add('touch-active');
            }, { passive: true });
            
            element.addEventListener('touchend', (e) => {
                element.classList.remove('touch-active');
            }, { passive: true });
            
            element.addEventListener('touchcancel', (e) => {
                element.classList.remove('touch-active');
            }, { passive: true });
        });
    }

    setupSwipeGestures() {
        document.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
            this.touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        document.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.touchEndY = e.changedTouches[0].screenY;
            this.handleSwipe();
        }, { passive: true });
    }

    handleSwipe() {
        const deltaX = this.touchEndX - this.touchStartX;
        const deltaY = this.touchEndY - this.touchStartY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance > this.minSwipeDistance) {
            const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY);
            
            if (isHorizontalSwipe) {
                if (deltaX > 0) {
                    this.handleSwipeRight();
                } else {
                    this.handleSwipeLeft();
                }
            } else {
                if (deltaY > 0) {
                    this.handleSwipeDown();
                } else {
                    this.handleSwipeUp();
                }
            }
        }
    }

    handleSwipeLeft() {
        // Navigate to next page or section
        console.log('Swipe left detected');
    }

    handleSwipeRight() {
        // Navigate to previous page or section
        console.log('Swipe right detected');
    }

    handleSwipeUp() {
        // Scroll up or show navigation
        console.log('Swipe up detected');
    }

    handleSwipeDown() {
        // Scroll down or hide navigation
        console.log('Swipe down detected');
    }

    setupTouchScrolling() {
        // Optimize scroll performance on mobile
        if (this.isMobile) {
            document.body.style.webkitOverflowScrolling = 'touch';
        }
    }

    preventDoubleTapZoom() {
        let lastTouchEnd = 0;
        document.addEventListener('touchend', (e) => {
            const now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                e.preventDefault();
            }
            lastTouchEnd = now;
        }, false);
    }

    /**
     * Mobile Navigation Enhancements
     */
    setupMobileNavigation() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navToggle && navMenu) {
            // Enhanced mobile menu toggle
            navToggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleMobileMenu();
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                    this.closeMobileMenu();
                }
            });

            // Close menu on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.closeMobileMenu();
                }
            });

            // Close menu when clicking on menu items
            const menuItems = navMenu.querySelectorAll('a');
            menuItems.forEach(item => {
                item.addEventListener('click', () => {
                    this.closeMobileMenu();
                });
            });
        }
    }

    toggleMobileMenu() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navToggle && navMenu) {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('nav-menu--open');
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = isExpanded ? '' : 'hidden';
        }
    }

    closeMobileMenu() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('nav-menu--open');
            document.body.style.overflow = '';
        }
    }

    /**
     * Mobile Carousel Enhancements
     */
    setupMobileCarousel() {
        const carouselRows = document.querySelectorAll('.carousel-row');
        
        carouselRows.forEach(row => {
            // Disable carousel auto-scroll on mobile
            if (this.isMobile) {
                row.style.animation = 'none';
                row.style.animationPlayState = 'paused';
            }
            
            // Add touch gesture support for carousel
            this.addCarouselTouchSupport(row);
            
            // Optimize carousel performance on mobile
            if (this.isMobile) {
                this.optimizeCarouselForMobile(row);
            }
        });
    }

    addCarouselTouchSupport(carouselRow) {
        let startX = 0;
        let currentX = 0;
        let isDragging = false;

        carouselRow.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
            carouselRow.style.animationPlayState = 'paused';
        }, { passive: true });

        carouselRow.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            
            currentX = e.touches[0].clientX;
            const diff = currentX - startX;
            
            // Add visual feedback for touch drag
            carouselRow.style.transform = `translateX(${diff}px)`;
        }, { passive: true });

        carouselRow.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            
            isDragging = false;
            carouselRow.style.transform = '';
            carouselRow.style.animationPlayState = 'running';
            
            // Handle swipe gesture
            const diff = currentX - startX;
            if (Math.abs(diff) > this.minSwipeDistance) {
                if (diff > 0) {
                    // Swipe right - pause carousel
                    carouselRow.style.animationPlayState = 'paused';
                } else {
                    // Swipe left - resume carousel
                    carouselRow.style.animationPlayState = 'running';
                }
            }
        }, { passive: true });
    }

    optimizeCarouselForMobile(carouselRow) {
        // Reduce animation duration on mobile for better performance
        carouselRow.style.animationDuration = '45s';
        
        // Add intersection observer for performance
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                } else {
                    entry.target.style.animationPlayState = 'paused';
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(carouselRow);
    }

    updateCarouselDimensions() {
        const carouselRows = document.querySelectorAll('.carousel-row');
        
        carouselRows.forEach(row => {
            // Update carousel height based on screen size
            if (window.innerWidth <= 480) {
                row.style.height = '140px';
            } else if (window.innerWidth <= 768) {
                row.style.height = '160px';
            } else {
                row.style.height = '200px';
            }
        });
    }

    /**
     * Performance Optimizations
     */
    setupPerformanceOptimizations() {
        // Lazy load images
        this.setupLazyLoading();
        
        // Optimize scroll performance
        this.optimizeScrollPerformance();
        
        // Reduce repaints and reflows
        this.optimizeRendering();
        
        // Setup hide on scroll effect
        this.setupHideOnScroll();
    }

    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                });
            });

            const lazyImages = document.querySelectorAll('img[data-src]');
            lazyImages.forEach(img => imageObserver.observe(img));
        }
    }

    optimizeScrollPerformance() {
        // Use passive event listeners for scroll events
        document.addEventListener('scroll', () => {
            // Handle scroll-based animations
            this.handleScrollAnimations();
        }, { passive: true });
    }

    handleScrollAnimations() {
        // Implement scroll-triggered animations for mobile
        const scrollY = window.scrollY;
        const header = document.querySelector('.header');
        
        if (header) {
            if (scrollY > 100) {
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }
        }
    }

    optimizeRendering() {
        // Use transform instead of top/left for animations
        const animatedElements = document.querySelectorAll('.btn, .project-card, .experience-item');
        
        animatedElements.forEach(element => {
            element.style.willChange = 'transform';
        });
    }

    setupHideOnScroll() {
        // Restore hide on scroll functionality
        let lastScrollTop = 0;
        const navbar = document.querySelector('nav');
        const scrollThreshold = 10;

        if (navbar) {
            window.addEventListener('scroll', () => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                if (Math.abs(scrollTop - lastScrollTop) > scrollThreshold) {
                    if (scrollTop > lastScrollTop && scrollTop > 100) {
                        // Scrolling down - hide navbar
                        navbar.style.transform = 'translateY(-100%)';
                    } else {
                        // Scrolling up - show navbar
                        navbar.style.transform = 'translateY(0)';
                    }
                    lastScrollTop = scrollTop;
                }
            }, { passive: true });
        }
    }

    /**
     * Accessibility Enhancements
     */
    setupAccessibilityEnhancements() {
        // Enhanced focus management
        this.setupFocusManagement();
        
        // Screen reader announcements
        this.setupScreenReaderSupport();
        
        // Keyboard navigation improvements
        this.setupKeyboardNavigation();
    }

    setupFocusManagement() {
        // Trap focus in mobile menu when open
        const navMenu = document.querySelector('.nav-menu');
        const navToggle = document.querySelector('.nav-toggle');
        
        if (navMenu && navToggle) {
            const focusableElements = navMenu.querySelectorAll('a, button');
            const firstFocusable = focusableElements[0];
            const lastFocusable = focusableElements[focusableElements.length - 1];
            
            navMenu.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstFocusable) {
                            e.preventDefault();
                            lastFocusable.focus();
                        }
                    } else {
                        if (document.activeElement === lastFocusable) {
                            e.preventDefault();
                            firstFocusable.focus();
                        }
                    }
                }
            });
        }
    }

    setupScreenReaderSupport() {
        // Announce dynamic content changes
        const announce = (message) => {
            const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'polite');
            announcement.setAttribute('aria-atomic', 'true');
            announcement.className = 'sr-only';
            announcement.textContent = message;
            document.body.appendChild(announcement);
            
            setTimeout(() => {
                document.body.removeChild(announcement);
            }, 1000);
        };
        
        // Make announce function globally available
        window.announceToScreenReader = announce;
    }

    setupKeyboardNavigation() {
        // Enhanced keyboard navigation for mobile
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                const activeElement = document.activeElement;
                if (activeElement && activeElement.classList.contains('btn')) {
                    e.preventDefault();
                    activeElement.click();
                }
            }
        });
    }

    /**
     * Mobile Analytics and Performance Monitoring
     */
    setupMobileAnalytics() {
        // Track mobile-specific interactions
        this.trackMobileInteractions();
        
        // Monitor performance metrics
        this.monitorPerformance();
        
        // Track accessibility usage
        this.trackAccessibilityUsage();
    }

    trackMobileInteractions() {
        // Track touch interactions
        document.addEventListener('touchstart', () => {
            this.logInteraction('touch_start');
        }, { passive: true });
        
        // Track swipe gestures
        document.addEventListener('touchend', () => {
            if (Math.abs(this.touchEndX - this.touchStartX) > this.minSwipeDistance) {
                this.logInteraction('swipe_gesture');
            }
        }, { passive: true });
    }

    monitorPerformance() {
        // Monitor Core Web Vitals
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                list.getEntries().forEach((entry) => {
                    if (entry.entryType === 'largest-contentful-paint') {
                        this.logPerformance('LCP', entry.startTime);
                    }
                    if (entry.entryType === 'first-input') {
                        this.logPerformance('FID', entry.processingStart - entry.startTime);
                    }
                });
            });
            
            observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
        }
    }

    trackAccessibilityUsage() {
        // Track screen reader usage
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mediaQuery.matches) {
            this.logAccessibility('reduced_motion_enabled');
        }
        
        // Track high contrast mode
        const contrastQuery = window.matchMedia('(prefers-contrast: high)');
        if (contrastQuery.matches) {
            this.logAccessibility('high_contrast_enabled');
        }
    }

    logInteraction(type) {
        console.log(`Mobile Interaction: ${type}`);
        // Send to analytics service
    }

    logPerformance(metric, value) {
        console.log(`Performance ${metric}: ${value}ms`);
        // Send to analytics service
    }

    logAccessibility(feature) {
        console.log(`Accessibility: ${feature}`);
        // Send to analytics service
    }
}

// Initialize mobile optimization when DOM is loaded with error handling
document.addEventListener('DOMContentLoaded', () => {
    try {
        if (window.innerWidth <= 768) {
            new MobileOptimization();
        }
    } catch (error) {
        console.warn('Mobile optimization failed to initialize:', error);
        // Continue with normal site functionality
    }
});

// Export for use in other modules
window.MobileOptimization = MobileOptimization;
