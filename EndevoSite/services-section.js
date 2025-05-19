document.addEventListener('DOMContentLoaded', function() {
    // Animate cards on scroll
    const serviceCards = document.querySelectorAll('.service-card');
    
    const animateCards = () => {
        serviceCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });
    
    // Run on load
    animateCards();
    
    // Run on scroll
    window.addEventListener('scroll', animateCards);
    
    // Add ripple effect to cards
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            const x = e.pageX - card.offsetLeft;
            const y = e.pageY - card.offsetTop;
            
            const ripple = document.createElement('span');
            ripple.className = 'ripple-effect';
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });
});