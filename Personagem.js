"use strict";
class Personagem {
    constructor(nome, energia, vida, ataque, defesa) {
        this.nome = nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    status() {
        console.log("nome", this.nome);
        console.log("energia", this.energia.toFixed(1));
        console.log("vida", this.vida.toFixed(1));
        console.log("ataque", this.ataque.toFixed(1));
        console.log("defesa", this.defesa.toFixed(1));
    }
}
let santa;
santa = new Personagem('Santa', 1000, 100, 1200, 1700);
let rock = new Personagem('Rock', 2000, 180, 56, 560);
santa.status();
rock.status();
