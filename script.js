// Smooth Scroll for Navigation Links
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

// Form Handling (Professional Alert)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const qty = document.getElementById('quantity').value;
    
    if(name && qty) {
        alert(`Thank you, ${name}. Your inquiry for ${qty} cases has been received. Our sales team will contact you at +91 9311957177 within 24 hours.`);
        this.reset();
    }
});

// Navbar Scroll Effect (Background darker on scroll)
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 1)';
    } else {
        navbar.style.background = 'rgba(17, 17, 17, 0.95)';
    }
});
