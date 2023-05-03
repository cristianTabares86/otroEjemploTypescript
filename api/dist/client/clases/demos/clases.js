"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    constructor(nombre, edad, email) {
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
    }
    getEdad() {
        return 'mi edad es ' + this.edad;
    }
}
class Estudiante extends Persona {
    constructor(nombre, edad, email) {
        super(nombre, edad, email);
        this.isActive = false;
    }
    funcionPrueba() {
        this.email;
    }
}
let mati = new Persona('matias', 29, 'mati@mail.com');
let fede = new Persona('fede', 29, 'fede@mail.com');
fede.email;
mati.nombre; //publico, lo puedo acceder desde fuera de la clase
mati.getEdad();
