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

const certificadosData = {
    powerbi_intermedio: {
        titulo: "Power BI Intermedio",
        institucion: "Universidad Peruana de Ciencias Aplicadas (UPC) - En curso",
        imagen: null, // No hay PDF aún
        temas: [
            "Modelado de datos avanzado (Esquema de copo de nieve).",
            "Funciones DAX avanzadas (CALCULATE, FILTER, ALL, Time Intelligence).",
            "Optimización de rendimiento en Power BI.",
            "Creación de reportes con parámetros dinámicos.",
            "Implementación de Row-Level Security (RLS)."
        ]
    },
    powerbi_basico: {
        titulo: "Power BI Nivel Básico",
        institucion: "Universidad Peruana de Ciencias Aplicadas (UPC) - 2026",
        imagen: "./img/Certificado_Power_Bi_Nivel_Basico.pdf",
        temas: [
            "Fundamentos de Power BI Desktop y Power Query.",
            "Conexión a fuentes de datos (Excel, CSV, Web).",
            "Manipulación y limpieza de datos.",
            "Relaciones entre tablas y cardinalidad (Uno a Muchos).",
            "Creación y personalización de objetos visuales básicos."
        ]
    },
    excel_intermedio: {
        titulo: "Análisis de Datos con Excel Intermedio",
        institucion: "Universidad Peruana de Ciencias Aplicadas (UPC) - En curso",
        imagen: null, // No hay PDF aún
        temas: [
            "Tablas dinámicas avanzadas y segmentación de datos.",
            "Funciones de búsqueda y referencia complejas.",
            "Análisis de hipótesis (Buscar objetivo, Tabla de datos).",
            "Uso de Power Query para automatizar la limpieza de datos.",
            "Introducción a las macros (VBA) para tareas repetitivas."
        ]
    },
    excel: {
        titulo: "Excel Nivel Intermedio",
        institucion: "WE Educación Ejecutiva - 2026",
        imagen: "./img/Certificado_Excel_Nivel_Intermedio.pdf",
        temas: [
            "Funciones lógicas y de búsqueda avanzadas (BUSCARV, ÍNDICE, COINCIDIR).",
            "Manejo de tablas dinámicas para resumen de datos.",
            "Formato condicional y validación de datos.",
            "Funciones estadísticas y financieras.",
            "Auditoría de fórmulas y gestión de rangos."
        ]
    },
    python: {
        titulo: "Python Nivel Intermedio",
        institucion: "Cisco Networking Academy - 2020",
        imagen: "./img/Certificado_Python_Nivel_Intermedio.pdf",
        temas: [
            "Programación Orientada a Objetos (POO).",
            "Estructuras de datos: listas, tuplas, diccionarios.",
            "Manejo de excepciones y depuración.",
            "Módulos y paquetes de la librería estándar.",
            "Desarrollo de aplicaciones modulares."
        ]
    },
    cpp: {
        titulo: "Lenguaje C Nivel Avanzado",
        institucion: "Cisco Networking Academy - 2020",
        imagen: "./img/Certificado_Lenguaje_C_Nivel_Avanzado.pdf",
        temas: [
            "Gestión de memoria y punteros.",
            "Estructuras de datos complejas.",
            "Manejo de archivos y flujos (I/O).",
            "Procesos y hilos (Threads).",
            "Programación de sockets y redes básicas."
        ]
    }
};

function abrirModalCertificado(id) {
    const data = certificadosData[id];
    if (!data) return;

    document.getElementById('titulo-certificado').innerText = data.titulo;
    document.getElementById('institucion-certificado').innerText = data.institucion;
    
    const lista = document.getElementById('lista-temas');
    lista.innerHTML = '';
    data.temas.forEach(tema => {
        const li = document.createElement('li');
        li.innerText = tema;
        lista.appendChild(li);
    });

    // Lógica del botón de PDF o "En curso"
    const contenedorPdf = document.getElementById('contenedor-pdf');
    if (data.imagen) {
        contenedorPdf.innerHTML = `
            <a href="${data.imagen}" target="_blank" class="btn-ver-pdf">
                <i class="fas fa-file-pdf"></i> Abrir Certificado PDF
            </a>
        `;
    } else {
        contenedorPdf.innerHTML = `
            <div class="badge-en-curso-modal">
                <i class="fas fa-clock"></i> Certificado en curso
            </div>
        `;
    }

    document.getElementById('modalCertificado').style.display = 'flex';
}


