// Desafio 2 - JS - Condicionales //

let pregunta = prompt ('Qué bebida desea tomar?').toLowerCase();

if (pregunta == 'cerveza') {
    console.log('Deberá abonar $150 por la cerveza');
    alert ('Deberá abonar $150 por la cerveza');
}
else if (pregunta == 'fernet'){
    console.log('Deberá abonar $200 por el fernet');
    alert ('Deberá abonar $200 por el fernet');
}
else if (pregunta == 'gaseosa'){
    console.log('Deberá abonar $100 por la gaseosa');
    alert ('Deberá abonar $100 por la gaseosa');
}
else {
    console.log('No tenemos esa bebida o eso no se bebe :/');
    alert ('No tenemos esa bebida o eso no se bebe :/');
}

