const express = require('express');
const routes = express.Router();

const comments_controler = require('../controllers/comments_controller.ts')
const votation_controller = require('../controllers/votation_controller.ts')

routes.post('/create', comments_controler.create);
routes.get('/read', comments_controler.read);
routes.get('/read-one', comments_controler.readOne);
routes.put('/update', comments_controler.update);
routes.delete('/delete', comments_controler.delete);

routes.patch('/vote', votation_controller.vote);



module.exports = routes;