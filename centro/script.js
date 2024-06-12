// Función que se ejecuta cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los elementos con la clase 'boton'
    const botonesToggle = document.querySelectorAll('.boton');

    // Itera sobre cada botón
    botonesToggle.forEach(boton => {
        // Agrega un evento 'click' a cada botón
        boton.addEventListener('click', function () {
            // Obtiene el valor del atributo 'data-target' del botón clicado
            const target = this.getAttribute('data-target');
            // Selecciona el elemento con el id obtenido anteriormente
            const codigo = document.getElementById(target);

            // Si el elemento está oculto, lo muestra; de lo contrario, lo oculta
            if (codigo.style.display === 'none') {
                codigo.style.display = 'block';
            } else {
                codigo.style.display = 'none';
            }
        });
    });
});

// Función que se ejecuta cuando el DOM está completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todas las imágenes con la clase "imagen-galeria"
    const imagenes = document.querySelectorAll(".imagen-galeria");
    // Selecciona el modal
    const modal = document.querySelector(".modal");
    // Selecciona la imagen dentro del modal
    const modalImagen = modal.querySelector(".modal-imagen");
    // Selecciona el botón para cerrar el modal
    const cerrarModal = modal.querySelector(".cerrar-modal");

    // Itera sobre cada imagen de la galería
    imagenes.forEach(imagen => {
        // Agrega un evento 'click' a cada imagen
        imagen.addEventListener("click", () => {
            // Cambia la fuente de la imagen dentro del modal por la de la imagen clicada
            modalImagen.src = imagen.src;
            // Muestra el modal
            modal.style.display = "block";
        });
    });

    // Agrega un evento 'click' al botón para cerrar el modal
    cerrarModal.addEventListener("click", () => {
        // Oculta el modal al hacer clic en el botón de cierre
        modal.style.display = "none";
    });
});


