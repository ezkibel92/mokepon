
//Este evento de window, agregando el parametro load, ejecuta el otro parametro cuando termine de cargar el HTML
window.addEventListener('load',iniciarJuego)

let ataqueJugador;
let ataqueEnemigo;
function iniciarJuego(){

    let botonMascota = document.getElementById('boton-mascota');
    botonMascota.addEventListener('click', seleccionarMascota);


    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua);
    botonAgua.addEventListener('click', ataqueAleatorioEnemigo);
    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego);
    botonFuego.addEventListener('click', ataqueAleatorioEnemigo);
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click', ataqueTierra);
    botonTierra.addEventListener('click', ataqueAleatorioEnemigo);
}

function ataqueAleatorioEnemigo(){
    let ataque = aleatorio(1,3)

    if (ataque == 1){

        ataqueEnemigo = 'AGUA';
        alert(ataqueEnemigo);

    }else if(ataque == 2){

        ataqueEnemigo = 'FUEGO';
        alert(ataqueEnemigo);

    }else if(ataque == 3){

        ataqueEnemigo = 'TIERRA';
        alert(ataqueEnemigo);

    }else{

        alert('ALGO SALIÓ MAL CON LOS ATAQUES DEL ENEMIGO')

    }

}

function ataqueAgua(){

    ataqueJugador = 'AGUA';
    alert(ataqueJugador);
}

function ataqueFuego(){

    ataqueJugador = 'FUEGO';
    alert(ataqueJugador);
}

function ataqueTierra(){

    ataqueJugador = 'TIERRA';
    alert(ataqueJugador);
}

function seleccionarMascota(){

    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    let spanMascotaJugador = document.getElementById('mascotaJugador');

    if(inputHipodoge.checked){

        alert('SELECCIONASTE TU MASCOTA: Hipodoge');
        spanMascotaJugador.innerHTML = 'Hipodoge';
        
    }else if(inputCapipepo.checked){
        
        alert('SELECCIONASTE TU MASCOTA: Capipepo');
        spanMascotaJugador.innerHTML = 'Capipepo';

    }else if(inputRatigueya.checked){

        alert('SELECCIONASTE TU MASCOTA: Ratigueya');
        spanMascotaJugador.innerHTML = 'Ratigueya';

    }else{
        alert('SELECCIONA UNA DE LAS MASCOTAS');
    }

    
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){

    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascotaEnemigo')

    if(mascotaAleatoria == 1){

        alert('LA MASCOTA DEL ENEMIGO ES: Hipodoge');
        spanMascotaEnemigo.innerHTML = 'Hipodoge';

    }else if(mascotaAleatoria == 2){
        
        alert('LA MASCOTA DEL ENEMIGO ES: Capipepo');
        spanMascotaEnemigo.innerHTML = 'Capipepo';

    }else if(mascotaAleatoria == 3){

        alert('LA MASCOTA DEL ENEMIGO ES: Ratigueya');
        spanMascotaEnemigo.innerHTML = 'Ratigueya';

    }else{
        alert('EL ENEMIGO NO SELECCIONÓ MASCOTA');
    }

}


function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)+ min);
}