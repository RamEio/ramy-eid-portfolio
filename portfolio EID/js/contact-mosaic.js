// Contact Page Experience Mosaic
document.addEventListener('DOMContentLoaded', function() {
    const mosaicContainer = document.querySelector('.experience-mosaic-fullpage');
    if (!mosaicContainer) {
        return;
    }

    // Experience images for the mosaic
    const allExperienceImages = [
        'assets/experiences_images/IMG_2618.jpeg',
        'assets/experiences_images/IMG_2626.JPG',
        'assets/experiences_images/IMG_2631.JPG',
        'assets/experiences_images/IMG_2634.JPG',
        'assets/experiences_images/IMG_2646.JPG',
        'assets/experiences_images/Adeo_focus_group.png',
        'assets/experiences_images/DesignSprintBook.png',
        'assets/experiences_images/adeo_user_testing2.jpg',
        'assets/experiences_images/card_sorting_user.JPG',
        'assets/experiences_images/datastudio_RIDE.png',
        'assets/experiences_images/discovery phase.jpg',
        'assets/experiences_images/discovery_strategic-axis.png',
        'assets/experiences_images/image.png',
        'assets/experiences_images/marketing.png',
        'assets/experiences_images/user_testing restitution3_LM.png',
        'assets/experiences_images/adeo_UX_audit.png',
        'assets/experiences_images/adeo_user_testing1.jpg',
        'assets/experiences_images/adeo_wireframe1.png',
        'assets/experiences_images/adeo_wireframe2.png',
        'assets/experiences_images/Ux_disco_1.png',
        'assets/experiences_images/Ux_disco_2.png',
        'assets/experiences_images/Ux_disco_3.png',
        'assets/experiences_images/LeroyMerlin_workshop.png',
        'assets/experiences_images/LeroyMerlin_wireframe.png',
        'assets/experiences_images/LeroyMerlin_usertesting1.jpeg',
        'assets/experiences_images/LeroyMerlin_delivery.png',
        'assets/experiences_images/LM_workflow_secret.png',
        'assets/experiences_images/Adeo_paiement_journey.png',
        'assets/experiences_images/Adeo_data_analysis.png',
        'assets/experiences_images/user_data_analysis_adeo.png',
        'assets/experiences_images/user_testing restitution_LM.png',
        'assets/experiences_images/user_testing restitution2_LM.png',
        'assets/experiences_images/tagging_plan.png',
        'assets/experiences_images/sopra_steria_consulting.png',
        'assets/experiences_images/profilingPersonae.png',
        'assets/experiences_images/onlineSurvey1.png',
        'assets/experiences_images/onlineSurvey12png.png',
        'assets/experiences_images/onlineSurvey3png.png',
        'assets/experiences_images/mozaIc_DS.png',
        'assets/experiences_images/mozaic_DS2.png',
        'assets/experiences_images/enjoy_mel.png',
        'assets/experiences_images/dataStudio.png',
        'assets/experiences_images/contentSquare_diploma.png',
        'assets/experiences_images/card_sorting.png',
        'assets/experiences_images/amoobi_shop_data.png'
    ];

    const itemSizes = ['xlarge', 'large', 'medium', 'small', 'xsmall'];

    // Create mobile carousel for smaller screens
    const createMobileCarousel = () => {
        mosaicContainer.innerHTML = '';
        
        for (let row = 0; row < 3; row++) {
            const carouselRow = document.createElement('div');
            carouselRow.className = 'mobile-carousel-row';
            
            // Create 5 items per row for mobile
            for (let i = 0; i < 5; i++) {
                const randomImage = allExperienceImages[Math.floor(Math.random() * allExperienceImages.length)];
                const item = document.createElement('div');
                item.className = 'mosaic-item mobile-item';
                item.style.backgroundImage = `url(${randomImage})`;
                item.style.backgroundSize = 'cover';
                item.style.backgroundPosition = 'center';
                item.style.width = '200px';
                item.style.height = '150px';
                item.style.flexShrink = '0';
                item.style.marginRight = '10px';
                item.style.borderRadius = '8px';
                item.style.transition = 'transform 0.3s ease';
                
                item.addEventListener('mouseenter', () => {
                    item.style.transform = 'scale(1.05)';
                });
                
                item.addEventListener('mouseleave', () => {
                    item.style.transform = 'scale(1)';
                });
                
                carouselRow.appendChild(item);
            }
            
            mosaicContainer.appendChild(carouselRow);
        }
    };

    // Create desktop mosaic grid
    const createDesktopMosaic = () => {
        mosaicContainer.innerHTML = '';
        
        // Create 9 mosaic items for 3x3 grid
        for (let i = 0; i < 9; i++) {
            const randomImage = allExperienceImages[Math.floor(Math.random() * allExperienceImages.length)];
            const randomSize = itemSizes[Math.floor(Math.random() * itemSizes.length)];
            
            const item = document.createElement('div');
            item.className = `mosaic-item ${randomSize}`;
            item.style.backgroundImage = `url(${randomImage})`;
            item.style.backgroundSize = 'cover';
            item.style.backgroundPosition = 'center';
            item.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'scale(1.05)';
                item.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'scale(1)';
                item.style.boxShadow = 'none';
            });
            
            item.addEventListener('click', () => {
                item.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    item.style.transform = 'scale(1)';
                }, 150);
            });
            
            mosaicContainer.appendChild(item);
        }
    };

    // Handle responsive behavior
    const handleResize = () => {
        if (window.innerWidth <= 768) {
            createMobileCarousel();
        } else {
            createDesktopMosaic();
        }
    };

    // Initial setup
    handleResize();
    
    // Listen for window resize
    window.addEventListener('resize', handleResize);
    
    // Add click effect to the entire mosaic
    mosaicContainer.addEventListener('click', function() {
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 300);
    });
});

// Add CSS animation for mobile carousel
const style = document.createElement('style');
style.textContent = `
    @keyframes scrollCarousel {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
    }
    
    .mobile-carousel-row {
        display: flex;
        gap: 10px;
        animation: scrollCarousel 300s linear infinite;
    }
    
    .experience-mosaic-fullpage {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        cursor: pointer;
        transition: transform 0.3s ease;
    }
    
    .experience-mosaic-fullpage:hover {
        transform: scale(1.02);
    }
    
    .experience-mosaic-fullpage.clicked {
        transform: scale(0.98);
    }
    
    .mosaic-item {
        position: relative;
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .mosaic-item:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }
    
    .mosaic-item.xlarge {
        grid-area: span 2 / span 2;
    }
    
    .mosaic-item.large {
        grid-area: span 1 / span 2;
    }
    
    .mosaic-item.medium {
        grid-area: span 1 / span 1;
    }
    
    .mosaic-item.small {
        grid-area: span 1 / span 1;
    }
    
    .mosaic-item.xsmall {
        grid-area: span 1 / span 1;
    }
    
    @media (max-width: 768px) {
        .experience-mosaic-fullpage {
            display: flex !important;
            flex-direction: column !important;
            gap: 0 !important;
            height: auto !important;
            width: 100% !important;
            overflow: hidden !important;
        }
        
        .mobile-carousel-row {
            display: flex !important;
            gap: 10px !important;
            padding: 10px 0 !important;
            animation: scrollCarousel 300s linear infinite !important;
        }
        
        .mobile-item {
            flex-shrink: 0 !important;
            width: 200px !important;
            height: 150px !important;
            border-radius: 8px !important;
            background-size: cover !important;
            background-position: center !important;
        }
    }
`;
document.head.appendChild(style);
