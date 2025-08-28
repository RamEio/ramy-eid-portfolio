// Mobile-Only Experience Carousel - OPTIMIZED VERSION
document.addEventListener('DOMContentLoaded', function() {
    // Only run on mobile devices
    if (window.innerWidth > 768) {
        console.log('📱 Mobile Experience Carousel: Skipping on desktop');
        return; // Exit on desktop
    }
    
    console.log('📱 Mobile Experience Carousel: Starting on mobile device');
    
    // Find the appropriate carousel container based on the page
    let carouselContainer;
    
    // Check if we're on the homepage (has mobile-experience-carousel-section)
    const mobileSection = document.querySelector('.mobile-experience-carousel-section');
    if (mobileSection) {
        // Homepage - use the mobile section container
        carouselContainer = mobileSection.querySelector('.experience-carousel-container');
        console.log('📱 Mobile Experience Carousel: Found homepage mobile carousel container');
    } else {
        // Experience page - use the main carousel container
        carouselContainer = document.querySelector('.experience-carousel-container');
        console.log('📱 Mobile Experience Carousel: Found experience page carousel container');
    }
    
    if (!carouselContainer) {
        console.log('📱 Mobile Experience Carousel: No carousel container found, skipping');
        return; // Container not found
    }
    
    console.log('📱 Mobile Experience Carousel: Found carousel container');
    
    // Available experience images for the mobile carousel - OPTIMIZED LIST
    const allExperienceImages = [
        // UX Research & Discovery
        'assets/experiences_images/discovery phase.jpg',
        'assets/experiences_images/discovery_strategic-axis.png',
        'assets/experiences_images/card_sorting_user.JPG',
        'assets/experiences_images/Confidence level wheel.png',
        
        // Design Sprints & Workshops
        'assets/experiences_images/DesignSprintBook.png',
        'assets/experiences_images/LeroyMerlin_workshop.png',
        'assets/experiences_images/adeo_user_testing1.jpg',
        'assets/experiences_images/user_testing restitution_LM.png',
        
        // Wireframing & Design
        'assets/experiences_images/adeo_wireframe1.png',
        'assets/experiences_images/mozaIc_DS.png',
        
        // Additional experience images
        'assets/experiences_images/discovery phase.jpg',
        'assets/experiences_images/DesignSprintBook.png',
        'assets/experiences_images/adeo_user_testing1.jpg',
        'assets/experiences_images/LeroyMerlin_workshop.png',
        'assets/experiences_images/card_sorting_user.JPG',
        'assets/experiences_images/adeo_wireframe1.png',
        'assets/experiences_images/Confidence level wheel.png',
        'assets/experiences_images/user_testing restitution_LM.png',
        'assets/experiences_images/discovery_strategic-axis.png',
        'assets/experiences_images/mozaIc_DS.png',
    ];
    
    // Item size classes for mobile carousel
    const itemSizes = ['xlarge', 'large', 'medium', 'small', 'xsmall'];
    
    // Experience titles and descriptions for overlays
    const experienceData = [
        { title: 'Discovery Phase', description: 'UX Research & Product Discovery' },
        { title: 'Design Sprints', description: 'Methodology & Facilitation' },
        { title: 'User Testing', description: 'Real User Research' },
        { title: 'Workshop Facilitation', description: 'Design Sprints' },
        { title: 'Card Sorting', description: 'Information Architecture' },
        { title: 'Wireframing', description: 'UX Design & Prototyping' },
        { title: 'Data Analysis', description: 'Research Metrics' },
        { title: 'Testing Results', description: 'Data Analysis' },
        { title: 'Strategic Discovery', description: 'Product Strategy' },
        { title: 'Design Systems', description: 'Mozaic Implementation' },
    ];
    
    // Function to create mobile experience carousel - OPTIMIZED
    const createMobileExperienceCarousel = () => {
        console.log('📱 Mobile Experience Carousel: Creating carousel...');
        
        // Clear existing content
        carouselContainer.innerHTML = '';
        
        // Create 3 carousel rows
        for (let row = 0; row < 3; row++) {
            const carouselRow = document.createElement('div');
            carouselRow.className = 'mobile-carousel-row';
            carouselRow.id = `mobile-carousel-row-${row + 1}`;
            
            // Shuffle images for this row
            const shuffledImages = [...allExperienceImages].sort(() => Math.random() - 0.5);
            
            console.log(`📱 Mobile Experience Carousel: Creating row ${row + 1} with ${shuffledImages.length} images`);
            
            // Add images to this row (duplicate for seamless loop) - OPTIMIZED
            for (let i = 0; i < 2; i++) { // Duplicate for seamless loop
                shuffledImages.forEach((imageSrc, index) => {
                    const carouselItem = document.createElement('div');
                    const sizeClass = itemSizes[index % itemSizes.length];
                    carouselItem.className = `mobile-carousel-item ${sizeClass}`;
                    
                    const img = document.createElement('img');
                    img.src = imageSrc;
                    img.alt = experienceData[index % experienceData.length]?.title || 'Experience Image';
                    img.loading = 'lazy';
                    img.decoding = 'async';
                    
                    // Add progressive loading - OPTIMIZED
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.3s ease-in-out';
                    
                    img.onload = function() {
                        this.style.opacity = '1';
                        console.log(`📱 Mobile Experience Carousel: Image loaded: ${imageSrc}`);
                    };
                    
                    img.onerror = function() {
                        console.warn(`Failed to load image: ${this.src}`);
                        this.style.display = 'none';
                    };
                    
                    // Add experience overlay
                    const overlay = document.createElement('div');
                    overlay.className = 'experience-overlay';
                    const experienceInfo = experienceData[index % experienceData.length];
                    if (experienceInfo) {
                        overlay.innerHTML = `<h3>${experienceInfo.title}</h3><p>${experienceInfo.description}</p>`;
                    }
                    
                    carouselItem.appendChild(img);
                    carouselItem.appendChild(overlay);
                    carouselRow.appendChild(carouselItem);
                });
            }
            
            carouselContainer.appendChild(carouselRow);
        }
        
        console.log('📱 Mobile Experience Carousel: Carousel creation complete');
    };
    
    // Initialize carousel
    createMobileExperienceCarousel();
    
    // Add click to refresh functionality
    carouselContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('mobile-carousel-item') || 
            e.target.classList.contains('mobile-carousel-row') ||
            e.target.tagName === 'IMG') {
            
            console.log('📱 Mobile Experience Carousel: Refreshing carousel...');
            createMobileExperienceCarousel();
        }
    });
    
    console.log('📱 Mobile Experience Carousel: Initialized with ULTRA SLOW animation (300s)');
    
    // Initialize UniversalCarouselController - OPTIMIZED TO PREVENT CONFLICTS
    if (typeof UniversalCarouselController !== 'undefined') {
        // Check if controller already exists to prevent conflicts
        if (!window.mobileExperienceCarouselController) {
            window.mobileExperienceCarouselController = new UniversalCarouselController({
                rowClass: '.mobile-carousel-row',
                itemClass: '.mobile-carousel-item',
                isMobile: true,
                speed: 300
            });
            console.log('📱 Mobile Experience Carousel: UniversalCarouselController initialized');
        } else {
            console.log('📱 Mobile Experience Carousel: UniversalCarouselController already exists, skipping');
        }
    }
    
    // Debug: Check if CSS is applied - OPTIMIZED
    setTimeout(() => {
        const carouselRows = document.querySelectorAll('.mobile-carousel-row');
        carouselRows.forEach((row, index) => {
            const animation = window.getComputedStyle(row).animation;
            console.log(`📱 Experience Carousel Row ${index + 1} animation:`, animation);
        });
    }, 1000);
    
    // Handle window resize - OPTIMIZED
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            console.log('📱 Mobile Experience Carousel: Window resized to desktop, stopping carousel');
            // Stop carousel on desktop
            if (window.mobileExperienceCarouselController) {
                window.mobileExperienceCarouselController = null;
            }
        } else if (window.innerWidth <= 768 && !window.mobileExperienceCarouselController) {
            console.log('📱 Mobile Experience Carousel: Window resized to mobile, restarting carousel');
            // Restart carousel on mobile
            createMobileExperienceCarousel();
        }
    });
});
