
class Personagem {
    constructor(
        public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number
    ) {}

    status(): void {
        console.log("nome", this.nome);
        console.log("energia",this.energia.toFixed(1));
        console.log("vida", this.vida.toFixed(1));
        console.log("ataque", this.ataque.toFixed(1));
        console.log("defesa", this.defesa.toFixed(1));
    }

 
}


let santa: Personagem;
santa = new Personagem('Santa', 1000, 100, 1200,1700);


let rock: Personagem = new Personagem('Rock', 2000, 180, 56, 560);

santa.status();
rock.status();