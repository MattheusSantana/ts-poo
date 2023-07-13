import { Personagem } from './Personagem';

class Warrior extends Personagem{
    private _forca: number;
    private _velocidade: number;

    constructor(nome: string) {
        super(nome);
        this._velocidade = Math.random();
        this._forca = Math.random() * 90;
        this._ataque = 3000;
        this._defesa = 9000;
    }
}


let warrior: Warrior = new Warrior('Warrior');
warrior.status();