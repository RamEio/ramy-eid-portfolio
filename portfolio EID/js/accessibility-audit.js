#!/usr/bin/env node

/**
 * Accessibility Audit Script
 * Comprehensive accessibility testing and WCAG compliance checking
 * Analyzes HTML files for accessibility issues
 */

const fs = require('fs');
const path = require('path');

class AccessibilityAuditor {
    constructor() {
        this.results = {
            htmlFiles: [],
            issues: [],
            compliance: {
                wcag2a: { passed: 0, failed: 0, total: 0 },
                wcag2aa: { passed: 0, failed: 0, total: 0 },
                wcag2aaa: { passed: 0, failed: 0, total: 0 }
            },
            summary: {}
        };
    }
    
    // Find HTML files
    findHTMLFiles(directory = 'portfolio EID') {
        console.log('🔍 Finding HTML files...');
        
        const htmlFiles = [];
        
        const walkDir = (dir) => {
            const files = fs.readdirSync(dir);
            
            files.forEach(file => {
                const filePath = path.join(dir, file);
                const stat = fs.statSync(filePath);
                
                if (stat.isDirectory()) {
                    if (!['node_modules', '.git', '.DS_Store'].includes(file)) {
                        walkDir(filePath);
                    }
                } else if (path.extname(file).toLowerCase() === '.html') {
                    htmlFiles.push(filePath);
                }
            });
        };
        
        walkDir(directory);
        
        this.results.htmlFiles = htmlFiles;
        console.log(`✅ Found ${htmlFiles.length} HTML files`);
        return htmlFiles;
    }
    
    // Audit a single HTML file
    auditHTMLFile(filePath) {
        console.log(`🔍 Auditing: ${path.basename(filePath)}`);
        
        const content = fs.readFileSync(filePath, 'utf8');
        const issues = [];
        
        // Check for common accessibility issues
        const checks = [
            {
                name: 'Document Language',
                pattern: /<html[^>]*lang=["']([^"']+)["']/i,
                required: true,
                level: 'wcag2a',
                description: 'HTML document must have a lang attribute'
            },
            {
                name: 'Page Title',
                pattern: /<title[^>]*>([^<]+)<\/title>/i,
                required: true,
                level: 'wcag2a',
                description: 'Page must have a descriptive title'
            },
            {
                name: 'Skip Links',
                pattern: /<a[^>]*class=["'][^"']*skip[^"']*["'][^>]*>/i,
                required: true,
                level: 'wcag2a',
                description: 'Page should have skip navigation links'
            },
            {
                name: 'Alt Text for Images',
                pattern: /<img[^>]*alt=["']([^"']+)["'][^>]*>/gi,
                required: false,
                level: 'wcag2a',
                description: 'Images should have alt text',
                checkFunction: (matches) => {
                    if (matches.length === 0) return false;
                    return matches.every(match => match[1] && match[1].trim().length > 0);
                }
            },
            {
                name: 'Form Labels',
                pattern: /<input[^>]*id=["']([^"']+)["'][^>]*>/gi,
                required: false,
                level: 'wcag2a',
                description: 'Form inputs should have associated labels',
                checkFunction: (matches) => {
                    if (matches.length === 0) return true;
                    return matches.every(match => {
                        const id = match[1];
                        const labelPattern = new RegExp(`<label[^>]*for=["']${id}["'][^>]*>`, 'i');
                        return labelPattern.test(content);
                    });
                }
            },
            {
                name: 'Heading Structure',
                pattern: /<h([1-6])[^>]*>/gi,
                required: true,
                level: 'wcag2aa',
                description: 'Page should have proper heading hierarchy',
                checkFunction: (matches) => {
                    if (matches.length === 0) return false;
                    const headings = matches.map(match => parseInt(match[1])).sort();
                    let currentLevel = 0;
                    
                    for (const level of headings) {
                        if (level > currentLevel + 1) {
                            return false; // Skip levels
                        }
                        currentLevel = level;
                    }
                    return true;
                }
            },
            {
                name: 'Color Contrast',
                pattern: /color:\s*#[0-9a-fA-F]{3,6}/gi,
                required: false,
                level: 'wcag2aa',
                description: 'Text should have sufficient color contrast',
                warning: 'Manual color contrast verification required'
            },
            {
                name: 'Keyboard Navigation',
                pattern: /tabindex=["'](-?[0-9]+)["']/gi,
                required: false,
                level: 'wcag2aa',
                description: 'Elements should be keyboard accessible',
                checkFunction: (matches) => {
                    return matches.every(match => parseInt(match[1]) >= 0);
                }
            },
            {
                name: 'ARIA Labels',
                pattern: /aria-label=["']([^"']+)["']/gi,
                required: false,
                level: 'wcag2aa',
                description: 'Complex elements should have ARIA labels',
                positive: true
            },
            {
                name: 'Focus Indicators',
                pattern: /:focus\s*{/gi,
                required: false,
                level: 'wcag2aa',
                description: 'Focus indicators should be visible',
                positive: true
            }
        ];
        
        checks.forEach(check => {
            const matches = content.match(check.pattern);
            let passed = false;
            
            if (check.checkFunction) {
                passed = check.checkFunction(matches || []);
            } else if (check.required) {
                passed = matches && matches.length > 0;
            } else if (check.positive) {
                passed = matches && matches.length > 0;
            } else {
                passed = true; // Optional checks pass by default
            }
            
            if (!passed) {
                issues.push({
                    file: path.basename(filePath),
                    check: check.name,
                    level: check.level,
                    description: check.description,
                    warning: check.warning || null
                });
                
                this.results.compliance[check.level].failed++;
            } else {
                this.results.compliance[check.level].passed++;
            }
            
            this.results.compliance[check.level].total++;
        });
        
        return issues;
    }
    
    // Run complete accessibility audit
    async runCompleteAudit() {
        console.log('🚀 Starting comprehensive accessibility audit...\n');
        
        // Find HTML files
        const htmlFiles = this.findHTMLFiles();
        
        // Audit each file
        htmlFiles.forEach(filePath => {
            const issues = this.auditHTMLFile(filePath);
            this.results.issues.push(...issues);
        });
        
        // Generate summary
        this.generateSummary();
        
        // Save report
        this.saveReport();
        
        // Print results
        this.printResults();
        
        return this.results;
    }
    
    // Generate audit summary
    generateSummary() {
        const totalIssues = this.results.issues.length;
        const totalChecks = Object.values(this.results.compliance).reduce((sum, level) => sum + level.total, 0);
        const totalPassed = Object.values(this.results.compliance).reduce((sum, level) => sum + level.passed, 0);
        
        this.results.summary = {
            totalFiles: this.results.htmlFiles.length,
            totalIssues: totalIssues,
            totalChecks: totalChecks,
            totalPassed: totalPassed,
            complianceRate: totalChecks > 0 ? ((totalPassed / totalChecks) * 100).toFixed(1) : 0,
            wcag2aCompliance: this.calculateComplianceRate('wcag2a'),
            wcag2aaCompliance: this.calculateComplianceRate('wcag2aa'),
            wcag2aaaCompliance: this.calculateComplianceRate('wcag2aaa')
        };
    }
    
    // Calculate compliance rate for a level
    calculateComplianceRate(level) {
        const levelData = this.results.compliance[level];
        return levelData.total > 0 ? ((levelData.passed / levelData.total) * 100).toFixed(1) : 0;
    }
    
    // Save audit report
    saveReport() {
        const reportPath = path.join('portfolio EID', 'accessibility-report.json');
        fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
        console.log('✅ Accessibility report saved');
    }
    
    // Print audit results
    printResults() {
        console.log('\n🎯 ACCESSIBILITY AUDIT RESULTS:');
        console.log('='.repeat(60));
        
        console.log(`📁 Files Audited: ${this.results.summary.totalFiles}`);
        console.log(`🔍 Total Checks: ${this.results.summary.totalChecks}`);
        console.log(`✅ Passed: ${this.results.summary.totalPassed}`);
        console.log(`❌ Issues Found: ${this.results.summary.totalIssues}`);
        console.log(`📊 Overall Compliance: ${this.results.summary.complianceRate}%`);
        
        console.log('\n📋 WCAG COMPLIANCE:');
        console.log('-'.repeat(40));
        console.log(`WCAG 2.1 A: ${this.results.summary.wcag2aCompliance}%`);
        console.log(`WCAG 2.1 AA: ${this.results.summary.wcag2aaCompliance}%`);
        console.log(`WCAG 2.1 AAA: ${this.results.summary.wcag2aaaCompliance}%`);
        
        if (this.results.issues.length > 0) {
            console.log('\n❌ ISSUES FOUND:');
            console.log('-'.repeat(40));
            
            this.results.issues.forEach((issue, index) => {
                console.log(`${index + 1}. ${issue.file} - ${issue.check} (${issue.level.toUpperCase()})`);
                console.log(`   ${issue.description}`);
                if (issue.warning) {
                    console.log(`   ⚠️  ${issue.warning}`);
                }
                console.log('');
            });
        } else {
            console.log('\n✅ No accessibility issues found!');
        }
        
        console.log('\n💡 RECOMMENDATIONS:');
        console.log('-'.repeat(40));
        
        if (this.results.summary.complianceRate < 90) {
            console.log('1. Address critical accessibility issues');
            console.log('2. Implement missing ARIA labels');
            console.log('3. Ensure proper heading hierarchy');
            console.log('4. Add alt text to all images');
        } else {
            console.log('1. Excellent accessibility! Consider advanced features');
            console.log('2. Implement skip links for complex pages');
            console.log('3. Add ARIA live regions for dynamic content');
            console.log('4. Test with screen readers');
        }
        
        console.log('\n✅ Accessibility audit complete!');
    }
}

// Run audit if called directly
if (require.main === module) {
    const auditor = new AccessibilityAuditor();
    auditor.runCompleteAudit();
}

module.exports = AccessibilityAuditor;
