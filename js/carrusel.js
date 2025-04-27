let indice = 0;
function moverCarrusel(direccion) {
    const contenedor = document.getElementById('projects-container');
    const totalCards = contenedor.children.length;
    indice = (indice + direccion + totalCards) % totalCards;
    contenedor.style.transform = `translateX(-${indice * 800}px)`;
}