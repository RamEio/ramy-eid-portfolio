// Contact Form JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    // Form validation and submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitForm();
        }
    });
    
    // Real-time validation
    const formInputs = contactForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
    
    // Form validation functions
    function validateForm() {
        let isValid = true;
        const requiredFields = contactForm.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    function validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        const errorElement = document.getElementById(fieldName + '-error');
        
        // Clear previous error
        clearFieldError(field);
        
        // Required field validation
        if (field.hasAttribute('required') && !value) {
            showFieldError(field, 'This field is required');
            return false;
        }
        
        // Email validation
        if (fieldName === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showFieldError(field, 'Please enter a valid email address');
                return false;
            }
        }
        
        // Message length validation
        if (fieldName === 'message' && value) {
            if (value.length < 10) {
                showFieldError(field, 'Message must be at least 10 characters long');
                return false;
            }
        }
        
        // Name validation
        if (fieldName === 'name' && value) {
            if (value.length < 2) {
                showFieldError(field, 'Name must be at least 2 characters long');
                return false;
            }
        }
        
        return true;
    }
    
    function showFieldError(field, message) {
        const errorElement = document.getElementById(field.name + '-error');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
        
        field.classList.add('error');
    }
    
    function clearFieldError(field) {
        const errorElement = document.getElementById(field.name + '-error');
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
        }
        
        field.classList.remove('error');
    }
    
    // Form submission
    function submitForm() {
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="btn-icon">⏳</span>Sending...';
        
        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            // Success state
            showSuccessMessage();
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            
            // Scroll to success message
            document.querySelector('.success-message')?.scrollIntoView({ 
                behavior: 'smooth' 
            });
        }, 2000);
    }
    
    function showSuccessMessage() {
        // Remove existing success message
        const existingMessage = document.querySelector('.success-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message glass-effect';
        successMessage.innerHTML = `
            <div class="success-content">
                <div class="success-icon">✅</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
                <button class="btn btn-secondary" onclick="this.parentElement.parentElement.remove()">
                    Close
                </button>
            </div>
        `;
        
        // Add styles
        successMessage.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1000;
            padding: 2rem;
            border-radius: var(--radius-lg);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
            max-width: 400px;
            width: 90%;
        `;
        
        // Add to page
        document.body.appendChild(successMessage);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (successMessage.parentElement) {
                successMessage.remove();
            }
        }, 5000);
    }
    
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add error styles to CSS
    const style = document.createElement('style');
    style.textContent = `
        .form-input.error,
        .form-select.error,
        .form-textarea.error {
            border-color: #ef4444 !important;
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
        }
        
        .success-message {
            animation: fadeInUp 0.5s ease-out;
        }
        
        .success-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }
        
        .success-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        
        .success-content h3 {
            color: var(--text-primary);
            font-size: 1.5rem;
            font-weight: 600;
            margin: 0;
        }
        
        .success-content p {
            color: var(--text-secondary);
            margin: 0;
            line-height: 1.5;
        }
    `;
    document.head.appendChild(style);
});

// Performance optimization: Lazy load form validation
function initializeFormValidation() {
    // This function can be called when the form comes into view
    // for better performance on mobile devices
    console.log('Contact form validation initialized');
}
