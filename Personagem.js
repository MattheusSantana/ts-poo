"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    constructor(nome) {
        this._nome = nome;
        this._vida = Math.random() * 100;
        this._ataque = Math.random() * 100;
        this._defesa = Math.random() * 100;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    status() {
        console.log("nome", this.nome);
        console.log("vida", this._vida.toFixed(1));
        console.log("ataque", this._ataque.toFixed(1));
        console.log("defesa", this._defesa.toFixed(1));
    }
}
exports.Personagem = Personagem;
