// Contact Form Validation and Handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.querySelector('.submit-btn');
    
    // Form fields
    const fields = {
        fullName: document.getElementById('fullName'),
        email: document.getElementById('email'),
        subject: document.getElementById('subject'),
        message: document.getElementById('message')
    };
    
    // Error elements
    const errors = {
        fullName: document.getElementById('fullNameError'),
        email: document.getElementById('emailError'),
        subject: document.getElementById('subjectError'),
        message: document.getElementById('messageError')
    };
    
    // Email validation regex
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    // Clear error function
    function clearError(fieldName) {
        const field = fields[fieldName];
        const error = errors[fieldName];
        
        field.classList.remove('error');
        field.classList.add('success');
        error.textContent = '';
        error.classList.remove('show');
    }
    
    // Show error function
    function showError(fieldName, message) {
        const field = fields[fieldName];
        const error = errors[fieldName];
        
        field.classList.remove('success');
        field.classList.add('error');
        error.textContent = message;
        error.classList.add('show');
    }
    
    // Validate individual field
    function validateField(fieldName) {
        const field = fields[fieldName];
        const value = field.value.trim();
        
        // Clear previous errors
        clearError(fieldName);
        
        // Check if field is empty
        if (!value) {
            showError(fieldName, `${fieldName === 'fullName' ? 'Full name' : fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`);
            return false;
        }
        
        // Special validation for email
        if (fieldName === 'email') {
            if (!emailRegex.test(value)) {
                showError(fieldName, 'Please enter a valid email address');
                return false;
            }
        }
        
        // Special validation for full name (should have at least 2 words)
        if (fieldName === 'fullName') {
            const nameParts = value.split(' ').filter(part => part.length > 0);
            if (nameParts.length < 2) {
                showError(fieldName, 'Please enter your full name (first and last name)');
                return false;
            }
        }
        
        // Special validation for message (minimum length)
        if (fieldName === 'message') {
            if (value.length < 10) {
                showError(fieldName, 'Message must be at least 10 characters long');
                return false;
            }
        }
        
        // Special validation for subject (minimum length)
        if (fieldName === 'subject') {
            if (value.length < 3) {
                showError(fieldName, 'Subject must be at least 3 characters long');
                return false;
            }
        }
        
        return true;
    }
    
    // Validate entire form
    function validateForm() {
        let isValid = true;
        
        // Validate all fields
        Object.keys(fields).forEach(fieldName => {
            if (!validateField(fieldName)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    // Real-time validation on input
    Object.keys(fields).forEach(fieldName => {
        const field = fields[fieldName];
        
        // Validate on blur (when user leaves the field)
        field.addEventListener('blur', function() {
            validateField(fieldName);
        });
        
        // Clear error on focus
        field.addEventListener('focus', function() {
            field.classList.remove('error');
            errors[fieldName].classList.remove('show');
        });
        
        // Real-time validation for email
        if (fieldName === 'email') {
            field.addEventListener('input', function() {
                const value = field.value.trim();
                if (value && !emailRegex.test(value)) {
                    showError(fieldName, 'Please enter a valid email address');
                } else if (value && emailRegex.test(value)) {
                    clearError(fieldName);
                }
            });
        }
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            // Focus on first error field
            const firstError = form.querySelector('.error');
            if (firstError) {
                firstError.focus();
            }
            return;
        }
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // Simulate form submission (replace with actual submission logic)
        setTimeout(() => {
            // Reset form
            form.reset();
            
            // Clear all errors and success states
            Object.keys(fields).forEach(fieldName => {
                fields[fieldName].classList.remove('error', 'success');
                errors[fieldName].textContent = '';
                errors[fieldName].classList.remove('show');
            });
            
            // Reset button
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
            
            // Show success message
            showSuccessMessage();
            
        }, 2000); // Simulate 2-second delay
    });
    
    // Success message function
    function showSuccessMessage() {
        // Create success message element
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message';
        successMsg.innerHTML = `
            <div style="
                background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
                color: white;
                padding: 20px;
                border-radius: 10px;
                text-align: center;
                margin-top: 20px;
                animation: slideUp 0.6s ease-out;
            ">
                <h3 style="margin: 0 0 10px 0; font-size: 1.2rem;">Message Sent Successfully!</h3>
                <p style="margin: 0; opacity: 0.9;">Thank you for contacting us. We'll get back to you soon.</p>
            </div>
        `;
        
        // Insert after form
        form.parentNode.insertBefore(successMsg, form.nextSibling);
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMsg.remove();
        }, 5000);
    }
    
    // Add some visual feedback for better UX
    Object.keys(fields).forEach(fieldName => {
        const field = fields[fieldName];
        
        field.addEventListener('input', function() {
            // Remove error state when user starts typing
            if (field.classList.contains('error')) {
                field.classList.remove('error');
                errors[fieldName].classList.remove('show');
            }
        });
    });
});
