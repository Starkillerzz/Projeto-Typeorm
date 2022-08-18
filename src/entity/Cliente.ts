import { Entity, PrimaryGeneratedColumn, Column} from "typeorm"


@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    fone: string

    @Column()
    email: string

}