/**
 * Función para cargar los PDFs en el visor central
 * @param {string} nombreArchivo - El nombre exacto del PDF en GitHub
 */
function visualizar(nombreArchivo) {
    const visor = document.getElementById('visor-pdf');
    const etiqueta = document.getElementById('file-name');
    
    // Cambiamos la fuente del iframe
    visor.src = nombreArchivo;
    
    // Actualizamos el texto del encabezado
    etiqueta.innerText = nombreArchivo;
    
    console.log("Cargando archivo: " + nombreArchivo); // Para que revises en la consola (F12)
}