
class Forma{
    static numeroDiOggettiCreati=0;
    private tipoForma:string="";
    public numeroFortunato:number = 10;
    protected 


    constructor(tipo:string) {
        Forma.numeroDiOggettiCreati+=1
        this.tipoForma=tipo;
    }

    getTipoForma():void{
        console.log("Il mio tipo e "+this.tipoForma);
    }

    printaTutto(){
        this.getTipoForma()
    }

}




class Triangolo extends Forma{

     pi: "prof"|"student" = "student"

    // constructor() {
    //     super("Triangolo");
    // }

    constructor(tipo:string) {
        super(tipo);
    }
}


let triangolo = new Forma("triangolo");
triangolo.getTipoForma()
console.log("abbiamo creato # "+Forma.numeroDiOggettiCreati+" di oggetti.")

let triangolo2 = new Triangolo("Trtiangolo vero 2")
console.log("abbiamo creato # "+Forma.numeroDiOggettiCreati+" di oggetti.")
console.log("abbiamo creato # "+Triangolo.numeroDiOggettiCreati+" di oggetti.")








//
//
// class App{
//
//     private att1: string;
//     private att2: string;
//     private att3: string;
//     private att4: string;
//
//     constructor(a: string ) {
//        this.att1 = a;
//     }
//
//     print () : string {
//         return "ciccioprint";
//     }
//
//     pippo () : number {
//         return 1;
//     }
// }
//
//
// class Child extends App{
//
//     print2():string{
//         return super.print();
//     }
//
//     pippo() : number{
//         return 3;
//     }
// }
//
//
// const app = new App("Oggetto 1")