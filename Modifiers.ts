class Modifiers {
    private privateMember: string = 'privateMember';

    private privateMethod(): void {
        console.log("Private method called!", this.privateMember);
        
    }

    publicMethod(): void {
        this.privateMethod();
    }
}
const myObj = new Modifiers();
myObj.publicMethod();


class   BaseClass {
    protected protectecMember: string = 'Protected';
    protected protectedMethod(): void {
        console.log("Protected method called!");
        this.protectecMember = 'Protected Value accessed'; //Acesso permitido
    }
}

class DerivedClass extends BaseClass {
    callProtectedMethod(): void {
        this.protectedMethod(); //Acesso permitido
    }
}

const obj = new DerivedClass();
obj.callProtectedMethod(); // Acesso permitido.
// obj.protectecMember = "Protected value changed"; Acesso negado