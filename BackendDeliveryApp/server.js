const express = require('express');
const app = express();
const http = require('http'); //NOTA: Abrir terminal y ejecutar el comando "npm i http" para que se guarde esta dependencia
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');
const multer = require('multer');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

/*
* INICIALIZAR FIREBASE ADMIN
*/
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const upload = multer({
    storage: multer.memoryStorage()
})

/*
* RUTAS
*/
const users = require('./routes/usersRoutes');

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

app.disable('x-powered-by');

app.set('port', port);

/*
*  LLAMANDO A LAS RUTAS
*/ 
users(app, upload);

server.listen(3000, '192.168.100.181' || 'localhost', function(){ //Aquí se cambia la dirección IPv4 de ustedes. La IPv4 se cambia cada que se reinicia su PC
    console.log('Aplicacion de NodeJS ' + port + ' Iniciada...')
});

//Para ejecutar, abrir terminal y ejecutar el comando "node server.js"

// app.get('/', (req, res) => {
//     res.send('Ruta raiz del backend');
// });

// app.get('/test', (req, res) => {
//     res.send('Esta es la ruta TEST');
// });

//ERROR HANDLER 
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

module.exports = {
    app: app,
    server: server
}

// 200 - ES UNA RESPUESTA EXITOSA
// 404 - SIGNIFICA QUE LA URL NO EXISTE
// 500 - ERROR INTERNO DEL SERVIDOR