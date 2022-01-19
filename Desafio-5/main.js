// Desafio 5 - Objetos - Proyecto final

// Se declara una nueva clase Metrónomo con su constructor, con dos propiedades: el tempo en BPM y la métrica del metrónomo

class Metronomo {
    constructor (bpm, metrica) {
        this.bpm = bpm;
        this.metrica = metrica;
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

    const metroConfig = new Metronomo (120, "4/4"); // Nueva instancia de un objeto tipo Metronomo con valores estandar
    metroConfig.SolicitarTempo();       // Llamo al metodo SolicitarTempo
    metroConfig.SolicitarMetrica();     // Llamo al metodo SoliticatMetrica
    
