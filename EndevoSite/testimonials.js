document.addEventListener('DOMContentLoaded', function() {
    // Animate branch drawing
    const branchPath = document.querySelector('.branch-path');
    
    // Activate testimonial on leaf click
    const testimonialLeaves = document.querySelectorAll('.testimonial-leaf');
    const testimonialMessages = document.querySelectorAll('.testimonial-message');
    
    testimonialLeaves.forEach(leaf => {
        leaf.addEventListener('click', function() {
            const userId = this.getAttribute('data-user');
            
            // Remove active class from all messages
            testimonialMessages.forEach(msg => {
                msg.classList.remove('active');
            });
            
            // Add active class to selected message
            document.querySelector(`.testimonial-message[data-user="${userId}"]`).classList.add('active');
            
            // Animate leaf click
            gsap.to(this, {
                scale: 0.9,
                duration: 0.2,
                yoyo: true,
                repeat: 1
            });
        });
    });
    
    // Auto-rotate testimonials
    let currentTestimonial = 1;
    const totalTestimonials = testimonialLeaves.length;
    
    function rotateTestimonial() {
        testimonialMessages.forEach(msg => {
            msg.classList.remove('active');
        });
        
        document.querySelector(`.testimonial-message[data-user="${currentTestimonial}"]`).classList.add('active');
        
        // Highlight corresponding leaf
        testimonialLeaves.forEach(leaf => {
            leaf.style.opacity = '0.6';
            leaf.style.transform = 'translate(-50%, -50%) scale(0.9)';
        });
        
        document.querySelector(`.testimonial-leaf[data-user="${currentTestimonial}"]`).style.opacity = '1';
        document.querySelector(`.testimonial-leaf[data-user="${currentTestimonial}"]`).style.transform = 'translate(-50%, -50%) scale(1.1)';
        
        currentTestimonial = currentTestimonial % totalTestimonials + 1;
    }
    
    // Start rotation (every 5 seconds)
    setInterval(rotateTestimonial, 5000);
    
    // Initial highlight
    document.querySelector(`.testimonial-leaf[data-user="1"]`).style.opacity = '1';
    document.querySelector(`.testimonial-leaf[data-user="1"]`).style.transform = 'translate(-50%, -50%) scale(1.1)';
});