// Proyecto final - Simulador: Metrónomo - Pre Entrega Nro 2

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
        this.nroAcento = false;
    }
}

// Declaraciones de Funciones
// Funciones para actualizar valores de BPM y Beats en el simulador

const actualizarBPMs = () => {
    let bpms = document.querySelector("#bpm-numero");
    bpms.innerHTML = nuevoMetronomo.bpm;
}

const actualizarMetrica = () => {
    let beats = document.querySelector("#numero-beat");
    beats.innerHTML = nuevoMetronomo.metrica;
}


// Declaraciones de Eventos
// Eventos al presionar los botones para cambiar de BPM

const botonRestarpresionadoBPM = document.querySelector("#bpm-boton-restar");
botonRestarpresionadoBPM.addEventListener("click", () => {

    if (nuevoMetronomo.bpm <= 10)
        {return 0};
    nuevoMetronomo.bpm = nuevoMetronomo.bpm - 1;
    actualizarBPMs();
})

const botonSumarpresionadoBPM = document.querySelector("#bpm-boton-sumar");
botonSumarpresionadoBPM.addEventListener("click", () => {

    if (nuevoMetronomo.bpm >= 300)
        {return 0};
    nuevoMetronomo.bpm = nuevoMetronomo.bpm + 1;
    actualizarBPMs();
})

// Eventos al presionar los botones para cambiar de Beats

const botonRestarpresionadoMetrica = document.querySelector("#boton-restar-beats");
botonRestarpresionadoMetrica.addEventListener("click", () => {

    if (nuevoMetronomo.metrica <= 2)
        {return 0};
    nuevoMetronomo.metrica--;
    actualizarMetrica();
})

const botonSumarpresionadoMetrica = document.querySelector("#boton-sumar-beats");
botonSumarpresionadoMetrica.addEventListener("click", () => {

    if (nuevoMetronomo.metrica >= 16)
        {return 0};
    nuevoMetronomo.metrica++;
    actualizarMetrica();
})


/* Main */

nuevoMetronomo = new Metronomo (120,4);     // Instacio un objeto metronomo que representa uuna configuracion por default de metronomo
actualizarBPMs();                           // Llamado de funciones de actulizar los bpm y la metrica en el simulador
actualizarMetrica();
