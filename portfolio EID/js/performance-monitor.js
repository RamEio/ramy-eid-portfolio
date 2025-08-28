/**
 * Performance Monitor
 * Monitors Core Web Vitals and loading performance
 * Provides real-time performance metrics
 */

class PerformanceMonitor {
    constructor() {
        this.metrics = {
            navigation: null,
            paint: {},
            layout: {},
            resources: [],
            webVitals: {}
        };
        
        this.init();
    }
    
    init() {
        console.log('📊 PerformanceMonitor: Initializing...');
        
        // Wait for page to load
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.startMonitoring();
            });
        } else {
            this.startMonitoring();
        }
        
        // Monitor after page is fully loaded
        window.addEventListener('load', () => {
            this.captureLoadMetrics();
        });
    }
    
    startMonitoring() {
        this.captureNavigationMetrics();
        this.capturePaintMetrics();
        this.captureResourceMetrics();
        this.captureWebVitals();
        
        console.log('📊 PerformanceMonitor: Monitoring started');
    }
    
    captureNavigationMetrics() {
        if ('performance' in window && 'navigation' in performance) {
            this.metrics.navigation = performance.navigation;
            console.log('📊 Navigation metrics captured');
        }
    }
    
    capturePaintMetrics() {
        if ('performance' in window && 'getEntriesByType' in performance) {
            const paintEntries = performance.getEntriesByType('paint');
            
            paintEntries.forEach(entry => {
                this.metrics.paint[entry.name] = entry.startTime;
            });
            
            console.log('📊 Paint metrics captured:', this.metrics.paint);
        }
    }
    
    captureResourceMetrics() {
        if ('performance' in window && 'getEntriesByType' in performance) {
            const resourceEntries = performance.getEntriesByType('resource');
            
            this.metrics.resources = resourceEntries.map(entry => ({
                name: entry.name,
                duration: entry.duration,
                size: entry.transferSize || 0,
                type: entry.initiatorType
            }));
            
            console.log(`📊 Resource metrics captured: ${this.metrics.resources.length} resources`);
        }
    }
    
    captureWebVitals() {
        // LCP (Largest Contentful Paint)
        this.observeLCP();
        
        // FID (First Input Delay)
        this.observeFID();
        
        // CLS (Cumulative Layout Shift)
        this.observeCLS();
    }
    
    observeLCP() {
        if ('PerformanceObserver' in window) {
            try {
                const lcpObserver = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    
                    this.metrics.webVitals.lcp = lastEntry.startTime;
                    console.log(`📊 LCP: ${lastEntry.startTime.toFixed(2)}ms`);
                });
                
                lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
            } catch (error) {
                console.warn('📊 LCP observation not supported');
            }
        }
    }
    
    observeFID() {
        if ('PerformanceObserver' in window) {
            try {
                const fidObserver = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach(entry => {
                        this.metrics.webVitals.fid = entry.processingStart - entry.startTime;
                        console.log(`📊 FID: ${this.metrics.webVitals.fid.toFixed(2)}ms`);
                    });
                });
                
                fidObserver.observe({ entryTypes: ['first-input'] });
            } catch (error) {
                console.warn('📊 FID observation not supported');
            }
        }
    }
    
    observeCLS() {
        if ('PerformanceObserver' in window) {
            try {
                let clsValue = 0;
                const clsObserver = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach(entry => {
                        if (!entry.hadRecentInput) {
                            clsValue += entry.value;
                        }
                    });
                    
                    this.metrics.webVitals.cls = clsValue;
                    console.log(`📊 CLS: ${clsValue.toFixed(4)}`);
                });
                
                clsObserver.observe({ entryTypes: ['layout-shift'] });
            } catch (error) {
                console.warn('📊 CLS observation not supported');
            }
        }
    }
    
    captureLoadMetrics() {
        // DOM Content Loaded
        const domContentLoaded = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
        
        // Page Load Complete
        const pageLoad = performance.timing.loadEventEnd - performance.timing.navigationStart;
        
        this.metrics.load = {
            domContentLoaded,
            pageLoad
        };
        
        console.log(`📊 Load metrics: DOMContentLoaded=${domContentLoaded}ms, PageLoad=${pageLoad}ms`);
        
        // Generate performance report
        this.generateReport();
    }
    
    generateReport() {
        const report = {
            timestamp: new Date().toISOString(),
            url: window.location.href,
            userAgent: navigator.userAgent,
            metrics: this.metrics,
            summary: this.generateSummary()
        };
        
        console.log('📊 PERFORMANCE REPORT:', report);
        
        // Store in localStorage for later analysis
        try {
            const reports = JSON.parse(localStorage.getItem('performanceReports') || '[]');
            reports.push(report);
            localStorage.setItem('performanceReports', JSON.stringify(reports.slice(-10))); // Keep last 10 reports
        } catch (error) {
            console.warn('📊 Could not save performance report');
        }
        
        return report;
    }
    
    generateSummary() {
        const summary = {
            totalResources: this.metrics.resources.length,
            totalResourceSize: this.metrics.resources.reduce((sum, r) => sum + r.size, 0),
            averageResourceLoadTime: this.metrics.resources.reduce((sum, r) => sum + r.duration, 0) / this.metrics.resources.length,
            webVitals: {
                lcp: this.metrics.webVitals.lcp,
                fid: this.metrics.webVitals.fid,
                cls: this.metrics.webVitals.cls
            }
        };
        
        // Performance grades
        summary.grades = {
            lcp: this.gradeLCP(summary.webVitals.lcp),
            fid: this.gradeFID(summary.webVitals.fid),
            cls: this.gradeCLS(summary.webVitals.cls)
        };
        
        return summary;
    }
    
    gradeLCP(lcp) {
        if (lcp < 2500) return 'Good';
        if (lcp < 4000) return 'Needs Improvement';
        return 'Poor';
    }
    
    gradeFID(fid) {
        if (fid < 100) return 'Good';
        if (fid < 300) return 'Needs Improvement';
        return 'Poor';
    }
    
    gradeCLS(cls) {
        if (cls < 0.1) return 'Good';
        if (cls < 0.25) return 'Needs Improvement';
        return 'Poor';
    }
    
    // Public API
    getMetrics() {
        return this.metrics;
    }
    
    getReport() {
        return this.generateReport();
    }
    
    // Export metrics for external analysis
    exportMetrics() {
        return {
            metrics: this.metrics,
            summary: this.generateSummary(),
            timestamp: new Date().toISOString()
        };
    }
}

// Auto-initialization
if (typeof window !== 'undefined') {
    window.performanceMonitor = new PerformanceMonitor();
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PerformanceMonitor;
}
