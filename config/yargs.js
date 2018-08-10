const opts = {
    base: {
        demand: true, //campo obligatorio
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

//node .\app.js listar --limite=20 --base 10 ejecutar aplicación
// cuando no lleva ./ es porque es un paquete descargado con npm
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'crea la tabla de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}