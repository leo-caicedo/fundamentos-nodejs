const { exec, spawn } = require('child_process');

//Ejecuta un comando en la terminal
//exec('node fileSystem.js', (err, stdout, stderr) => {
    //if (err) {
        //console.log(err);
        //return false;
    //}
    //console.log(stdout);
//});

// Ejecuta un comando pero se puede tener más acceso a lo que sucede
let proceso = spawn('neofetch');

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (d) => {
    console.log(d.toString());
});

proceso.on('exit', () => {
    console.log('Bien hemos acabadó el proceso!');
});
