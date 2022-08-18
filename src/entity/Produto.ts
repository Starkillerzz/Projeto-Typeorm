import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from "typeorm"



@Entity()
export class Produto {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    descricao: string

    @Column()
    preco: string

    @Column()
    estoque: string

}