// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing FitTrack...');
    
    // Remove no-js class
    document.body.classList.remove('no-js');
    
    // Initialize all functionality
    try {
        // Test if elements exist
        const darkModeToggle = document.getElementById('darkModeToggle');
        console.log('Dark mode toggle found:', !!darkModeToggle);
        
        if (darkModeToggle) {
            console.log('Dark mode toggle HTML:', darkModeToggle.outerHTML);
        }
        
        initDarkMode();
        initScrollAnimations();
        initFAQ();
        initNewsletter();
        initSmoothScrolling();
        console.log('All features initialized successfully');
    } catch (error) {
        console.error('Error initializing features:', error);
    }
});

// Also try immediate initialization for debugging
console.log('Script loaded, attempting immediate initialization...');
try {
    // Check if DOM is already loaded
    if (document.readyState === 'loading') {
        console.log('DOM still loading, waiting for DOMContentLoaded');
    } else {
        console.log('DOM already loaded, initializing immediately');
        // Remove no-js class
        document.body.classList.remove('no-js');
        
        // Initialize dark mode immediately
        const darkModeToggle = document.getElementById('darkModeToggle');
        console.log('Dark mode toggle found (immediate):', !!darkModeToggle);
        
        if (darkModeToggle) {
            initDarkMode();
        }
    }
} catch (error) {
    console.error('Error in immediate initialization:', error);
}

// Dark Mode Toggle Functionality
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const html = document.documentElement;
    
    if (!darkModeToggle) {
        console.warn('Dark mode toggle button not found');
        return;
    }
    
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);
    updateDarkModeIcon(currentTheme);
    
    console.log('Dark mode initialized with theme:', currentTheme);
    
    darkModeToggle.addEventListener('click', function() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateDarkModeIcon(newTheme);
        
        console.log('Theme changed to:', newTheme);
        
        // Add a subtle animation effect
        darkModeToggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            darkModeToggle.style.transform = 'scale(1)';
        }, 150);
    });
}

function updateDarkModeIcon(theme) {
    const icon = document.querySelector('#darkModeToggle i');
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                console.log('Element became visible:', entry.target);
                
                // Add staggered animation for grid items
                if (entry.target.classList.contains('features-grid') || 
                    entry.target.classList.contains('testimonials-grid') || 
                    entry.target.classList.contains('pricing-grid')) {
                    staggerAnimation(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in, .slide-in-right');
    console.log('Found animated elements:', animatedElements.length);
    animatedElements.forEach(el => {
        console.log('Observing element:', el);
        observer.observe(el);
    });
    
    // Observe grid containers for staggered animations
    const gridContainers = document.querySelectorAll('.features-grid, .testimonials-grid, .pricing-grid');
    console.log('Found grid containers:', gridContainers.length);
    gridContainers.forEach(grid => observer.observe(grid));
    
    // Fallback: Make elements visible after a short delay if intersection observer fails
    setTimeout(() => {
        animatedElements.forEach(el => {
            if (!el.classList.contains('visible')) {
                console.log('Fallback: Making element visible:', el);
                el.classList.add('visible');
            }
        });
    }, 1000);
}

function staggerAnimation(container) {
    const items = container.children;
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 150);
    });
}

// FAQ Accordion Functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', function() {
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherQuestion = otherItem.querySelector('.faq-question');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    
                    otherQuestion.setAttribute('aria-expanded', 'false');
                    otherAnswer.classList.remove('active');
                }
            });
            
            // Toggle current item
            question.setAttribute('aria-expanded', !isExpanded);
            answer.classList.toggle('active', !isExpanded);
        });
        
        // Initialize answer styles
        const answer = item.querySelector('.faq-answer');
        answer.style.maxHeight = '0';
        answer.style.transition = 'max-height 0.3s ease-out';
    });
}

// Newsletter Form Functionality
function initNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const submitButton = this.querySelector('button');
            const email = emailInput.value.trim();
            
            if (!email) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            submitButton.textContent = 'Subscribing...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                showNotification('Thank you for subscribing! You\'ll receive fitness tips and updates soon.', 'success');
                emailInput.value = '';
                submitButton.textContent = 'Subscribe';
                submitButton.disabled = false;
            }, 1500);
        });
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close" aria-label="Close notification">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        max-width: 500px;
        width: 90%;
        opacity: 0;
        transition: all 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(-50%) translateY(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        removeNotification(notification);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        removeNotification(notification);
    }, 5000);
}

function removeNotification(notification) {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(-50%) translateY(-20px)';
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// CTA Button Animation
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Show download notification
            showNotification('Download starting... Redirecting to app store!', 'success');
        });
    }
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Performance optimization: Lazy load images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', initLazyLoading);

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key to close notifications
    if (e.key === 'Escape') {
        const notification = document.querySelector('.notification');
        if (notification) {
            removeNotification(notification);
        }
    }
    
    // Space/Enter key for FAQ items
    if (e.key === ' ' || e.key === 'Enter') {
        const activeElement = document.activeElement;
        if (activeElement.classList.contains('faq-question')) {
            e.preventDefault();
            activeElement.click();
        }
    }
});

// Add loading states for better UX
function addLoadingStates() {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        if (!button.classList.contains('notification-close')) {
            button.addEventListener('click', function() {
                if (this.type === 'submit') {
                    this.style.opacity = '0.7';
                    setTimeout(() => {
                        this.style.opacity = '1';
                    }, 1000);
                }
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', addLoadingStates);

// Error handling for missing elements
function safeQuerySelector(selector) {
    try {
        return document.querySelector(selector);
    } catch (error) {
        console.warn(`Element not found: ${selector}`);
        return null;
    }
}

// Prefers reduced motion support
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--transition', 'none');
    document.documentElement.style.setProperty('animation-duration', '0.01ms');
}
