document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer setup for scroll-triggered animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    function animateOnScroll() {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.animated');
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    animateOnScroll(); // Initial call to start scroll animations

    // Function to animate on anchor tag click
    function animateOnClick() {
        // Add event listener for anchor tags to animate on click
        const anchorTags = document.querySelectorAll('nav a');
        anchorTags.forEach(anchor => {
            anchor.addEventListener('click', () => {
                anchor.classList.add('clicked');
                setTimeout(() => {
                    anchor.classList.remove('clicked');
                }, 500); // Duration of the click animation
            });
        });
    }

    animateOnClick(); // Initial call to start click animations
});
var icon = document.getElementById("icon");
            icon.onclick = function() {
                document.body.classList.toggle("dark-theme");
            }