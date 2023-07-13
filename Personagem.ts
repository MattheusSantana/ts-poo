
export class Personagem {
    protected _nome: string;
    protected _vida: number;
    protected _ataque: number;
    protected _defesa: number;
    
    constructor(nome: string) {
        this._nome = nome;
        this._vida = Math.random() * 100;
        this._ataque = Math.random() * 100;
        this._defesa = Math.random() * 100;
    }


    
    public get nome() : string {
        return this._nome
    }
        
    
    public set nome(nome : string) {
        this._nome = nome;
    }
    
    status(): void {
        console.log("nome", this.nome);
        console.log("vida", this._vida.toFixed(1));
        console.log("ataque", this._ataque.toFixed(1));
        console.log("defesa", this._defesa.toFixed(1));
    }

 
}


