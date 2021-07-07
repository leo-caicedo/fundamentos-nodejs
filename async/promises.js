const hola = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`Hola ${nombre}`);
            resolve(nombre);
        }, 1000);
    });
}

const hablar = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('bla bla bla bla ...');
            //resolve();
            reject();
        }, 1000);
    });
}

const adios = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`Adios para siempre ${nombre} :(`);
            resolve();
        }, 800);
    });
}

// ---
console.log('Iniciando proceso');
hola('Leo')
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Proceso terminado');
    })
    .catch(error => {
        console.log('Upp! Algo falló');
        console.error(error);
    })
