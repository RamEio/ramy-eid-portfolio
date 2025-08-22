/**
 * Universal Hide on Scroll Functionality
 * Works across all pages and platforms (mobile and web)
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize hide on scroll functionality
    initHideOnScroll();
});

function initHideOnScroll() {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    const scrollThreshold = 10;

    // Check if header element exists
    if (!header) {
        console.warn('Hide on scroll: Header element not found');
        return;
    }

    // Add scroll event listener with passive option for performance
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Only update if scroll difference exceeds threshold
        if (Math.abs(scrollTop - lastScrollTop) > scrollThreshold) {
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down - hide header
                header.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up - show header
                header.style.transform = 'translateY(0)';
            }
            lastScrollTop = scrollTop;
        }
    }, { passive: true });

    // Log successful initialization
    console.log('Hide on scroll functionality initialized');
}
