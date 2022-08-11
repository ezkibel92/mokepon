
//Este evento de window, agregando el parametro load, ejecuta el otro parametro cuando termine de cargar el HTML
window.addEventListener('load',iniciarJuego)

let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego(){

    let botonMascota = document.getElementById('boton-mascota');
    botonMascota.addEventListener('click', seleccionarMascota);

    let sectionAtaque = document.getElementById('seleccionar-ataque');
    sectionAtaque.style.display = 'none';

    let sectionReinicio = document.getElementById('reiniciar');
    sectionReinicio.style.display = 'none';

    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua);
    botonAgua.addEventListener('click', ataqueAleatorioEnemigo);

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego);
    botonFuego.addEventListener('click', ataqueAleatorioEnemigo);

    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click', ataqueTierra);
    botonTierra.addEventListener('click', ataqueAleatorioEnemigo);

    let botonReinicio = document.getElementById('boton-reiniciar');
    botonReinicio.addEventListener('click', reiniciarJuego);
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

    combate();

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

    let sectionMascota = document.getElementById('seleccionar-mascota');
    sectionMascota.style.display = 'none';

    let sectionAtaque = document.getElementById('seleccionar-ataque');
    sectionAtaque.style.display = 'flex';

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




function combate(){
 
    let spanVidasJugador = document.getElementById('vidas-Jugador');
    let spanVidasEnemigo = document.getElementById('vidas-Enemigo');

     if(ataqueJugador == ataqueEnemigo){

        crearMensaje('EMPATE 😛');

        }else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){

            vidasEnemigo--;
            spanVidasEnemigo.innerHTML = vidasEnemigo;
            crearMensaje('GANASTE 🎉');

        }else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){

            vidasEnemigo--;
            spanVidasEnemigo.innerHTML = vidasEnemigo;
            crearMensaje('GANASTE 🎉');

        }else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){

            vidasEnemigo--;
            spanVidasEnemigo.innerHTML = vidasEnemigo;
            crearMensaje('GANASTE 🎉');

            }else{

                vidasJugador--;
                spanVidasJugador.innerHTML = vidasJugador;
                crearMensaje('PERDISTE 😓');
            }
    
    if (vidasJugador == 0){

        resultadoFinal('😓😓😓 PERDISTE 😓😓😓 y te haz quedado sin vidas' );

    }else if(vidasEnemigo == 0){
        resultadoFinal('🎉🎉🎉 GANASTE 🎉🎉🎉 y el enemigo se ha quedado sin vidas' );

    }

}

function crearMensaje(resultado){
    let seccionMensaje = document.getElementById('mensajes');
    let parrafo = document.createElement('p');
    parrafo.innerHTML = 'Tu mascota atacó con '+ataqueJugador+', la mascota del enemigo ataco con '+ataqueEnemigo+' - '+resultado;
    seccionMensaje.appendChild(parrafo);
}


function resultadoFinal(resultado){

    let seccionMensaje = document.getElementById('mensajes');
    let parrafo = document.createElement('p');
    parrafo.innerHTML = resultado;
    seccionMensaje.appendChild(parrafo);

    let botonAgua = document.getElementById('boton-agua');
    botonAgua.disabled = true;
    
    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.disabled = true;
   

    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.disabled = true;

    let sectionReiniciar = document.getElementById('reiniciar');
    sectionReiniciar.style.display = 'block';
}

function reiniciarJuego(){

    location.reload();

}


function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)+ min);
}