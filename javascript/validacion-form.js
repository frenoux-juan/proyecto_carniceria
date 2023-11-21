//codigo para validad el formulario desde javascript
var form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    var nombreField = document.getElementById("nombre");
    var nombreValue = nombreField.value;

    var emailField = document.getElementById("email");
    var emailValue = emailField.value;

    var consulta1 = document.getElementById("consulta1");
    var consulta2 = document.getElementById("consulta2");

    var paisField = document.getElementById("pais");
    var paisValue = paisField.value;

    var mensajeField = document.getElementById("mensaje");
    var mensajeValue = mensajeField.value;

    // Verificar si el campo "nombre" está vacío
    if (nombreValue.trim() === "") {
        event.preventDefault();
        alert("Por favor, ingresa el nombre.");
    }

    // Verificar si el campo de correo electrónico es válido
    if (!validarEmail(emailValue)) {
        event.preventDefault();
        alert("Por favor, ingresa un correo electrónico válido.");
    }

    // Verificar si al menos un radio button ha sido seleccionado
    if (!consulta1.checked && !consulta2.checked) {
        event.preventDefault();
        alert("Por favor, selecciona un tipo de consulta.");
    }

    // Verificar si se ha seleccionado un país válido desde el select
    if (paisValue === "seleccionar") {
        event.preventDefault();
        alert("Por favor, selecciona un país válido.");
    }

    // Verificar la longitud del mensaje
    if (mensajeValue.trim().length < 5) {
        event.preventDefault();
        alert("Por favor, ingresa un mensaje con al menos 5 caracteres.");
    }
});

// Función para validar el correo electrónico
function validarEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}



