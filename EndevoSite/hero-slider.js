document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousel
    const heroCarousel = new bootstrap.Carousel(document.getElementById('heroCarousel'), {
        interval: 6000,
        pause: false,
        wrap: true,
        touch: true
    });
    
    // Animation handler
    function animateOnSlide() {
        const activeSlide = document.querySelector('.carousel-item.active');
        const animations = activeSlide.querySelectorAll('[data-animation]');
        
        animations.forEach((element, index) => {
            const animationClass = element.getAttribute('data-animation');
            const delay = element.getAttribute('data-delay') || 0;
            
            // Reset animation
            element.style.opacity = '0';
            element.classList.remove(animationClass);
            
            // Apply animation after delay
            setTimeout(() => {
                element.classList.add(animationClass);
            }, parseFloat(delay) * 1000);
        });
    }
    
    // Run animation when slide changes
    document.getElementById('heroCarousel').addEventListener('slid.bs.carousel', animateOnSlide);
    
    // Run animation on initial load
    animateOnSlide();
    
    // Parallax effect on scroll
    window.addEventListener('scroll', function() {
        const hero = document.querySelector('.hero-slide.active');
        if (hero) {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });
    
    // Add smooth transitions between slides
    document.querySelectorAll('.carousel-item').forEach(item => {
        item.style.transition = 'opacity 1.5s ease-in-out';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousel
    const heroCarousel = new bootstrap.Carousel(document.getElementById('heroCarousel'), {
        interval: 5000,
        pause: false,
        wrap: true,
        touch: true
    });
    
    // Update slide counter
    function updateSlideCounter() {
        const activeIndex = document.querySelector('#heroCarousel .carousel-item.active').index() + 1;
        const totalSlides = document.querySelectorAll('#heroCarousel .carousel-item').length;
        
        document.querySelector('.current-slide').textContent = activeIndex.toString().padStart(2, '0');
        document.querySelector('.total-slides').textContent = totalSlides.toString().padStart(2, '0');
    }
    
    // Run on slide change
    document.getElementById('heroCarousel').addEventListener('slid.bs.carousel', updateSlideCounter);
    
    // Initialize on load
    updateSlideCounter();
    
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
    
    // Parallax effect for image side
    window.addEventListener('scroll', function() {
        const imageSide = document.querySelector('.image-side');
        if (imageSide) {
            const scrollPosition = window.pageYOffset;
            imageSide.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        }
    });
});

