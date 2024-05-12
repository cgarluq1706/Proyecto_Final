document.addEventListener('DOMContentLoaded', function() {
    const formContainer = document.getElementById('formulario');

    const form = document.createElement('form');
    form.setAttribute('id', 'contactForm');
    form.setAttribute('method', 'POST');
    form.setAttribute('action', 'save_form.php');

    const fields = [
        { label: 'Nombre:', type: 'text', id: 'nombre', required: true },
        { label: 'Apellido:', type: 'text', id: 'apellido', required: true },
        { label: 'Email:', type: 'email', id: 'email', required: true },
        { label: 'Teléfono:', type: 'tel', id: 'telefono', required: true },
    ];

    fields.forEach(field => {
        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group');

        const label = document.createElement('label');
        label.setAttribute('for', field.id);
        label.textContent = field.label;

        const input = document.createElement('input');
        input.setAttribute('type', field.type);
        input.setAttribute('id', field.id);
        input.setAttribute('name', field.id);
        if (field.required) input.setAttribute('required', 'required');

        formGroup.appendChild(label);
        formGroup.appendChild(input);
        form.appendChild(formGroup);
    });

    const mascotaGroup = document.createElement('div');
    mascotaGroup.classList.add('form-group');

    const mascotaLabel = document.createElement('label');
    mascotaLabel.textContent = 'Tipo de mascota:';

    const perroRadio = document.createElement('input');
    perroRadio.setAttribute('type', 'radio');
    perroRadio.setAttribute('name', 'mascota');
    perroRadio.setAttribute('value', 'Perro');
    perroRadio.setAttribute('id', 'perro');
    const perroLabel = document.createElement('label');
    perroLabel.setAttribute('for', 'perro');
    perroLabel.textContent = 'Perro';

    const gatoRadio = document.createElement('input');
    gatoRadio.setAttribute('type', 'radio');
    gatoRadio.setAttribute('name', 'mascota');
    gatoRadio.setAttribute('value', 'Gato');
    gatoRadio.setAttribute('id', 'gato');
    const gatoLabel = document.createElement('label');
    gatoLabel.setAttribute('for', 'gato');
    gatoLabel.textContent = 'Gato';

    mascotaGroup.appendChild(mascotaLabel);
    mascotaGroup.appendChild(perroRadio);
    mascotaGroup.appendChild(perroLabel);
    mascotaGroup.appendChild(gatoRadio);
    mascotaGroup.appendChild(gatoLabel);
    form.appendChild(mascotaGroup);

    const numMascotasGroup = document.createElement('div');
    numMascotasGroup.classList.add('form-group');

    const numMascotasLabel = document.createElement('label');
    numMascotasLabel.setAttribute('for', 'mascotas');
    numMascotasLabel.textContent = 'Número de mascotas:';

    const numMascotasSelect = document.createElement('select');
    numMascotasSelect.setAttribute('id', 'mascotas');
    numMascotasSelect.setAttribute('name', 'mascotas');
    numMascotasSelect.setAttribute('required', 'required');

    const options = [
        { value: '', text: 'Seleccionar' },
        { value: '1', text: 'Uno' },
        { value: '2', text: 'Dos' },
        { value: '3', text: 'Tres' },
        { value: '4', text: 'Cuatro' },
        { value: '5', text: 'Cinco' },
        { value: '6', text: '6 o más' }
    ];

    options.forEach(optionData => {
        const option = document.createElement('option');
        option.setAttribute('value', optionData.value);
        option.textContent = optionData.text;
        numMascotasSelect.appendChild(option);
    });

    numMascotasGroup.appendChild(numMascotasLabel);
    numMascotasGroup.appendChild(numMascotasSelect);
    form.appendChild(numMascotasGroup);

    const mensajeGroup = document.createElement('div');
    mensajeGroup.classList.add('form-group');

    const mensajeLabel = document.createElement('label');
    mensajeLabel.setAttribute('for', 'mensaje');
    mensajeLabel.textContent = 'Mensaje:';

    const mensajeTextarea = document.createElement('textarea');
    mensajeTextarea.setAttribute('id', 'mensaje');
    mensajeTextarea.setAttribute('name', 'mensaje');
    mensajeTextarea.setAttribute('rows', '4');
    mensajeTextarea.setAttribute('placeholder', 'Escriba aquí su mensaje');

    mensajeGroup.appendChild(mensajeLabel);
    mensajeGroup.appendChild(mensajeTextarea);
    form.appendChild(mensajeGroup);

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Enviar';

    const resetButton = document.createElement('button');
    resetButton.setAttribute('type', 'reset');
    resetButton.textContent = 'Borrar';

    form.appendChild(submitButton);
    form.appendChild(resetButton);

    formContainer.appendChild(form);

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch('save_form.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
