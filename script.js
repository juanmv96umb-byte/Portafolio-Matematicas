/**
 * Controla la apertura y cierre de las pestañas laterales
 * @param {string} id - El ID de la lista de archivos a mostrar
 */
function toggleTab(id) {
    // Cerramos todas las pestañas primero para un efecto limpio
    const contents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contents.length; i++) {
        if (contents[i].id !== id) {
            contents[i].classList.remove("show");
        }
    }
    
    // Alternamos la visibilidad de la pestaña seleccionada
    const element = document.getElementById(id);
    element.classList.toggle("show");
}

/**
 * Carga el archivo en el visor
 */
function visualizar(nombreArchivo) {
    const visor = document.getElementById('visor-pdf');
    const etiqueta = document.getElementById('file-name');
    
    visor.src = nombreArchivo;
    etiqueta.innerText = nombreArchivo;
}
