

function iniciarJuego(){

    let botonMascota = document.getElementById('boton-mascota');
    botonMascota.addEventListener('click', seleccionarMascota);

}

function seleccionarMascota(){
    alert('SELECCIONASTE TU MASCOTA');
}


//Este evento de window, agregado el parametro load, ejecuta el otro parametro cuando termine de cargar el HTML
window.addEventListener('load',iniciarJuego)