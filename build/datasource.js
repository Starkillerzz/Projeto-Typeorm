"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Carrinho_1 = require("./entity/Carrinho");
var Cliente_1 = require("./entity/Cliente");
var Produto_1 = require("./entity/Produto");
var Venda_1 = require("./entity/Venda");
var dataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
    entities: [Cliente_1.Cliente, Venda_1.Venda, Produto_1.Produto, Carrinho_1.Carrinho],
    logging: false,
    synchronize: true,
});
exports.default = dataSource;
