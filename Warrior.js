"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Personagem_1 = require("./Personagem");
class Warrior extends Personagem_1.Personagem {
    constructor(nome) {
        super(nome);
        this._velocidade = Math.random();
        this._forca = Math.random() * 90;
        this._ataque = 3000;
        this._defesa = 9000;
    }
}
let warrior = new Warrior('Warrior');
warrior.status();
