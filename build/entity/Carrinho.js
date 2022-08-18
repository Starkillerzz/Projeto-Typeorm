"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carrinho = void 0;
var typeorm_1 = require("typeorm");
var Produto_1 = require("./Produto");
var Venda_1 = require("./Venda");
var Carrinho = /** @class */ (function () {
    function Carrinho() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Carrinho.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Carrinho.prototype, "quantidade", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Carrinho.prototype, "preco", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Produto_1.Produto; }),
        (0, typeorm_1.JoinColumn)({ name: 'id_produto' }),
        __metadata("design:type", Produto_1.Produto)
    ], Carrinho.prototype, "produto", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Venda_1.Venda; }),
        (0, typeorm_1.JoinColumn)({ name: 'id_venda' }),
        __metadata("design:type", Venda_1.Venda)
    ], Carrinho.prototype, "venda", void 0);
    Carrinho = __decorate([
        (0, typeorm_1.Entity)()
    ], Carrinho);
    return Carrinho;
}());
exports.Carrinho = Carrinho;
