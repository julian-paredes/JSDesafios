// Desafio 4 - Simulador Interactivo
// Mi idea como proyecto es hacer un metrónomo interactivo con posibilidad de modificar la velocidad (BPM) del mismo,
// que pueda elegirse la cantidad de pulsos por compás, modificar volumen, pausar y darle "play" al metrónomo,
// y quizas la posibilidad de guardar las configuraciones en un archivo, para luego cargarlas.

// En esta primera parte, se le pregunta al usuario los BPM que desea y la métrica o cantidad de beats correspondientes.

// Inicio 

alert("Hola! Bienvenidos al Metrónomo Interactivo!");  // Mensaje de bienvenida
cantidadBPM();      // Llamado de funcion para pedir BPM
pedirMetrica();     // Llamado de funcion para pedir la métrica|

 

// Declaracion de funciones
function cantidadBPM() {
    let bpm = Number(prompt('Por favor, ingrese el número de BPM que desea marcar:'));  // Declaracion de variable para los bpm y pedido al usuario
    alert(`El número de BPM elegido es ${bpm}`); // Se muestra al usuario los bpm indicados
    console.log(`El número de BPM elegido es ${bpm}`); // Console log para debug

}

function pedirMetrica() {
    let metrica = prompt("Indique la métrica que desea ajustar en su metrónomo (por ejemplo 4/4):"); // Declaracion de variable para la metrica del metrónomo y pedido al usuario
    alert(`La métrica elegida es ${metrica}`); //Se muestra al usuario la métrica elegida
    console.log(`El número de BPM elegido es ${bpm}`); // Console lof para debug
}