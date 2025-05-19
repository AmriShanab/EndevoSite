document.addEventListener('DOMContentLoaded', function() {
    // Pause animation on hover
    const logosTrack = document.querySelector('.client-logos-track');
    const logosContainer = document.querySelector('.client-logos-container');
    
    if (logosTrack && logosContainer) {
        logosContainer.addEventListener('mouseenter', function() {
            logosTrack.style.animationPlayState = 'paused';
        });
        
        logosContainer.addEventListener('mouseleave', function() {
            logosTrack.style.animationPlayState = 'running';
        });
    }
    
    // Click to navigate (optional)
    const logoItems = document.querySelectorAll('.client-logo-item');
    logoItems.forEach(item => {
        item.addEventListener('click', function() {
            // You could add functionality to show more info about the client
            // or navigate to a case study page
            console.log('Client logo clicked');
        });
    });
    
    // Touch support for mobile devices
    let touchStartX = 0;
    let touchEndX = 0;
    
    logosContainer.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    logosContainer.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        if (touchEndX < touchStartX) {
            // Swipe left - pause animation briefly
            logosTrack.style.animationPlayState = 'paused';
            setTimeout(() => {
                logosTrack.style.animationPlayState = 'running';
            }, 1000);
        }
    }
});