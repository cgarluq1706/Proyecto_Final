// establece una cookie con el nombre, valor y duración especificados.
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    // Se establece la cookie concatenando el nombre, valor, caducidad y ruta.
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// obtiene el valor de una cookie según su nombre.
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// se llama cuando el usuario acepta las cookies.
function acceptCookies() {
    // Se establece una cookie llamada 'cookieConsent' con valor 'true' y duración de 30 días.
    setCookie('cookieConsent', 'true', 30);
    // Se oculta el contenedor de consentimiento de cookies si existe.
    var cookieConsentContainer = document.getElementById('cookieConsentContainer');
    if (cookieConsentContainer) {
        cookieConsentContainer.style.display = 'none';
    }
}

// se ejecuta cuando la ventana se ha cargado completamente.
window.onload = function() {
    // Si no se ha dado consentimiento para las cookies, se muestra el contenedor de consentimiento.
    if (!getCookie('cookieConsent')) {
        document.getElementById('cookieConsentContainer').style.display = 'block';
    }
}
