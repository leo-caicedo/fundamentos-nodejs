let suma = 0;

console.time('loop 1');
for (let i = 0; i < 100000; i++) {
    suma++
}
console.timeEnd('loop 1');

let mult = 0;
console.time('loop 2');
for (let i = 0; i < 100000; i++) {
    mult *= i;
}
console.timeEnd('loop 2');

console.time('async');
const asincrona = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Termina el proceso asincrono');
            resolve();
        }, 2000);
    });
}
asincrona()
    .then(() => {
        console.timeEnd('async');
    })
