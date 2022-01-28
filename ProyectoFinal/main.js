// Proyecto final - Simulador: Metrónomo - Desafio DOM
// Mi idea como proyecto es hacer un metrónomo interactivo con posibilidad de modificar la velocidad (BPM) del mismo,
// que pueda elegirse la cantidad de pulsos por compás, modificar volumen, pausar y darle "play" al metrónomo,
// y quizas la posibilidad de guardar las configuraciones en un archivo, para luego cargarlas.

// Para esta primer Preentrega se declara una clase Metrónomo con su constructor, con dos propiedades: el tempo en BPM y la métrica del metrónomo, y se le solicita al usuario que ingrese diferentes configuraciones de metronomos, ingresando su metrica y el num de BPM, guardandose esos datos en un array de objetos, luego de haberse iniciado con valores estandar.


alert("Bienvenido al metrónomo interactivo!");


let bpm1 = document.getElementById("bpm1");     // Tomo los nodos de la lista de bpm desde HTML
let bpm2 = document.getElementById("bpm2");
let bpm3 = document.getElementById("bpm3");

let met1 = document.getElementById("met1");     // Tomo los nodos de la lista de metricas desde HTML
let met2 = document.getElementById("met2");
let met3 = document.getElementById("met3");


class Metronomo {
    constructor (bpm,metrica) {
        this.bpm = bpm
        this.metrica = metrica
    }

    SolicitarTempo() {
        this.bpm = Number(prompt('Por favor, ingrese el número de BPM que desea marcar:'));  // Declaracion de variable para los bpm y pedido al usuario
        alert(`El número de BPM elegido es ${this.bpm}`); // Se muestra al usuario los bpm indicados
        console.log(`El número de BPM elegido es ${this.bpm}`); // Console log para debug
        
    }

    SolicitarMetrica() {
        this.metrica = prompt("Indique la cantidad de Beats (métrica) que desea ajustar:");
        alert(`La métrica elegida es ${this.metrica}`); //Se muestra al usuario la métrica elegida
        console.log(`La métrica elegida es ${this.metrica}`); // Console lof para debug
        
    }

}

    const metronomos = []; // Declaro array de metronomos y los instancio con valores iniciales
    metronomos.push(new Metronomo(120,"4/4"));
    metronomos.push(new Metronomo(140,"5/4"));
    metronomos.push(new Metronomo(160,"7/8"));


    for (let i=0 ; i<3 ; i++){
    metronomos[i].SolicitarTempo();       // Llamo al metodo SolicitarTempo para modificar el tempo ingresado
    metronomos[i].SolicitarMetrica();     // Llamo al metodo SoliticatMetrica para modificar la métrica
    }

    bpm1.innerHTML = metronomos[0].bpm;         // Se ingresan cada uno de los datos brindados por el usuario en los nodos
    met1.innerHTML = metronomos[0].metrica;

    bpm2.innerHTML = metronomos[1].bpm;
    met2.innerHTML = metronomos[1].metrica;

    bpm3.innerHTML = metronomos[2].bpm;
    met3.innerHTML = metronomos[2].metrica;
