// About Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Photography Mosaic Gallery Interactions
    initializePhotographyMosaic();
    
    // YouTube Integration
    initializeYouTubeIntegration();
    
    // Service Cards Interactions
    initializeServiceCards();
    
    // Smooth Scrolling for Navigation
    initializeSmoothScrolling();
    
    // Parallax Effects
    initializeParallaxEffects();
});

// Photography Mosaic Gallery
function initializePhotographyMosaic() {
    const mosaicItems = document.querySelectorAll('.mosaic-item');
    
    mosaicItems.forEach(item => {
        // Add click event for lightbox functionality
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const title = this.querySelector('.mosaic-overlay h3').textContent;
            const description = this.querySelector('.mosaic-overlay p').textContent;
            
            openLightbox(img.src, title, description);
        });
        
        // Add hover effects
        item.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
}

// Lightbox Functionality
function openLightbox(imageSrc, title, description) {
    // Create lightbox overlay
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-overlay';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close">&times;</button>
            <img src="${imageSrc}" alt="${title}">
            <div class="lightbox-info">
                <h3>${title}</h3>
                <p>${description}</p>
            </div>
        </div>
    `;
    
    // Add lightbox styles
    const style = document.createElement('style');
    style.textContent = `
        .lightbox-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        }
        
        .lightbox-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
            border-radius: 12px;
            overflow: hidden;
            background: rgba(26, 26, 26, 0.95);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .lightbox-content img {
            width: 100%;
            height: auto;
            display: block;
        }
        
        .lightbox-info {
            padding: 1.5rem;
            color: white;
        }
        
        .lightbox-info h3 {
            margin-bottom: 0.5rem;
            font-size: 1.5rem;
        }
        
        .lightbox-info p {
            color: rgba(255, 255, 255, 0.8);
        }
        
        .lightbox-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            font-size: 2rem;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            z-index: 1001;
            transition: background 0.3s ease;
        }
        
        .lightbox-close:hover {
            background: rgba(255, 255, 255, 0.2);
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(lightbox);
    
    // Close lightbox functionality
    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(lightbox);
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            document.body.removeChild(lightbox);
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.querySelector('.lightbox-overlay')) {
            document.body.removeChild(lightbox);
        }
    });
}

// YouTube Integration
function initializeYouTubeIntegration() {
    const youtubeEmbed = document.querySelector('.youtube-embed iframe');
    
    if (youtubeEmbed) {
        // Add loading state
        youtubeEmbed.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Add click to play functionality
        const embedContainer = document.querySelector('.youtube-embed');
        embedContainer.addEventListener('click', function() {
            // This would typically trigger video play
            console.log('YouTube video clicked');
        });
    }
    
    // Animate stats on scroll
    const stats = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
            }
        });
    });
    
    stats.forEach(stat => observer.observe(stat));
}

// Animate Numbers
function animateNumber(element) {
    const target = parseInt(element.textContent.replace(/\D/g, ''));
    const suffix = element.textContent.replace(/\d/g, '');
    
    // Special handling for subscriber counter (1K+)
    if (element.textContent.includes('1K+')) {
        const steps = [0, 150, 300, 600, 900, 1000];
        let currentStep = 0;
        
        const timer = setInterval(() => {
            if (currentStep < steps.length) {
                const value = steps[currentStep];
                if (value >= 1000) {
                    element.textContent = '1K+';
                } else {
                    element.textContent = value + '+';
                }
                currentStep++;
            } else {
                clearInterval(timer);
            }
        }, 200); // Slower animation for better visibility
    } else {
        // Standard animation for other counters
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + suffix;
        }, 30);
    }
}

// Service Cards Interactions
function initializeServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click effects
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('service-cta')) {
                const cta = this.querySelector('.service-cta');
                if (cta) {
                    cta.click();
                }
            }
        });
    });
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Parallax Effects
function initializeParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.photography-hero, .hero-about');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const rate = scrolled * -0.5;
            element.style.transform = `translateY(${rate}px)`;
        });
    });
}

// Intersection Observer for Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .passion-card, .influence-card');
    animateElements.forEach(el => observer.observe(el));
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', function() {
    initializeScrollAnimations();
});

// Add CSS for animations
const animationStyles = `
    .service-card,
    .passion-card,
    .influence-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .service-card.animate-in,
    .passion-card.animate-in,
    .influence-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .mosaic-item {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .mosaic-item:hover {
        transform: scale(1.05);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    }
`;

// Inject animation styles
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);

// Performance optimization: Lazy loading for images
function initializeLazyLoading() {
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
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', function() {
    initializeLazyLoading();
});
