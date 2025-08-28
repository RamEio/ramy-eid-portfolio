#!/usr/bin/env node

/**
 * Image Compression Script
 * Compresses large images to improve loading performance
 * Uses sips (macOS) for image compression
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class ImageCompressor {
    constructor() {
        this.compressedImages = [];
        this.failedImages = [];
        this.totalSizeBefore = 0;
        this.totalSizeAfter = 0;
    }
    
    // Compress a single image
    compressImage(inputPath, quality = 85) {
        try {
            const stats = fs.statSync(inputPath);
            const sizeBefore = stats.size;
            
            // Create backup
            const backupPath = inputPath + '.backup';
            fs.copyFileSync(inputPath, backupPath);
            
            // Compress using sips
            const command = `sips -s format jpeg -s formatOptions ${quality} "${inputPath}" --out "${inputPath}"`;
            execSync(command, { stdio: 'pipe' });
            
            // Check new size
            const newStats = fs.statSync(inputPath);
            const sizeAfter = newStats.size;
            const compressionRatio = ((sizeBefore - sizeAfter) / sizeBefore * 100).toFixed(1);
            
            this.compressedImages.push({
                path: inputPath,
                sizeBefore: sizeBefore,
                sizeAfter: sizeAfter,
                compressionRatio: compressionRatio
            });
            
            this.totalSizeBefore += sizeBefore;
            this.totalSizeAfter += sizeAfter;
            
            console.log(`✅ Compressed: ${path.basename(inputPath)} - ${(sizeBefore/1024/1024).toFixed(1)}MB → ${(sizeAfter/1024/1024).toFixed(1)}MB (${compressionRatio}% reduction)`);
            
            return true;
        } catch (error) {
            console.error(`❌ Failed to compress: ${inputPath} - ${error.message}`);
            this.failedImages.push(inputPath);
            return false;
        }
    }
    
    // Find and compress large images
    async compressLargeImages(directory = 'portfolio EID/assets', minSizeMB = 1) {
        console.log(`🔍 Scanning for images larger than ${minSizeMB}MB in ${directory}...`);
        
        const largeImages = this.findLargeImages(directory, minSizeMB);
        
        if (largeImages.length === 0) {
            console.log('✅ No large images found to compress');
            return;
        }
        
        console.log(`📦 Found ${largeImages.length} large images to compress:`);
        largeImages.forEach(img => {
            const stats = fs.statSync(img);
            console.log(`  - ${path.basename(img)} (${(stats.size/1024/1024).toFixed(1)}MB)`);
        });
        
        console.log('\n🚀 Starting compression...\n');
        
        // Compress images
        largeImages.forEach(img => {
            this.compressImage(img, 85);
        });
        
        this.printSummary();
    }
    
    // Find images larger than specified size
    findLargeImages(directory, minSizeMB) {
        const largeImages = [];
        const minSizeBytes = minSizeMB * 1024 * 1024;
        
        const walkDir = (dir) => {
            const files = fs.readdirSync(dir);
            
            files.forEach(file => {
                const filePath = path.join(dir, file);
                const stat = fs.statSync(filePath);
                
                if (stat.isDirectory()) {
                    walkDir(filePath);
                } else if (this.isImageFile(file) && stat.size > minSizeBytes) {
                    largeImages.push(filePath);
                }
            });
        };
        
        walkDir(directory);
        return largeImages;
    }
    
    // Check if file is an image
    isImageFile(filename) {
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];
        const ext = path.extname(filename).toLowerCase();
        return imageExtensions.includes(ext);
    }
    
    // Print compression summary
    printSummary() {
        console.log('\n📊 COMPRESSION SUMMARY:');
        console.log('='.repeat(50));
        
        if (this.compressedImages.length > 0) {
            const totalCompressionRatio = ((this.totalSizeBefore - this.totalSizeAfter) / this.totalSizeBefore * 100).toFixed(1);
            
            console.log(`✅ Successfully compressed: ${this.compressedImages.length} images`);
            console.log(`📦 Total size before: ${(this.totalSizeBefore/1024/1024).toFixed(1)}MB`);
            console.log(`📦 Total size after: ${(this.totalSizeAfter/1024/1024).toFixed(1)}MB`);
            console.log(`🎯 Overall compression: ${totalCompressionRatio}%`);
            console.log(`💾 Space saved: ${((this.totalSizeBefore - this.totalSizeAfter)/1024/1024).toFixed(1)}MB`);
        }
        
        if (this.failedImages.length > 0) {
            console.log(`❌ Failed to compress: ${this.failedImages.length} images`);
            this.failedImages.forEach(img => {
                console.log(`  - ${path.basename(img)}`);
            });
        }
    }
}

// Run compression if called directly
if (require.main === module) {
    const compressor = new ImageCompressor();
    compressor.compressLargeImages('portfolio EID/assets', 1);
}

module.exports = ImageCompressor;
