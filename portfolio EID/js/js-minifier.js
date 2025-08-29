#!/usr/bin/env node

/**
 * JavaScript Minifier
 * Minifies JavaScript files to reduce file sizes and improve loading performance
 */

const fs = require('fs');
const path = require('path');

class JSMinifier {
    constructor() {
        this.minifiedFiles = [];
        this.failedFiles = [];
        this.totalSizeBefore = 0;
        this.totalSizeAfter = 0;
    }
    
    // Minify a single JavaScript file
    minifyJS(inputPath) {
        try {
            const content = fs.readFileSync(inputPath, 'utf8');
            const sizeBefore = Buffer.byteLength(content, 'utf8');
            
            // Create backup
            const backupPath = inputPath + '.backup';
            fs.copyFileSync(inputPath, backupPath);
            
            // Minify JavaScript
            const minified = this.minifyJSContent(content);
            
            // Write minified content
            fs.writeFileSync(inputPath, minified);
            
            const sizeAfter = Buffer.byteLength(minified, 'utf8');
            const compressionRatio = ((sizeBefore - sizeAfter) / sizeBefore * 100).toFixed(1);
            
            this.minifiedFiles.push({
                path: inputPath,
                sizeBefore: sizeBefore,
                sizeAfter: sizeAfter,
                compressionRatio: compressionRatio
            });
            
            this.totalSizeBefore += sizeBefore;
            this.totalSizeAfter += sizeAfter;
            
            console.log(`✅ Minified: ${path.basename(inputPath)} - ${(sizeBefore/1024).toFixed(1)}KB → ${(sizeAfter/1024).toFixed(1)}KB (${compressionRatio}% reduction)`);
            
            return true;
        } catch (error) {
            console.error(`❌ Failed to minify: ${inputPath} - ${error.message}`);
            this.failedFiles.push(inputPath);
            return false;
        }
    }
    
    // Minify JavaScript content
    minifyJSContent(js) {
        return js
            // Remove single-line comments (but preserve URLs and important comments)
            .replace(/(?<!:)\/\/.*$/gm, '')
            // Remove multi-line comments (but preserve important ones)
            .replace(/\/\*[\s\S]*?\*\//g, '')
            // Remove unnecessary whitespace
            .replace(/\s+/g, ' ')
            // Remove whitespace around operators
            .replace(/\s*([{}:;,=+\-*/<>!&|()])\s*/g, '$1')
            // Remove trailing semicolons before closing braces
            .replace(/;}/g, '}')
            // Remove leading/trailing whitespace
            .trim();
    }
    
    // Find and minify all JavaScript files
    async minifyAllJS(directory = 'portfolio EID/js') {
        console.log(`🔍 Scanning for JavaScript files in ${directory}...`);
        
        const jsFiles = this.findJSFiles(directory);
        
        if (jsFiles.length === 0) {
            console.log('✅ No JavaScript files found to minify');
            return;
        }
        
        console.log(`📦 Found ${jsFiles.length} JavaScript files to minify:`);
        jsFiles.forEach(file => {
            const stats = fs.statSync(file);
            console.log(`  - ${path.basename(file)} (${(stats.size/1024).toFixed(1)}KB)`);
        });
        
        console.log('\n🚀 Starting minification...\n');
        
        // Minify files
        jsFiles.forEach(file => {
            this.minifyJS(file);
        });
        
        this.printSummary();
    }
    
    // Find JavaScript files
    findJSFiles(directory) {
        const jsFiles = [];
        
        const walkDir = (dir) => {
            const files = fs.readdirSync(dir);
            
            files.forEach(file => {
                const filePath = path.join(dir, file);
                const stat = fs.statSync(filePath);
                
                if (stat.isDirectory()) {
                    // Skip production and archive directories
                    if (!['production', 'archive'].includes(file)) {
                        walkDir(filePath);
                    }
                } else if (path.extname(file).toLowerCase() === '.js') {
                    // Skip minification scripts and backup files
                    if (!file.includes('minifier') && !file.includes('compression') && !file.endsWith('.backup')) {
                        jsFiles.push(filePath);
                    }
                }
            });
        };
        
        walkDir(directory);
        return jsFiles;
    }
    
    // Print minification summary
    printSummary() {
        console.log('\n📊 MINIFICATION SUMMARY:');
        console.log('='.repeat(50));
        
        if (this.minifiedFiles.length > 0) {
            const totalCompressionRatio = ((this.totalSizeBefore - this.totalSizeAfter) / this.totalSizeBefore * 100).toFixed(1);
            
            console.log(`✅ Successfully minified: ${this.minifiedFiles.length} files`);
            console.log(`📦 Total size before: ${(this.totalSizeBefore/1024).toFixed(1)}KB`);
            console.log(`📦 Total size after: ${(this.totalSizeAfter/1024).toFixed(1)}KB`);
            console.log(`🎯 Overall compression: ${totalCompressionRatio}%`);
            console.log(`💾 Space saved: ${((this.totalSizeBefore - this.totalSizeAfter)/1024).toFixed(1)}KB`);
        }
        
        if (this.failedFiles.length > 0) {
            console.log(`❌ Failed to minify: ${this.failedFiles.length} files`);
            this.failedFiles.forEach(file => {
                console.log(`  - ${path.basename(file)}`);
            });
        }
    }
}

// Run minification if called directly
if (require.main === module) {
    const minifier = new JSMinifier();
    minifier.minifyAllJS('portfolio EID/js');
}

module.exports = JSMinifier;
