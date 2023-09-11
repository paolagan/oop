
class App{

    private att1: string;
    private att2: string;
    private att3: string;
    private att4: string;

    constructor(a: string ) {
       this.att1 = a;
    }

    print () : string {
        return "ciccioprint";
    }

    pippo () : number {
        return 1;
    }
}


class Child extends App{

    print2():string{
        return super.print();
    }

    pippo() : number{
        return 3;
    }
}


const app = new App("Oggetto 1")