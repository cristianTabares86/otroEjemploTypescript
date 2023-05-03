"use strict";
let matias = {
    nombre: 'matias',
    apellido: 'lamela',
    edad: 29,
    hobbies: [{ nombre: 'leer' }]
};
matias.hobbies[0].nombre;
let franco = {
    nombre: 'franco',
    apellido: 'etcheverri',
    edad: 27,
    saluda: (a) => { console.log('hola'); },
    hobbies: []
};
franco.estaActivo; //undefined o booleano
