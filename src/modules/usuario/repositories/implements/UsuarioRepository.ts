import { AppDataSource } from "@dataSource//connection";
import { TipoUsuarioRepository } from "@modules//tipo_usuario/repositories/implements/TipoUsuarioRepository";
import { Usuario } from "../../model/Usuario";
import { ICreateUsuarioDTO, IUpdateUsuarioDTO, IUsuarioRepository } from "../IUsuarioRepository";


class UsuarioRepository implements IUsuarioRepository{

    constructor(
        private usuarioRepository = AppDataSource.getRepository(Usuario),
        private tipoUsuarioRepo = new TipoUsuarioRepository
    ){}

    async criar({ nome, sobreNome, dataNascimento, tipoUsuarioId }: ICreateUsuarioDTO): Promise<Usuario> {
        const criarUsuario = this.usuarioRepository.create({
            nome,
            sobreNome,
            tipoUsuarioId,
            dataNascimento
        })

        const usuario = await this.usuarioRepository.save(criarUsuario)

        return usuario;
    }

    async listar(): Promise<Usuario[]> {
        const usuarios = await this.usuarioRepository.find();

        return usuarios;
    }

    async pegarUm(id: string): Promise<Usuario> | undefined{
        const usuario = await this.usuarioRepository.findOne({
            where: {
                id
            }
        });

        return usuario;
    }

    async atualizar(usuario: Usuario, { nome, sobreNome }: IUpdateUsuarioDTO): Promise<Usuario> {
        const usuarioActualizado = this.usuarioRepository.merge(usuario, { nome, sobreNome });

        const salvoUsuario = await this.usuarioRepository.save(usuarioActualizado);

        return salvoUsuario;
    }

    async deletar(id: string): Promise<void> {
        const apagarUsuario = await this.usuarioRepository.findOne({
            where: { 
                id 
            }
        })
      
        if(!apagarUsuario){
          throw new Error("Usuario não encontrado!")
        }
         
        await this.usuarioRepository.delete(apagarUsuario.id)
    }

    async turnUsuarioAdmin(usuario: Usuario): Promise<Usuario> {
        const tipoUsuario = await this.tipoUsuarioRepo.pegaPorDesignacao("Administrador");

        if(!tipoUsuario)
            throw new Error("TipoUsuário não existe!");
        
        
        const usuarioActualizado = this.usuarioRepository.merge(usuario, { tipoUsuarioId: tipoUsuario.id, tipoUsuario });

        const salvoUsuario = await this.usuarioRepository.save(usuarioActualizado);

        return salvoUsuario;
    }
};

export { UsuarioRepository };