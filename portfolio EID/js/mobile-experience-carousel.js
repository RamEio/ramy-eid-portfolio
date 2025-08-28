/**
 * Mobile Experience Carousel for Homepage
 * Populates the mobile carousel with experience images
 */
document.addEventListener('DOMContentLoaded', function() {
    // Only run on mobile devices
    if (window.innerWidth > 768) {
        console.log('📱 Mobile Experience Carousel: Skipping on desktop');
        return;
    }
    
    console.log('📱 Mobile Experience Carousel: Starting on mobile device');
    
    // Find the mobile carousel container
    const mobileCarouselSection = document.querySelector('.mobile-experience-carousel-section');
    console.log('📱 Mobile Experience Carousel: Looking for container:', mobileCarouselSection);
    
    if (!mobileCarouselSection) {
        console.log('📱 Mobile Experience Carousel: Container not found - checking all sections');
        const allSections = document.querySelectorAll('section');
        allSections.forEach((section, index) => {
            console.log(`Section ${index}:`, section.className);
        });
        return;
    }
    
    // Experience images for mobile carousel
    const experienceImages = [
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
        'assets/experiences_images/Adeo_data_analysis.png',
        'assets/experiences_images/LeroyMerlin_eisenhower_priorisation.png',
        'assets/experiences_images/adeo_wireframe2.png',
        'assets/experiences_images/adeo_user_testing2.jpg',
        'assets/experiences_images/IMG_2646.JPG',
        'assets/experiences_images/IMG_2634.JPG',
        'assets/experiences_images/IMG_2631.JPG',
        'assets/experiences_images/IMG_2626.JPG',
        'assets/experiences_images/IMG_2618.jpeg',
        'assets/experiences_images/user_testing restitution2_LM.png',
        'assets/experiences_images/user_testing restitution3_LM.png',
        'assets/experiences_images/LeroyMerlin_wireframe.png',
        'assets/experiences_images/LeroyMerlin_usertesting1.jpeg',
        'assets/experiences_images/LeroyMerlin_delivery.png',
        'assets/experiences_images/LM_workflow_secret.png',
        'assets/experiences_images/adeo_UX_audit.png',
        'assets/experiences_images/adeo_paiement_journey.png',
        'assets/experiences_images/adeo_UX_audit.png',
        'assets/experiences_images/Ux_disco_1.png',
        'assets/experiences_images/Ux_disco_2.png',
        'assets/experiences_images/Ux_disco_3.png',
        'assets/experiences_images/card_sorting.png',
        'assets/experiences_images/profilingPersonae.png',
        'assets/experiences_images/onlineSurvey1.png',
        'assets/experiences_images/onlineSurvey12png.png',
        'assets/experiences_images/onlineSurvey3png.png',
        'assets/experiences_images/datastudio_RIDE.png',
        'assets/experiences_images/dataStudio.png',
        'assets/experiences_images/user_data_analysis_adeo.png',
        'assets/experiences_images/tagging_plan.png',
        'assets/experiences_images/marketing.png',
        'assets/experiences_images/image.png',
        'assets/experiences_images/ost.png'
    ];
    
    // Item sizes for variety
    const itemSizes = ['xlarge', 'large', 'medium', 'small', 'xsmall'];
    
    // Create mobile carousel function
    const createMobileExperienceCarousel = () => {
        // Clear existing content
        const carouselContainer = mobileCarouselSection.querySelector('.experience-carousel-container');
        if (!carouselContainer) {
            console.log('📱 Mobile Experience Carousel: Carousel container not found');
            return;
        }
        
        // Clear existing rows
        carouselContainer.innerHTML = '';
        
        // Create 3 rows
        for (let row = 0; row < 3; row++) {
            const carouselRow = document.createElement('div');
            carouselRow.className = 'mobile-carousel-row';
            carouselRow.id = `mobile-carousel-row-${row + 1}`;
            
            // Shuffle images for variety
            const shuffledImages = [...experienceImages].sort(() => Math.random() - 0.5);
            
            // Create duplicate set for infinite loop
            for (let duplicate = 0; duplicate < 2; duplicate++) {
                shuffledImages.forEach((imageSrc, index) => {
                    const carouselItem = document.createElement('div');
                    const sizeClass = itemSizes[index % itemSizes.length];
                    carouselItem.className = `mobile-carousel-item ${sizeClass} glass-effect`;
                    
                    // Create image element
                    const img = document.createElement('img');
                    img.src = imageSrc;
                    img.alt = 'Experience Image';
                    img.loading = 'lazy';
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.3s ease-in-out';
                    
                    // Handle image load
                    img.onload = function() {
                        this.style.opacity = '1';
                    };
                    
                    // Handle image error
                    img.onerror = function() {
                        console.warn(`Failed to load image: ${this.src}`);
                        this.style.display = 'none';
                    };
                    
                    // Create overlay
                    const overlay = document.createElement('div');
                    overlay.className = 'experience-overlay';
                    
                    const title = document.createElement('h3');
                    title.textContent = 'Experience';
                    
                    const description = document.createElement('p');
                    description.textContent = 'UX/Product Design';
                    
                    overlay.appendChild(title);
                    overlay.appendChild(description);
                    
                    carouselItem.appendChild(img);
                    carouselItem.appendChild(overlay);
                    carouselRow.appendChild(carouselItem);
                });
            }
            
            carouselContainer.appendChild(carouselRow);
        }
        
        console.log('📱 Mobile Experience Carousel: Created with 3 rows');
    };
    
    // Initialize carousel
    createMobileExperienceCarousel();
    
    // Add click handler for regeneration
    mobileCarouselSection.addEventListener('click', function(e) {
        if (e.target.classList.contains('mobile-carousel-item') || 
            e.target.classList.contains('mobile-carousel-row') || 
            e.target.tagName === 'IMG') {
            
            mobileCarouselSection.classList.add('clicked');
            setTimeout(() => {
                mobileCarouselSection.classList.remove('clicked');
            }, 150);
            
            createMobileExperienceCarousel();
        }
    });
    
    console.log('📱 Mobile Experience Carousel: Initialized with ULTRA SLOW animation (300s)');
    
    // Verify animation is applied
    setTimeout(() => {
        const carouselRows = document.querySelectorAll('.mobile-carousel-row');
        carouselRows.forEach((row, index) => {
            const computedStyle = window.getComputedStyle(row);
            const animation = computedStyle.animation;
            console.log(`📱 Carousel Row ${index + 1} animation:`, animation);
        });
    }, 1000);
    
    // Add mobile-specific styles
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .mobile-carousel-row {
                animation: scrollCarousel 300s linear infinite !important;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            console.log('📱 Mobile Experience Carousel: Window resized to desktop, stopping mobile carousel');
        }
    });
});
