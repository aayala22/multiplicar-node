//node .\app.js listar --limite=20 --base 10 ejecutar aplicación
// cuando no lleva ./ es porque es un paquete descargado con npm
const argv = require('./config/yargs.js').argv;
const colors = require('colors/safe');

const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar.js'); //cuando lleva el ./ es un paquete creado por nosotros

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite);
        break;
    case 'crear':
        // crearArchivo(argv.base, argv.limite);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado `,
                colors.rainbow(`${archivo}`)))
            .catch(err => console.log(`error ${err}`))
        break;
    default:
        console.log('comando no reconocido');
        break;
}


// let argv2 = process.argv; //llamamos una funcion argv de node la cual nos devielve una matriz con los argumentos pasados desde la consola
// let parametro = argv[2]; //obtenemos el argumento en su parte 2
// let base = parametro.split('=')[1]; //separamos la variable con split() y de esa division tomamos el argumento en su parte 1
// console.log(base);

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado ${archivo}`))
//     .catch(err => console.log(`error ${err}`))


// console.log(`Limite ${argv.limite}`);
// console.log(argv2);