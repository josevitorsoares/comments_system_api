import { json } from "sequelize";
import { verifyTypeVote } from "../utils/functions";

const Comments = require('../models/Comments.ts');

module.exports = {
    async vote(request, response){
        const {id, type} = request.body;

        const comment = await Comments.findByPk(id);
        switch (type) {
            case "up":
                comment.up_votes = comment.up_votes + 1;

                const result_up = verifyTypeVote(comment);

                result_up.save();
                response.status(200).send();

                break;
            case "down":
                comment.down_votes = comment.down_votes + 1;
                
                const result_down = verifyTypeVote(comment);

                result_down.save();
                response.status(200).send();
                
                break;
            default:
                return response.status(400).send(json({error: "Option type is invalid"}));
        }
    },


}