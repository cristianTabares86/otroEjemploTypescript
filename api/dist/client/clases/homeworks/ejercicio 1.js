"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Typescript va a inferir nuestra variable en la primer asignacion
let variableInferida = 2;
//O podemos definir explicitamente el tipado en el momento de su declaracion
let variableExplicita = 2;
//si hacemos hover sobre resultado, vemos que visual studio code infiere que "resultado"
//es un number, porque la suma de dos numeros es SIEMPRE un numero.
let resultado = variableExplicita + variableInferida;
//completar el tipado correspondiente para cada variable
let unString = 'mati';
let unNumber = 2;
let unBoolean = true;
let unNull = null; //que pasa aca?
let unUndefined = undefined; //y aca?
// Enum
var Fases;
(function (Fases) {
    Fases[Fases["Primera"] = 0] = "Primera";
    Fases[Fases["Segunda"] = 1] = "Segunda";
    Fases[Fases["Tercera"] = 2] = "Tercera"; //2
})(Fases || (Fases = {}));
let phase = Fases.Primera; // 0
var userActions;
(function (userActions) {
    userActions["fetchUser"] = "FETCH_USER";
    userActions["postUser"] = "POST_USER"; // "POST_USER"
})(userActions || (userActions = {}));
