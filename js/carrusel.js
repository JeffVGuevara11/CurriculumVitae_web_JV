let indice = 0;
function moverCarrusel(direccion) {
    const contenedor = document.getElementById('projects-container');
    const totalCards = contenedor.children.length;
    indice = (indice + direccion + totalCards) % totalCards;
    contenedor.style.transform = `translateX(-${indice * 800}px)`;
}

let indiceENLA = 0;

function moverCarruselENLA(direccion) {
    const contenedor = document.getElementById('projects-container-enla');
    const totalCards = contenedor.children.length;

    indiceENLA = (indiceENLA + direccion + totalCards) % totalCards;
    contenedor.style.transform = `translateX(-${indiceENLA * 800}px)`;
}

let indexIncidencias = 0;

function moverCarruselIncidencias(direccion) {
    const container = document.getElementById("projects-container-incidencias");
    const total = container.children.length;

    indexIncidencias += direccion;

    if (indexIncidencias < 0) indexIncidencias = total - 1;
    if (indexIncidencias >= total) indexIncidencias = 0;

    container.style.transform = `translateX(-${indexIncidencias * 800}px)`;
}
