import { TipoUsuario } from "@modules//tipo_usuario/model/TipoUsuario";
import { validate } from "uuid";

describe("TipoUsuario Model", () => {
    it("should be able to create an Tipousuario with all props",  () => {
        const tipoUsuario = new TipoUsuario()

        Object.assign(tipoUsuario, {
            designacao: "Administrador",
            created_at: new Date(),
            updated_at: new Date(),
        });
        
        expect(validate(tipoUsuario.id)).toBe(true);
        expect(tipoUsuario.createdAt).toBeInstanceOf(Date);
        expect(tipoUsuario.updatedAt).toBeInstanceOf(Date);
    })
})