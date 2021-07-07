const hola = async (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`Hola ${nombre}`);
            resolve(nombre);
        }, 1000);
    });
}

const hablar = async (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('bla bla bla bla ...');
            resolve();
        }, 1000);
    });
}

const adios = async (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`Adios para siempre ${nombre} :(`);
            resolve();
        }, 800);
    });
}

async function main() {
    let nombre = await hola('Leo');
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Proceso terminado');
}

console.log('Comenzando proceso');
main();
