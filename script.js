// Wait for the DOM to be fully loaded before executing any code
document.addEventListener("DOMContentLoaded", function() {
    // Get the "View Recipe" button and the additional details section
    const viewRecipeButton = document.querySelector('.recipe-button');
    const additionalDetails = document.querySelector('.additional-details');

    // Add a click event listener to the button
    viewRecipeButton.addEventListener('click', function(event) {
        // Prevent the default behavior of the link (in this case, navigating to a different page)
        event.preventDefault();
        
        // Toggle the visibility of the additional details section
        if (additionalDetails.style.display === 'none' || additionalDetails.style.display === '') {
            additionalDetails.style.display = 'block';
        } else {
            additionalDetails.style.display = 'none';
        }
    });
});
