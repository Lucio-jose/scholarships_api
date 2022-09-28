import { Router } from "express";
import createContactoController from "@modules//contacto/useCase/createContacto/index";
import deleteContactoController from "@modules//contacto/useCase/deleteContacto/index";
import getContactoController from "@modules//contacto/useCase/getContacto/index";
import putContactoController from "@modules//contacto/useCase/putContacto/index";


const contactoRouter = Router();

contactoRouter.post("/:usuarioId", (req, res) => {
    createContactoController().handle(req, res);
});

contactoRouter.get("/:usuarioId", (req, res) => {
    getContactoController().handle(req, res);
});

contactoRouter.put("/:id", (req, res) => {
    putContactoController().handle(req, res);
});

contactoRouter.delete("/:id", (req, res) => {
    deleteContactoController().handle(req, res);
});

export { contactoRouter };