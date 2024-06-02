document.addEventListener('DOMContentLoaded', function () {
    const botonesToggle = document.querySelectorAll('.boton');

    botonesToggle.forEach(boton => {
        boton.addEventListener('click', function () {
            const target = this.getAttribute('data-target');
            const codigo = document.getElementById(target);

            if (codigo.style.display === 'none') {
                codigo.style.display = 'block';
            } else {
                codigo.style.display = 'none';
            }
        });
    });
});
<<<<<<< HEAD
 
=======

>>>>>>> ba955c14b77c31a889fe6039d42a4ecbeae2b23e

document.addEventListener("DOMContentLoaded", function() {
    const imagenes = document.querySelectorAll(".imagen-galeria");
    const modal = document.querySelector(".modal");
    const modalImagen = modal.querySelector(".modal-imagen");
    const cerrarModal = modal.querySelector(".cerrar-modal");

    imagenes.forEach(imagen => {
        imagen.addEventListener("click", () => {
            modalImagen.src = imagen.src;
            modal.style.display = "block";
        });
    });

    cerrarModal.addEventListener("click", () => {
        modal.style.display = "none";
    });
});


