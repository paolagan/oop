
abstract class Forma{
    static numeroDiOggettiCreati=0;
    private tipoForma:string="";
    public numeroFortunato:number = 10;


    constructor(tipo:string) {
        Forma.numeroDiOggettiCreati+=1
        this.tipoForma=tipo;
    }

    getTipoForma():void{
        console.log("Il mio tipo e "+this.tipoForma);
    }

    abstract circonferenza():number;

    printaTutto(){
        this.getTipoForma()
    }
}



class Triangolo extends Forma{
//parametri della claseee Triangolo che definiscono i tre lati
    a:number
    b:number
    c:number

    constructor(tipo:string, a:number,b:number,c:number) {
        super(tipo);
        this.a = a;
        this.b = b;
        this.c = c;

    }

    circonferenza():number{
         return this.a+this.b+this.c;
    }

    printaTutto() {
        super.printaTutto();
        console.log("La circonferenza del triangolo e "+this.circonferenza())
    }

}

let triangolo2 = new Triangolo("Trtiangolo vero 2",2,2,4)
console.log("abbiamo creato # "+Forma.numeroDiOggettiCreati+" di oggetti.")
console.log("abbiamo creato # "+Triangolo.numeroDiOggettiCreati+" di oggetti.")
triangolo2.printaTutto()

class Quadrato implements interface1{
    a:number=0
    nome:string=""

    circonferenza(): number {
        return 4*this.a;
    }

    getNome() {
        return this.nome;
    }

}

interface interface1{
    nome:string;
    getNome():string;
}


const test = new Quadrato()
test.getNome()