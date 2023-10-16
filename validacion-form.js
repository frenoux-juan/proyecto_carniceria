//codigo para validad el formulario desde javascript
var form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    var nombreField = document.getElementById("nombre");
    var nombreValue = nombreField.value;

    var consulta1 = document.getElementById("consulta1");
    var consulta2 = document.getElementById("consulta2");

    var paisField = document.getElementById("pais");
    var paisValue = paisField.value;

    // Verificar si el campo "nombre" está vacío
    if (nombreValue.trim() === "") {
        event.preventDefault();
        alert("Por favor, ingresa el nombre.");
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
});


