// 1. Scroll hone par Animation Trigger karna
const observerOptions = {
    threshold: 0.3 // Jab 30% section screen pe aa jaye
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.spec-item');
            
            // Har item ko thode delay ke baad animate karna
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 200); // 200ms gap between each item
            });
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const specsContainer = document.getElementById('animatedSpecs');
if(specsContainer) {
    observer.observe(specsContainer);
}

// 2. Smooth Scroll for "Order Now" button
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3. Form Submit Alert (Professional)
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you. Your wholesale inquiry has been registered. Our sales team will contact you shortly.");
    this.reset();
});
