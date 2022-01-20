
const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

const hbs = require('hbs')
require('./hbs/helpers/helper') // Aqui no pongo variable por ejemplo: const hbsHelpers = require('./hbs/herlpers/herlper') ya que NO es necesario almacenarlo en una variable, ya que solamente lo unico que necesito es que se ejecuten las funciones almacenadas en el "helper.js"
// ESTO NOOO se necesita exportar, ya que estas funciones se EJECUTAN y se REGISTRAN en el "hbs" NO es necesario exportarlo ni crear una variable en el "server.js" para ejecutar dichas funciones. Ya que no ocupamos almacenar, solamente ejecutar funciones es lo unico que me interesa...

// Configuracion del public
app.use(express.static(__dirname + '/public'))

// Configurar view engine HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) =>{
    res.render('home', {
        nombre: 'lWucas',
    })
})

app.get('/about', (req, res) =>{
    res.render('about')
})


app.listen(port, () =>{
    console.log(`Server iniciado en el puerto ${port}`);
})





// qwe