document.addEventListener("DOMContentLoaded", function() {
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    const carousel = document.querySelector(".carousel");

    const commentSlides = carousel.querySelectorAll(".comment-slide");
    let currentIndex = 0;

    function showSlide(index) {
        // Oculta todos los slides
        commentSlides.forEach(slide => {
            slide.style.display = "none";
        });
        // Muestra el slide actual
        commentSlides[index].style.display = "flex";
    }

    function showNextSlide() {
        currentIndex++;
        if (currentIndex >= commentSlides.length) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    }

    function showPreviousSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = commentSlides.length - 1;
        }
        showSlide(currentIndex);
    }

    // Mostrar el primer slide al cargar la página
    showSlide(currentIndex);

    // Event listeners para las flechas
    leftArrow.addEventListener("click", showPreviousSlide);
    rightArrow.addEventListener("click", showNextSlide);

    // Función para cambiar automáticamente los slides cada cierto tiempo
    setInterval(showNextSlide, 10000); // Cambiar cada 10 segundos (10000 milisegundos)
});
