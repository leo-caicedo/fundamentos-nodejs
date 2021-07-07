function myOld (old, callback) {
    setTimeout(function() {
        console.log(`Soy ${old}`);
        callback();
    }, 1000);
}

function myOld2 (old, callback) {
    setTimeout(function() {
        console.log(`Soy ${old}`);
        callback();
    }, 1000);
}

function myOld3 (old, callback) {
    setTimeout(function() {
        console.log(`Soy ${old}`);
        callback();
    }, 1000);
}

console.log('He nacido');
myOld('Joven', function() {
    myOld2('Adulto', function() {
        myOld3('Viejo', function() {
            console.log('He muerto');
        });
    });
});
