const UsersController = require('../controllers/usersController');

module.exports = (app) => {

    // GET: TRAER U OBTENER DATOS
    app.get('/api/users/getAll', UsersController.getAll);

    // POST: GUARDAR O CREAR DATOS
    app.post('/api/users/create', UsersController.register);

    app.post('/api/users/login', UsersController.login);
}