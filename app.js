//destructuracion
const argv = require('./config/yargs').argv;

//importacion de colores en la consola
const colors = require('colors');


const { crearArchivo, listar } = require('./multiplicar/multiplicar');


//areglo definido con un guion bajo
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo creado ${archivo}`.green))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

//console.log(process.argv);
//let argv2 = process.argv;

//console.log('Limite', argv.limite);
//console.log(argv2);
/*
let parametro = argv[2];
let base = parametro.split('=')[1];
*/

/*
crearArchivo(base)
    .then(archivo => console.log(`El archivo creado ${archivo}`))
    .catch(err => console.log(err));
*/