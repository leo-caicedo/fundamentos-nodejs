process.on('beforeExit', () => {
    console.log('Ya casi acabamos');
})

process.on('exit' , () => {
    console.log('Listo ya terminamos');
    setTimeout(() => {
        console.log('Never');
    });
})

process.on('uncaughtException' , (error) => {
    console.error('Se nos ha olvidado capturar un error');
    console.error(error);
})

functionNotFound();
