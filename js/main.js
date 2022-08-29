
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

const sectionReiniciar = document.getElementById('reiniciar');
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques');

let mokepones = [];
let ataqueJugador = [];
let ataqueEnemigo=[];
let botonAgua;
let botonFuego;
let botonTierra;
let vidasJugador = 3;
let vidasEnemigo = 3;
let ataquesMokepon;
let ataquesMokeponEnemigo;
let indexAtaqueEnemigo;
let indexAtaqueJugador;
let opcionMokepones;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let mascotaJugador;
let botones = [];
let victoriasJugador = 0;
let victoriasEnemigo = 0;

class Mokepon{

    constructor(nombre, foto, vida,){

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
    
    botonReinicio.addEventListener('click', reiniciarJuego);
}



function ataqueAleatorioEnemigo(){
    let ataque = aleatorio(0,ataquesMokeponEnemigo.length - 1)

    if (ataque == 0 || ataque == 1){

        ataqueEnemigo.push('AGUA');
        

    }else if(ataque == 3 || ataque == 4){

        ataqueEnemigo.push('FUEGO');
        

    }else{

        ataqueEnemigo.push('TIERRA');
        
    }

    combate();

}



function seleccionarMascota(){

   
    sectionMascota.style.display = 'none';

    
    sectionAtaque.style.display = 'flex';

    if(inputHipodoge.checked){

        alert('SELECCIONASTE TU MASCOTA: Hipodoge');
        spanMascotaJugador.innerHTML = inputHipodoge.id;
        mascotaJugador = inputHipodoge.id;
    }else if(inputCapipepo.checked){
        
        alert('SELECCIONASTE TU MASCOTA: Capipepo');
        spanMascotaJugador.innerHTML = inputCapipepo.id;
        mascotaJugador = inputCapipepo.id;
    }else if(inputRatigueya.checked){

        alert('SELECCIONASTE TU MASCOTA: Ratigueya');
        spanMascotaJugador.innerHTML = inputRatigueya.id;
        mascotaJugador = inputRatigueya.id;

    }else{
        alert('SELECCIONA UNA DE LAS MASCOTAS');
        
    }

    
    seleccionarMascotaEnemigo();
    extraerAtaques(mascotaJugador);
}

function extraerAtaques(mascotaJugador){

    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        
        if (mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques;
        }
        
    }
    mostrarAtaques(ataques);
    secuenciaAtaque();
}


function mostrarAtaques(ataques){

    ataques.forEach((ataque) => {

        ataquesMokepon =`<button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre} </button> `
        contenedorAtaques.innerHTML += ataquesMokepon;
    })

     botonAgua = document.getElementById('boton-agua');
     botonFuego = document.getElementById('boton-fuego');
     botonTierra = document.getElementById('boton-tierra');
     
     botones = document.querySelectorAll('.BAtaque');

     
}


function secuenciaAtaque(){

     botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if(e.target.textContent === '🔥'){
                ataqueJugador.push('FUEGO')
                boton.style.background = '#F34545'
                boton.disabled = true;
            }else if(e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                boton.style.background = '#F34545'
                boton.disabled = true;
            }else{
                ataqueJugador.push('TIERRA')
                boton.style.background = '#F34545'
                boton.disabled = true;
            }

            ataqueAleatorioEnemigo();
         })
     });

}

function seleccionarMascotaEnemigo(){

    let mascotaAleatoria = aleatorio(0, mokepones.length - 1)
    

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre;
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    alert("LA MASCOTA DEL ENEMIGO ES: "+mokepones[mascotaAleatoria].nombre)
}


function iniciarPelea(){

    if(ataqueJugador.length === 5){
        combate();
    }

}

function indexAmbosOponentes(jugador, enemigo){

    indexAtaqueJugador = ataqueJugador[jugador];
    indexAtaqueEnemigo = ataqueEnemigo[enemigo];


}


function combate(){
 
    for (let index = 0; index < ataqueJugador.length; index++) {
      
        if(ataqueJugador[index] === ataqueEnemigo[index]){
            indexAmbosOponentes(index, index);
            crearMensaje("EMPATE");

        }else if(ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO'){

            indexAmbosOponentes(index, index);
            crearMensaje('GANASTE 🎉');
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador;

        }else if(ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA'){

            indexAmbosOponentes(index, index);
            crearMensaje('GANASTE 🎉');
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador;


        }else if(ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA'){

            indexAmbosOponentes(index, index);
            crearMensaje('GANASTE 🎉');
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador;


        }else{

            indexAmbosOponentes(index, index);
            crearMensaje('PERDISTE 😓');
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo;

        }

    }
    revisarVidas();
}

function revisarVidas(){

    if (victoriasJugador === victoriasEnemigo){

        resultadoFinal("Esto fue un empate!!!")

    }else if(victoriasJugador > victoriasEnemigo){

        resultadoFinal("FELICITACIONES Ganaste!")

    }else{

        resultadoFinal("PERDISTE")

    }

}

function crearMensaje(resultado){
    
    let nuevoAtaqueJugador = document.createElement('p');
    let nuevoAtaqueEnemigo = document.createElement('p');

    seccionMensaje.innerHTML = resultado;
    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador;
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo;

    
    ataqueDelJugador.appendChild(nuevoAtaqueJugador);
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo);
}


function resultadoFinal(resultado){

    
    
    parrafo.innerHTML = resultado;
  

    
    sectionReiniciar.style.display = 'block';
}

function reiniciarJuego(){

    location.reload();

}


function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)+ min);
}