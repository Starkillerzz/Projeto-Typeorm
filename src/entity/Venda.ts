import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne} from "typeorm"
import { Cliente } from "./Cliente"


@Entity()
export class Venda {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    data: string

    @Column()
    status: string

    @ManyToOne(() => Cliente)
    @JoinColumn({name: 'cliente_id'})
    cliente: Cliente

}