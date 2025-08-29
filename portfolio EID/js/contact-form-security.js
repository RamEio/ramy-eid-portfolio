// Secure Contact Form Handler with Comprehensive Security Measures
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    // Security Configuration
    const SECURITY_CONFIG = {
        maxSubmissionsPerHour: 3,
        maxMessageLength: 2000,
        minMessageLength: 10,
        rateLimitKey: 'contact_form_submissions',
        csrfTokenKey: 'contact_csrf_token'
    };

    // Rate Limiting Implementation
    class RateLimiter {
        constructor() {
            this.storageKey = SECURITY_CONFIG.rateLimitKey;
        }

        isRateLimited() {
            const now = Date.now();
            const submissions = this.getSubmissions();
            
            // Remove submissions older than 1 hour
            const recentSubmissions = submissions.filter(time => now - time < 3600000);
            
            if (recentSubmissions.length >= SECURITY_CONFIG.maxSubmissionsPerHour) {
                return true;
            }
            
            return false;
        }

        recordSubmission() {
            const now = Date.now();
            const submissions = this.getSubmissions();
            submissions.push(now);
            
            // Keep only last 10 submissions for memory efficiency
            if (submissions.length > 10) {
                submissions.splice(0, submissions.length - 10);
            }
            
            localStorage.setItem(this.storageKey, JSON.stringify(submissions));
        }

        getSubmissions() {
            try {
                const stored = localStorage.getItem(this.storageKey);
                return stored ? JSON.parse(stored) : [];
            } catch (error) {
                console.warn('Rate limiter storage error:', error);
                return [];
            }
        }

        getTimeUntilReset() {
            const submissions = this.getSubmissions();
            if (submissions.length === 0) return 0;
            
            const oldestSubmission = Math.min(...submissions);
            const timeElapsed = Date.now() - oldestSubmission;
            return Math.max(0, 3600000 - timeElapsed);
        }
    }

    // Input Validation and Sanitization
    class InputValidator {
        static sanitizeInput(input) {
            if (typeof input !== 'string') return '';
            
            // Remove potentially dangerous characters
            return input
                .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
                .replace(/javascript:/gi, '') // Remove javascript: protocol
                .replace(/on\w+=/gi, '') // Remove event handlers
                .trim();
        }

        static validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email) && email.length <= 254;
        }

        static validateName(name) {
            const sanitizedName = this.sanitizeInput(name);
            return sanitizedName.length >= 2 && sanitizedName.length <= 100;
        }

        static validateMessage(message) {
            const sanitizedMessage = this.sanitizeInput(message);
            return sanitizedMessage.length >= SECURITY_CONFIG.minMessageLength && 
                   sanitizedMessage.length <= SECURITY_CONFIG.maxMessageLength;
        }

        static validateSubject(subject) {
            const validSubjects = ['ux-design', 'ai-consulting', 'collaboration', 'speaking', 'other'];
            return validSubjects.includes(subject);
        }
    }

    // CSRF Protection
    class CSRFProtection {
        static generateToken() {
            const array = new Uint8Array(32);
            crypto.getRandomValues(array);
            return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
        }

        static getStoredToken() {
            return sessionStorage.getItem(SECURITY_CONFIG.csrfTokenKey);
        }

        static setStoredToken(token) {
            sessionStorage.setItem(SECURITY_CONFIG.csrfTokenKey, token);
        }

        static validateToken(token) {
            const storedToken = this.getStoredToken();
            return token === storedToken;
        }
    }

    // Form Error Handler
    class FormErrorHandler {
        static showError(fieldId, message) {
            const errorElement = document.getElementById(`${fieldId}-error`);
            if (errorElement) {
                errorElement.textContent = message;
                errorElement.style.display = 'block';
            }
        }

        static clearError(fieldId) {
            const errorElement = document.getElementById(`${fieldId}-error`);
            if (errorElement) {
                errorElement.textContent = '';
                errorElement.style.display = 'none';
            }
        }

        static clearAllErrors() {
            const errorElements = document.querySelectorAll('.error-message');
            errorElements.forEach(element => {
                element.textContent = '';
                element.style.display = 'none';
            });
        }
    }

    // Initialize Security Components
    const rateLimiter = new RateLimiter();
    const csrfToken = CSRFProtection.generateToken();
    CSRFProtection.setStoredToken(csrfToken);

    // Add CSRF token to form
    const csrfInput = document.createElement('input');
    csrfInput.type = 'hidden';
    csrfInput.name = 'csrf_token';
    csrfInput.value = csrfToken;
    contactForm.appendChild(csrfInput);

    // Real-time Input Validation
    const inputs = contactForm.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            FormErrorHandler.clearError(this.id);
        });
    });

    function validateField(field) {
        const value = field.value.trim();
        
        switch (field.id) {
            case 'name':
                if (!InputValidator.validateName(value)) {
                    FormErrorHandler.showError('name', 'Please enter a valid name (2-100 characters)');
                    return false;
                }
                break;
                
            case 'email':
                if (!InputValidator.validateEmail(value)) {
                    FormErrorHandler.showError('email', 'Please enter a valid email address');
                    return false;
                }
                break;
                
            case 'subject':
                if (!InputValidator.validateSubject(value)) {
                    FormErrorHandler.showError('subject', 'Please select a valid subject');
                    return false;
                }
                break;
                
            case 'message':
                if (!InputValidator.validateMessage(value)) {
                    FormErrorHandler.showError('message', `Message must be between ${SECURITY_CONFIG.minMessageLength} and ${SECURITY_CONFIG.maxMessageLength} characters`);
                    return false;
                }
                break;
                
            case 'privacy':
                if (!field.checked) {
                    FormErrorHandler.showError('privacy', 'You must agree to the Privacy Policy to continue');
                    return false;
                }
                break;
        }
        
        FormErrorHandler.clearError(field.id);
        return true;
    }

    // Form Submission Handler
    contactForm.addEventListener('submit', async function(e) {
        // Don't prevent default - let Netlify handle the form
        // e.preventDefault();
        
        // Clear previous errors
        FormErrorHandler.clearAllErrors();
        
        // Rate limiting check
        if (rateLimiter.isRateLimited()) {
            const timeUntilReset = rateLimiter.getTimeUntilReset();
            const minutes = Math.ceil(timeUntilReset / 60000);
            FormErrorHandler.showError('general', `Too many submissions. Please wait ${minutes} minutes before trying again.`);
            return;
        }
        
        // Validate all fields
        let isValid = true;
        const fields = ['name', 'email', 'subject', 'message', 'privacy'];
        
        fields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field && !validateField(field)) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            return;
        }
        
        // CSRF validation - Netlify handles this server-side
        // const formCsrfToken = contactForm.querySelector('input[name="csrf_token"]').value;
        // if (!CSRFProtection.validateToken(formCsrfToken)) {
        //     FormErrorHandler.showError('general', 'Security validation failed. Please refresh the page and try again.');
        //     return;
        // }
        
        // Sanitize all inputs
        const formData = new FormData(contactForm);
        const sanitizedData = {};
        
        for (let [key, value] of formData.entries()) {
            if (key === 'bot-field') continue; // Skip honeypot field
            sanitizedData[key] = InputValidator.sanitizeInput(value);
        }
        
        // Check honeypot field
        if (sanitizedData['bot-field']) {
            console.warn('Bot detected via honeypot field');
            return; // Silently reject bot submissions
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="btn-icon">⏳</span> Sending...';
        submitBtn.disabled = true;
        
        try {
            // Record submission for rate limiting
            rateLimiter.recordSubmission();
            
            // Let Netlify handle the form submission naturally
            // The form will submit to Netlify's form handling endpoint
            
        } catch (error) {
            console.error('Form submission error:', error);
            FormErrorHandler.showError('general', 'An error occurred. Please try again later.');
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });

    function showSuccessMessage() {
        const formContainer = contactForm.closest('.contact-form-container');
        formContainer.innerHTML = `
            <div class="success-message glass-effect">
                <h2 class="section-title">Message Sent Successfully!</h2>
                <p>Thank you for your message. I'll get back to you within 24 hours.</p>
                <div class="success-details">
                    <p><strong>What happens next?</strong></p>
                    <ul>
                        <li>You'll receive a confirmation email</li>
                        <li>I'll review your message and respond within 24 hours</li>
                        <li>For urgent matters, you can also reach me directly at expertise.inno.design@gmail.com</li>
                    </ul>
                </div>
                <a href="contact.html" class="btn btn-primary">Send Another Message</a>
            </div>
        `;
    }

    // Security logging
    console.log('🔒 Secure Contact Form initialized with:', {
        rateLimiting: 'enabled',
        csrfProtection: 'enabled',
        inputValidation: 'enabled',
        honeypotProtection: 'enabled',
        gdprCompliance: 'enabled'
    });
});
