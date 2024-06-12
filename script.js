
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona las flechas izquierda y derecha del carrusel y el contenedor del carrusel
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    const carousel = document.querySelector(".carousel");

    // Selecciona todos los slides de comentarios dentro del carrusel
    const commentSlides = carousel.querySelectorAll(".comment-slide");
    let currentIndex = 0; // Índice del slide actual

    // Función para mostrar un slide específico según su índice
    function showSlide(index) {
        // Oculta todos los slides
        commentSlides.forEach(slide => {
            slide.style.display = "none";
        }); 
        // Muestra el slide en la posición index
        commentSlides[index].style.display = "flex";
    }

    // Función para mostrar el siguiente slide
    function showNextSlide() {
        currentIndex++;
        // Si alcanzamos el final del carrusel, volvemos al principio
        if (currentIndex >= commentSlides.length) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    }

    // Función para mostrar el slide anterior
    function showPreviousSlide() {
        currentIndex--;
        // Si estamos en el primer slide y vamos hacia atrás, volvemos al último slide
        if (currentIndex < 0) {
            currentIndex = commentSlides.length - 1;
        }
        showSlide(currentIndex);
    }

    // Mostrar el primer slide al cargar la página
    showSlide(currentIndex);

    // Agrega event listeners a las flechas para cambiar de slide
    leftArrow.addEventListener("click", showPreviousSlide);
    rightArrow.addEventListener("click", showNextSlide);

    // Función para cambiar automáticamente los slides cada cierto tiempo
    setInterval(showNextSlide, 10000); // Cambiar cada 10 segundos (10000 milisegundos)
});
