import { json } from "sequelize";

import { CommentServices } from '../services/Comments.service';

class CommentsController {
    
    async create(request, response) {
        const { title, owner, corp_message } = request.body;

        const comment = await new CommentServices().createComment({ title, owner, corp_message });

        return response.status(comment).send(json({ message: comment == 200 ? 'Sucess!' : 'Error!' }));
    }

    async read(request, response) {
        const comments = await new CommentServices().readComments();

        return response.status(200).send(json(comments));
    }

    // async readOne(request, response) {
    //     const { id } = request.body;
    //     const comment = await new CommentServices().readOneComment(id)

    //     return response.status(400).send(json({ error: 'ID not found!' })); ''
    // },

    async update(request, response) {
        const { id, title, corp_message } = request.body;

        const commentUpdate = await new CommentServices().updateComment({ id, title, corp_message });

        return response.status(commentUpdate).send(json({
            message: commentUpdate == 200 ? 'Comment updated!' : 'Error, check the id!'
        }));
    }

    async delete(request, response) {
        const { id } = request.body;
        const comment = await new CommentServices().deleteComment({ id })

        return response.status(comment).send(json({
            message: comment == 200 ? 'Comment deleted!' : 'Error, check the id'
        }));
    }
}

export { CommentsController };