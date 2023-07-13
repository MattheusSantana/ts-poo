
class Personagem {
    nome: string  = '';
    energia: number = 0;
    vida: number = 100;
    ataque: number = 0;
    defesa: number = 0;



}


let santa: Personagem;
santa = new Personagem();
santa.nome = 'santa';
santa.vida = 120;


let rock: Personagem = new Personagem();
rock.nome = 'Rock';
rock.ataque = 2000;
rock.defesa = 1700;


console.log(santa, rock);
