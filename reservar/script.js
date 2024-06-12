document.addEventListener('DOMContentLoaded', function() {
    // Mostrar el popup cuando se carga la página
    const popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = 'flex';

    // Agregar evento para cerrar el popup al hacer clic en la X
    const closeBtn = document.getElementById('close-btn');
    closeBtn.addEventListener('click', function() {
        popupContainer.style.display = 'none';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Verifica si existe un contenedor de formulario y genera el formulario correspondiente
    if (document.getElementById("form-container")) {
        generateClientForm(); // Genera el formulario para clientes
    } else if (document.getElementById("form-container-reservas")) {
        generateReservationForm(); // Genera el formulario para reservas
    }
});


// Genera el formulario para clientes
function generateClientForm() {
    // Obtiene el contenedor del formulario
    const formContainer = document.getElementById('form-container');
    // Crea un nuevo formulario
    const form = document.createElement('form');
    // Asigna identificador y clase al formulario
    form.id = 'clienteForm';
    form.classList.add('cliente-form');
    // Configura la acción y el método del formulario
    form.action = 'procesar_clientes.php';
    form.method = 'POST';

    // Campos del formulario y sus configuraciones
    const formFields = [
        { label: 'Nombre:', type: 'text', id: 'nombre', name: 'nombre', required: true },
        { label: 'Apellidos:', type: 'text', id: 'apellidos', name: 'apellidos', required: true },
        { label: 'Email:', type: 'email', id: 'email', name: 'email', required: true },
        { label: 'Teléfono:', type: 'tel', id: 'telefono', name: 'telefono', required: true }
    ];

    // Creación de campos de entrada
    formFields.forEach(field => {
        const formGroup = document.createElement('div'); // Crea un div para agrupar el campo y su etiqueta
        formGroup.classList.add('form-group'); // Añade una clase al div

        const label = document.createElement('label'); // Crea una etiqueta para el campo
        label.htmlFor = field.id; // Asigna el id del campo como el for de la etiqueta
        label.textContent = field.label; // Añade el texto de la etiqueta
        formGroup.appendChild(label); // Añade la etiqueta al div

        const input = document.createElement('input'); // Crea un campo de entrada
        input.type = field.type; // Asigna el tipo de entrada
        input.id = field.id; // Asigna el id
        input.name = field.name; // Asigna el nombre
        if (field.required) input.required = true; // Añade la propiedad required si es necesario
        formGroup.appendChild(input); // Añade el campo al div

        form.appendChild(formGroup); // Añade el div al formulario
    });

    // Botón de envío del formulario
    const submitButton = document.createElement('button'); // Crea un botón de envío
    submitButton.type = 'submit'; // Asigna el tipo de botón
    submitButton.textContent = 'Enviar'; // Añade el texto al botón
    form.appendChild(submitButton); // Añade el botón al formulario

    formContainer.appendChild(form); // Añade el formulario al contenedor
}

function generateReservationForm() {
    // Obtiene el contenedor del formulario de reserva
    const formContainerReservas = document.getElementById('form-container-reservas');
    // Crea un elemento formulario
    const formReservas = document.createElement('form');
    // Establece el ID del formulario
    formReservas.id = 'reservaFormReservas';
    // Agrega una clase al formulario
    formReservas.classList.add('reserva-form');
    // Especifica la acción del formulario (dónde enviará los datos)
    formReservas.action = 'procesar_reserva.php';
    // Especifica el método de envío de datos del formulario
    formReservas.method = 'POST';

    // Definición de los campos del formulario
    const formFieldsReservas = [
        { label: 'Tipo de Mascota:', type: 'checkbox-group', id: 'tipoMascota', name: 'tipoMascota[]', options: ['Perro', 'Gato'] },
        { label: 'Cantidad:', type: 'number', id: 'cantidad', name: 'cantidad', required: true },
        { label: 'Fecha:', type: 'date', id: 'fecha', name: 'fecha', required: true },
        { label: 'Hora:', type: 'select', id: 'hora', name: 'hora', options: generateTimeSlots(), required: true },
        { label: 'Información Adicional:', type: 'textarea', id: 'info', name: 'info', rows: 4 }
    ];

    // Itera sobre cada campo definido para el formulario
    formFieldsReservas.forEach(field => {
        // Crea un contenedor para el grupo de formulario
        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group');

        // Crea una etiqueta para el campo del formulario
        const label = document.createElement('label');
        label.htmlFor = field.id;
        label.textContent = field.label;
        formGroup.appendChild(label);

        // Genera el campo del formulario según el tipo especificado
        if (field.type === 'checkbox-group') {
            // Para grupos de casillas de verificación
            const checkboxGroup = document.createElement('div');
            checkboxGroup.classList.add('checkbox-group');
            field.options.forEach(option => {
                const checkboxLabel = document.createElement('label');
                checkboxLabel.innerHTML = `<input type="checkbox" name="${field.name}" value="${option.toLowerCase()}"> ${option}`;
                checkboxGroup.appendChild(checkboxLabel);
            });
            formGroup.appendChild(checkboxGroup);
        } else if (field.type === 'select') {
            // Para menús desplegables
            const select = document.createElement('select');
            select.id = field.id;
            select.name = field.name;
            field.options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                select.appendChild(optionElement);
            });
            if (field.required) select.required = true;
            formGroup.appendChild(select);
        } else if (field.type === 'textarea') {
            // Para áreas de texto grandes
            const textarea = document.createElement('textarea');
            textarea.id = field.id;
            textarea.name = field.name;
            textarea.rows = field.rows;
            formGroup.appendChild(textarea);
        } else {
            // Para otros tipos de campos de entrada
            const input = document.createElement('input');
            input.type = field.type;
            input.id = field.id;
            input.name = field.name;
            if (field.required) input.required = true;
            formGroup.appendChild(input);
        }

        // Agrega el grupo de formulario al formulario principal
        formReservas.appendChild(formGroup);
    });

    // Crea un botón de envío del formulario
    const submitButtonReservas = document.createElement('button');
    submitButtonReservas.type = 'submit';
    submitButtonReservas.textContent = 'Reservar';
    formReservas.appendChild(submitButtonReservas);

    // Agrega el formulario completo al contenedor
    formContainerReservas.appendChild(formReservas);
}

// Función para generar franjas horarias
function generateTimeSlots() {
    const timeSlots = [];
    // Genera franjas horarias de 8:00 a 17:30
    for (let i = 8; i < 18; i++) {
        timeSlots.push(`${i}:00`, `${i}:30`);
    }
    return timeSlots;
}
