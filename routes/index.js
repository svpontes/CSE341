const routes = require('express').Router();
const lesson1Controllers = require('../controllers/lesson1')

routes.get('/', lesson1Controllers.tatyRoute);
routes.get('/sergio', lesson1Controllers.sergioRoute);

module.exports = routes;