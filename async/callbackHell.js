function hola(nombre, myCallback) {
    setTimeout(function() {
        console.log(`Hola ${nombre}`);
        myCallback(nombre);
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(function() {
        console.log('bla bla bla bla ...');
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log(`Adios para siempre ${nombre} :(`);
        otroCallback();
    }, 800);
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function () {
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
}

console.log('Iniciandp proceso');
hola('Leo', function (nombre) {
    conversacion(nombre, 3, function () {
        console.log('Proceso terminado');
    });
});
//hola('Leo', function(name) {
    //hablar(function () {
        //hablar(function () {
            //hablar(function () {
                //hablar(function () {
                    //hablar(function () {
                        //adios(name, function() {
                        //console.log('Terminamos proceso...');
        //});
        //});
        //});
        //});
    //});
    //});
//});
