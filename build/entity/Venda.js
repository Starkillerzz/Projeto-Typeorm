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
exports.Venda = void 0;
var typeorm_1 = require("typeorm");
var Cliente_1 = require("./Cliente");
var Venda = /** @class */ (function () {
    function Venda() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Venda.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Venda.prototype, "data", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Venda.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Cliente_1.Cliente; }),
        (0, typeorm_1.JoinColumn)({ name: 'cliente_id' }),
        __metadata("design:type", Cliente_1.Cliente)
    ], Venda.prototype, "cliente", void 0);
    Venda = __decorate([
        (0, typeorm_1.Entity)()
    ], Venda);
    return Venda;
}());
exports.Venda = Venda;
