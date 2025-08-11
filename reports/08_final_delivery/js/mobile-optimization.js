/**
 * Mobile Optimization Script
 * Handles mobile-specific interactions, navigation, and optimizations
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Mobile optimization script loaded');
    
    // Mobile navigation functionality
    initMobileNavigation();
    
    // Touch-friendly interactions
    initTouchInteractions();
    
    // Mobile image optimizations
    initMobileImageOptimizations();
    
    // Mobile performance optimizations
    initMobilePerformance();
});

/**
 * Initialize mobile navigation
 */
function initMobileNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!navToggle || !navMenu) {
        console.warn('Mobile navigation elements not found');
        return;
    }
    
    // Toggle mobile menu
    navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        
        // Update ARIA attributes
        navToggle.setAttribute('aria-expanded', !isExpanded);
        
        // Toggle menu visibility
        if (isExpanded) {
            navMenu.classList.remove('nav-menu--open');
            document.body.style.overflow = '';
        } else {
            navMenu.classList.add('nav-menu--open');
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('nav-menu--open');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('nav-menu--open');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });
    
    // Handle escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('nav-menu--open')) {
            navMenu.classList.remove('nav-menu--open');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
    
    console.log('📱 Mobile navigation initialized');
}

/**
 * Initialize touch-friendly interactions
 */
function initTouchInteractions() {
    // Add touch feedback to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
    
    // Add touch feedback to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        card.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
    
    // Disable hover effects on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        document.body.classList.add('touch-device');
        
        // Disable hover effects for touch devices
        const style = document.createElement('style');
        style.textContent = `
            .touch-device .project-card:hover,
            .touch-device .btn:hover,
            .touch-device .company-logo:hover {
                transform: none !important;
            }
            
            .touch-device .image-grid-overlay {
                display: none !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    console.log('👆 Touch interactions initialized');
}

/**
 * Initialize mobile image optimizations
 */
function initMobileImageOptimizations() {
    // Lazy load images for better mobile performance
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Optimize company logos for mobile
    const companyLogos = document.querySelectorAll('.company-logo');
    companyLogos.forEach(logo => {
        // Ensure proper fallback for broken images
        logo.addEventListener('error', function() {
            this.style.display = 'none';
            const fallback = this.nextElementSibling;
            if (fallback && fallback.classList.contains('fallback')) {
                fallback.style.display = 'flex';
            }
        });
    });
    
    console.log('🖼️ Mobile image optimizations initialized');
}

/**
 * Initialize mobile performance optimizations
 */
function initMobilePerformance() {
    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
    }
    
    // Optimize for mobile networks
    if (navigator.connection) {
        const connection = navigator.connection;
        
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
            // Apply low-bandwidth optimizations
            document.body.classList.add('low-bandwidth');
            
            // Disable non-essential animations
            const style = document.createElement('style');
            style.textContent = `
                .low-bandwidth * {
                    animation-duration: 0.01ms !important;
                    transition-duration: 0.01ms !important;
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Optimize for mobile viewport
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
        // Ensure proper viewport settings for mobile
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
    }
    
    console.log('⚡ Mobile performance optimizations initialized');
}

/**
 * Handle mobile-specific scroll optimizations
 */
function initMobileScroll() {
    let ticking = false;
    
    function updateScroll() {
        // Add scroll-based optimizations here
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScroll);
            ticking = true;
        }
    }
    
    // Optimize scroll performance on mobile
    window.addEventListener('scroll', requestTick, { passive: true });
}

/**
 * Mobile-specific utility functions
 */
const MobileUtils = {
    // Check if device is mobile
    isMobile: () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
               window.innerWidth <= 768;
    },
    
    // Check if device supports touch
    isTouchDevice: () => {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    },
    
    // Get device pixel ratio
    getPixelRatio: () => {
        return window.devicePixelRatio || 1;
    },
    
    // Check network connection
    getNetworkInfo: () => {
        if (navigator.connection) {
            return {
                effectiveType: navigator.connection.effectiveType,
                downlink: navigator.connection.downlink,
                rtt: navigator.connection.rtt
            };
        }
        return null;
    }
};

// Initialize mobile scroll optimizations
initMobileScroll();

console.log('📱 Mobile optimization complete');
