import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity('grau')
class Grau {
    @PrimaryColumn()
    id?: string;

    @Column()
    designacao: string;
    
    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;
  
    constructor(){
      if (!this.id) {
        this.id = uuidV4();
      }
    }
}

export { Grau };