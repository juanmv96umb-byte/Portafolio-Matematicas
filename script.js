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

function visualizar(rutaCompleta) {
    const visorPdf = document.getElementById('visor-pdf');
    const visorImg = document.getElementById('visor-img');
    const etiqueta = document.getElementById('file-name');
    
    // 1. Detectamos la extensión del archivo
    // Tomamos lo que está después del último punto (.)
    const extension = rutaCompleta.split('.').pop().toLowerCase();

    // 2. Lógica de conmutación (Switch)
    if (extension === 'pdf') {
        // Si es PDF: Ocultamos imagen, mostramos iframe
        visorImg.style.display = 'none';
        visorPdf.style.display = 'block';
        visorPdf.src = rutaCompleta;
    } else {
        // Si es Imagen (jpg, png, etc.): Ocultamos iframe, mostramos imagen
        visorPdf.style.display = 'none';
        visorImg.style.display = 'block';
        visorImg.src = rutaCompleta;
    }
    
    // 3. Actualizamos el nombre en la barra
    etiqueta.innerText = rutaCompleta.split('/').pop();

    // 4. Auto-cierre para móviles (como ya tenías)
    if (window.innerWidth < 768) {
        const allTabs = document.querySelectorAll('.tab-content, .sub-tab-content');
        allTabs.forEach(tab => {
            tab.classList.remove('show');
        });
    }
}

// INICIALIZACIÓN: Asegurarnos de que al cargar la página se vea la portada
window.onload = function() {
    // Forzamos la visualización de la portada inicial como imagen
    const visorImg = document.getElementById('visor-img');
    visorImg.style.display = 'block';
};
// Función para mostrar la Portada Digital generada con CSS
function mostrarPortada(titulo, subtitulo) {
    // 1. Ocultar visores de archivos
    document.getElementById('visor-pdf').style.display = 'none';
    document.getElementById('visor-img').style.display = 'none';
    
    // 2. Mostrar la portada digital
    const portada = document.getElementById('portada-digital');
    portada.style.display = 'flex'; // Usamos flex para centrar
    
    // 3. Cambiar el texto dinámicamente
    document.getElementById('titulo-portada').innerText = titulo;
    document.getElementById('subtitulo-portada').innerText = subtitulo;
    
    // 4. Actualizar barra de estado
    document.getElementById('file-name').innerText = "Portada: " + subtitulo;

    // 5. Cerrar menú en móvil
    if (window.innerWidth < 768) {
        cerrarMenus();
    }
}

// Función auxiliar para cerrar menús (para no repetir código)
function cerrarMenus() {
    const allTabs = document.querySelectorAll('.tab-content, .sub-tab-content');
    allTabs.forEach(tab => tab.classList.remove('show'));
}

// Actualizamos también la función visualizar vieja para que oculte la portada si abres un PDF
function visualizar(rutaCompleta) {
    const visorPdf = document.getElementById('visor-pdf');
    const visorImg = document.getElementById('visor-img');
    const portada = document.getElementById('portada-digital');
    const etiqueta = document.getElementById('file-name');
    
    // Ocultamos la portada digital siempre que abramos un archivo
    portada.style.display = 'none';

    // ... (El resto de tu código de extensión PDF/IMG sigue igual aquí) ...
    // Solo asegúrate de copiar la lógica que ya tenías:
    const extension = rutaCompleta.split('.').pop().toLowerCase();
    if (extension === 'pdf') {
        visorImg.style.display = 'none';
        visorPdf.style.display = 'block';
        visorPdf.src = rutaCompleta;
    } else {
        visorPdf.style.display = 'none';
        visorImg.style.display = 'block';
        visorImg.src = rutaCompleta;
    }
    
    etiqueta.innerText = rutaCompleta.split('/').pop();
    if (window.innerWidth < 768) cerrarMenus();
}
