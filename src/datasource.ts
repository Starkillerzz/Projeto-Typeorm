import { DataSource } from "typeorm"
import { Carrinho } from "./entity/Carrinho"
import { Cliente } from "./entity/Cliente"
import { Produto } from "./entity/Produto"
import { Venda } from "./entity/Venda"

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
    entities: [Cliente, Venda, Produto, Carrinho],
    logging: false,
    synchronize: true,
})

export default dataSource