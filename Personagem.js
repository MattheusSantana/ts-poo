"use strict";
class Personagem {
    constructor() {
        this.nome = '';
        this.energia = 0;
        this.vida = 100;
        this.ataque = 0;
        this.defesa = 0;
    }
}
let santa;
santa = new Personagem();
santa.nome = 'santa';
santa.vida = 120;
let rock = new Personagem();
rock.nome = 'Rock';
rock.ataque = 2000;
rock.defesa = 1700;
console.log(santa, rock);
