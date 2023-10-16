/* app.js */

document.getElementById("dniForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    // Obtener el valor del DNI ingresado
    const dni = document.getElementById("dniInput").value;

    // Realizar una solicitud a la API para buscar el nombre y apellidos
    const resultado = await buscarNombreApellidos(dni);

    // Mostrar el resultado en el cuadro modal
    mostrarModal(resultado);
});

// Función para buscar el nombre y apellidos a través de una API
async function buscarNombreApellidos(dni) {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFsZXhhbmRyb2RpYXo4MDFAZ21haWwuY29tIn0.CHsZ6TQ2sPJoxKtmFezXfvzCg6LTI4mEkfCLKLsmJ-0";
    const url = `https://dniruc.apisperu.com/api/v1/dni/${dni}?token=${token}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return `DNI: ${dni} Nombre y Apellidos: ${data.nombres} ${data.apellidoPaterno} ${data.apellidoMaterno}`;
    } catch (error) {
        return "Error al obtener datos del servidor";
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
