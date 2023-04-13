import { Comments } from '../models/Comments';

const STATUSCODESUCESS = 200;
const STATUSCODEERROR = 400;

class VotationService {
    
    verifyTypeVote(comment: any) {
        if (comment.up_votes > comment.down_votes) {
            comment.situacao = "Favorável";
        } else if (comment.up_votes < comment.down_votes) {
            comment.situacao = "Desfavorável";
        } else {
            comment.situacao = "Neutra";
        }

        return comment;
    }

    async vote({ id, type }) {
        const comment = await Comments.findByPk(id);
        switch (type) {
            case "up":
                comment.up_votes = comment.up_votes + 1;

                const result_up = this.verifyTypeVote(comment);

                result_up.save();
                return STATUSCODESUCESS;
            case "down":
                comment.down_votes = comment.down_votes + 1;

                const result_down = this.verifyTypeVote(comment);

                result_down.save();
                return STATUSCODESUCESS;
            default:
                return STATUSCODEERROR;
        }
    }
}

export { VotationService };