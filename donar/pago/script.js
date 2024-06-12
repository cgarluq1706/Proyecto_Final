document.addEventListener('DOMContentLoaded', function() {
// Selecciona todos los botones de donación
var donationButtons = document.querySelectorAll('.botones-colaborar button');

// Itera sobre cada botón
donationButtons.forEach(function(button) {
    // Agrega un evento de clic a cada botón
    button.addEventListener('click', function() {
        // Obtiene el atributo 'data-amount' del botón clickeado
        var amount = this.getAttribute('data-amount');
        var message = "";
        // switch para determinar el mensaje basado en el monto de la donación
        switch(amount) {
            case "1":
                message = "Ha seleccionado una donación básica de 1 euro.";
                break;
            case "5":
                message = "Ha seleccionado una donación de apoyo de 5 euros.";
                break;
            case "10":
                message = "Ha seleccionado una donación generosa de 10 euros.";
                break;
            case "20":
                message = "Ha seleccionado una donación especial de 20 euros.";
                break;
            case "50":
                message = "Ha seleccionado una gran contribución de 50 euros.";
                break;
            case "100":
                message = "Ha seleccionado una donación excepcional de 100 euros.";
                break;
            default:
                message = "Gracias por su colaboración.";
        }
        // Muestra un mensaje de alerta con el mensaje correspondiente al monto de la donación
        alert(message);
    });
});


    document.getElementById('paymentForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto
        
        // Obtener los datos del formulario
        var fullName = document.getElementById('fullName').value;
        var cardNumber = document.getElementById('cardNumber').value;
        var expDate = document.getElementById('expDate').value;
        var cvv = document.getElementById('cvv').value;

        // Validar los datos (puede hacerse más exhaustivamente en una aplicación real)
        if (fullName.trim() === '' || cardNumber.length !== 16 || expDate.length !== 5 || cvv.length !== 3) {
            document.getElementById('paymentMessage').innerText = "Por favor, ingrese detalles válidos.";
            return;
        }

        // Simulación de procesamiento de pago exitoso
        setTimeout(function() {
            document.getElementById('paymentMessage').innerText = "¡Pago exitoso! Su pago ha sido realizado.";
            
            // Redirigir a la página de agradecimiento después de 3 segundos
            setTimeout(function() {
                window.location.href = 'agradecimiento.html';
            }, 3000);
        }, 2000); // Simular un retraso de 2 segundos para procesar el pago (en una aplicación real, esto sería una llamada a un servidor)
    });
});
