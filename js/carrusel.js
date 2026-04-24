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
