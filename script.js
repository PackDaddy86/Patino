document.addEventListener('DOMContentLoaded', function() {
    // Form validation
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            if (!name || !email || !message) {
                alert('Please fill in all required fields');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Here you would typically send the form data to a server
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        });
    }
    
    // Email validation helper
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Mobile menu toggle (if implemented)
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuButton && navLinks) {
        mobileMenuButton.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Open modal with more info
    window.toggleInfo = function(element) {
        console.log('Card clicked'); // Debugging log
        const modal = document.getElementById('infoModal');
        const modalText = document.getElementById('modalText');
        const moreInfo = element.querySelector('.more-info').innerHTML;
        modalText.innerHTML = moreInfo;
        modal.style.display = 'block';
    };

    // Close modal
    window.closeModal = function() {
        console.log('Closing modal'); // Debugging log
        const modal = document.getElementById('infoModal');
        modal.style.display = 'none';
    };

    // Close modal when clicking outside
    window.onclick = function(event) {
        const modal = document.getElementById('infoModal');
        if (event.target === modal) {
            console.log('Clicked outside modal'); // Debugging log
            modal.style.display = 'none';
        }
    };

    // Toggle card styles on click
    function toggleInfo(element) {
        const moreInfo = element.querySelector('.more-info');
        moreInfo.classList.toggle('active');
        element.classList.toggle('active-card');
    }

    // Add event listener for card click
    document.querySelectorAll('.practice-item').forEach(item => {
        item.addEventListener('click', () => {
            toggleInfo(item);
        });
    });

    // Quotes rotation
    const quotes = [
        '"To achieve great things, two things are needed; a plan, and not quite enough time." - Leonard Bernstein',
        '"Children are not a distraction from more important work. They are the most important work." - C.S. Lewis'
    ];

    let currentQuoteIndex = 0;
    const quoteTextElement = document.getElementById('quoteText');

    function showNextQuote() {
        quoteTextElement.classList.remove('active');
        setTimeout(() => {
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
            quoteTextElement.textContent = quotes[currentQuoteIndex];
            quoteTextElement.classList.add('active');
        }, 1000);
    }

    // Initialize first quote
    quoteTextElement.textContent = quotes[currentQuoteIndex];
    quoteTextElement.classList.add('active');

    // Rotate quotes every 5 seconds
    setInterval(showNextQuote, 5000);
});
