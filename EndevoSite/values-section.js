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


document.addEventListener('DOMContentLoaded', function() {
  // Counter animation for stats
  const statNumbers = document.querySelectorAll('.stat-number');
  
  statNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-count'));
    const suffix = stat.textContent.includes('%') ? '%' : '';
    let count = 0;
    const duration = 2000; // Animation duration in ms
    const increment = target / (duration / 16); // 60fps
    
    const updateCount = () => {
      count += increment;
      if (count < target) {
        stat.textContent = Math.floor(count) + suffix;
        requestAnimationFrame(updateCount);
      } else {
        stat.textContent = target + suffix;
      }
    };
    
    // Start counting when element is in viewport
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        updateCount();
        observer.unobserve(stat);
      }
    });
    
    observer.observe(stat);
  });
  
  // Tech item hover effects with GSAP
  const techItems = document.querySelectorAll('.tech-item');
  
  techItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, {
        y: -10,
        rotateX: 5,
        boxShadow: '0 15px 40px rgba(79, 70, 229, 0.15)',
        duration: 0.4,
        ease: "power2.out"
      });
      gsap.to(item.querySelector('img'), {
        scale: 1.1,
        filter: 'grayscale(0%)',
        duration: 0.3
      });
      gsap.to(item.querySelector('.tech-tooltip'), {
        opacity: 1,
        y: 15,
        duration: 0.3
      });
    });
    
    item.addEventListener('mouseleave', () => {
      gsap.to(item, {
        y: 0,
        rotateX: 0,
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
        duration: 0.4,
        ease: "power2.out"
      });
      gsap.to(item.querySelector('img'), {
        scale: 1,
        filter: 'grayscale(30%)',
        duration: 0.3
      });
      gsap.to(item.querySelector('.tech-tooltip'), {
        opacity: 0,
        y: 0,
        duration: 0.3
      });
    });
  });
});