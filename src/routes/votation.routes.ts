import { Router } from "express";
import { VotattionsControler } from "../controllers/VotationsController";

const votationsRoutes = Router();

const votationController = new VotattionsControler();

votationsRoutes.patch('/', votationController.vote);

export { votationsRoutes };