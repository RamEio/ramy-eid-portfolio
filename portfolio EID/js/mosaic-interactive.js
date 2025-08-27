// Interactive Photography Mosaic
document.addEventListener('DOMContentLoaded', function() {
           // Interactive Photography Mosaic - Production Ready
    
               const mosaicContainer = document.querySelector('.photography-mosaic-fullpage');
                      if (!mosaicContainer) {
           return; // Container not found
       }
    
    // Available images for the mosaic (Only manually added photos)
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
        'assets/hobbies/photography-mosaic/IMG_6825.jpg',
        'assets/hobbies/photography-mosaic/IMG_0919.jpg',
        
        // All your P100/P101 photos
        'assets/hobbies/photography-mosaic/P1001472.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/P1001654.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/P1001683.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/P1001697.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/P1001897.JPG_compressed.JPEG',
        'assets/hobbies/photography-mosaic/P1001977.JPG_compressed.JPEG',
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
            img.alt = `Photography work`;
            img.loading = 'lazy';
            
            mosaicItem.appendChild(img);
            mosaicContainer.appendChild(mosaicItem);
        });
        
                   // Mosaic refreshed with new layout and images
    };
    
    // Initial mosaic creation
    createNewMosaic();
    
    // Add click event listener
    mosaicContainer.addEventListener('click', function(e) {
                   // Click detected - refreshing mosaic layout
        
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
    
               // Interactive photography mosaic setup completed
});
