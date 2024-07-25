document.addEventListener('DOMContentLoaded', function() {
    let prev = document.querySelector('.up');
    let next = document.querySelector('.down');
    let slider = document.querySelector('.colDiv');

    function updateSlides() {
        let slides = document.querySelectorAll('.card');
        slides.forEach((slide, index) => {
            slide.classList.add('cardHidden');
            slide.classList.remove('cardAbsolute');
        });
        slides[0].classList.remove('cardHidden');
        slides[1].classList.remove('cardHidden');
        slides[0].classList.add('cardAbsolute');
    }

    next.addEventListener('click', function() {
        let slides = document.querySelectorAll('.card');
        slider.appendChild(slides[0]);
        updateSlides();
    });

    prev.addEventListener('click', function() {
        let slides = document.querySelectorAll('.card');
        slider.prepend(slides[slides.length - 1]);
        updateSlides();
    });

    // Initial update to show the first slide
    updateSlides();
});