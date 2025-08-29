// Contact Page Experience Mosaic
document.addEventListener('DOMContentLoaded', function() {
    // Desktop Mosaic Logic (same as about page)
    if (window.innerWidth <= 768) {
        console.log('🖥️ Desktop Mosaic: Skipping on mobile');
        return;
    }
    
    console.log('🖥️ Desktop Mosaic: Starting on desktop device');
    
    const mosaicContainer = document.querySelector('.experience-mosaic-fullpage');
    if (!mosaicContainer) {
        return;
    }

    // Contact page specific images from mozaic-contact-page folder
    const allMosaicImages = [
        'assets/experiences_images/mozaic-contact-page/discovery phase.jpg',
        'assets/experiences_images/mozaic-contact-page/adeo_user_testing2.jpg',
        'assets/experiences_images/mozaic-contact-page/IMG_2626.JPG',
        'assets/experiences_images/mozaic-contact-page/IMG_2618.jpeg',
        'assets/experiences_images/mozaic-contact-page/prezNico.jpg',
        'assets/experiences_images/mozaic-contact-page/adeo_wireframe2.png',
        'assets/experiences_images/mozaic-contact-page/adeo_wireframe1.png',
        'assets/experiences_images/mozaic-contact-page/Ux_disco_1.png',
        'assets/experiences_images/mozaic-contact-page/LeroyMerlin_workshop.png',
        'assets/experiences_images/mozaic-contact-page/LeroyMerlin_usertesting1.jpeg',
        'assets/experiences_images/mozaic-contact-page/discussionUser.png',
        'assets/experiences_images/mozaic-contact-page/conference.png'
    ];

    // Grid layouts (same as about page)
    const gridLayouts = [
        {
            name: 'layout-1',
            areas: [
                { class: 'xlarge', gridArea: '1 / 1 / 3 / 3' },
                { class: 'medium', gridArea: '1 / 3 / 2 / 4' },
                { class: 'small', gridArea: '2 / 3 / 3 / 4' },
                { class: 'large', gridArea: '3 / 1 / 4 / 3' },
                { class: 'xsmall', gridArea: '3 / 3 / 4 / 4' }
            ]
        },
        {
            name: 'layout-2',
            areas: [
                { class: 'large', gridArea: '1 / 1 / 2 / 3' },
                { class: 'xlarge', gridArea: '1 / 3 / 4 / 4' },
                { class: 'medium', gridArea: '2 / 1 / 3 / 2' },
                { class: 'small', gridArea: '2 / 2 / 3 / 3' },
                { class: 'xsmall', gridArea: '3 / 1 / 4 / 3' }
            ]
        },
        {
            name: 'layout-3',
            areas: [
                { class: 'xlarge', gridArea: '1 / 1 / 3 / 3' },
                { class: 'large', gridArea: '1 / 3 / 3 / 4' },
                { class: 'medium', gridArea: '3 / 1 / 4 / 2' },
                { class: 'small', gridArea: '3 / 2 / 4 / 3' },
                { class: 'xsmall', gridArea: '3 / 3 / 4 / 4' }
            ]
        }
    ];

    let currentLayout = null;
    let currentImages = [];

    const createNewMosaic = () => {
        currentLayout = gridLayouts[Math.floor(Math.random() * gridLayouts.length)];
        const shuffledImages = allMosaicImages.sort(() => Math.random() - 0.5);
        currentImages = shuffledImages.slice(0, 5);
        
        mosaicContainer.innerHTML = '';
        
        currentLayout.areas.forEach((area, index) => {
            const mosaicItem = document.createElement('div');
            mosaicItem.className = `mosaic-item ${area.class}`;
            mosaicItem.style.gridArea = area.gridArea;
            
            const img = document.createElement('img');
            img.src = currentImages[index];
            img.alt = '';
            img.loading = 'lazy';
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease-in-out';
            
            img.onload = function() {
                this.style.opacity = '1';
            };
            
            img.onerror = function() {
                console.warn(`Failed to load image: ${this.src}`);
                this.style.display = 'none';
            };
            
            mosaicItem.appendChild(img);
            mosaicContainer.appendChild(mosaicItem);
        });
    };

    createNewMosaic();

    // Click to randomize (same as about page)
    mosaicContainer.addEventListener('click', function(e) {
        mosaicContainer.classList.add('clicked');
        setTimeout(() => {
            mosaicContainer.classList.remove('clicked');
        }, 150);
        createNewMosaic();
    });

    // Hover effects (same as about page)
    mosaicContainer.addEventListener('mouseover', function(e) {
        if (e.target.classList.contains('mosaic-item')) {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.zIndex = '10';
        }
    });

    mosaicContainer.addEventListener('mouseout', function(e) {
        if (e.target.classList.contains('mosaic-item')) {
            e.target.style.transform = 'scale(1)';
            e.target.style.zIndex = '1';
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            console.log('🖥️ Desktop Mosaic: Window resized to mobile, stopping desktop mosaic');
        }
    });
});

// Mobile Mosaic Logic (same as about page)
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth > 768) {
        console.log('📱 Mobile Carousel: Skipping on desktop');
        return;
    }
    
    console.log('📱 Mobile Carousel: Starting on mobile device');
    
    const mosaicContainer = document.querySelector('.experience-mosaic-fullpage');
    if (!mosaicContainer) {
        return;
    }

    // Contact page specific images from mozaic-contact-page folder
    const allMosaicImages = [
        'assets/experiences_images/mozaic-contact-page/discovery phase.jpg',
        'assets/experiences_images/mozaic-contact-page/adeo_user_testing2.jpg',
        'assets/experiences_images/mozaic-contact-page/IMG_2626.JPG',
        'assets/experiences_images/mozaic-contact-page/IMG_2618.jpeg',
        'assets/experiences_images/mozaic-contact-page/prezNico.jpg',
        'assets/experiences_images/mozaic-contact-page/adeo_wireframe2.png',
        'assets/experiences_images/mozaic-contact-page/adeo_wireframe1.png',
        'assets/experiences_images/mozaic-contact-page/Ux_disco_1.png',
        'assets/experiences_images/mozaic-contact-page/LeroyMerlin_workshop.png',
        'assets/experiences_images/mozaic-contact-page/LeroyMerlin_usertesting1.jpeg',
        'assets/experiences_images/mozaic-contact-page/conference.png'
    ];

    const itemSizes = ['xlarge', 'large', 'medium', 'small', 'xsmall'];

    const createMobileCarousel = () => {
        mosaicContainer.innerHTML = '';
        
        for (let row = 0; row < 3; row++) {
            const carouselRow = document.createElement('div');
            carouselRow.className = 'mobile-carousel-row';
            
            const shuffledImages = [...allMosaicImages].sort(() => Math.random() - 0.5);
            
            // Create 2 sets of images per row (like about page)
            for (let i = 0; i < 2; i++) {
                shuffledImages.forEach((imageSrc, index) => {
                    const carouselItem = document.createElement('div');
                    const sizeClass = itemSizes[index % itemSizes.length];
                    carouselItem.className = `mobile-carousel-item ${sizeClass}`;
                    
                    const img = document.createElement('img');
                    img.src = imageSrc;
                    img.alt = '';
                    img.loading = 'lazy';
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.3s ease-in-out';
                    
                    img.onload = function() {
                        this.style.opacity = '1';
                    };
                    
                    img.onerror = function() {
                        console.warn(`Failed to load image: ${this.src}`);
                        this.style.display = 'none';
                    };
                    
                    carouselItem.appendChild(img);
                    carouselRow.appendChild(carouselItem);
                });
            }
            
            mosaicContainer.appendChild(carouselRow);
        }
    };

    createMobileCarousel();

    // Click to randomize (same as about page)
    mosaicContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('mobile-carousel-item') || 
            e.target.classList.contains('mobile-carousel-row') || 
            e.target.tagName === 'IMG') {
            mosaicContainer.classList.add('clicked');
            setTimeout(() => {
                mosaicContainer.classList.remove('clicked');
            }, 150);
            createMobileCarousel();
        }
    });

    console.log('📱 Mobile Contact Carousel: Initialized with ULTRA SLOW animation (300s)');

    // Add mobile-specific styles to remove gaps
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .mobile-carousel-row {
                animation: scrollCarousel 300s linear infinite !important;
                gap: 0 !important;
                margin: 0 !important;
                padding: 0 !important;
            }
            
            .mobile-carousel-item {
                margin: 0 !important;
                gap: 0 !important;
                padding: 0 !important;
                border: none !important;
                outline: none !important;
            }
            
            .mobile-carousel-item img {
                margin: 0 !important;
                padding: 0 !important;
                border: none !important;
                outline: none !important;
            }
        }
    `;
    document.head.appendChild(style);

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            console.log('📱 Mobile Carousel: Window resized to desktop, stopping mobile carousel');
        }
    });
});

// Add CSS animation for mobile carousel (same as about page)
const style = document.createElement('style');
style.textContent = `
    @keyframes scrollCarousel {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
    }
    
    .mobile-carousel-row {
        display: flex;
        gap: 0;
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
    
    .mosaic-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
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
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            gap: 0 !important;
            animation: scrollCarousel 300s linear infinite !important;
            width: max-content !important;
            contain: layout style paint !important;
            isolation: isolate !important;
            margin: 0 !important;
            padding: 0 !important;
        }
        
        .mobile-carousel-item {
            position: relative !important;
            overflow: hidden !important;
            border-radius: 0 !important;
            transition: all var(--transition-normal) !important;
            cursor: pointer !important;
            flex-shrink: 0 !important;
            margin: 0 !important;
            border: none !important;
            will-change: transform !important;
            backface-visibility: hidden !important;
            transform: translateZ(0) !important;
        }
        
        .mobile-carousel-item.xlarge {
            width: 300px !important;
            height: 200px !important;
            flex-shrink: 0 !important;
        }
        
        .mobile-carousel-item.large {
            width: 250px !important;
            height: 200px !important;
            flex-shrink: 0 !important;
        }
        
        .mobile-carousel-item.medium {
            width: 200px !important;
            height: 200px !important;
            flex-shrink: 0 !important;
        }
        
        .mobile-carousel-item.small {
            width: 150px !important;
            height: 200px !important;
            flex-shrink: 0 !important;
        }
        
        .mobile-carousel-item.xsmall {
            width: 100px !important;
            height: 200px !important;
            flex-shrink: 0 !important;
        }
        
        .mobile-carousel-item img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            transition: transform var(--transition-normal) !important;
            border-radius: 0 !important;
            will-change: transform !important;
            backface-visibility: hidden !important;
            transform: translateZ(0) !important;
            image-rendering: auto !important;
            aspect-ratio: 16/9 !important;
            background: rgba(26,26,26,0.1) !important;
            loading: lazy !important;
            decoding: async !important;
            margin: 0 !important;
            padding: 0 !important;
            border: none !important;
            outline: none !important;
        }
        
        .mobile-carousel-item:hover {
            transform: translateY(-8px) !important;
            box-shadow: 0 20px 60px rgba(0,0,0,0.5) !important;
        }
        
        .mobile-carousel-item:hover img {
            transform: scale(1.05) !important;
        }
        
        .mobile-carousel-row:hover {
            animation-play-state: paused !important;
        }
    }
    
    @media (max-width: 480px) {
        .mobile-carousel-item.xlarge {
            width: 250px !important;
            height: 200px !important;
        }
        
        .mobile-carousel-item.large {
            width: 200px !important;
            height: 200px !important;
        }
        
        .mobile-carousel-item.medium {
            width: 150px !important;
            height: 200px !important;
        }
        
        .mobile-carousel-item.small {
            width: 120px !important;
            height: 200px !important;
        }
        
        .mobile-carousel-item.xsmall {
            width: 80px !important;
            height: 200px !important;
        }
    }
`;
document.head.appendChild(style);
