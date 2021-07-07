const otroSeRompe = () => {
    return SeRompe();
}
const seRompe = () => {
    return 3 + z;
}

const asyncFunction = (cb) => {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (e) {
            console.error('Upp algo salió mal...');
            cb(e);
        }
    })
}

try {
    //seRompe(); LLamado de funcion sincrona
    //asyncFunction( (e) => { 
        //console.log(e.message);
    //}); LLamado de funcion asincrona
} catch (error) {
    console.error('Algo se rompió');
    console.error(error);
}
