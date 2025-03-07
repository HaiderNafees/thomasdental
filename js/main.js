// Simple mobile menu functionality
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

// Add click event to menu button
menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// Close menu when clicking links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});

// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        offset: 100,
        once: true
    });
});
});

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            navLinks.classList.remove('active');
            mobileMenuBtn.textContent = '☰';
        }
    });

    // Enhanced Form Validation and Submission
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;

        // Add input event listeners for real-time validation
        contactForm.querySelectorAll('input, textarea, select').forEach(field => {
            field.addEventListener('input', () => validateField(field));
            field.addEventListener('blur', () => validateField(field));
        });

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            let isValid = true;

            // Validate all fields
            contactForm.querySelectorAll('input, textarea, select').forEach(field => {
                if (!validateField(field)) {
                    isValid = false;
                }
            });

            if (isValid) {
                // Show loading state
                submitButton.disabled = true;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitButton.classList.add('loading');

                try {
                    // Simulate API call
                    await new Promise(resolve => setTimeout(resolve, 2000));

                    // Show success state
                    submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                    submitButton.classList.remove('loading');
                    submitButton.classList.add('success');

                    // Add success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'success-message';
                    successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Thank you for your message. We will get back to you soon!';
                    contactForm.insertBefore(successMessage, submitButton);

                    // Reset form
                    contactForm.reset();

                    // Reset button after delay
                    setTimeout(() => {
                        submitButton.disabled = false;
                        submitButton.innerHTML = originalButtonText;
                        submitButton.classList.remove('success');
                        successMessage.remove();
                    }, 3000);

                } catch (error) {
                    // Handle error
                    submitButton.innerHTML = '<i class="fas fa-exclamation-circle"></i> Error';
                    submitButton.classList.remove('loading');
                    submitButton.classList.add('error');

                    setTimeout(() => {
                        submitButton.disabled = false;
                        submitButton.innerHTML = originalButtonText;
                        submitButton.classList.remove('error');
                    }, 3000);
                }
            }
        });

        // Field validation function
        function validateField(field) {
            const formGroup = field.closest('.form-group');
            const errorMessage = formGroup.querySelector('.error-message');
            let isValid = true;
            let message = '';

            // Remove existing error message
            if (errorMessage) {
                errorMessage.remove();
            }

            // Required field validation
            if (field.required && !field.value.trim()) {
                isValid = false;
                message = `${field.previousElementSibling.textContent} is required`;
            }

            // Email validation
            if (field.type === 'email' && field.value.trim()) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value)) {
                    isValid = false;
                    message = 'Please enter a valid email address';
                }
            }

            // Phone validation
            if (field.type === 'tel' && field.value.trim()) {
                const phoneRegex = /^[\d\s\-\+\(\)]{8,}$/;
                if (!phoneRegex.test(field.value)) {
                    isValid = false;
                    message = 'Please enter a valid phone number';
                }
            }

            // Update field styling
            if (!isValid) {
                formGroup.classList.add('error');
                const errorDiv = document.createElement('div');
                errorDiv.className = 'error-message';
                errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
                formGroup.appendChild(errorDiv);
            } else {
                formGroup.classList.remove('error');
            }

            return isValid;
        }
    }

    // Enhanced Smooth Scroll with Offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: targetPosition - navHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll to Top Button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-top';
    document.body.appendChild(scrollBtn);

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
});

    // Enhanced scroll animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
                element.classList.add('animated');
                element.style.transitionDelay = `${Math.random() * 0.3}s`;
            }
        });
    };

    // Initial check for elements in viewport
    animateOnScroll();
    
    // Throttle scroll event for better performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(() => {
                scrollTimeout = null;
                animateOnScroll();
            }, 50);
        }
    });
});
