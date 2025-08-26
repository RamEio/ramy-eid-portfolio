// Interactive Photography Mosaic
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 Starting interactive photography mosaic...');
    
    const mosaicContainer = document.querySelector('.photography-mosaic');
    if (!mosaicContainer) {
        console.error('❌ Photography mosaic container not found');
        return;
    }
    
    console.log('✅ Found photography mosaic container');
    
    // Available images for the mosaic
    const allMosaicImages = [
        'assets/photography-mosaic/landscape.jpg',
        'assets/photography-mosaic/portrait.jpg',
        'assets/photography-mosaic/street.jpg',
        'assets/photography-mosaic/architecture.jpg',
        'assets/photography-mosaic/nature.jpg',
        'assets/photography-mosaic/travel.jpg',
        'assets/photography-mosaic/event.jpg',
        'assets/photography-mosaic/abstract.jpg',
        'assets/photography-mosaic/lioness.JPG',
        'assets/photography-mosaic/girafe.JPG',
        'assets/photography-mosaic/leopard.JPG',
        'assets/photography-mosaic/monkey.JPG',
        'assets/photography-mosaic/HardelotCastle.JPEG',
        'assets/photography-mosaic/Horses in sunset.JPEG',
        'assets/photography-mosaic/IMG_5198.JPG',
        'assets/photography-mosaic/IMG_0024.JPG_compressed.JPEG',
        'assets/photography-mosaic/IMG_3022.JPG_compressed.JPEG',
        'assets/photography-mosaic/IMG_4464.JPG_compressed.JPEG',
        'assets/photography-mosaic/IMG_5146.JPEG_compressed.JPEG',
        'assets/photography-mosaic/IMG_1841.JPG_compressed.JPEG',
        'assets/photography-mosaic/P1001472.JPG_compressed.JPEG',
        'assets/photography-mosaic/P1001654.JPG_compressed.JPEG',
        'assets/photography-mosaic/P1001683.JPG_compressed.JPEG',
        'assets/photography-mosaic/P1001697.JPG_compressed.JPEG',
        'assets/photography-mosaic/P1001897.JPG_compressed.JPEG',
        'assets/photography-mosaic/P1001977.JPG_compressed.JPEG',
        'assets/photography-mosaic/P1014925.JPG_compressed.JPEG',
        'assets/photography-mosaic/Plane.JPEG',
        'assets/photography-mosaic/Planje2.JPEG'
    ];
    
    // Grid layout configurations for 3x3 grid
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
    
    // Function to create new mosaic layout
    const createNewMosaic = () => {
        // Select random layout
        currentLayout = gridLayouts[Math.floor(Math.random() * gridLayouts.length)];
        
        // Select random images (5 images for 3x3 grid)
        const shuffledImages = allMosaicImages.sort(() => Math.random() - 0.5);
        currentImages = shuffledImages.slice(0, 5);
        
        // Clear existing mosaic items
        mosaicContainer.innerHTML = '';
        
        // Create new mosaic items
        currentLayout.areas.forEach((area, index) => {
            const mosaicItem = document.createElement('div');
            mosaicItem.className = `mosaic-item ${area.class}`;
            mosaicItem.style.gridArea = area.gridArea;
            
            const img = document.createElement('img');
            img.src = currentImages[index];
            img.alt = `Photography ${index + 1}`;
            img.loading = 'lazy';
            
            const overlay = document.createElement('div');
            overlay.className = 'mosaic-overlay';
            
            // Add random titles and descriptions
            const titles = ['Landscape', 'Portrait', 'Wildlife', 'Architecture', 'Travel', 'Nature', 'Street', 'Event', 'Abstract', 'Aviation'];
            const descriptions = ['Capturing moments', 'Visual storytelling', 'Natural beauty', 'Urban life', 'Adventure', 'Creative vision', 'Human stories', 'Special moments', 'Artistic expression', 'Sky adventures'];
            
            const title = titles[Math.floor(Math.random() * titles.length)];
            const description = descriptions[Math.floor(Math.random() * descriptions.length)];
            
            overlay.innerHTML = `
                <h3>${title}</h3>
                <p>${description}</p>
            `;
            
            mosaicItem.appendChild(img);
            mosaicItem.appendChild(overlay);
            mosaicContainer.appendChild(mosaicItem);
        });
        
        console.log('🔄 Mosaic refreshed!');
        console.log(`🎲 New layout: ${currentLayout.name}`);
        console.log(`🖼️ Images: ${currentImages.length}`);
    };
    
    // Initial mosaic creation
    createNewMosaic();
    
    // Add click event listener
    mosaicContainer.addEventListener('click', function(e) {
        console.log('🖱️ Click detected - refreshing mosaic layout');
        
        // Add visual feedback
        mosaicContainer.classList.add('clicked');
        setTimeout(() => {
            mosaicContainer.classList.remove('clicked');
        }, 150);
        
        // Create new mosaic
        createNewMosaic();
    });
    
    // Add hover effects for individual items
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
    
    console.log('✅ Interactive photography mosaic setup completed');
    console.log('💡 Tip: Click the mosaic to refresh the layout!');
});
