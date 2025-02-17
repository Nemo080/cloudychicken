document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const cards = document.querySelectorAll(".card");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const indicators = document.querySelectorAll(".indicator");

    let currentIndex = 1; // Start at index 1 to skip the cloned first item
    const totalCards = cards.length;

    // Clone first and last cards
    const firstClone = cards[0].cloneNode(true);
    const lastClone = cards[totalCards - 1].cloneNode(true);

    // Add cloned items to the carousel
    carousel.insertBefore(lastClone, cards[0]);
    carousel.appendChild(firstClone);

    const updatedCards = document.querySelectorAll(".card");
    const totalSlides = updatedCards.length;

    // Set the initial position to the first actual slide
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    function updateCarousel() {
        carousel.style.transition = "transform 0.5s ease-in-out";
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Reset transition when looping
        if (currentIndex === 0) {
            setTimeout(() => {
                carousel.style.transition = "none";
                currentIndex = totalCards;
                carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
            }, 500);
        }

        if (currentIndex === totalSlides - 1) {
            setTimeout(() => {
                carousel.style.transition = "none";
                currentIndex = 1;
                carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
            }, 500);
        }


        // Update active indicator
        indicators.forEach((dot, index) => {
            dot.classList.toggle("active", index === (currentIndex - 1) % totalCards);
        });
    }

    nextBtn.addEventListener("click", function () {
        if (currentIndex >= totalSlides - 1) return;
        currentIndex++;
        updateCarousel();
    });

    prevBtn.addEventListener("click", function () {
        if (currentIndex <= 0) return;
        currentIndex--;
        updateCarousel();
    });

    // Add functionality for indicators
    indicators.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            currentIndex = index + 1; // Offset because of the clone
            updateCarousel();
        });
    });

    // Initialize the carousel position
    updateCarousel();
});
