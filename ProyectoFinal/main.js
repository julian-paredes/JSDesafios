// Proyecto final - Simulador: Metrónomo Interactivo

// Declaraciones de Clases

class Metronomo {                       // Clase Metronomo principal
    constructor (bpm,metrica) {
        this.bpm = bpm;
        this.metrica = metrica;
    }
}

class ListaDeBeats {
    constructor (beat) {                // Clase para generar los objetos gráficos para el conteo de los beats
        this.numero = beat;
        this.acento = false;
    }
}

// Declaración de variables globales

let intervalo;
let conteo = 1;
let play = false;
let busqueda;
let id_track;

// Declaraciones de Funciones
// Funciones para actualizar valores de BPM y Beats en el simulador

const actualizarBPMs = () => {
    let bpms = $("#bpm-numero");        // Implementacion de jQuery para tomar el nodo y actualizar el valor de BPM
    if (nuevoMetronomo.bpm > 300)
    {bpms.html("300")}
    else{
    bpms.html(nuevoMetronomo.bpm);}
}

const actualizarMetrica = () => {

    let beats = $("#numero-beat");      // Implementacion de jQuery para tomar el nodo y actualizar el valor de los Beats
    beats.html(nuevoMetronomo.metrica);
}

// Funcion para guardar la config del metronomo en el localStorage
const guardarMetronomo = () => {
    const metroJSON = JSON.stringify(nuevoMetronomo);
    localStorage.setItem("metronomoGuardado", metroJSON);
}

// Funcion para la reproduccion de los clicks 

const playClick = () => {
    if (conteo === 1) {                     // En el caso de que se trate del primer beat del conteo, se reproduce el audio de acentuacion o primer beat y se incrementa la variable conteo
        mostrarBeatActivo(conteo);
        acentuacion.play();
        conteo++;
    }
    else {
        mostrarBeatActivo(conteo);          // En cualquier otro caso, debe reproducirse el audio del click y si se supera el valor total de todos los beats o la métrica, se resetea el conteo
        click.play();
        conteo++;
        if (conteo > nuevoMetronomo.metrica) {
            conteo = 1;
        }  
    }
}

// Funcion para evento en caso de apretar el botón de play/pausa

const botonPlayParar = document.querySelector("#boton-play");
const playParar = () => {
    if (!play){
        clearInterval(intervalo);                                               // Método para eliminar el intervalo de tiempo seteado para que se repita el audio
        intervalo = setInterval(playClick, 60000 / nuevoMetronomo.bpm);         // Seteo el intervalo de tiempo entre cada repeticion de audio (ya sea acentuacion o click)
        play = true;
        botonPlayParar.innerHTML = '<i class="fas fa-pause"></i>';              // Cambio el icono de "play" por el de "pause" para indicar que se está utilizando el metronomo
    }
    else {
        clearInterval(intervalo);
        play = false;                                                           // En caso de que se haga click para pararlo, se coloca variable en false y se cambia el icono de "pause" por "play" 
        botonPlayParar.innerHTML = '<i class="fas fa-play"></i>';
    }
}

// Funcion para la visualizacion de los beats para animar el metrónomo segun la métrica

const beatContainer = document.querySelector("#beats-container");
const mostrarBeats = () => {
    beatContainer.innerHTML = ' ';
    for (let beat of arrayBeats){
        let punto = document.createElement("div");              // Creación de los diferentes elementos o beats que se representaran con divs
        punto.setAttribute("id", `beat${beat.numero}`);         // Asignación del id  "beat'x'" en función de la cantidad de objetos del array de Beats
        punto.setAttribute("class", "beatInactivo");            // Asignacion de la clase beatInactivo para cada beat, como situacion inicial
        beatContainer.appendChild(punto);                   
    }
}

// Funcion para mostrar los beats activos en la reproduccion y actualizar la reproduccion de los beats

const mostrarBeatActivo = (conteo) => {
    let beatsActivo = document.getElementById(`beat${conteo}`);     // Se toma un elemento beat en funcion de la variable conteo
    beatsActivo.setAttribute("class", "beatActivo");                // Asignacion de la clase beatActivo para indicar que ese beat es el que se está reproduciendo
    if (conteo > 1) {
        let beatsInactivo = document.getElementById(`beat${conteo-1}`);     // Para cualquier caso en donde conteo sea mayor a 1, el beat inactivo será el beat anterior, indicando entonces que el beat activo va avanzando de a uno
        beatsInactivo.setAttribute("class", "beatInactivo")                 // Por ende, se iran seteando los beats anteriores como beat Inactivos
    } else {
        let beatsInactivo = document.getElementById(`beat${nuevoMetronomo.metrica}`);  // Para otro caso (conteo = 1), es decir primer beat, se debe colocar el beat anterior a este, es decir el último del array en realidad, como beat Inactivo
        beatsInactivo.setAttribute("class", "beatInactivo") 
    }
}


// Funcion para Buscador - API para buscar BPMs

const buscar = () => {
    busqueda = $("#campo-busqueda").val();
    let URL_API = `https://api.happi.dev/v1/music?apikey=fb54fdT6RON3uTzQLFBEfDtkF4PLKqYDfdFEZHgWyCzo6ZbeaD9VwIjQ&limit=12&q=${busqueda}`; // API para encontrar valores de metronomos de diferentes artistas y canciones
    $(".card-resultado").remove();
    $.get(URL_API, (respuesta, estado) => {
        if (estado === "success") {
            let canciones = respuesta.result;
            for (const cancion of canciones) {
                $(".contenedor-resultados").append(`
                <div class="card-resultado">
                    <img src="${cancion.cover}" alt="" class="cover"> 
                    <div>
                        <h3 class="titulo">${cancion.track}</h3>
                        <h4 class="banda">${cancion.artist}</h4>
                    </div>
                    <div class="bpm-card">
                        <p class="bpm-cancion">${cancion.bpm}<span class="texto-bpm-Card">bpm</span></p>
                    </div>          
                </div>`);
                id_track = cancion.id_track; 
            }
        }
    }) 
};

// Fin de Declaracion de Funciones


// Declaraciones de Eventos
// Eventos al presionar los botones para cambiar de BPM

const botonRestarpresionadoBPM = $("#bpm-boton-restar");        // jQuery - Eventos
botonRestarpresionadoBPM.click(() => {

    if (nuevoMetronomo.bpm <= 20)
        {return 0};
    nuevoMetronomo.bpm--;
    actualizarBPMs();
    if (play) {                                         // Condicion que sirve para actualizar el intervalo de repeticion de audios cada vez que se incrementa o reducen los bpms
        clearInterval(intervalo);
        intervalo = setInterval(playClick, 60000 / nuevoMetronomo.bpm);
        play = true;
    }
})

const botonSumarpresionadoBPM = $("#bpm-boton-sumar");
botonSumarpresionadoBPM.click(() => {

    if (nuevoMetronomo.bpm >= 300)
        {return 0};
    nuevoMetronomo.bpm++;
    actualizarBPMs();
    if (play) {
        clearInterval(intervalo);
        intervalo = setInterval(playClick, 60000 / nuevoMetronomo.bpm);
        play = true;
    }
})

const botonRestarpresionadoBPMCinco = $("#bpm-boton-restar-cinco");        // jQuery - Eventos
botonRestarpresionadoBPMCinco.click(() => {

    if (nuevoMetronomo.bpm <= 20)
        {return 0};
    if (nuevoMetronomo.bpm >= 20 && nuevoMetronomo.bpm <= 24) {
        nuevoMetronomo.bpm = 20;}
    else {
    nuevoMetronomo.bpm -=5;}
    actualizarBPMs();
    if (play) {                                         // Condicion que sirve para actualizar el intervalo de repeticion de audios cada vez que se incrementa o reducen los bpms
        clearInterval(intervalo);
        intervalo = setInterval(playClick, 60000 / nuevoMetronomo.bpm);
        play = true;
    }
})

const botonSumarpresionadoBPMCinco = $("#bpm-boton-sumar-cinco")        // Evento BPM pero para ir restando de a 5 bpms
botonSumarpresionadoBPMCinco.click(() => {

    if (nuevoMetronomo.bpm >= 300)
        {return 0};
    if (nuevoMetronomo.bpm <= 300 && nuevoMetronomo.bpm >= 296){
        nuevoMetronomo.bpm = 300;}
    else {
    nuevoMetronomo.bpm += 5;}
    actualizarBPMs();
    if (play) {
        clearInterval(intervalo);
        intervalo = setInterval(playClick, 60000 / nuevoMetronomo.bpm);
        play = true;
    }
})

// Eventos al presionar los botones para cambiar de Beats

const botonRestarpresionadoMetrica = $("#boton-restar-beats");
botonRestarpresionadoMetrica.click(() => {

    if (nuevoMetronomo.metrica <= 2)
        {return 0};
    nuevoMetronomo.metrica--;
    actualizarMetrica();                        // Se actualiza el numero de metrica en el simulador
    cantidadBeats = arrayBeats.pop();           // Al presionar el boton "-" se eliminan elementos del array de Beats
    mostrarBeats();                             // Se actualiza graficamente los beats del metrónomo
    conteo = 1;                                 // Tambien se actualiza la variable conteo para que comienze a contar nuevamente desde el beat 1
})

const botonSumarpresionadoMetrica = $("#boton-sumar-beats");
botonSumarpresionadoMetrica.click(() => {

    if (nuevoMetronomo.metrica >= 13)
        {return 0};
    nuevoMetronomo.metrica++;
    actualizarMetrica();
    cantidadBeats = arrayBeats.push(new ListaDeBeats(nuevoMetronomo.metrica)); // Se agrega un nuevo objeto Beat al array de Beats
    mostrarBeats();
    conteo = 1;
})

// Evento al presionar el boton play/pausa

botonPlayParar.addEventListener("click", playParar);        // Evento que ejecuta la funcion "playParar" al presionar del botón de play/pause

// Evento guardar metrónomo

const botonGuardar = document.querySelector("#boton-guardar");
botonGuardar.addEventListener("click", guardarMetronomo);           // Evento que cada vez que se presione el boton de guardar, llama a la funcion para guardar en localStorage

// Evento para buscar BPMs

$("#boton-buscar").click(() => {                              // Evento que cuando se presione el botón buscar, llame a la funcion buscar
    buscar();
});

$("#campo-busqueda").keypress((e) => {                    // Evento en donde cuando se escribe en el campo de busqueda y se presiona Enter, no se recargue la pagína y tambien busque en la API
    if(e.which == 13) {
        e.preventDefault();
        buscar();
    }
});

// Fin de Declaracion de eventos

// Animaciones

$("#boton-config").click(() => { 
    $(".contenedor-config").slideDown(700, () => {          // Animacion en el cual cuando se hace click en el boton de buscar, aparece la busqueda de bpms a traves de la API y cuando se presiona el boton cerrar, se cierra
        $(".botones-config").fadeIn();
    });
});

$("#boton-cerrar").click(() => { 
    $(".contenedor-config").slideUp(700, () => {
        $(".botones-config").fadeOut();
    });
});


/* Main */

// Declaracion del objeto metrónomo - Almacenamiento local en el Storage

const metronomoGuardado = JSON.parse(localStorage.getItem("metronomoGuardado")); // Declaracion de variable para traer lo datos del local Storage

if (metronomoGuardado){
    nuevoMetronomo = new Metronomo (metronomoGuardado.bpm, metronomoGuardado.metrica); // Si hay una config de metronomo en el localStorage, la almaceno en mi variable nuevoMetronomo
}
else {
    nuevoMetronomo = new Metronomo (120,4);     // Instacio un objeto metronomo que representa en este caos una configuracion por default de metronomo
}

arrayBeats = [];        // Declaracion de array para los beats del metrónomo

for (let i = 1; i <= nuevoMetronomo.metrica; i++){
    let cantidadBeats = arrayBeats.push (new ListaDeBeats(i));
}

const acentuacion = new Audio('audio/triangle.wav')         // Instancia de dos objetos tipo Audio para almacenar los dos audios de acentuacion (primer beat) y los clicks (beats restantes)
const click = new Audio('audio/click2.mp3')               // Ejemplo: En el caso de métrica de 4, el primer beat sonará el "triangle.wav" y en los 3 restantes sonará "click2.mp3"

actualizarBPMs();                           // Llamado de funciones de actualizar los bpm y la metrica en el simulador
actualizarMetrica();
mostrarBeats();                             // Llamado de funcion para mostrar los beats en funcion de la métrica

/* Fin del Main */