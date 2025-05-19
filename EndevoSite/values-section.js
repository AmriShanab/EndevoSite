document.addEventListener('DOMContentLoaded', function() {
    // Initialize value cards
    const valueCards = document.querySelectorAll('.value-card');
    
    // Animate cards on scroll
    const animateCards = () => {
        valueCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state
    valueCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        // Click interaction
        card.addEventListener('click', function() {
            // Remove active class from all cards
            valueCards.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked card
            this.classList.add('active');
            
            // Get the value type
            const valueType = this.getAttribute('data-value');
            console.log(`Selected value: ${valueType}`);
            // You could add additional logic here for tracking or other interactions
        });
    });
    
    // Run on load
    animateCards();
    
    // Run on scroll
    window.addEventListener('scroll', animateCards);
    
    // Add hover effect with GSAP for smoothness
    valueCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
    // Auto-rotate active cards on desktop
    if (window.innerWidth > 992) {
        let currentIndex = 0;
        
        function rotateActiveCard() {
            valueCards.forEach(card => card.classList.remove('active'));
            valueCards[currentIndex].classList.add('active');
            
            currentIndex = (currentIndex + 1) % valueCards.length;
        }
        
        // Start rotation (every 5 seconds)
        setInterval(rotateActiveCard, 5000);
    }
});