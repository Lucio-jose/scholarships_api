import { Contacto } from "../model/Contacto";


interface ICreateContactoDTO{
    contacto: string;
    tipoContactoId: string;
    usuarioId: string;
}

interface IPutContactoDTO{
    contacto: string;
}

interface IContactoRepository{
    criar({ contacto, usuarioId, tipoContactoId }: ICreateContactoDTO): Promise<Contacto>;
    listar(usuarioId: string): Promise<Contacto[]>;
    atualizar(cont: Contacto, { contacto }: IPutContactoDTO): Promise<Contacto>;
    deletar(id: string): Promise<void>;
    pegarUm(id: string): Promise<Contacto> | undefined;
    pegarPorContacto(contacto: string): Promise<Contacto> | undefined;
}

export { IContactoRepository, ICreateContactoDTO, IPutContactoDTO };