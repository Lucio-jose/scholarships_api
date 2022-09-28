import { Router } from "express";
import createSessao from "../modules/sessao/useCases/createSessao";


const sessaoRouter = Router();

sessaoRouter.post("/", (req, res) => {
    createSessao().handle(req, res);
})

export { sessaoRouter };