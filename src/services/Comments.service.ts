
const STATUSCODESUCESS = 200;
const STATUSCODEERROR = 400;

import { Comments } from "../models/Comments";

class CommentServices {

    async createComment({ title, owner, corp_message }) {
        const comment = {
            title: title,
            owner: owner,
            corp_message: corp_message,
            up_votes: 0,
            down_votes: 0,
            situacao: "neutro"
        };

        const result = await Comments.create(comment);

        if (result) {
            return STATUSCODESUCESS;
        } else {
            return STATUSCODEERROR;
        }
    }

    async readComments() {
        const comments = await Comments.findAll();

        return comments;
    }

    async readOneComment({ id }) {
        const comment = await Comments.findByPk(id);

        if (comment) {
            return comment;
        } else {
            return STATUSCODEERROR;
        }
    }

    async updateComment({ id, title, corp_message }) {
        const comment = await Comments.findByPk(id);

        if (comment) {
            comment.title = title;
            comment.corp_message = corp_message;

            comment.save();

            return STATUSCODESUCESS;
        } else {
            return STATUSCODEERROR;
        }
    }

    async deleteComment({ id }) {
        const comment = await Comments.findByPk(id);

        if (comment) {
            comment.destroy();

            return STATUSCODESUCESS;
        } else {
            return STATUSCODEERROR;
        }
    }
}

export { CommentServices };