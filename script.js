document.addEventListener("DOMContentLoaded", function() {
    const collapsibleButtons = document.querySelectorAll(".toggle-btn");

    collapsibleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});

