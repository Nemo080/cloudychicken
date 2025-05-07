
//   EVENING'S END PAGE SCRIPT STARTS HERE -------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const charCarousel = document.querySelector(".char-carousel");
    const charCards = document.querySelectorAll(".character-intro");
    const charPrevBtn = document.querySelector(".prev-char");
    const charNextBtn = document.querySelector(".next-char");
    const charIndicators = document.querySelectorAll(".indicator");

    let charCurrentIndex = 1; // Start at index 1 to skip the cloned first item
    const charTotalCards = charCards.length;

    // Clone first and last cards
    const charFirstClone = charCards[0].cloneNode(true);
    const charLastClone = charCards[charTotalCards - 1].cloneNode(true);

    // Add cloned items to the carousel
    charCarousel.insertBefore(charLastClone, charCards[0]);
    charCarousel.appendChild(charFirstClone);

    const charUpdatedCards = document.querySelectorAll(".character-intro");
    const charTotalSlides = charUpdatedCards.length;

    // Set the initial position to the first actual slide
    charCarousel.style.transform = `translateX(-${charCurrentIndex * 100}%)`;

    function updateCharCarousel() {
        charCarousel.style.transition = "transform 0.5s ease-in-out";
        charCarousel.style.transform = `translateX(-${charCurrentIndex * 100}%)`;

        // Reset transition when looping
        if (charCurrentIndex === 0) {
            setTimeout(() => {
                charCarousel.style.transition = "none";
                charCurrentIndex = charTotalCards;
                charCarousel.style.transform = `translateX(-${charCurrentIndex * 100}%)`;
            }, 500);
        }

        if (charCurrentIndex === charTotalSlides - 1) {
            setTimeout(() => {
                charCarousel.style.transition = "none";
                charCurrentIndex = 1;
                charCarousel.style.transform = `translateX(-${charCurrentIndex * 100}%)`;
            }, 500);
        }

        // Update active indicator
        charIndicators.forEach((dot, index) => {
            dot.classList.toggle("active", index === (charCurrentIndex - 1) % charTotalCards);
        });
    }

    charNextBtn.addEventListener("click", function () {
        if (charCurrentIndex >= charTotalSlides - 1) return;
        charCurrentIndex++;
        updateCharCarousel();
    });

    charPrevBtn.addEventListener("click", function () {
        if (charCurrentIndex <= 0) return;
        charCurrentIndex--;
        updateCharCarousel();
    });

    // Add functionality for indicators
    charIndicators.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            charCurrentIndex = index + 1; // Offset because of the clone
            updateCharCarousel();
        });
    });

    // Initialize the carousel position
    updateCharCarousel();
});


// BACKGROUND SECTION

document.addEventListener("DOMContentLoaded", function () {
    const charCarousel = document.querySelector(".back-carousel");
    const charCards = document.querySelectorAll(".background-intro");
    const charPrevBtn = document.querySelector(".prev-back");
    const charNextBtn = document.querySelector(".next-back");
    const charIndicators = document.querySelectorAll(".indicator-back");

    let charCurrentIndex = 1; // Start at index 1 to skip the cloned first item
    const charTotalCards = charCards.length;

    // Clone first and last cards
    const charFirstClone = charCards[0].cloneNode(true);
    const charLastClone = charCards[charTotalCards - 1].cloneNode(true);

    // Add cloned items to the carousel
    charCarousel.insertBefore(charLastClone, charCards[0]);
    charCarousel.appendChild(charFirstClone);

    const charUpdatedCards = document.querySelectorAll(".background-intro");
    const charTotalSlides = charUpdatedCards.length;

    // Set the initial position to the first actual slide
    charCarousel.style.transform = `translateX(-${charCurrentIndex * 100}%)`;

    function updateCharCarousel() {
        charCarousel.style.transition = "transform 0.5s ease-in-out";
        charCarousel.style.transform = `translateX(-${charCurrentIndex * 100}%)`;

        // Reset transition when looping
        if (charCurrentIndex === 0) {
            setTimeout(() => {
                charCarousel.style.transition = "none";
                charCurrentIndex = charTotalCards;
                charCarousel.style.transform = `translateX(-${charCurrentIndex * 100}%)`;
            }, 500);
        }

        if (charCurrentIndex === charTotalSlides - 1) {
            setTimeout(() => {
                charCarousel.style.transition = "none";
                charCurrentIndex = 1;
                charCarousel.style.transform = `translateX(-${charCurrentIndex * 100}%)`;
            }, 500);
        }

        // Update active indicator
        charIndicators.forEach((dot, index) => {
            dot.classList.toggle("active", index === (charCurrentIndex - 1) % charTotalCards);
        });
    }

    charNextBtn.addEventListener("click", function () {
        if (charCurrentIndex >= charTotalSlides - 1) return;
        charCurrentIndex++;
        updateCharCarousel();
    });

    charPrevBtn.addEventListener("click", function () {
        if (charCurrentIndex <= 0) return;
        charCurrentIndex--;
        updateCharCarousel();
    });

    // Add functionality for indicators
    charIndicators.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            charCurrentIndex = index + 1; // Offset because of the clone
            updateCharCarousel();
        });
    });

    // Initialize the carousel position
    updateCharCarousel();
});


// STORY SECTION
document.addEventListener("DOMContentLoaded", function () {
    const charCarousel = document.querySelector(".story-carousel");
    const charCards = document.querySelectorAll(".story-intro");
    const charPrevBtn = document.querySelector(".prev-story");
    const charNextBtn = document.querySelector(".next-story");
    const charIndicators = document.querySelectorAll(".indicator-story");

    let charCurrentIndex = 1; // Start at index 1 to skip the cloned first item
    const charTotalCards = charCards.length;

    // Clone first and last cards
    const charFirstClone = charCards[0].cloneNode(true);
    const charLastClone = charCards[charTotalCards - 1].cloneNode(true);

    // Add cloned items to the carousel
    charCarousel.insertBefore(charLastClone, charCards[0]);
    charCarousel.appendChild(charFirstClone);

    const charUpdatedCards = document.querySelectorAll(".story-intro");
    const charTotalSlides = charUpdatedCards.length;

    // Set the initial position to the first actual slide
    charCarousel.style.transform = `translateX(-${charCurrentIndex * 100}%)`;

    function updateCharCarousel() {
        charCarousel.style.transition = "transform 0.5s ease-in-out";
        charCarousel.style.transform = `translateX(-${charCurrentIndex * 100}%)`;

        // Reset transition when looping
        if (charCurrentIndex === 0) {
            setTimeout(() => {
                charCarousel.style.transition = "none";
                charCurrentIndex = charTotalCards;
                charCarousel.style.transform = `translateX(-${charCurrentIndex * 100}%)`;
            }, 500);
        }

        if (charCurrentIndex === charTotalSlides - 1) {
            setTimeout(() => {
                charCarousel.style.transition = "none";
                charCurrentIndex = 1;
                charCarousel.style.transform = `translateX(-${charCurrentIndex * 100}%)`;
            }, 500);
        }

        // Update active indicator
        charIndicators.forEach((dot, index) => {
            dot.classList.toggle("active", index === (charCurrentIndex - 1) % charTotalCards);
        });
    }

    charNextBtn.addEventListener("click", function () {
        if (charCurrentIndex >= charTotalSlides - 1) return;
        charCurrentIndex++;
        updateCharCarousel();
    });

    charPrevBtn.addEventListener("click", function () {
        if (charCurrentIndex <= 0) return;
        charCurrentIndex--;
        updateCharCarousel();
    });

    // Add functionality for indicators
    charIndicators.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            charCurrentIndex = index + 1; // Offset because of the clone
            updateCharCarousel();
        });
    });

    // Initialize the carousel position
    updateCharCarousel();
});
