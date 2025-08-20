#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MobileOptimizer {
    constructor() {
        this.assetsDir = 'website/assets';
        this.optimizedDir = 'website/assets/optimized';
        this.originalSizes = {};
        this.optimizedSizes = {};
        this.totalSavings = 0;
    }

    init() {
        console.log('🚀 Mobile Performance Optimization Starting...');
        this.ensureOptimizedDirectory();
        this.analyzeCurrentImages();
        this.optimizeImages();
        this.generateReport();
    }

    ensureOptimizedDirectory() {
        if (!fs.existsSync(this.optimizedDir)) {
            fs.mkdirSync(this.optimizedDir, { recursive: true });
            console.log('📁 Created optimized assets directory');
        }
    }

    analyzeCurrentImages() {
        console.log('\n📊 Analyzing current image sizes...');
        
        const homepageImages = [
            'LOGO EID.png',
            'profilePictureRamE.JPG',
            'conference.png',
            'murPostit.png',
            'wireframe.png',
            'IMG_3682.jpeg'
        ];

        homepageImages.forEach(image => {
            const imagePath = path.join(this.assetsDir, image);
            if (fs.existsSync(imagePath)) {
                const stats = fs.statSync(imagePath);
                this.originalSizes[image] = stats.size;
                console.log(`📸 ${image}: ${this.formatBytes(stats.size)}`);
            }
        });
    }

    optimizeImages() {
        console.log('\n⚡ Starting image optimization...');
        
        const optimizationTasks = [
            {
                input: 'profilePictureRamE.JPG',
                output: 'profilePictureRamE-optimized.jpg',
                quality: 85,
                maxWidth: 800,
                description: 'Profile picture - critical for first impression'
            },
            {
                input: 'IMG_3682.jpeg',
                output: 'IMG_3682-optimized.jpg',
                quality: 80,
                maxWidth: 600,
                description: 'About section image'
            },
            {
                input: 'conference.png',
                output: 'conference-optimized.png',
                quality: 90,
                maxWidth: 400,
                description: 'Project card image'
            },
            {
                input: 'murPostit.png',
                output: 'murPostit-optimized.png',
                quality: 90,
                maxWidth: 400,
                description: 'Project card image'
            },
            {
                input: 'wireframe.png',
                output: 'wireframe-optimized.png',
                quality: 90,
                maxWidth: 400,
                description: 'Project card image'
            },
            {
                input: 'LOGO EID.png',
                output: 'LOGO EID-optimized.png',
                quality: 95,
                maxWidth: 300,
                description: 'Logo - needs to remain crisp'
            }
        ];

        optimizationTasks.forEach(task => {
            this.optimizeImage(task);
        });
    }

    optimizeImage(task) {
        const inputPath = path.join(this.assetsDir, task.input);
        const outputPath = path.join(this.optimizedDir, task.output);
        
        if (!fs.existsSync(inputPath)) {
            console.log(`⚠️  Skipping ${task.input} - file not found`);
            return;
        }

        try {
            // Use ImageMagick for optimization if available, otherwise use basic compression
            if (this.hasImageMagick()) {
                this.optimizeWithImageMagick(inputPath, outputPath, task);
            } else {
                this.optimizeWithBasicCompression(inputPath, outputPath, task);
            }

            // Calculate savings
            const originalSize = this.originalSizes[task.input] || 0;
            const optimizedSize = fs.statSync(outputPath).size;
            const savings = originalSize - optimizedSize;
            const savingsPercent = ((savings / originalSize) * 100).toFixed(1);

            this.optimizedSizes[task.output] = optimizedSize;
            this.totalSavings += savings;

            console.log(`✅ ${task.input} → ${task.output}`);
            console.log(`   📊 ${this.formatBytes(originalSize)} → ${this.formatBytes(optimizedSize)} (${savingsPercent}% reduction)`);
            console.log(`   🎯 ${task.description}`);

        } catch (error) {
            console.log(`❌ Failed to optimize ${task.input}: ${error.message}`);
        }
    }

    hasImageMagick() {
        try {
            execSync('which convert', { stdio: 'ignore' });
            return true;
        } catch {
            return false;
        }
    }

    optimizeWithImageMagick(inputPath, outputPath, task) {
        const quality = task.quality;
        const maxWidth = task.maxWidth;
        
        const command = `convert "${inputPath}" -resize ${maxWidth}x -quality ${quality} "${outputPath}"`;
        execSync(command, { stdio: 'ignore' });
    }

    optimizeWithBasicCompression(inputPath, outputPath, task) {
        // For now, just copy the file and note that manual optimization is needed
        fs.copyFileSync(inputPath, outputPath);
        console.log(`   ⚠️  Manual optimization recommended for ${task.input}`);
    }

    generateReport() {
        console.log('\n📈 Optimization Report');
        console.log('=====================');
        
        const totalOriginal = Object.values(this.originalSizes).reduce((a, b) => a + b, 0);
        const totalOptimized = Object.values(this.optimizedSizes).reduce((a, b) => a + b, 0);
        const totalSavingsPercent = ((this.totalSavings / totalOriginal) * 100).toFixed(1);

        console.log(`📊 Total Original Size: ${this.formatBytes(totalOriginal)}`);
        console.log(`📊 Total Optimized Size: ${this.formatBytes(totalOptimized)}`);
        console.log(`💾 Total Savings: ${this.formatBytes(this.totalSavings)} (${totalSavingsPercent}%)`);

        // Calculate mobile loading improvement
        const estimatedLoadTimeOriginal = this.estimateLoadTime(totalOriginal);
        const estimatedLoadTimeOptimized = this.estimateLoadTime(totalOptimized);
        const timeSavings = estimatedLoadTimeOriginal - estimatedLoadTimeOptimized;

        console.log(`⏱️  Estimated Mobile Load Time:`);
        console.log(`   Before: ${estimatedLoadTimeOriginal.toFixed(1)}s`);
        console.log(`   After: ${estimatedLoadTimeOptimized.toFixed(1)}s`);
        console.log(`   Improvement: ${timeSavings.toFixed(1)}s faster`);

        // Generate optimization recommendations
        this.generateRecommendations();
    }

    estimateLoadTime(sizeInBytes) {
        // Rough estimation: 1MB = ~2 seconds on 3G connection
        const sizeInMB = sizeInBytes / (1024 * 1024);
        return sizeInMB * 2;
    }

    generateRecommendations() {
        console.log('\n🎯 Next Steps for Mobile Optimization:');
        console.log('=====================================');
        
        console.log('1. 📸 Replace original images with optimized versions');
        console.log('2. 🔄 Update HTML to use optimized image paths');
        console.log('3. 📱 Test mobile loading speed improvements');
        console.log('4. 🎨 Consider implementing WebP format for better compression');
        console.log('5. 📦 Implement proper lazy loading for all images');
        console.log('6. 🚀 Add image preloading for critical above-the-fold images');
        
        console.log('\n📁 Optimized images saved to: website/assets/optimized/');
        console.log('🔄 Update image paths in HTML files to use optimized versions');
    }

    formatBytes(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
}

// Run the optimizer
const optimizer = new MobileOptimizer();
optimizer.init();
