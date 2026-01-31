/* 1. CONTROL DE PESTAÑAS PRINCIPALES */
function toggleTab(id) {
    const mainTabs = document.getElementsByClassName("tab-content");
    for (let i = 0; i < mainTabs.length; i++) {
        if (mainTabs[i].id !== id) {
            mainTabs[i].classList.remove("show");
        }
    }
    const element = document.getElementById(id);
    if (element) {
        element.classList.toggle("show");
    }
}

/* 2. CONTROL DE SUB-UNIDADES (Unidad 1, 2, etc.) */
function toggleSubTab(id) {
    const subElement = document.getElementById(id);
    if (subElement) {
        subElement.classList.toggle("show");
    }
}

/* 3. FUNCIÓN PARA CERRAR TODO EL MENÚ (Móviles) */
function cerrarMenus() {
    const allTabs = document.querySelectorAll('.tab-content, .sub-tab-content');
    allTabs.forEach(tab => tab.classList.remove('show'));
}

/* 4. FUNCIÓN PARA MOSTRAR LA PORTADA DIGITAL */
function mostrarPortada(titulo, subtitulo) {
    // Ocultamos los visores de archivos
    document.getElementById('visor-pdf').style.display = 'none';
    document.getElementById('visor-img').style.display = 'none';
    
    // Mostramos y actualizamos la portada digital
    const portada = document.getElementById('portada-digital');
    portada.style.display = 'flex';
    
    document.getElementById('titulo-portada').innerText = titulo;
    document.getElementById('subtitulo-portada').innerText = subtitulo;
    document.getElementById('file-name').innerText = "Portada: " + subtitulo;

    if (window.innerWidth < 768) {
        cerrarMenus();
    }
}

/* 5. FUNCIÓN PARA VISUALIZAR ARCHIVOS (PDF/IMG) */
function visualizar(rutaCompleta) {
    const visorPdf = document.getElementById('visor-pdf');
    const visorImg = document.getElementById('visor-img');
    const portada = document.getElementById('portada-digital');
    const etiqueta = document.getElementById('file-name');
    
    // Siempre ocultamos la portada digital al abrir un archivo
    portada.style.display = 'none';

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
    if (window.innerWidth < 768) {
        cerrarMenus();
    }
}

/* 6. INICIALIZACIÓN AL CARGAR LA PÁGINA */
window.onload = function() {
    // En lugar de una imagen, mostramos la portada digital de bienvenida
    mostrarPortada('MATEMÁTICAS IV', 'PORTAFOLIO ESTUDIANTIL');
};
