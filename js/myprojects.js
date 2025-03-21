document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");
   
    modal.style.display = "none";
   
    document.querySelectorAll(".view-btn").forEach(button => {
        button.addEventListener("click", function () {
            modal.style.display = "flex"; 
            modalImg.src = this.getAttribute("data-img");
            captionText.innerHTML = this.parentElement.querySelector("h2").innerText; 
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none"; 
    });

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none"; 
        }
    });
});
