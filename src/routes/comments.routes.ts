import { Router } from 'express';
const commentsRoutes = Router();

import { CommentsController } from "../controllers/CommentsController";

const commentController = new CommentsController()

commentsRoutes.post('/', commentController.create);
commentsRoutes.get('/', commentController.read);
commentsRoutes.get('/readone', commentController.readOne);
commentsRoutes.put('/', commentController.update);
commentsRoutes.delete('/', commentController.delete);

export { commentsRoutes };