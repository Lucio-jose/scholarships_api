import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, Timestamp } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Contacto } from "../../contacto/model/Contacto";
import { Usuario } from "../../usuario/model/Usuario";
import bcrypt from "bcrypt"

@Entity('login')
class Login{
    @PrimaryColumn()
    id?: string;

    @Column()
    senha: string;

    @Column()
    usuarioId: string;
    @OneToOne(() => Usuario, (usuario) => usuario, { eager: true })
    @JoinColumn()
    usuario: Usuario;

    @Column()
    contactoId: string;
    @OneToOne(() => Contacto, (contacto) => contacto, { eager: true })
    @JoinColumn()
    contacto: Contacto;
    
    @CreateDateColumn()
    createdAt: Timestamp;

    @CreateDateColumn()
    updatedAt: Timestamp;
  
    constructor(){
      if (!this.id) {
        this.id = uuidV4();
      }
    }

    @BeforeInsert()
    @BeforeUpdate()
    cryptSenha(){
      this.senha = bcrypt.hashSync(this.senha, 8);
    }
};

export { Login };