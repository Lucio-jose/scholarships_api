import { AppDataSource } from "@dataSource//connection";
import { Contacto } from "../../model/Contacto";
import { IContactoRepository, ICreateContactoDTO, IPutContactoDTO } from "../IContactoRepository";


class ContactoRepository implements IContactoRepository{

    constructor(
        private contactoRepository = AppDataSource.getRepository(Contacto)
    ){}

    async criar({ contacto, usuarioId, tipoContactoId }: ICreateContactoDTO): Promise<Contacto> {
        const data = this.contactoRepository.create({ contacto, usuarioId, tipoContactoId });

        const contactoSalvo = await this.contactoRepository.save(data);

        return contactoSalvo;
    }

    async listar(usuarioId: string): Promise<Contacto[]> {
        const contactos = await this.contactoRepository.find({
            where: {
                usuarioId
            }
        })

        return contactos;
    }

    async atualizar(cont: Contacto, { contacto }: IPutContactoDTO): Promise<Contacto> {
        const contactoActualizado = this.contactoRepository.merge(cont, { contacto });

        const contactoSalvo = await this.contactoRepository.save(contactoActualizado);

        return contactoSalvo;
    }

    async deletar(id: string): Promise<void> {
        const apagarContacto = await this.contactoRepository.findOne({
            where: { 
                id 
            }
        })
      
        if(!apagarContacto){
          throw new Error("Usuario não encontrado!")
        }
         
        await this.contactoRepository.delete(apagarContacto.id)
    }

    async pegarUm(id: string): Promise<Contacto> | undefined{
        const contacto = await this.contactoRepository.findOne({
            where: {
                id
            }
        })

        return contacto;
    }

    async pegarPorContacto(contacto: string): Promise<Contacto> {
        const resul = await this.contactoRepository.findOne({
            where: {
                contacto
            }
        })

        return resul;
    }
}

export { ContactoRepository };