document.addEventListener("DOMContentLoaded", function () {
    const radioButtons = document.querySelectorAll("input[name='offer']");
    const offerContainers = document.querySelectorAll(".offer_container");
    const sizeColorSections = document.querySelectorAll(".size_color_selection");
    const totalAmountElement = document.querySelector(".free_amount"); // Selects the total amount section

    function updateVisibility() {
        // Hide all size & color sections and remove active class
        offerContainers.forEach((container) => {
            container.classList.remove("active");
        });
        sizeColorSections.forEach((section) => {
            section.style.display = "none";
        });

        // Find the selected radio button
        const selectedRadio = document.querySelector("input[name='offer']:checked");
        const selectedOffer = selectedRadio.closest(".offer_container");

        if (selectedOffer) {
            selectedOffer.classList.add("active"); // Add active class
            const sizeColorSection = selectedOffer.querySelector(".size_color_selection");
            if (sizeColorSection) {
                sizeColorSection.style.display = "flex"; // Show the corresponding size & color section
            }
            const priceElement = selectedOffer.querySelector(".price");
            if (priceElement) {
                totalAmountElement.textContent = `Total : ${priceElement.textContent}`;
            }
        }
    }

    // Attach event listeners to all radio buttons
    radioButtons.forEach((radio) => {
        radio.addEventListener("change", updateVisibility);
    });

    // Run on page load to set initial state
    updateVisibility();
});
