
document.addEventListener('DOMContentLoaded', function() {
    
    // Obtiene el contenedor donde se insertará el formulario
    const formContainer = document.getElementById('formulario');

    // Crea un elemento de formulario
    const form = document.createElement('form');
    // Establece el atributo 'id' del formulario
    form.setAttribute('id', 'contactForm');
    // Establece el método del formulario como POST
    form.setAttribute('method', 'POST');
    // Establece la acción del formulario a 'save_form.php'
    form.setAttribute('action', 'save_form.php');

    // Define los campos del formulario en un array de objetos
    const fields = [
        { label: 'Nombre:', type: 'text', id: 'nombre', required: true },
        { label: 'Apellido:', type: 'text', id: 'apellido', required: true },
        { label: 'Email:', type: 'email', id: 'email', required: true },
        { label: 'Teléfono:', type: 'tel', id: 'telefono', required: true },
    ];
 
    // Itera sobre cada campo definido en el array 'fields'
    fields.forEach(field => {
        // Crea un contenedor para el grupo de formulario
        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group');

        // Crea una etiqueta para el campo
        const label = document.createElement('label');
        label.setAttribute('for', field.id);  // Asocia la etiqueta con el campo correspondiente
        label.textContent = field.label;  // Establece el texto de la etiqueta

        // Crea un campo de entrada
        const input = document.createElement('input');
        input.setAttribute('type', field.type);  // Establece el tipo de entrada
        input.setAttribute('id', field.id);  // Establece el id del campo
        input.setAttribute('name', field.id);  // Establece el nombre del campo
        if (field.required) input.setAttribute('required', 'required');  // Establece el campo como obligatorio si es necesario

        // Añade la etiqueta y el campo de entrada al grupo de formulario
        formGroup.appendChild(label);
        formGroup.appendChild(input);
        // Añade el grupo de formulario al formulario
        form.appendChild(formGroup);
    });

    // Crea un grupo de formulario para los checkboxes de mascotas
    const mascotaGroup = document.createElement('div');
    mascotaGroup.classList.add('form-group', 'checkbox-group');

    // Crea y añade una etiqueta para el grupo de checkboxes
    const mascotaLabel = document.createElement('label');
    mascotaLabel.textContent = 'Tipo de mascota:';

    // Crea el checkbox y la etiqueta para 'Perro'
    const perroCheckbox = document.createElement('input');
    perroCheckbox.setAttribute('type', 'checkbox');
    perroCheckbox.setAttribute('name', 'mascota');
    perroCheckbox.setAttribute('value', 'Perro');
    perroCheckbox.setAttribute('id', 'perro');
    const perroLabel = document.createElement('label');
    perroLabel.setAttribute('for', 'perro');
    perroLabel.textContent = 'Perro';

    // Crea el checkbox y la etiqueta para 'Gato'
    const gatoCheckbox = document.createElement('input');
    gatoCheckbox.setAttribute('type', 'checkbox');
    gatoCheckbox.setAttribute('name', 'mascota');
    gatoCheckbox.setAttribute('value', 'Gato');
    gatoCheckbox.setAttribute('id', 'gato');
    const gatoLabel = document.createElement('label');
    gatoLabel.setAttribute('for', 'gato');
    gatoLabel.textContent = 'Gato';

    // Crea el checkbox y la etiqueta para 'Otros'
    const otrosCheckbox = document.createElement('input');
    otrosCheckbox.setAttribute('type', 'checkbox');
    otrosCheckbox.setAttribute('name', 'mascota');
    otrosCheckbox.setAttribute('value', 'Otros');
    otrosCheckbox.setAttribute('id', 'otros');
    const otrosLabel = document.createElement('label');
    otrosLabel.setAttribute('for', 'otros');
    otrosLabel.textContent = 'Otros';

    // Añade los checkboxes y sus etiquetas al grupo de formulario
    mascotaGroup.appendChild(mascotaLabel);
    mascotaGroup.appendChild(perroCheckbox);
    mascotaGroup.appendChild(perroLabel);
    mascotaGroup.appendChild(gatoCheckbox);
    mascotaGroup.appendChild(gatoLabel);
    mascotaGroup.appendChild(otrosCheckbox);
    mascotaGroup.appendChild(otrosLabel);
    // Añade el grupo de checkboxes al formulario
    form.appendChild(mascotaGroup);

    // Crea un grupo de formulario para el selector de número de mascotas
    const numMascotasGroup = document.createElement('div');
    numMascotasGroup.classList.add('form-group');

    // Crea y añade una etiqueta para el selector
    const numMascotasLabel = document.createElement('label');
    numMascotasLabel.setAttribute('for', 'mascotas');
    numMascotasLabel.textContent = 'Número de mascotas:';

    // Crea un elemento select para el número de mascotas
    const numMascotasSelect = document.createElement('select');
    numMascotasSelect.setAttribute('id', 'mascotas');
    numMascotasSelect.setAttribute('name', 'mascotas');
    numMascotasSelect.setAttribute('required', 'required');

    // Define las opciones del selector en un array de objetos
    const options = [
        { value: '', text: 'Seleccionar' },
        { value: '1', text: 'Uno' },
        { value: '2', text: 'Dos' },
        { value: '3', text: 'Tres' },
        { value: '4', text: 'Cuatro' },
        { value: '5', text: 'Cinco' },
        { value: '6', text: '6 o más' }
    ];

    // Itera sobre cada opción y la añade al selector
    options.forEach(optionData => {
        const option = document.createElement('option');
        option.setAttribute('value', optionData.value);  // Establece el valor de la opción
        option.textContent = optionData.text;  // Establece el texto de la opción
        numMascotasSelect.appendChild(option);  // Añade la opción al selector
    });

    // Añade la etiqueta y el selector al grupo de formulario
    numMascotasGroup.appendChild(numMascotasLabel);
    numMascotasGroup.appendChild(numMascotasSelect);
    // Añade el grupo de formulario al formulario
    form.appendChild(numMascotasGroup);

    // Crea un grupo de formulario para el campo de texto del mensaje
    const mensajeGroup = document.createElement('div');
    mensajeGroup.classList.add('form-group');

    // Crea y añade una etiqueta para el campo de texto del mensaje
    const mensajeLabel = document.createElement('label');
    mensajeLabel.setAttribute('for', 'mensaje');
    mensajeLabel.textContent = 'Mensaje:';

    // Crea un campo de texto área para el mensaje
    const mensajeTextarea = document.createElement('textarea');
    mensajeTextarea.setAttribute('id', 'mensaje');
    mensajeTextarea.setAttribute('name', 'mensaje');
    mensajeTextarea.setAttribute('rows', '4');  // Establece el número de filas visibles del textarea
    mensajeTextarea.setAttribute('placeholder', 'Escriba aquí su mensaje');  // Establece un texto de sugerencia

    // Añade la etiqueta y el textarea al grupo de formulario
    mensajeGroup.appendChild(mensajeLabel);
    mensajeGroup.appendChild(mensajeTextarea);
    // Añade el grupo de formulario al formulario
    form.appendChild(mensajeGroup);

    // Crea un botón de envío del formulario
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Enviar';

    // Crea un botón para resetear el formulario
    const resetButton = document.createElement('button');
    resetButton.setAttribute('type', 'reset');
    resetButton.textContent = 'Borrar';

    // Añade los botones al formulario
    form.appendChild(submitButton);
    form.appendChild(resetButton);

    // Añade el formulario completo al contenedor del formulario en el DOM
    formContainer.appendChild(form);

    // Añade un event listener para manejar el envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Previene el comportamiento por defecto de enviar el formulario

        // Recoge los datos del formulario
        const formData = new FormData(form);

        // Envía los datos del formulario usando fetch
        fetch('save_form.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())  // Convierte la respuesta a texto
        .then(data => {
            alert(data);  // Muestra un mensaje de alerta con la respuesta
            form.reset();  // Resetea el formulario
        })
        .catch(error => {
            console.error('Error:', error);  // Muestra un mensaje de error en la consola
        });
    });

});
