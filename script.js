/* Función para abrir/cerrar las pestañas principales */
function toggleTab(id) {
    // 1. Cierra todas las pestañas principales primero
    const mainTabs = document.getElementsByClassName("tab-content");
    for (let i = 0; i < mainTabs.length; i++) {
        if (mainTabs[i].id !== id) {
            mainTabs[i].classList.remove("show");
        }
    }
    
    // 2. Abre o cierra la que tocaste
    const element = document.getElementById(id);
    if (element) {
        element.classList.toggle("show");
    }
}

/* Función NUEVA para las sub-carpetas (Unidad 1, Unidad 2...) */
function toggleSubTab(id) {
    // Solo abre/cierra la sub-carpeta específica, sin cerrar el menú principal
    const subElement = document.getElementById(id);
    if (subElement) {
        subElement.classList.toggle("show");
    }
}

/* Función para cargar el PDF y cerrar el menú en móviles */
function visualizar(rutaCompleta) {
    const visor = document.getElementById('visor-pdf');
    const etiqueta = document.getElementById('file-name');
    
    // Cargar el archivo
    visor.src = rutaCompleta;
    
    // Actualizar nombre
    const nombreArchivo = rutaCompleta.split('/').pop();
    etiqueta.innerText = nombreArchivo;

    // --- AUTO-CIERRE PARA MÓVILES ---
    // Si la pantalla es pequeña (celular/tablet), cerramos todo al hacer clic
    if (window.innerWidth < 768) {
        const allTabs = document.querySelectorAll('.tab-content, .sub-tab-content');
        allTabs.forEach(tab => {
            tab.classList.remove('show');
        });
    }
}
