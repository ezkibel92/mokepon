
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
const contenedorTarjetas = document.getElementById('contenedorTarjetas');
const contenedorAtaques = document.getElementById('contenedorAtaques');

const sectionVerMapa = document.getElementById('ver-mapa');
const mapa = document.getElementById('mapa');

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
let mascotaJugadorObejto;
let botones = [];
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let lienzo = mapa.getContext("2d");
let intervalo;
let mapaBackground = new Image()
mapaBackground.src = './img/mokemap.png';


class Mokepon{

    constructor(nombre, foto, vida, fotoMapa, x=10, y=10){

        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
        this.x = x;
        this.y = y;
        this.ancho = 80;
        this.alto = 80;
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa;
        this.velocidadX = 0;
        this.velocidadY = 0;
    }

    pintarMokepon(){

        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.alto,
            this.ancho
        )
    

    }
}

let hipodoge = new Mokepon('hipodoge', 'img/hipodoge_attack.png', 5, './img/hipodoge.png');

let capipepo = new Mokepon('capipepo', 'img/capipepo_attack.png', 5, './img/capipepo.png');

let ratigueya = new Mokepon('ratigueya', 'img/ratigueya_attack.png', 5, './img/ratigueya.png');


let hipodogeEnemigo = new Mokepon('hipodoge', 'img/hipodoge_attack.png', 5, './img/hipodoge.png', 200, 400);

let capipepoEnemigo = new Mokepon('capipepo', 'img/capipepo_attack.png', 5, './img/capipepo.png', 700, 450);

let ratigueyaEnemigo = new Mokepon('ratigueya', 'img/ratigueya_attack.png', 5, './img/ratigueya.png', 200, 190);


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
    sectionVerMapa.style.display = 'none';
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

    
    //sectionAtaque.style.display = 'flex';


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

    sectionVerMapa.style.display = 'flex';
   
    iniciarMapa();

    
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

function pintarCanvas(){


    mascotaJugadorObejto.x = mascotaJugadorObejto.x + mascotaJugadorObejto.velocidadX
    mascotaJugadorObejto.y = mascotaJugadorObejto.y + mascotaJugadorObejto.velocidadY
    lienzo.clearRect(0, 0, mapa.clientWidth, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    
    mascotaJugadorObejto.pintarMokepon();
    hipodogeEnemigo.pintarMokepon();
    ratigueyaEnemigo.pintarMokepon();
    capipepoEnemigo.pintarMokepon();

}

function moverIzquierda(){

    mascotaJugadorObejto.velocidadX = - 5

}

function moverDerecha(){

    mascotaJugadorObejto.velocidadX = 5

}

function moverArriba(){

    mascotaJugadorObejto.velocidadY = - 5

}

function moverAbajo(){

    mascotaJugadorObejto.velocidadY = 5 

}

function detenerMoviemiento(){
    
    mascotaJugadorObejto.velocidadX = 0;
    mascotaJugadorObejto.velocidadY = 0;

}

function sePresionoUnaTecla(event){

    switch (event.key){
        case 'ArrowUp':
            moverArriba();
            break;
        case 'ArrowDown':
            moverAbajo();
            break;
        case 'ArrowLeft':
            moverIzquierda();
            break;
        case 'ArrowRight':
            moverDerecha();
            break;
        default:
            break;





    }

}

function iniciarMapa(){

    mapa.width = 800;
    mapa.height = 600;
    mascotaJugadorObejto = obtenerObjetoMascota(mascotaJugador);
    intervalo = setInterval(pintarCanvas, 50);

    window.addEventListener('keydown', sePresionoUnaTecla);

    window.addEventListener('keyup', detenerMoviemiento)

}

function obtenerObjetoMascota(){

    for (let i = 0; i < mokepones.length; i++) {
        
        if (mascotaJugador === mokepones[i].nombre){
            return mokepones[i];
        }
        
    }

}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)+ min);
}