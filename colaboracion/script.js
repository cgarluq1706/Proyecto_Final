document.addEventListener("DOMContentLoaded", function() {
  // Selecciona todos los elementos con la clase "carousel-slide" y los guarda en la variable slides
  const slides = document.querySelectorAll(".carousel-slide");
  // Inicializa la variable currentSlide en 0
  let currentSlide = 0;

  // Función que muestra el slide en el índice especificado y oculta los demás
  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }

  // Función que muestra el siguiente slide
  function nextSlide() {
    // Calcula el índice del siguiente slide usando el operador módulo (%) para ciclar
    currentSlide = (currentSlide + 1) % slides.length;
    // Muestra el slide actualizado
    showSlide(currentSlide);
  }

  // Función que muestra el slide anterior
  function prevSlide() {
    // Calcula el índice del slide anterior usando el operador módulo (%) para ciclar
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    // Muestra el slide actualizado
    showSlide(currentSlide);
  }

  // Obtiene los botones de siguiente y anterior
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  // Agrega event listeners para los botones de siguiente y anterior
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Muestra el primer slide al cargar la página
  showSlide(currentSlide);

  // Establece un intervalo para cambiar al siguiente slide automáticamente cada 7000 milisegundos (7 segundos)
  setInterval(nextSlide, 7000); 
});

  