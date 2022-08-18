
//Este evento de window, agregando el parametro load, ejecuta el otro parametro cuando termine de cargar el HTML
window.addEventListener('load',iniciarJuego);

const constbotonMascota = document.getElementById('boton-mascota');
const sectionReinicio = document.getElementById('reiniciar');
const botonReinicio = document.getElementById('boton-reiniciar');
const inputHipodoge = document.getElementById('hipodoge');
const inputCapipepo = document.getElementById('capipepo');
const inputRatigueya = document.getElementById('ratigueya');
const spanMascotaJugador = document.getElementById('mascotaJugador');
const sectionMascota = document.getElementById('seleccionar-mascota');
const sectionAtaque = document.getElementById('seleccionar-ataque');
const spanMascotaEnemigo = document.getElementById('mascotaEnemigo');
const spanVidasJugador = document.getElementById('vidas-Jugador');
const spanVidasEnemigo = document.getElementById('vidas-Enemigo');
const seccionMensaje = document.getElementById('resultado');
const ataqueDelJugador = document.getElementById('ataque-Del-Jugador');
const ataqueDelEnemigo = document.getElementById('ataque-Del-Enemigo');
const parrafo = document.getElementById('mensajes');
const botonAgua = document.getElementById('boton-agua');
const botonFuego = document.getElementById('boton-fuego');
const botonTierra = document.getElementById('boton-tierra');
const sectionReiniciar = document.getElementById('reiniciar');


let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego(){

    botonMascota.addEventListener('click', seleccionarMascota);
    sectionAtaque.style.display = 'none';
    sectionReinicio.style.display = 'none';
    botonAgua.addEventListener('click', ataqueAgua);
    botonAgua.addEventListener('click', ataqueAleatorioEnemigo);
    botonFuego.addEventListener('click', ataqueFuego);
    botonFuego.addEventListener('click', ataqueAleatorioEnemigo);
    botonTierra.addEventListener('click', ataqueTierra);
    botonTierra.addEventListener('click', ataqueAleatorioEnemigo); 
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

   
    sectionMascota.style.display = 'none';

    
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

        resultadoFinal('😓 HAS PERDIDO' );

    }else if(vidasEnemigo == 0){
        resultadoFinal('🎉 HAS GANADO' );

    }

}

function crearMensaje(resultado){
    
    let nuevoAtaqueJugador = document.createElement('p');
    let nuevoAtaqueEnemigo = document.createElement('p');

    seccionMensaje.innerHTML = resultado;
    nuevoAtaqueJugador.innerHTML = ataqueJugador;
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo;

    
    ataqueDelJugador.appendChild(nuevoAtaqueJugador);
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo);
}


function resultadoFinal(resultado){

    
    
    parrafo.innerHTML = resultado;
  

    
    botonAgua.disabled = true;
    
    
    botonFuego.disabled = true;
   

    
    botonTierra.disabled = true;

    
    sectionReiniciar.style.display = 'block';
}

function reiniciarJuego(){

    location.reload();

}


function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)+ min);
}