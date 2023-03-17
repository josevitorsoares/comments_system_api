const express = require('express');
const routes = express.Router();

const comments_controler = require('../controllers/comments_controller.ts')

routes.post('/criar', comments_controler.criar);
routes.get('/buscar', comments_controler.buscar);


module.exports = routes;