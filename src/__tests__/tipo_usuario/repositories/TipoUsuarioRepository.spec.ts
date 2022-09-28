import { TipoUsuarioRepository } from "@modules//tipo_usuario/repositories/implements/TipoUsuarioRepository";
import { validate } from "uuid";

describe("TipoUsuarioRepository", () => {
    let tipoUsuarioRepository: TipoUsuarioRepository;

    beforeAll(() => {
        tipoUsuarioRepository = new TipoUsuarioRepository()
    });

    it("should be able to create new tipoUsuarios", async () => {
        const tipoUsuario = await tipoUsuarioRepository.criar("Administrador")

        expect(validate(tipoUsuario.id)).toBe(true);
        expect(tipoUsuario.createdAt).toBeInstanceOf(Date);
        expect(tipoUsuario.updatedAt).toBeInstanceOf(Date);
    })

    it("should be able to list all tipoUsuarios", async () => {
        const tipoUsuario = await tipoUsuarioRepository.criar("TipoUsuario");
    
        const tipoUsuarios = await tipoUsuarioRepository.listar();
    
        expect(tipoUsuarios).toStrictEqual(expect.arrayContaining([tipoUsuario]));
    })

    it("should be able to find TipoUsuario by ID", async () => {
        const tipoUsuario = await tipoUsuarioRepository.criar("TipoUsuario");

        const pegaTipo = await tipoUsuarioRepository.pegaPorId(tipoUsuario.id)
    
        expect(pegaTipo).toMatchObject({
          designacao: tipoUsuario.designacao
        });
        expect(validate(pegaTipo.id)).toBe(true);
        expect(pegaTipo.createdAt).toBeInstanceOf(Date);
        expect(pegaTipo.updatedAt).toBeInstanceOf(Date);
    })

    it("should be able to find TipoUsuario by designacao", async () => {
        const tipoUsuario = await tipoUsuarioRepository.criar("TipoUsuario");

        const pegaTipo = await tipoUsuarioRepository.pegaPorDesignacao(tipoUsuario.designacao)

        expect(validate(pegaTipo.id)).toBe(true);
        expect(pegaTipo.createdAt).toBeInstanceOf(Date);
        expect(pegaTipo.updatedAt).toBeInstanceOf(Date);
    })

    it("should be able to update TipoUsuario by id", async () => {
        const tipoUsuario = await tipoUsuarioRepository.criar("TipoUsuario");

        const tipoActualizado = await tipoUsuarioRepository.actualizar(tipoUsuario, { designacao: "Outro Tipo"});

        expect(tipoActualizado).toHaveProperty('id', tipoUsuario.id)
        expect(tipoActualizado).toHaveProperty('designacao', 'Outro Tipo')
        
        expect(validate(tipoActualizado.id)).toBe(true);
        expect(tipoActualizado.createdAt).toBeInstanceOf(Date);
        expect(tipoActualizado.updatedAt).toBeInstanceOf(Date);
    })
})