
const http = require('http')

const port = 3000;

http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'application/json'});

        let salida = {
            name: 'Lucas',
            age: 20,
            url: req.url
        }
        
        res.write(JSON.stringify(salida))

        // res.write('Hola mundo'); // La respuesta
        res.end(); // Le estoy diciendo que estoy terminando de crear la respuesta...

})
.listen(8080);

console.log('Escuchando el puerto 8080')







// qwe