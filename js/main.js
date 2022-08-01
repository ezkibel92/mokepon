
//Este evento de window, agregando el parametro load, ejecuta el otro parametro cuando termine de cargar el HTML
window.addEventListener('load',iniciarJuego)


function iniciarJuego(){

    let botonMascota = document.getElementById('boton-mascota');
    botonMascota.addEventListener('click', seleccionarMascota);

}

function seleccionarMascota(){
    let seleccionado = '';
    if(document.getElementById('hipodoge').checked){

        seleccionado = 'Hipodoge';

    }else if(document.getElementById('capipepo').checked){
        
        seleccionado = 'Capipepo';

    }else if(document.getElementById('ratigueya').checked){

        seleccionado = 'Ratigueya';

    }
    alert('SELECCIONASTE TU MASCOTA: '+seleccionado);
}

