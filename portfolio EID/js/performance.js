// Performance optimizations for image loading and hover effects
document.addEventListener('DOMContentLoaded', function() {
    
    // Preload critical images for better performance
    const criticalImages = [
        '/assets/IMG_3682.jpeg', // Main about image
        '/assets/LOGO EID.png',  // Logo
        '/assets/profilePictureRamE.JPG' // Hero image
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
    
    // Optimize image loading for grid images
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    // Observe grid images for lazy loading
    document.querySelectorAll('.grid-image[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
    
    // Debounce scroll events for better performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
            // Trigger parallax update
            const event = new Event('scroll');
            window.dispatchEvent(event);
        }, 16); // ~60fps
    }, { passive: true });
    
    // Optimize hover effects with requestAnimationFrame
    const hoverElements = document.querySelectorAll('.image-hover-container');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            requestAnimationFrame(() => {
                this.classList.add('hover-active');
            });
        });
        
        element.addEventListener('mouseleave', function() {
            requestAnimationFrame(() => {
                this.classList.remove('hover-active');
            });
        });
    });
    
    // Memory management for image effects
    window.addEventListener('beforeunload', function() {
        // Clean up observers and event listeners
        if (imageObserver) {
            imageObserver.disconnect();
        }
        
        // Clear timeouts
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
    });
});
