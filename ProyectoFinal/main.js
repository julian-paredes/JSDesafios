// Proyecto final - Simulador: Metrónomo - Desafio jQuery en mi Proyecto.

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
    let bpms = $("#bpm-numero");        // Implementacion de jQuery para tomar el nodo y actualizar el valor de BPM
    bpms.html(nuevoMetronomo.bpm);
}

const actualizarMetrica = () => {

    let beats = $("#numero-beat");      // Implementacion de jQuery para tomar el nodo y actualizar el valor de los Beats
    beats.html(nuevoMetronomo.metrica);
    /* let beats = document.querySelector("#numero-beat");
    beats.innerHTML = nuevoMetronomo.metrica; */
}


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
})

const botonSumarpresionadoMetrica = $("#boton-sumar-beats");
botonSumarpresionadoMetrica.click(() => {

    if (nuevoMetronomo.metrica >= 16)
        {return 0};
    nuevoMetronomo.metrica++;
    actualizarMetrica();
})


/* Main */

nuevoMetronomo = new Metronomo (120,4);     // Instacio un objeto metronomo que representa uuna configuracion por default de metronomo
actualizarBPMs();                           // Llamado de funciones de actulizar los bpm y la metrica en el simulador
actualizarMetrica();
