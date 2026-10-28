// ==========================================
// ARREGLOS CON LAS IMÁGENES Y DESCRIPCIONES
// ==========================================

const proyectos = {
    // PROYECTO 1: DASHBOARD ANDINA
    dashboard: [
        { 
            img: "./img/Dashboard_Andina_Resumen_Ejecutivo.png", 
            texto: "Análisis Gerencial: Resumen ejecutivo con KPIs clave (Ventas Totales, Margen Bruto, Costos, Ticket Promedio) para la toma de decisiones rápida." 
        },
        { 
            img: "./img/Dashboard_Andina_Análisis_Temporal.png", 
            texto: "Análisis Temporal: Gráfico de tendencias mes a mes para identificar picos de venta, caídas y estacionalidad a lo largo del año 2025." 
        },
        { 
            img: "./img/Dashboard_Andina_Análisis_por_Categoría.png", 
            texto: "Análisis por Categoría: Rentabilidad y participación de productos utilizando un Treemap y gráficos combinados de margen porcentual." 
        }
    ],

    // PROYECTO 2: ENLA
    enla: [
        { img: "./img/LOGIN-INFOTECNICO-2025.png", texto: "Pantalla de Login: Autenticación por roles y validaciones de seguridad para el personal del proyecto ENLA." },
        { img: "./img/FORMULARIO-INFOTECNICO-2025.png", texto: "Formulario Técnico: Captura dinámica de datos con condicionales (activación/desactivación de preguntas) y validaciones para reducir errores." },
        { img: "./img/ADMIN-INFOTECNICO-2025.png", texto: "Panel de Administración: Menú de acceso exclusivo para coordinadores, permitiendo gestionar reportes." },
        { img: "./img/REPORTE-INFOTECNICO-2025.png", texto: "Reportes: Visualización de datos con filtros por sede regional, conteo de DNI duplicados y descarga en Excel." },
        { img: "./img/EXCEL-INFOTECNICO-2025.png", texto: "Exportación: Archivo Excel generado con la data procesada, donde se convirtió el código de pregunta a texto legible." }
    ],

    // PROYECTO 3: INCIDENCIAS
    incidencias: [
        { img: "./img/LOGIN-INFOTECNICO-2025.png", texto: "Login: Acceso seguro para el personal de monitoreo informático (Monitores y Coordinadores)." },
        { img: "./img/MENU-GESTION INCIDENCIAS.png", texto: "Menú Principal: Opciones adaptadas al rol del usuario. Los monitores no pueden ver ciertas opciones exclusivas del coordinador." },
        { img: "./img/REGISTRO - GESTION DE INCIDENCIAS.png", texto: "Registro: Creación de tickets con alertas automáticas en tiempo real cuando se registra una nueva incidencia." },
        { img: "./img/LISTADO-GESTION INCIDENCIAS.png", texto: "Listado: Tabla con el estado de los tickets, cantidad de incidencias abiertas y asignación de responsables." },
        { img: "./img/TIPOS-GESTION INCIDENCIAS.png", texto: "Tipos: Gestión de categorías de incidencias más comunes reportadas desde el campo." },
        { img: "./img/TICKET-GESTION INCIDENCIAS.png", texto: "Menú de Tickets: Opciones para que el personal de campo genere un nuevo ticket o consulte su historial." },
        { img: "./img/HISTORIALTICKET-GESTION INCIDENCIAS.png", texto: "Historial: Registro de tickets generados, con autocompletado inteligente de datos (fecha, sede, responsable)." }
    ],

    // PROYECTO 4: E-COMMERCE
    ecommerce: [
        { img: "./img/PAGINA PRINCIPAL.png", texto: "Inicio: Página principal de la tienda de libros digitales Booksite." },
        { img: "./img/FOTO2.png", texto: "Banner: Sección destacada de la interfaz con los libros más populares." },
        { img: "./img/FOTO3.png", texto: "Filtros: Botones de categorías para filtrar los libros de manera rápida." },
        { img: "./img/FOTO4.png", texto: "Biblioteca: Catálogo completo con buscador integrado y botón para obtener libros." },
        { img: "./img/FOTO5.png", texto: "Login: Validaciones de inicio de sesión (ej. correos @gmail.com) y notificaciones de error." },
        { img: "./img/FOTO6.png", texto: "Registro: Formulario de creación de cuenta con validaciones para nuevos clientes." },
        { img: "./img/FOTO7.png", texto: "Compra: Pasarela de pago integrada con PayPal para adquirir los libros." },
        { img: "./img/FOTO8.png", texto: "Mis Libros: Lista de libros adquiridos por el usuario, listos para su descarga en PDF." },
        { img: "./img/FOTO9.png", texto: "Admin: Panel de control para el administrador, permite insertar, editar o eliminar libros del catálogo." }
    ]
};

let proyectoActual = [];
let indiceModal = 0;

// Función para abrir el modal
function abrirModal(proyecto) {
    proyectoActual = proyectos[proyecto];
    indiceModal = 0;
    
    // Título dinámico
    const titulos = {
        dashboard: "Dashboard Comercial - Andina",
        enla: "Proyecto Web Informes Técnicos - ENLA 2025",
        incidencias: "Sistema de Gestión de Incidencias",
        ecommerce: "Web E-Commerce Booksite"
    };
    document.getElementById('titulo-modal').innerText = titulos[proyecto];

    actualizarModal();
    document.getElementById('modalGaleria').style.display = 'flex';
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById('modalGaleria').style.display = 'none';
}

// Función para navegar (siguiente/anterior)
function moverModal(direccion) {
    indiceModal += direccion;

    if (indiceModal < 0) {
        indiceModal = proyectoActual.length - 1;
    } else if (indiceModal >= proyectoActual.length) {
        indiceModal = 0;
    }

    actualizarModal();
}

// Función que cambia la imagen y el texto
function actualizarModal() {
    const item = proyectoActual[indiceModal];
    document.getElementById('imagen-modal').src = item.img;
    document.getElementById('texto-modal').innerText = item.texto;
    document.getElementById('contador-modal').innerText = `${indiceModal + 1} / ${proyectoActual.length}`;
}

// Cerrar el modal si se hace clic fuera de la imagen (en el fondo oscuro)
window.onclick = function(event) {
    const modal = document.getElementById('modalGaleria');
    if (event.target === modal) {
        cerrarModal();
    }
}
