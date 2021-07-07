const fs = require('fs');

const read = (path, callback) => {
    fs.readFile(path, (err, data) => {
        callback(data.toString());
    })
}

const write = (path, content, callback) => {
    fs.writeFile(path, content, (err) => {
        if (err) {
            console.error('No he podido escribir en el archivo', err)
        } else {
            console.log('Se ha escritó de manera correcta el archivo');
        }
    });
}

const deleteFile = (path, callback) => {
    fs.unlink(path, callback);
}

write(`${__dirname}/file.txt`, 'Vamos por todo Crack!', console.log);
//read(`${__dirname}/file.txt`, console.log);
//deleteFile(`${__dirname}/file.txt`, console.log);
