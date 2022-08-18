import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne} from "typeorm"
import { Produto } from "./Produto"
import { Venda } from "./Venda"



@Entity()
export class Carrinho {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    quantidade: number

    @Column()
    preco: number

    @ManyToOne(() => Produto)
    @JoinColumn({name: 'id_produto'})
    produto: Produto

    @ManyToOne(() => Venda)
    @JoinColumn({name: 'id_venda'})
    venda: Venda


}