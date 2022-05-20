const UsersController = require('../controllers/usersController');
const pasport = require('passpport');

module.exports = (app, upload) => {

    // GET: TRAER U OBTENER DATOS
    app.get('/api/users/getAll', UsersController.getAll);
    app.get('/api/users/findById/:id', passport.authenticate('jwt', {session: false}), UsersController.findById);

    // POST: GUARDAR O CREAR DATOS
    app.post('/api/users/create', upload.array('image', 1), UsersController.registerWithImage);

    app.post('/api/users/login', UsersController.login);

    // ACTUALIZAR DATOS
    app.put('/api/users/update', passport.authenticate('jwt', {session: false}), upload.array('image', 1), UsersController.update);
}