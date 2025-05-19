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