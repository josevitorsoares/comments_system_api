import { Router } from "express";

import { commentsRoutes } from "./comments.routes";
import { votationsRoutes } from "./votation.routes";

const router = Router();

router.use('/comment', commentsRoutes);
router.use('/votation', votationsRoutes)

export { router };