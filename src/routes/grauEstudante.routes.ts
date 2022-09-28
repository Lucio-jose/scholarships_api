import { Router } from "express";
import createGrauEstudanteController from "../modules/grau_estudante/useCases/createGrauEstudante/index";
import updateGrauEstudante from "../modules/grau_estudante/useCases/updateGrauEstudante";
import getGrauEstudanteController from "../modules/grau_estudante/useCases/getGrauEstudante";
import getEstudanteGrauController from "../modules/grau_estudante/useCases/getEstudanteGrau";


const grauEstudanteRouter = Router();

grauEstudanteRouter.post("/", (req, res) => {
    createGrauEstudanteController().handle(req, res);
});

grauEstudanteRouter.put("/:id", (req, res) => {
    updateGrauEstudante().handle(req, res);
});

grauEstudanteRouter.get("/estudante/:estudanteId", (req, res) => {
    getGrauEstudanteController().handle(req, res);
});

grauEstudanteRouter.get("/grau/:grauId", (req, res) => {
    getEstudanteGrauController().handle(req, res);
});

export { grauEstudanteRouter };