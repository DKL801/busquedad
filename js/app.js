/* app.js */

document.getElementById("dniForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtener el valor del DNI ingresado
    const dni = document.getElementById("dniInput").value;

    // Realizar una solicitud AJAX para buscar el nombre y apellidos
    // Aquí deberías agregar tu lógica para buscar los datos en una base de datos o fuente de datos externa
    // En este ejemplo, simplemente mostraremos un resultado fijo
    const resultado = buscarNombreApellidos(dni);

    // Mostrar el resultado en el cuadro modal
    mostrarModal(resultado);
});

// Función para buscar el nombre y apellidos
function buscarNombreApellidos(dni) {
    // En este ejemplo, retornamos un resultado fijo
    if (dni === "71418093") {
        return "DNI: 71418093 Nombre y Apellidos: Alexandro Samuel Anco Díaz";
    } else {
        return "DNI no encontrado";
    }
}

// Función para mostrar el cuadro modal con el resultado
function mostrarModal(resultado) {
    const modal = document.getElementById("modal");
    const resultadoModal = document.getElementById("resultado-modal");
    resultadoModal.textContent = resultado;
    modal.style.display = "block";
}

// Función para cerrar el cuadro modal
function cerrarModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
