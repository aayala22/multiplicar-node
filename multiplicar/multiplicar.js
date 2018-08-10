//require
const fs = require('fs');
var colors = require('colors');


let listarArchivo = (base, limite) => {

    console.log(`==================`.green);
    console.log(`Tabla de ${base}==`.green);
    console.log(`==================`.green);
    let datos = '';
    for (let index = 1; index < limite; index++) {
        // const element = array[index];
        console.log(`${base} * ${index} = ${base * index}`);

    }
}

//crracion de la funcion crearArchivo
let crearArchivo = (base, limite) => {
    //creacion de la promesa
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero'); //ejecutamos el error
            return; //hacemos el return para que no siga corriendo el programa
        }
        let datos = '';

        // creamos un for para realizar las multiplicaciones
        for (let i = 1; i < limite; i++) {
            // concatenamos las multiplicaciones en una variable
            datos += `${base} * ${i} = ${base * i}, \n`;

        }
        //creamos el archivo y lo guardamos en una ruta especifica
        fs.writeFile(`tablas/multiplicar${base}.txt`, datos, (err) => {
            if (err)
                reject(err); //si algo sale mal retornamos el error
            else
                resolve(`multiplicar${base}.txt`); //si todo esta bien retornamos el nombre del archivo creado
            // console.log('El archivo ha sido creado exitosamente');
        });
    });
}

module.exports = {
    crearArchivo,
    listarArchivo
}