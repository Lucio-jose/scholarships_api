import { Router } from "express";
import createLoginController from "../modules/login/useCase/createLogin/index";
import deleteLoginController from "../modules/login/useCase/deleteLogin/index";


const loginRouter = Router();

loginRouter.post("/", (req, res) => {
    createLoginController().handle(req, res);
});

loginRouter.delete("/:id", (req, res) => {
    deleteLoginController().handle(req, res);
});

export { loginRouter };