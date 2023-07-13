
class Personagem {
    constructor(
        public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number
    ) {}
}


let santa: Personagem;
santa = new Personagem('Santa', 1000, 100, 1200,1700);


let rock: Personagem = new Personagem('Rock', 2000, 180, 56, 560);


console.log(santa, rock);
