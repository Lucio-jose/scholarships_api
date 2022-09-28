import { Request, Response, Router } from "express";
import createGrau from "../modules/grau/useCases/createGrau";
import deleteGrau from "../modules/grau/useCases/deleteGrau";
import getGrau from "../modules/grau/useCases/getGrau";
import updateGrau from "../modules/grau/useCases/updateGrau";


const grauRouter = Router();

grauRouter.post("/", (req: Request, res: Response) => {
    createGrau().handle(req, res);
})

grauRouter.get("/", (req: Request, res: Response) => {
    getGrau().handle(req, res);
})

grauRouter.put("/:id", (req: Request, res: Response) => {
    updateGrau().handle(req, res);
})

grauRouter.delete("/:id", (req: Request, res: Response) => {
    deleteGrau().handle(req, res);
})

export { grauRouter };