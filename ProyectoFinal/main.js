// Proyecto final - Simulador: Metrónomo - Desafio EVENTOS


alert("Bienvenido al metrónomo interactivo!");

const boton = document.querySelector("#boton")

let bpm1 = document.querySelector("#inputBPM");

boton.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log(bpm1.value)
})

let met1 = document.querySelector("#inputBeats");    
boton.addEventListener("click", (evt) => {
    evt.preventDefault();
    console.log(met1.value)
})


    
