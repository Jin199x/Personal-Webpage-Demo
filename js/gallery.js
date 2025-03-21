document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("mediaModal");
    const modalImg = document.getElementById("modalImg");
    const modalVideo = document.getElementById("modalVideo");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");

    function openModal(mediaSrc, mediaType, caption) {
        modal.style.display = "flex";
        captionText.innerHTML = caption;

        if (mediaType === "image") {
            modalImg.src = mediaSrc;
            modalImg.style.display = "block";
            modalVideo.style.display = "none";
        } else if (mediaType === "video") {
            modalVideo.src = mediaSrc;
            modalVideo.style.display = "block";
            modalImg.style.display = "none";
            modalVideo.play();
        }
    }

    document.querySelectorAll(".gallery-item img").forEach(img => {
        img.addEventListener("click", function () {
            openModal(this.src, "image", this.alt);
        });
    });

    document.querySelectorAll(".gallery-item video").forEach(video => {
        video.addEventListener("click", function () {
            openModal(video.querySelector("source").getAttribute("src"), "video", "Video Preview");
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
        modalVideo.pause();
        modalVideo.src = "";
    });

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
            modalVideo.pause();
            modalVideo.src = "";
        }
    });
});
