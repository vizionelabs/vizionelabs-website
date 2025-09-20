// JavaScript for Mobile Menu
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
    
    // Close menu when clicking on a link
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('show');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav') && navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
        }
    });
    
    // Close menu on window resize (if screen becomes larger)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
        }
    });
    
    // Contact Form Handling for Netlify
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Don't prevent default - let the form submit to Netlify
            // e.preventDefault(); // Commented out to allow real submission
            
            const submitBtn = document.getElementById('submitBtn');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            const formFeedback = document.getElementById('formFeedback');
            
            // Show loading state
            submitBtn.disabled = true;
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline';
            formFeedback.style.display = 'none';
            
            // The form will submit to Netlify automatically
            // Netlify will handle the email sending
        });
    }
    
    // WhatsApp Button Functionality
    const whatsappBtn = document.getElementById('whatsappBtn');
    const whatsappLink = document.getElementById('whatsappLink');
    console.log('WhatsApp button found:', whatsappBtn); // Debug log
    
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('WhatsApp button clicked!'); // Debug log
            
            const phone = '5511974281021'; // Brazil country code (55) + phone number
            
            // Check if form has data to include in message
            const nameField = document.getElementById('name');
            const serviceField = document.getElementById('service');
            const messageField = document.getElementById('message');
            
            let message = 'Olá! Gostaria de saber mais sobre os serviços da Vizione.';
            
            // If form has data, include it in the message
            if (nameField && nameField.value.trim()) {
                message += `\n\nNome: ${nameField.value.trim()}`;
            }
            
            if (serviceField && serviceField.value) {
                const serviceText = serviceField.options[serviceField.selectedIndex].text;
                message += `\nServiço de interesse: ${serviceText}`;
            }
            
            if (messageField && messageField.value.trim()) {
                message += `\nMensagem: ${messageField.value.trim()}`;
            }
            
            const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
            
            console.log('WhatsApp URL:', whatsappUrl); // Debug log
            
            // Try multiple methods to open WhatsApp
            try {
                // Method 1: Try window.open
                const newWindow = window.open(whatsappUrl, '_blank');
                if (!newWindow) {
                    // Method 2: If popup blocked, try direct link
                    console.log('Popup blocked, trying direct link...');
                    if (whatsappLink) {
                        whatsappLink.click();
                    } else {
                        // Method 3: Fallback to same window
                        window.location.href = whatsappUrl;
                    }
                }
            } catch (error) {
                console.error('Error opening WhatsApp:', error);
                // Method 4: Final fallback
                if (whatsappLink) {
                    whatsappLink.click();
                } else {
                    window.location.href = whatsappUrl;
                }
            }
        });
    } else {
        console.error('WhatsApp button not found!'); // Debug log
    }
    
    // Email Button Functionality
    const emailBtn = document.getElementById('emailBtn');
    if (emailBtn) {
        emailBtn.addEventListener('click', function() {
            const email = 'comercial@vizione.com.br';
            const subject = 'Consulta sobre serviços da Vizione';
            const body = 'Olá! Gostaria de saber mais sobre os serviços da Vizione.';
            const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoUrl;
        });
    }
    
    // Form Button Functionality (scroll to form)
    const formBtn = document.getElementById('formBtn');
    if (formBtn) {
        formBtn.addEventListener('click', function() {
            const formSection = document.querySelector('.contact-form-section');
            if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
