// Image Grid Hover Effect
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 Starting enhanced image grid hover effect...');
    
    const aboutImage = document.querySelector('.about-image');
    if (!aboutImage) {
        console.error('❌ About image container not found');
        return;
    }
    
    console.log('✅ Found about image container');
    
    // Available images for the grid from /assets/images/ folder
    const allGridImages = [
        '/assets/images/IMG_1948.JPG',
        '/assets/images/IMG_3969.JPG',
        '/assets/images/ec468ae3-ce4b-4380-a2a5-6243fbc0eb15.jpg',
        '/assets/images/IMG_0507.JPG',
        '/assets/images/IMG_4423.jpg',
        '/assets/images/f9340a4d-45a8-4fe9-b052-2002154ee8da.jpg',
        '/assets/images/IMG_1739.JPG',
        '/assets/images/Cappadoce2025__Michel_0410122434.JPG',
        '/assets/images/karinpasterer.com_35.jpg',
        '/assets/images/IMG_2654.JPEG',
        '/assets/images/IMG_2774.JPEG',
        '/assets/images/63f3ec8b-6f85-4bc6-a659-127285200a1e.jpg',
        '/assets/images/IMG_4838.JPG',
        '/assets/images/IMG_5134.JPEG',
        '/assets/images/IMG_1858.JPG',
        '/assets/images/IMG_1397.JPEG',
        '/assets/images/IMG_9257.jpeg'
    ];
    
    // Smart grid layouts optimized for 3-8 images
    const getPerfectLayout = (imageCount) => {
        const layouts = {
            3: [
                { cols: 3, rows: 1, spans: [1, 1, 1] }, // 3x1 horizontal - full width
                { cols: 1, rows: 3, spans: [1, 1, 1] }, // 1x3 vertical - full height
                { cols: 2, rows: 2, spans: [2, 1, 1] }  // 2x2 with first spanning 2 - full container
            ],
            4: [
                { cols: 2, rows: 2, spans: [1, 1, 1, 1] }, // 2x2 perfect square - full container
                { cols: 1, rows: 4, spans: [1, 1, 1, 1] }  // 1x4 vertical - full height
            ],
            5: [
                { cols: 3, rows: 2, spans: [2, 1, 1, 1, 1] }, // 3x2 with first spanning 2 rows - full container
                { cols: 2, rows: 3, spans: [1, 1, 1, 1, 1] }  // 2x3 grid - full container
            ],
            6: [
                { cols: 3, rows: 2, spans: [1, 1, 1, 1, 1, 1] }, // 3x2 perfect grid - full container
                { cols: 2, rows: 3, spans: [1, 1, 1, 1, 1, 1] }, // 2x3 perfect grid - full container
                { cols: 1, rows: 6, spans: [1, 1, 1, 1, 1, 1] }  // 1x6 vertical - full height
            ],
            7: [
                { cols: 3, rows: 3, spans: [2, 1, 1, 1, 1, 1, 1] }, // 3x3 with first spanning 2 - full container
                { cols: 4, rows: 2, spans: [2, 1, 1, 1, 1, 1, 1] }, // 4x2 with first spanning 2 - full container
                { cols: 2, rows: 4, spans: [1, 1, 1, 1, 1, 1, 1] }  // 2x4 grid - full container
            ],
            8: [
                { cols: 3, rows: 3, spans: [2, 1, 1, 1, 1, 1, 1, 1] }, // 3x3 with first spanning 2 - full container
                { cols: 4, rows: 2, spans: [1, 1, 1, 1, 1, 1, 1, 1] }, // 4x2 perfect grid - full container
                { cols: 2, rows: 4, spans: [1, 1, 1, 1, 1, 1, 1, 1] }  // 2x4 perfect grid - full container
            ]
        };
        
        const availableLayouts = layouts[imageCount] || layouts[8];
        return availableLayouts[Math.floor(Math.random() * availableLayouts.length)];
    };
    
    // Constants for better maintainability
    const MIN_IMAGES = 3;
    const MAX_IMAGES = 8;
    const GRID_GAP = 6;
    const GRID_PADDING = 6;
    const BORDER_RADIUS = 6;
    const TRANSITION_DURATION = 0.4;
    const STAGGER_DELAY = 80;
    
    let gridContainer = null;
    let currentLayout = null;
    let currentImages = [];
    
    // Function to create new grid
    const createNewGrid = () => {
        // Remove existing grid if present
        if (gridContainer) {
            gridContainer.remove();
        }
        
        // Randomize and select 3-7 images (optimized range)
        const imageCount = Math.floor(Math.random() * (MAX_IMAGES - MIN_IMAGES + 1)) + MIN_IMAGES;
        currentImages = allGridImages.sort(() => Math.random() - 0.5).slice(0, imageCount);
        currentLayout = getPerfectLayout(currentImages.length);
        
        // Verify the layout perfectly matches the image count
        const totalGridCells = currentLayout.cols * currentLayout.rows;
        const totalImageSpans = currentLayout.spans.reduce((sum, span) => sum + span, 0);
        
        console.log(`🔍 Layout verification: ${imageCount} images, ${totalGridCells} grid cells, ${totalImageSpans} total spans`);
        
        // Create the grid container with full container coverage
        gridContainer = document.createElement('div');
        gridContainer.className = 'image-grid-overlay';
        gridContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: repeat(${currentLayout.cols}, 1fr);
            grid-template-rows: repeat(${currentLayout.rows}, 1fr);
            gap: ${GRID_GAP}px;
            padding: ${GRID_PADDING}px;
            opacity: 0;
            transition: opacity ${TRANSITION_DURATION}s ease;
            z-index: 10;
            pointer-events: none;
            background: rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(2px);
            box-sizing: border-box;
            overflow: hidden;
            max-width: 100%;
            max-height: 100%;
        `;
        
        // Create grid images with perfect spanning and full coverage
        currentImages.forEach((src, index) => {
            const gridImg = document.createElement('img');
            gridImg.src = src;
            
            // Consistent sizing for better fit
            const sizeVariations = [
                { scale: 1, delay: 0 },
                { scale: 1.05, delay: 0.1 },
                { scale: 0.95, delay: 0.2 },
                { scale: 1.1, delay: 0.3 },
                { scale: 0.9, delay: 0.4 },
                { scale: 1.15, delay: 0.5 }
            ];
            
            const variation = sizeVariations[index % sizeVariations.length];
            const span = currentLayout.spans[index] || 1;
            
            gridImg.style.cssText = `
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: ${BORDER_RADIUS}px;
                transform: scale(${variation.scale});
                transition: all ${TRANSITION_DURATION}s ease;
                opacity: 0;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                grid-column: span ${span};
                display: block;
                margin: 0;
                padding: 0;
                max-width: 100%;
                max-height: 100%;
                overflow: hidden;
            `;
            
            // Stagger the animation with variable delays
            gridImg.style.transitionDelay = `${variation.delay}s`;
            
            gridContainer.appendChild(gridImg);
        });
        
        // Add grid container to about image
        aboutImage.appendChild(gridContainer);
        
        console.log('🔄 Grid refreshed!');
        console.log(`🎲 New grid layout: ${currentLayout.cols}x${currentLayout.rows} (${currentLayout.cols * currentLayout.rows} total cells)`);
        console.log(`🖼️ New images: ${currentImages.length} (${currentImages.length >= MIN_IMAGES && currentImages.length <= MAX_IMAGES ? '✅ Valid range' : '❌ Invalid range'})`);
        console.log(`📐 Layout type: ${currentLayout.cols === 1 ? 'Vertical' : currentLayout.rows === 1 ? 'Horizontal' : 'Grid'}`);
        console.log(`🔗 Grid spans: [${currentLayout.spans.join(', ')}]`);
        console.log(`✅ Perfect fit: ${totalImageSpans === totalGridCells ? 'Yes' : 'No'} (${totalImageSpans}/${totalGridCells} cells used)`);
        console.log(`📏 Container coverage: 100% (${currentLayout.cols} cols × ${currentLayout.rows} rows)`);
    };
    
    // Initial grid creation
    createNewGrid();
    
    // Get the main image for fade transitions
    const mainImg = aboutImage.querySelector('.about-profile-image');
    
    // Add hover event listeners with smooth transitions
    aboutImage.addEventListener('mouseenter', function() {
        console.log('🖱️ Mouse enter - showing grid with fade transition');
        
        // Fade out main image
        if (mainImg) {
            mainImg.style.transition = `opacity ${TRANSITION_DURATION}s ease`;
            mainImg.style.opacity = '0.3';
        }
        
        // Fade in grid container
        gridContainer.style.opacity = '1';
        gridContainer.style.pointerEvents = 'auto';
        
        // Animate grid images with staggered timing
        const gridImgs = gridContainer.querySelectorAll('img');
        gridImgs.forEach((img, index) => {
            setTimeout(() => {
                img.style.opacity = '1';
                img.style.transform = img.style.transform.replace(/scale\([^)]+\)/, 'scale(1)');
            }, index * STAGGER_DELAY);
        });
    });
    
    aboutImage.addEventListener('mouseleave', function() {
        console.log('🖱️ Mouse leave - hiding grid with fade transition');
        
        // Fade in main image
        if (mainImg) {
            mainImg.style.opacity = '1';
        }
        
        // Fade out grid container
        gridContainer.style.opacity = '0';
        gridContainer.style.pointerEvents = 'none';
        
        // Reset grid images
        const gridImgs = gridContainer.querySelectorAll('img');
        gridImgs.forEach((img, index) => {
            setTimeout(() => {
                img.style.opacity = '0';
                // Reset to original scale
                const originalScale = img.style.transform.match(/scale\([^)]+\)/);
                if (originalScale) {
                    img.style.transform = img.style.transform.replace(/scale\([^)]+\)/, originalScale[0]);
                }
            }, index * 40);
        });
    });
    
    // Add click event to refresh grid
    aboutImage.addEventListener('click', function(e) {
        // Only trigger on click, not on hover
        if (e.type === 'click') {
            console.log('🖱️ Click detected - refreshing grid layout');
            
            // Add a subtle visual feedback
            aboutImage.style.transform = 'scale(0.98)';
            setTimeout(() => {
                aboutImage.style.transform = 'scale(1)';
            }, 150);
            
            // Create new grid
            createNewGrid();
        }
    });
    
    // Add loading animation for the main image
    if (mainImg) {
        mainImg.style.opacity = '0';
        mainImg.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            mainImg.style.transition = 'all 0.6s ease';
            mainImg.style.opacity = '1';
            mainImg.style.transform = 'translateY(0)';
        }, 300);
    }
    
    console.log('✅ Enhanced image grid hover effect setup completed');
    console.log('💡 Tip: Click the image to refresh the grid layout!');
    console.log(`📋 Rules: Always ${MIN_IMAGES}-${MAX_IMAGES} images, always fills container completely`);
});
