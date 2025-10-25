const routes = require('express').Router();
const lesson1Controllers = require('../controllers/lesson1')

routes.get('/', lesson1Controllers.tatyRoute);
routes.get('/sergio', lesson1Controllers.sergioRoute);
routes.get('/bernardo', lesson1Controllers.bernardoRoute);
routes.get('/murilo', lesson1Controllers.muriloRoute);
routes.get('/esther', lesson1Controllers.estherRoute);
routes.get('/arthur', lesson1Controllers.arthurRoute);
routes.get('/barbara', lesson1Controllers.barbaraRoute);

module.exports = routes;