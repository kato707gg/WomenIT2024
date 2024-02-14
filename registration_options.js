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
