const express = require('express');

const routes = express.Router();
const authMiddleware = require('./middlewares/auth');
const userController = require('./controllers/userController.js');
const authenticationController = require('./controllers/authenticationController');


routes.post('/user', userController.create);
routes.post('/authenticate', authenticationController.authenticate);

routes.use(authMiddleware);

routes.get('/', (req, res) => {
  const { user } = req;
  res.json({ info: 'Autorizado, você acessou /api', user });
});

// CRUD for Users
routes.get('/user', userController.view);
routes.get('/user/:id', userController.viewID);
routes.put('/user/:id', userController.update);
routes.delete('/user/:id', userController.delete);

module.exports = routes;
