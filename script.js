document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const slides = document.querySelectorAll(".slide");
    const slideWidth = 974;

    let index = 0;

    function updateCarousel(animate = true) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");

        const offset = index * slideWidth;

        track.style.transition = animate ? "transform 0.6s ease" : "none";
        track.style.transform = `translateX(-${offset}px)`;
    }

    document.querySelector(".next-csl-button").onclick = () => {
        if (index === slides.length - 1) {
            index = 0;
            updateCarousel(false);
            requestAnimationFrame(() => updateCarousel(true));
        } else {
            index++;
            updateCarousel(true);
        }
    };

    document.querySelector(".back-csl-button").onclick = () => {
        if (index === 0) {
            index = slides.length - 1;
            updateCarousel(false);
            requestAnimationFrame(() => updateCarousel(true));
        } else {
            index--;
            updateCarousel(true);
        }
    };

    updateCarousel(false);

    // Hamburger

    const hamburger = document.querySelector('.hamburger');
    const links = document.querySelector('.links');

    hamburger.addEventListener('click', () => {
        links.classList.toggle('active');
    });
});
