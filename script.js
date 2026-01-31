function toggleTab(id) {
    // Cierra todas las pestañas primero
    const contents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contents.length; i++) {
        if (contents[i].id !== id) {
            contents[i].classList.remove("show");
        }
    }
    // Abre la que hiciste clic
    const element = document.getElementById(id);
    if (element) {
        element.classList.toggle("show");
    }
}

function visualizar(rutaCompleta) {
    const visor = document.getElementById('visor-pdf');
    const etiqueta = document.getElementById('file-name');
    
    // Cambia el PDF
    visor.src = rutaCompleta;
    
    // Actualiza el nombre en la barra de arriba
    // Esto toma solo el nombre del archivo, quitando la carpeta
    etiqueta.innerText = rutaCompleta.split('/').pop();
}
