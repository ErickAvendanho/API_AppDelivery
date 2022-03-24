const express = require('express');
const app = express();
const http = require('http'); //NOTA: Abrir terminal y ejecutar el comando "npm i http" para que se guarde esta dependencia
const server = http.createServer(app);


const port = process.env.PORT || 3000;
app.set('port', port);

server.listen(3000, '192.168.100.181' || 'localhost', function(){ //Aquí se cambia la dirección IPv4 de ustedes
    console.log('Aplicacion de NodeJS ' + port + ' Iniciada...')
});