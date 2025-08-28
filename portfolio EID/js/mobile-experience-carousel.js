// Mobile-Only Experience Carousel for Experience Page
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
    
    // Available experience images for the mobile carousel
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
        'assets/experiences_images/adeo_wireframe1.png',
        'assets/experiences_images/discovery phase.jpg',
        
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
    
    // Function to create mobile experience carousel
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
            
            // Add images to this row (duplicate for seamless loop)
            for (let i = 0; i < 2; i++) { // Duplicate for seamless loop
                shuffledImages.forEach((imageSrc, index) => {
                    const carouselItem = document.createElement('div');
                    const sizeClass = itemSizes[index % itemSizes.length];
                    carouselItem.className = `mobile-carousel-item ${sizeClass}`;
                    
                    const img = document.createElement('img');
                    img.src = imageSrc;
                    img.alt = experienceData[index % experienceData.length]?.title || 'Experience Image';
                    img.loading = 'lazy';
                    
                    // Add progressive loading
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.3s ease-in-out';
                    
                    img.onload = function() {
                        this.style.opacity = '1';
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
                        overlay.innerHTML = `
                            <h3>${experienceInfo.title}</h3>
                            <p>${experienceInfo.description}</p>
                        `;
                    }
                    
                    carouselItem.appendChild(img);
                    carouselItem.appendChild(overlay);
                    carouselRow.appendChild(carouselItem);
                });
            }
            
            carouselContainer.appendChild(carouselRow);
        }
    };
    
    // Initialize mobile experience carousel
    createMobileExperienceCarousel();
    
    // Add click to refresh functionality
    carouselContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('mobile-carousel-item') ||
            e.target.classList.contains('mobile-carousel-row') ||
            e.target.classList.contains('experience-overlay')) {
            console.log('📱 Mobile Experience Carousel: Refreshing carousel');
            // Refresh carousel
            createMobileExperienceCarousel();
        }
    });
    
    // Mobile experience carousel setup completed
    console.log('📱 Mobile Experience Carousel: Initialized with ULTRA SLOW animation (300s)');
    
    // Initialize universal carousel controller for mobile experience carousel
    if (typeof UniversalCarouselController !== 'undefined') {
        const universalController = new UniversalCarouselController({
            rowClass: '.mobile-carousel-row',
            itemClass: '.mobile-carousel-item',
            isMobile: true,
            speed: 300 // 5 minutes for mobile
        });
        
        // Verify animation is applied correctly
        const carouselRows = document.querySelectorAll('.mobile-carousel-row');
        carouselRows.forEach((row, index) => {
            const animation = window.getComputedStyle(row).animation;
            console.log(`📱 Experience Carousel Row ${index + 1} animation:`, animation);
        });
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            console.log('📱 Mobile Experience Carousel: Window resized to desktop, stopping mobile carousel');
            // Clean up mobile carousel
            carouselContainer.innerHTML = '';
        } else if (window.innerWidth <= 768 && carouselContainer.children.length === 0) {
            console.log('📱 Mobile Experience Carousel: Window resized to mobile, restarting mobile carousel');
            // Restart mobile carousel
            createMobileExperienceCarousel();
        }
    });
});
