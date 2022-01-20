
// requires
const hbs = require('hbs')


// "helpers" de hbs
hbs.registerHelper('getAnio', () => { // getAnio es nombre de la funcion
    return new Date().getFullYear();
});


hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' '); // Convierto todo lo que venta en "texto" separado por " " en un array.

    palabras.forEach( (palabra, index) => {
        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase() // Solamente me convertira la primera letra en Mayuscula y las demas que le siguen en minuscula
    });

    return palabras.join(' ') // Junto de nuevo el array pero separo las palaras por un " "

});


hbs.registerHelper('getPerro', (perro) =>{
    return perro;
})


// ESTO NOOO se necesita exportar, ya que estas funciones se EJECUTAN y se REGISTRAN en el "hbs" NO es necesario exportarlo ni crear una variable en el "server.js" para ejecutar dichas funciones. Ya que no ocupamos almacenar, solamente ejecutar funciones es lo unico que me interesa...


// qwe