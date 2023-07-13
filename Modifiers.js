"use strict";
class Modifiers {
    constructor() {
        this.privateMember = 'privateMember';
    }
    privateMethod() {
        console.log("Private method called!", this.privateMember);
    }
    publicMethod() {
        this.privateMethod();
    }
}
const myObj = new Modifiers();
myObj.publicMethod();
class BaseClass {
    constructor() {
        this.protectecMember = 'Protected';
    }
    protectedMethod() {
        console.log("Protected method called!");
        this.protectecMember = 'Protected Value accessed'; //Acesso permitido
    }
}
class DerivedClass extends BaseClass {
    callProtectedMethod() {
        this.protectedMethod(); //Acesso permitido
    }
}
const obj = new DerivedClass();
obj.callProtectedMethod(); // Acesso permitido.
// obj.protectecMember = "Protected value changed"; Acesso negado
