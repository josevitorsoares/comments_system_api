import { json } from "sequelize";

const Comments = require('../models/Comments.ts');

module.exports = {
    async criar(request, response){
        const {title, owner, corp_message, up_votes, down_votes, situacao} = request.body;
       
        console.log({title, owner, corp_message, up_votes, down_votes, situacao})
        // console.log(request.body)
        const result = await Comments.create({title, owner, corp_message, up_votes, down_votes, situacao});
        return response.send(json(result));
        // return response.send();
    },

    async buscar(request, response){
        const commen = await Comments.findAll();
        return response.send(json(commen));
    }
}