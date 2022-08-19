
//Este evento de window, agregando el parametro load, ejecuta el otro parametro cuando termine de cargar el HTML
window.addEventListener('load',iniciarJuego);

const botonMascota = document.getElementById('boton-mascota');
const sectionReinicio = document.getElementById('reiniciar');
const botonReinicio = document.getElementById('boton-reiniciar');

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
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

let mokepones = []
let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;
let opcionMokepones;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;

class Mokepon{

    constructor(nombre, foto, vida){

        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
    }
}

let hipodoge = new Mokepon('hipodoge', 'img/hipodoge_attack.png', 5);

let capipepo = new Mokepon('capipepo', 'img/capipepo_attack.png', 5);

let ratigueya = new Mokepon('ratigueya', 'img/ratigueya_attack.png', 5);

hipodoge.ataques.push(
    {nombre:'💧', id: 'boton-agua'},
    {nombre:'💧', id: 'boton-agua'},
    {nombre:'💧', id: 'boton-agua'},
    {nombre:'🔥', id: 'boton-fuego'},
    {nombre:'🌱', id: 'boton-tierra'},
)

capipepo.ataques.push(
    {nombre:'🌱', id: 'boton-tierra'},
    {nombre:'🌱', id: 'boton-tierra'},
    {nombre:'🌱', id: 'boton-tierra'},
    {nombre:'🔥', id: 'boton-fuego'},
    {nombre:'💧', id: 'boton-agua'},
)

ratigueya.ataques.push(
    {nombre:'🔥', id: 'boton-fuego'},
    {nombre:'🔥', id: 'boton-fuego'},
    {nombre:'🔥', id: 'boton-fuego'},
    {nombre:'💧', id: 'boton-agua'},
    {nombre:'🌱', id: 'boton-tierra'},
)

mokepones.push(hipodoge,capipepo,ratigueya);
    

function iniciarJuego(){

    mokepones.forEach((mokepon) =>{
        opcionMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre}>
        <label for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt="imágen de "${mokepon.nombre}>
        </label>`

        contenedorTarjetas.innerHTML += opcionMokepones;

        inputHipodoge = document.getElementById('hipodoge');
        inputCapipepo = document.getElementById('capipepo');
        inputRatigueya = document.getElementById('ratigueya');
    }) 

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
        spanMascotaJugador.innerHTML = inputHipodoge.id;
        
    }else if(inputCapipepo.checked){
        
        alert('SELECCIONASTE TU MASCOTA: Capipepo');
        spanMascotaJugador.innerHTML = inputCapipepo.id;

    }else if(inputRatigueya.checked){

        alert('SELECCIONASTE TU MASCOTA: Ratigueya');
        spanMascotaJugador.innerHTML = inputRatigueya.id;

    }else{
        alert('SELECCIONA UNA DE LAS MASCOTAS');
        
    }

    
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){

    let mascotaAleatoria = aleatorio(0, mokepones.length - 1)
    

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre;
    alert("LA MASCOTA DEL ENEMIGO ES: "+mokepones[mascotaAleatoria].nombre)
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