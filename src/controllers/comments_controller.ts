import { json } from "sequelize";

const Comments = require('../models/Comments.ts');

module.exports = {
    async create(request, response){
        const {title, owner, corp_message} = request.body;
        // const teste = {title, owner, corp_message, 0, 0, "neutro"};
        const result = await Comments.create({title, owner, corp_message});
        return response.status(200).send(json(result));
    },

    async read(request, response){
        const comments = await Comments.findAll();
        return response.status(200).send(json(comments));
    },

    async readOne(request, response){
        const {id} = request.body;
        const comment = await Comments.findByPk(id);
        return response.status(200).send(json(comment));
    },
    
    async update(request, response){
        const {id, title, owner, corp_message} = request.body;
        const comment = await Comments.findByPk(id);
        
        comment.title = title;
        comment.owner = owner;
        comment.corp_message = corp_message;
        
        comment.save();
        return response.status(200).send();
    },

    async delete(request, response){
        const {id} = request.body;
        const comment = await Comments.findByPk(id);
        comment.destroy();

        return response.status(200).send();
    }
}