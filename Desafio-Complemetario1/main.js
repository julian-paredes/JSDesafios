// Desafio Complementario 1 - Funciones
// Se crean tres funciones para calcular el IVA de un precio y sumarselo. Una funcion pide el precio al usuario,
// la segunda le suma el IVA y la tercera muestra el resultado total.

let precio;
let resultado;
const iva = 0.21; 
pedirPrecio();
calcularIVA();
mostrarResultado();



function pedirPrecio() {
    precio = Number(prompt("Ingrese por favor el precio de costo:"));
    alert(`El precio indicado es ${precio}`);
    console.log(`El precio indicado es ${precio}`);
}


function calcularIVA() {
    resultado = precio + iva * precio;
    
}

function mostrarResultado() {
    alert(`El resultado total con IVA incluído es ${resultado}`);
    console.log(`El resultado total con IVA incluído es ${resultado}`);
}