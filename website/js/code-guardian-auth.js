/**
 * 🛡️ Code Guardian - Authentication System
 * 
 * Basic authentication system for the Code Guardian dashboard
 * Provides password protection to prevent unauthorized access
 */

class CodeGuardianAuth {
    constructor() {
        this.isAuthenticated = false;
        this.maxAttempts = 3;
        this.attempts = 0;
        this.lockoutTime = 5 * 60 * 1000; // 5 minutes
        this.lockoutUntil = 0;
        
        // In production, this should be stored securely and not in code
        this.correctPassword = 'CodeGuardian2024!';
        
        this.init();
    }

    /**
     * Initialize authentication system
     */
    init() {
        console.log('🔐 Code Guardian Auth: Initializing authentication system...');
        
        // Check if already authenticated
        this.checkExistingAuth();
        
        // Set up authentication UI
        this.setupAuthUI();
        
        console.log('✅ Code Guardian Auth: Authentication system initialized');
    }

    /**
     * Check for existing authentication
     */
    checkExistingAuth() {
        const authToken = localStorage.getItem('codeGuardianAuth');
        const authTime = localStorage.getItem('codeGuardianAuthTime');
        
        if (authToken && authTime) {
            const authAge = Date.now() - parseInt(authTime);
            const sessionTimeout = 30 * 60 * 1000; // 30 minutes
            
            if (authAge < sessionTimeout) {
                this.isAuthenticated = true;
                console.log('🔐 Code Guardian Auth: Existing session found');
            } else {
                // Session expired
                localStorage.removeItem('codeGuardianAuth');
                localStorage.removeItem('codeGuardianAuthTime');
                console.log('🔐 Code Guardian Auth: Session expired');
            }
        }
    }

    /**
     * Set up authentication UI
     */
    setupAuthUI() {
        const dashboard = document.getElementById('dashboard-content');
        const authContainer = document.getElementById('auth-container');
        
        if (this.isAuthenticated) {
            // Show dashboard
            if (dashboard) dashboard.style.display = 'block';
            if (authContainer) authContainer.style.display = 'none';
        } else {
            // Show authentication form
            if (dashboard) dashboard.style.display = 'none';
            if (authContainer) authContainer.style.display = 'block';
            
            // Set up authentication form
            this.setupAuthForm();
        }
    }

    /**
     * Set up authentication form
     */
    setupAuthForm() {
        const authForm = document.getElementById('auth-form');
        if (authForm) {
            authForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin();
            });
        }
    }

    /**
     * Handle login attempt
     */
    handleLogin() {
        const passwordInput = document.getElementById('auth-password');
        const password = passwordInput.value;
        
        // Check if locked out
        if (this.isLockedOut()) {
            this.showError('Account temporarily locked. Please try again later.');
            return;
        }
        
        // Validate password
        if (this.validatePassword(password)) {
            this.authenticate();
        } else {
            this.handleFailedAttempt();
        }
        
        // Clear password field
        passwordInput.value = '';
    }

    /**
     * Check if account is locked out
     */
    isLockedOut() {
        return Date.now() < this.lockoutUntil;
    }

    /**
     * Validate password
     */
    validatePassword(password) {
        return password === this.correctPassword;
    }

    /**
     * Handle successful authentication
     */
    authenticate() {
        this.isAuthenticated = true;
        this.attempts = 0;
        
        // Store authentication token
        const authToken = this.generateAuthToken();
        localStorage.setItem('codeGuardianAuth', authToken);
        localStorage.setItem('codeGuardianAuthTime', Date.now().toString());
        
        // Show dashboard
        this.setupAuthUI();
        
        // Log successful authentication
        console.log('🔐 Code Guardian Auth: Authentication successful');
        
        // Show success message
        this.showSuccess('Authentication successful. Welcome to Code Guardian Dashboard.');
        
        // Initialize dashboard after authentication
        this.initializeDashboard();
    }

    /**
     * Handle failed login attempt
     */
    handleFailedAttempt() {
        this.attempts++;
        
        if (this.attempts >= this.maxAttempts) {
            // Lock out account
            this.lockoutUntil = Date.now() + this.lockoutTime;
            this.showError(`Too many failed attempts. Account locked for ${this.lockoutTime / 60000} minutes.`);
            
            // Log security event
            console.warn('🔐 Code Guardian Auth: Account locked due to multiple failed attempts');
        } else {
            const remainingAttempts = this.maxAttempts - this.attempts;
            this.showError(`Invalid password. ${remainingAttempts} attempts remaining.`);
        }
    }

    /**
     * Generate authentication token
     */
    generateAuthToken() {
        return 'cg_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    /**
     * Show error message
     */
    showError(message) {
        const errorDiv = document.getElementById('auth-error');
        if (errorDiv) {
            errorDiv.textContent = message;
            errorDiv.style.display = 'block';
            
            // Hide after 5 seconds
            setTimeout(() => {
                errorDiv.style.display = 'none';
            }, 5000);
        }
    }

    /**
     * Show success message
     */
    showSuccess(message) {
        const successDiv = document.getElementById('auth-success');
        if (successDiv) {
            successDiv.textContent = message;
            successDiv.style.display = 'block';
            
            // Hide after 3 seconds
            setTimeout(() => {
                successDiv.style.display = 'none';
            }, 3000);
        }
    }

    /**
     * Initialize dashboard after authentication
     */
    initializeDashboard() {
        // Initialize monitoring system
        if (window.CodeGuardianMonitor) {
            window.codeGuardianMonitor = new window.CodeGuardianMonitor();
        }
        
        // Initialize file system integration
        if (window.CodeGuardianFSIntegration) {
            window.codeGuardianFSIntegration = new window.CodeGuardianFSIntegration();
        }
    }

    /**
     * Logout function
     */
    logout() {
        this.isAuthenticated = false;
        
        // Clear authentication data
        localStorage.removeItem('codeGuardianAuth');
        localStorage.removeItem('codeGuardianAuthTime');
        
        // Reset attempts
        this.attempts = 0;
        this.lockoutUntil = 0;
        
        // Show authentication form
        this.setupAuthUI();
        
        console.log('🔐 Code Guardian Auth: Logout successful');
    }

    /**
     * Get authentication status
     */
    getAuthStatus() {
        return {
            isAuthenticated: this.isAuthenticated,
            attempts: this.attempts,
            maxAttempts: this.maxAttempts,
            isLockedOut: this.isLockedOut(),
            lockoutRemaining: Math.max(0, this.lockoutUntil - Date.now())
        };
    }
}

// Initialize authentication when page loads
document.addEventListener('DOMContentLoaded', () => {
    window.codeGuardianAuth = new CodeGuardianAuth();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CodeGuardianAuth;
}
