const currentPage = 1; // Assuming you have set the initial page number
const totalPages = 10; // Set the total number of pages

const previousButton = document.getElementById('previous-page');
const nextButton = document.getElementById('next-page');
const currentPageSpan = document.getElementById('current-page');
const totalPagesSpan = document.getElementById('total-pages');

// Update button states and page number display
function updatePagination() {
    currentPageSpan.textContent = currentPage;

    if (currentPage === 1) {
        previousButton.disabled = true;
    } else {
        previousButton.disabled = false;
    }

    if (currentPage === totalPages) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

updatePagination(); // Initialize pagination display

// Add event listeners for button clicks
previousButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updatePagination();
        // Load content for the new page (implement your logic here)
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
        // Load content for the new page (implement your logic here)
    }
});
