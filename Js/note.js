document.addEventListener("DOMContentLoaded", function() {
    const threeDotMenu = document.querySelector(".three-dot-menu");
    const dropdown = document.getElementById("myDropdown");
    const notesLink = document.getElementById("notesLink");
    const modalForm = document.getElementById("modalForm");
    const closeForm = document.getElementById("closeForm");

    threeDotMenu.addEventListener("click", function() {
        dropdown.style.display = "block";
    });

    notesLink.addEventListener("click", function(e) {
        e.preventDefault();
        modalForm.style.display = "block";
    });

    closeForm.addEventListener("click", function() {
        modalForm.style.display = "none";
    });
});
