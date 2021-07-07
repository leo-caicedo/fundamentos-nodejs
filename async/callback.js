function hola(name, myCallback) {
    setTimeout(function() {
        console.log(`Hola ${name}`);
        myCallback(name);
    }, 1000);
}

function adios(name, otroCallback) {
    setTimeout(function() {
        console.log(`Adios para siempre ${name} :(`);
        otroCallback();
    }, 800);
}

console.log('Iniciandp proceso');
hola('Leo', function(name) {
    adios(name, function() {
    console.log('Terminando proceso');
    })
});
