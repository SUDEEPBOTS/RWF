document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navbar Glass Effect on Scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Hero Section Animation (Page Load hote hi)
    const heroContent = document.querySelector('.hero-content');
    if(heroContent) {
        setTimeout(() => {
            heroContent.classList.add('visible');
        }, 200); // Thoda delay taaki user pehle background dekhe
    }

    // 3. Universal Scroll Observer (Sab kuch fade-in karega)
    const observerOptions = {
        threshold: 0.15, // 15% element dikhne par trigger hoga
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Ek baar animate ho gaya toh bas
            }
        });
    }, observerOptions);

    // HTML mein jisko animate karna hai uspar 'observer-item' class laga dena
    // (Maine pichle code mein 'spec-card' pe lagaya tha)
    document.querySelectorAll('.spec-card, .section-header, .contact-info').forEach(el => {
        // Initial state set kar rahe hain JS se (CSS fallback ke liye)
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        
        observer.observe(el);
    });

    // 4. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target){
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 5. Professional Form Handling (No Ugly Alerts)
    const form = document.querySelector('.contact-form');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = form.querySelector('.btn-submit');
            const originalText = submitBtn.innerText;
            
            // Loading State
            submitBtn.innerText = "Processing...";
            submitBtn.style.opacity = "0.7";
            
            // Simulate Server Request (2 seconds)
            setTimeout(() => {
                // Success State
                submitBtn.innerText = "Request Received ✓";
                submitBtn.style.backgroundColor = "#10b981"; // Success Green
                submitBtn.style.color = "white";
                submitBtn.style.borderColor = "#10b981";
                
                // Form Reset
                form.reset();

                // 3 second baad button wapas normal ho jayega
                setTimeout(() => {
                    submitBtn.innerText = originalText;
                    submitBtn.style.backgroundColor = ""; 
                    submitBtn.style.color = "";
                    submitBtn.style.opacity = "1";
                    submitBtn.style.borderColor = ""; 
                }, 3000);
            }, 1500);
        });
    }
});
