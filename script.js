const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.spec-item');
            items.forEach((item, index) => {
                setTimeout(() => { item.classList.add('visible'); }, index * 200);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const specsContainer = document.getElementById('animatedSpecs');
if(specsContainer) { observer.observe(specsContainer); }

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you! Order request sent.");
    this.reset();
});
