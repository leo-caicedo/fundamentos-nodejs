const os = require('os');

console.log(os.arch());
console.log(os.platform());
console.log(os.cpus());
//console.log(os.constants); información de los errores del sistema

const SIZE = 1024;
const kb = (bytes) => { return bytes / SIZE }
const mb = (bytes) => { return kb(bytes) / SIZE }
const gb = (bytes) => { return mb(bytes) / SIZE }
console.log(kb(os.freemem())); // Memoria libre que tenemos 
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

console.log(gb(os.totalmem()));

console.log(os.homedir());// Directori del Home
console.log(os.tmpdir());

console.log(os.hostname());// Muestra el nombre del Host Local
console.log(os.networkInterfaces());// Interfacez de Red
