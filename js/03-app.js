const aplicarDescuento = new Promise( (resolve, reject)=> {

    const descuento = true;

    if(descuento) {
        resolve('Descuento aplicado');
    } else {
        reject('No se pudo aplicar descuento');
    }
});

aplicarDescuento
    .then(resultado => descuento(resultado))
    .catch(error => console.log(error))

// Hay tres valores posibles en los promises
// fulfilled -> promise se cumplió
// reject -> no se cumplió el promise
// pending -> no se ha cumplido y tampoco ha sido rechazado
function descuento(mensaje) {
    console.log(mensaje);
}