import { json } from "sequelize";

import { Comments } from '../models/Comments';
import { VotationService } from "../services/Votation.service";

class VotattionsControler {
    async vote(request, response) {
        const { id, type } = request.body;

        const vote = await new VotationService().vote({id, type});

        return response.status(vote).send(json({
            message: vote == 200 ? 'Sucess!' : 'Error, check the type of vote!'
        }));
    }
}

export { VotattionsControler };