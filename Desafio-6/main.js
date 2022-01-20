// Desafio 6 - Arrays - Proyecto final

// Se declara una nueva clase Metrónomo con su constructor, con dos propiedades: el tempo en BPM y la métrica del metrónomo. Se declara un array y se realizan 4 push en el mismo. Luego se recorre todo el array con un for..of

class Metronomo {                   // Clase Metronomo con dos propiedades, bpm y la métrica
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
        console.log(`La métrica elegida es ${this.metrica}`); // Console log para debug
    }

}

const metronomos = []; // Declaro array de metronomos
metronomos.push(new Metronomo(120,"4/4"));      //Inserto 4 elementos en el array.
metronomos.push(new Metronomo(150,"5/4"));
metronomos.push(new Metronomo(180,"7/8"));
metronomos.push(new Metronomo(200,"19/16"));

for (const elemento of metronomos){         // Recorro todo el Array de Objetos
    
    alert(elemento.bpm);
    alert(elemento.metrica);
    
}


   

    
