"use strict";
class Personagem {
    constructor(nome, energia, vida, ataque, defesa) {
        this.nome = nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
}
let santa;
santa = new Personagem('Santa', 1000, 100, 1200, 1700);
let rock = new Personagem('Rock', 2000, 180, 56, 560);
console.log(santa, rock);
