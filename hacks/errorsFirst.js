function asincronia(callback) {
    setTimeout(function() {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (e) {
            callback(e);
        }
    }, 1000);
}

asincronia((err, data) => {
    if (err) {
        console.error('Tenemos un error');
        console.error(err);
        return false;
    }
    console.log(`Todo ha salido bien la data es ${data}`);
});
