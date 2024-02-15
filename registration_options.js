function showRegistrationOptions() {
    var container = document.getElementById("mainContainer");
    container.classList.toggle("container-new");
    var initialContent = document.getElementById("initialContent");
    var registrationOptions = document.getElementById("registrationOptions");
    
    initialContent.style.display = "none"; // Oculta content1
    registrationOptions.style.display = "flex"; // Muestra content2
    internalRegistration.style.display = "block";
}

function showInternalRegistration() {
    var internalRegistration = document.getElementById("internalRegistration");
    var externalRegistration = document.getElementById("externalRegistration");

    internalRegistration.style.display = "block";
    externalRegistration.style.display = "none";

    // Cambia la clase del botón activo
    document.querySelector('.button-registro.button-activo').classList.remove('button-activo');
    document.querySelector('.button-registro:nth-child(1)').classList.add('button-activo');
}

function showExternalRegistration() {
    var internalRegistration = document.getElementById("internalRegistration");
    var externalRegistration = document.getElementById("externalRegistration");

    internalRegistration.style.display = "none";
    externalRegistration.style.display = "block";

    // Cambia la clase del botón activo
    document.querySelector('.button-registro.button-activo').classList.remove('button-activo');
    document.querySelector('.button-registro:nth-child(2)').classList.add('button-activo');
}

function showInitialContent() {
    var initialContent = document.getElementById("initialContent");
    var registrationOptions = document.getElementById("registrationOptions");
    var container = document.getElementById("mainContainer");
    var internalRegistration = document.getElementById("internalRegistration");
    var externalRegistration = document.getElementById("externalRegistration");

    initialContent.style.display = "flex"; // Muestra el contenido inicial
    registrationOptions.style.display = "none"; // Oculta el formulario de registro
    container.classList.remove("container-new"); // Remueve la clase container-new
    internalRegistration.style.display = "none";
    externalRegistration.style.display = "none";
}


var inputs = document.querySelectorAll('input[type="text"], input[type="number"], input[type="tel"], input[type="email"]');
// Agrega eventos focus y blur a cada campo de entrada
inputs.forEach(function(input) {
    input.addEventListener('focus', function() {
        // Al hacer clic en el campo de entrada, oculta la etiqueta
        input.previousElementSibling.classList.add('input-focus');
    });

    input.addEventListener('blur', function() {
        // Verifica si el campo está vacío al salir del foco
        if (input.value === '') {
            input.previousElementSibling.classList.remove('input-focus');
        }
    });
});

function validarTelefono(event) {
    event.target.value = event.target.value.replace(/\D/g, '').slice(0, 10);
}
