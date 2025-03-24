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


// toggle
// function toggleDropdown(dropdownId) {
//     const dropdowns = document.querySelectorAll('.speech-bubble');
    
//     // Close other open dropdowns
//     dropdowns.forEach(dropdown => {
//         if (dropdown.id !== dropdownId) {
//             dropdown.style.display = 'none';
//         }
//     });
    
//     const dropdown = document.getElementById(dropdownId);
    
//      // Toggle the clicked dropdown
//      if (dropdown.style.display === 'none' || dropdown.style.display === '') {
//         dropdown.style.display = 'block';
//         dropdown.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Scroll to the dropdown
//     } else {
//         dropdown.style.display = 'none';
//     }

  
// }

function toggleContent(contentId, container) {
    const allContainers = document.querySelectorAll('.solo-container'); // Select all card containers
    const content = document.getElementById(contentId);
    const nameElement = container.querySelector('.name'); // Get the name element
    const cardElement = container.querySelector('.thecard'); // Get the card element

    // Close all opened content and remove selected state from all cards
    allContainers.forEach((cont) => {
        const onclickValue = cont.getAttribute('onclick'); // Get the onclick value
        if (onclickValue) { // Check if onclickValue is not null
            const contentIdMatch = onclickValue.match(/'([^']+)'/); // Match content ID
            if (contentIdMatch) {
                const contentToCloseId = contentIdMatch[1]; // Extract the ID
                const contentToClose = document.getElementById(contentToCloseId);
                if (contentToClose) {
                    contentToClose.style.display = 'none'; // Hide the content
                }
            }
        }

        // Apply fade-out class before removing selected state
        cont.classList.add('fade-out'); 
        setTimeout(() => {
            cont.classList.remove('selected', 'fade-out'); // Remove selected and fade-out classes
        }, 300); // Match this time with the CSS transition duration

        const cardToFlip = cont.querySelector('.thecard'); // Get the card element
        if (cardToFlip) {
            cardToFlip.classList.remove('flipped'); // Remove class to unflip card
            const nameToShow = cont.querySelector('.name'); // Get the name element
            if (nameToShow) {
                nameToShow.style.display = 'block'; // Show the name again
            }
        }
    });

    // Now toggle the selected card's content
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block'; // Show the content
        container.classList.add('selected'); // Add selected class
        cardElement.classList.add('flipped'); // Add class to flip card
        if (nameElement) {
            nameElement.style.display = 'none'; // Hide the name
        }

        // Scroll to the content
        content.scrollIntoView({ behavior: 'smooth' });
    } else {
        content.style.display = 'none'; // Hide the content if it's already displayed
        container.classList.remove('selected'); // Remove selected class
        cardElement.classList.remove('flipped'); // Unflip card
        if (nameElement) {
            nameElement.style.display = 'block'; // Show the name again
        }
    }
}


function closeContent(contentId) {
    const content = document.getElementById(contentId);
    if (content) {
        content.style.display = 'none'; // Hide the content
    }

    // Reset all cards to their original state
    const allContainers = document.querySelectorAll('.solo-container'); 
    allContainers.forEach((container) => {
        container.classList.remove('selected', 'fade-out'); // Remove selected state

        const cardElement = container.querySelector('.thecard'); // Get the card element
        if (cardElement) {
            cardElement.classList.remove('flipped'); // Unflip the card
        }

        const nameElement = container.querySelector('.name'); // Get the name element
        if (nameElement) {
            nameElement.style.display = 'block'; // Show the name again
        }
    });
}



// MOBILE TOGGLE ICON

function toggleContent(contentId, container) {
    const allContainers = document.querySelectorAll('.solo-container'); // Select all card containers
    const content = document.getElementById(contentId); // Get the specific content
    const nameElement = container.querySelector('.name'); // Get the name element
    const cardElement = container.querySelector('.thecard'); // Get the card element
    const arrowIcon = container.querySelector('.fa-caret-down'); // Get the arrow icon

    // Check if we are in mobile mode
    const isMobile = window.matchMedia("(max-width: 660px)").matches;

    // If the clicked card is already open, close it
    if (container.classList.contains('selected')) {
        content.style.display = 'none'; // Hide the content
        container.classList.remove('selected'); // Remove selected class
        if (!isMobile) {
            cardElement.classList.remove('flipped'); // Unflip card (only for non-mobile)
        }
        if (nameElement) nameElement.style.display = 'block'; // Show name again
        if (isMobile && arrowIcon) arrowIcon.style.transform = "rotate(0deg)"; // Reset arrow
        return; // Stop further execution (content is closed)
    }

    // Close all opened content and remove selected state from all cards
    allContainers.forEach((cont) => {
        const contentIdMatch = cont.getAttribute('onclick').match(/'([^']+)'/); // Match content ID
        if (contentIdMatch) {
            const contentToCloseId = contentIdMatch[1]; // Extract content ID
            const contentToClose = document.getElementById(contentToCloseId);
            if (contentToClose) {
                contentToClose.style.display = 'none'; // Hide the content
            }
        }

        cont.classList.remove('selected', 'fade-out'); // Reset selected state

        const cardToFlip = cont.querySelector('.thecard'); // Get the card element
        if (cardToFlip && !isMobile) {
            cardToFlip.classList.remove('flipped'); // Unflip card (only for non-mobile)
        }

        const nameToShow = cont.querySelector('.name'); // Get name element
        if (nameToShow) nameToShow.style.display = 'block'; // Show name again

        const arrowToReset = cont.querySelector('.fa-caret-down'); // Get arrow icon
        if (arrowToReset) arrowToReset.style.transform = "rotate(0deg)"; // Reset arrow
    });

    // Now toggle the selected card's content
    content.style.display = 'block'; // Show the content
    container.classList.add('selected'); // Add selected class
    if (nameElement) nameElement.style.display = 'none'; // Hide the name

    // Rotate the arrow when opening in mobile mode
    if (isMobile && arrowIcon) arrowIcon.style.transform = "rotate(180deg)";

    // Prevent flipping the card on mobile
    if (!isMobile) {
        cardElement.classList.add('flipped'); // Flip the card (only for non-mobile)
    }

    // Scroll to the content smoothly
    content.scrollIntoView({ behavior: 'smooth' });
}

// Attach event listeners to all cards
document.querySelectorAll('.solo-container').forEach((container) => {
    // Make the card itself toggle content (open/close)
    container.addEventListener('click', function (event) {
        // Prevent triggering when clicking inside the content area
        if (!event.target.closest('.card-content')) {
            const contentId = container.getAttribute('onclick').match(/'([^']+)'/)[1]; // Extract content ID
            toggleContent(contentId, container); // Toggle content for the clicked card
        }
    });

    // Allow the caret to toggle the content
    const arrowIcon = container.querySelector('.fa-caret-down');
    if (arrowIcon) {
        arrowIcon.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent double-triggering
            const contentId = container.getAttribute('onclick').match(/'([^']+)'/)[1]; // Extract content ID
            toggleContent(contentId, container); // Toggle content
        });
    }
});




// MOBILE FUN FACTS TEXT
function updateFunFactsText() {
    const funFactsElement = document.querySelector('.funfacts-text');

    if (funFactsElement) {
        if (window.innerWidth <= 960) {
            funFactsElement.textContent = "Fun Facts "; // Change text for mobile
        } else {
            funFactsElement.textContent = "Fun Facts (hover each icon to view)"; // Default text for desktop
        }
    }
}

// Run on page load and window resize
window.addEventListener('load', updateFunFactsText);
window.addEventListener('resize', updateFunFactsText);
// MOBILE ID CARDS

// Get all cards
const cards = document.querySelectorAll(".accordion");

cards.forEach(function(card) {
  card.addEventListener("click", function() {
    const panel = this.querySelector(".panel");
    panel.classList.toggle("show");
  });
});



// TOGGLING ARROW BUTTONS
// Code for responsive navbar 
function navFunction() {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
