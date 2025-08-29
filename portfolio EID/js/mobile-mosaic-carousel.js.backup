// Mobile-Only Photography Carousel
document.addEventListener('DOMContentLoaded', function() {
    // Only run on mobile devices
    if (window.innerWidth > 768) {
        console.log('📱 Mobile Carousel: Skipping on desktop');
        return; // Exit on desktop
    }
    
    console.log('📱 Mobile Carousel: Starting on mobile device');
    
    const mosaicContainer = document.querySelector('.photography-mosaic-fullpage');
    if (!mosaicContainer) {
        return; // Container not found
    }
    
    // Available images for the mobile carousel (Only manually added photos)
    const allMosaicImages = [
        // Wildlife photos
        'assets/hobbies/photography-mosaic/lioness.JPG',
        'assets/hobbies/photography-mosaic/girafe.JPG',
        'assets/hobbies/photography-mosaic/leopard.JPG',
        'assets/hobbies/photography-mosaic/monkey.JPG',
        'assets/hobbies/photography-mosaic/CUB.JPG',
        
        // Travel & landscape photos
        'assets/hobbies/photography-mosaic/HardelotCastle.JPEG',
        'assets/hobbies/photography-mosaic/Horses in sunset.JPEG',
        'assets/hobbies/photography-mosaic/Plane.JPEG',
        'assets/hobbies/photography-mosaic/Planje2.JPEG',
        
        // All your IMG photos
        'assets/hobbies/photography-mosaic/IMG_5198.JPG',
        'assets/hobbies/photography-mosaic/IMG_0024.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/IMG_3022.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/IMG_4464.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/IMG_5146.JPEG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/IMG_1841.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/IMG_0607.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/IMG_3417.JPEG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/IMG_4590.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/IMG_9205.HEIC_compressed.JPEG',
        'assets/hobbies/photography-mosaic/IMG_9213.HEIC_compressed.JPEG',
        'assets/hobbies/photography-mosaic/IMG_2654.JPEG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/IMG_2774.JPEG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/IMG_4538.JPEG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/IMG_4641.JPEG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/IMG_4678.JPEG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/IMG_9604.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/IMG_9679.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/IMG_9683.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/IMG_3305.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/IMG_3307.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/IMG_3572.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/IMG_3687.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/IMG_8296.jpg',
        'assets/hobbies/photography-mosaic/IMG_9934.jpg',
        'assets/hobbies/photography-mosaic/IMG_0101.jpg',
        'assets/hobbies/photography-mosaic/IMG_9408.jpg',
                       'assets/hobbies/photography-mosaic/IMG_6825_compressed.jpg',
        'assets/hobbies/photography-mosaic/IMG_0919.jpg',
        
        // All your P100/P101 photos
        'assets/hobbies/photography-mosaic/P1001472.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/P1001654.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/P1001697.JPEG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/P1014925.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/P1014048.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/P1014049.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/P1014056.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/P1014090.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/P1014108.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/P1014242.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/P1014254.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/P1014256.JPG_compressed.JPEG',
        
        // Drone photos
        'assets/hobbies/photography-mosaic/DJI_0115.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/DJI_0116.JPG_compressed.JPEG',
        
        // Other photos
        'assets/hobbies/photography-mosaic/lightroom-10.jpg_compressed.JPEG',
        'assets/hobbies/photography-mosaic/7f029355-a1e2-4f5f-b003-e3c13730608b.jpg_compressed.JPEG',
        'assets/hobbies/photography-mosaic/2W3A4696.JPEG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/2W3A4699.JPEG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/2W3A4714.JPEG_compressed.JPEG'
    ];
    
    // Item size classes for mobile carousel
    const itemSizes = ['xlarge', 'large', 'medium', 'small', 'xsmall'];
    
    // Function to create mobile carousel
    const createMobileCarousel = () => {
        // Clear existing content
        mosaicContainer.innerHTML = '';
        
        // Create 3 carousel rows
        for (let row = 0; row < 3; row++) {
            const carouselRow = document.createElement('div');
            carouselRow.className = 'mobile-carousel-row';
            
            // Shuffle images for this row
            const shuffledImages = [...allMosaicImages].sort(() => Math.random() - 0.5);
            
            // Add images to this row (duplicate for seamless loop)
            for (let i = 0; i < 2; i++) { // Duplicate for seamless loop
                shuffledImages.forEach((imageSrc, index) => {
                    const carouselItem = document.createElement('div');
                    const sizeClass = itemSizes[index % itemSizes.length];
                    carouselItem.className = `mobile-carousel-item ${sizeClass}`;
                    
                    const img = document.createElement('img');
                    img.src = imageSrc;
                    img.alt = '';
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
                    
                    carouselItem.appendChild(img);
                    carouselRow.appendChild(carouselItem);
                });
            }
            
            mosaicContainer.appendChild(carouselRow);
        }
    };
    
    // Initialize mobile carousel
    createMobileCarousel();
    
    // Add click to refresh functionality
    mosaicContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('mobile-carousel-item') || 
            e.target.classList.contains('mobile-carousel-row') ||
            e.target.tagName === 'IMG') {
            
            // Add visual feedback
            mosaicContainer.classList.add('clicked');
            setTimeout(() => {
                mosaicContainer.classList.remove('clicked');
            }, 150);
            
            // Refresh carousel
            createMobileCarousel();
        }
    });
    
    // Mobile carousel setup completed
    console.log('📱 Mobile Photography Carousel: Initialized with ULTRA SLOW animation (300s)');
    
    // Initialize universal carousel controller for mobile mosaic
    const universalController = new UniversalCarouselController({
        rowClass: '.mobile-carousel-row',
        itemClass: '.mobile-carousel-item',
        scrollSpeed: 300,
        mobileScrollSpeed: 300
    });
    
    // Debug: Check if CSS is applied
    setTimeout(() => {
        const carouselRows = document.querySelectorAll('.mobile-carousel-row');
        carouselRows.forEach((row, index) => {
            const computedStyle = window.getComputedStyle(row);
            const animation = computedStyle.animation;
            console.log(`📱 Carousel Row ${index + 1} animation:`, animation);
        });
    }, 1000);
    
               // Add CSS for slower animation
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
            console.log('📱 Mobile Carousel: Window resized to desktop, stopping mobile carousel');
            // Could add cleanup logic here if needed
        }
    });
});
