import { json } from "sequelize";

const Comments = require('../models/Comments.ts');

module.exports = {
    async create(request, response) {
        const { title, owner, corp_message } = request.body;
        
        let comment = {
            title: title, 
            owner: owner, 
            corp_message: corp_message,
            up_votes: 0, 
            down_votes: 0, 
            situacao: "neutro"
        };
        
        const result = await Comments.create(comment);
        return response.status(200).send(json(result));
    },

    async read(request, response) {
        const comments = await Comments.findAll();
        return response.status(200).send(json(comments));
    },

    async readOne(request, response) {
        const { id } = request.body;
        const comment = await Comments.findByPk(id);
        
        if (comment) {
            return response.status(200).send(json(comment));   
        }

        return response.status(400).send(json({error: 'ID not found!'}));''
    },

    async update(request, response) {
        const { id, title, owner, corp_message } = request.body;
        const comment = await Comments.findByPk(id);

        if (comment) {
            comment.title = title;
            comment.owner = owner;
            comment.corp_message = corp_message;

            comment.save();
            return response.status(200).send();
        }
        
        return response.status(400).send(json({error: 'ID not found!'}));
    },

    async delete(request, response) {
        const { id } = request.body;
        const comment = await Comments.findByPk(id);

        if (comment) {
            comment.destroy();
            return response.status(200).send();
        }

        return response.status(400).send(json({error: 'ID not found!'}));
    }
}