// Proyecto final - Simulador: Metrónomo

// Declaraciones de Clases

class Metronomo {                       // Clase Metronomo principal
    constructor (bpm,metrica) {
        this.bpm = bpm;
        this.metrica = metrica;
    }
}

class ListaDeBeats {
    constructor (beat) {                // Clase pensada para los Beats para generar los objetos gráficos para el conteo
        this.numero = beat;
        this.acento = false;
    }
}

// Declaración de variables globales

let intervalo;
let conteo = 1;
let play = false;



// Declaraciones de Funciones
// Funciones para actualizar valores de BPM y Beats en el simulador

const actualizarBPMs = () => {
    let bpms = $("#bpm-numero");        // Implementacion de jQuery para tomar el nodo y actualizar el valor de BPM
    bpms.html(nuevoMetronomo.bpm);
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


// Funcion para evento en caso de apretar el botón de play/pausa

const botonPlayParar = document.querySelector("#boton-play");
const playParar = () => {
    if (!play){
        botonPlayParar.innerHTML = '<i class="fas fa-pause"></i>';
        play = true;
    }
    else {
        botonPlayParar.innerHTML = '<i class="fas fa-play"></i>';
        play = false;
    }
}

// Funcion para la visualizacion de los beats para animar el metrónomo segun la métrica

const beatContainer = document.querySelector("#beats-container");
const mostrarBeats = () => {
    beatContainer.innerHTML = ' ';
    for (let beat of arrayBeats){
        let punto = document.createElement("div");
        punto.setAttribute("id", `beat${beat.numero}`);
        punto.setAttribute("class", "beatInactivo");
        beatContainer.appendChild(punto);
    }
}

// AGREGAR Funcion para mostrar los beats activos en la reproduccion y actualizar la reproduccion de los beats




// Fin de Declaracion de Funciones


// Declaraciones de Eventos
// Eventos al presionar los botones para cambiar de BPM

const botonRestarpresionadoBPM = $("#bpm-boton-restar");        // jQuery - Eventos
botonRestarpresionadoBPM.click(() => {

    if (nuevoMetronomo.bpm <= 10)
        {return 0};
    nuevoMetronomo.bpm--;
    actualizarBPMs();
})

const botonSumarpresionadoBPM = $("#bpm-boton-sumar");
botonSumarpresionadoBPM.click(() => {

    if (nuevoMetronomo.bpm >= 300)
        {return 0};
    nuevoMetronomo.bpm++;
    actualizarBPMs();
})

// Eventos al presionar los botones para cambiar de Beats

const botonRestarpresionadoMetrica = $("#boton-restar-beats");
botonRestarpresionadoMetrica.click(() => {

    if (nuevoMetronomo.metrica <= 2)
        {return 0};
    nuevoMetronomo.metrica--;
    actualizarMetrica();
    cantidadBeats = arrayBeats.pop();
    mostrarBeats();
    conteo = 1;
})

const botonSumarpresionadoMetrica = $("#boton-sumar-beats");
botonSumarpresionadoMetrica.click(() => {

    if (nuevoMetronomo.metrica >= 13)
        {return 0};
    nuevoMetronomo.metrica++;
    actualizarMetrica();
    cantidadBeats = arrayBeats.push(new ListaDeBeats(nuevoMetronomo.metrica));
    mostrarBeats();
    conteo = 1;
})

// Evento al presionar el boton play/pausa

botonPlayParar.addEventListener("click", playParar);

// Evento guardar metrónomo

const botonGuardar = document.querySelector("#boton-guardar");
botonGuardar.addEventListener("click", guardarMetronomo);

// Fin de Declaracion de eventos


/* Main */

// Declaracion del objeto metrónomo - Almacenamiento local en el Storage

const metronomoGuardado = JSON.parse(localStorage.getItem("metronomoGuardado")); // Declaracion de variable para traer lo datos del local Storage

if (metronomoGuardado){
    nuevoMetronomo = new Metronomo (metronomoGuardado.bpm, metronomoGuardado.metrica);
}
else {
    nuevoMetronomo = new Metronomo (120,4);     // Instacio un objeto metronomo que representa uuna configuracion por default de metronomo
}

arrayBeats = [];        // Declaracion de array para los beats del metrónomo

for (let i = 1; i <= nuevoMetronomo.metrica; i++){
    let cantidadBeats = arrayBeats.push (new ListaDeBeats(i));
}


actualizarBPMs();                           // Llamado de funciones de actualizar los bpm y la metrica en el simulador
actualizarMetrica();
mostrarBeats();                             // Llamado de funcion para mostrar los beats en funcion de la métrica