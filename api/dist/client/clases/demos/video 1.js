"use strict";
//const/let/var nombreMiVariable : miTipado = asignacion
let nombre = 'matias'; //infiere mi tipado.
let otroNombre = 'matias'; //explicito, donde le vamos a decryption
//que tipado queremos.
let edad = 29;
let flotante = 2.5;
let verdadero = true;
verdadero = false;
var Fases;
(function (Fases) {
    Fases[Fases["Primero"] = 0] = "Primero";
    Fases[Fases["CualquierValor"] = 1] = "CualquierValor";
    Fases[Fases["Tercero"] = 2] = "Tercero"; //2
})(Fases || (Fases = {}));
Fases.CualquierValor; // 1
var userActions;
(function (userActions) {
    userActions["fetchUser"] = "FETCH_USER";
    userActions["postUser"] = "POST_USER";
})(userActions || (userActions = {}));
userActions.fetchUser; // comparar en un switch en el reducer de redux
verdadero = 2;
nombre = 29; //error antes de la compilacion
// cannot read property map of undefined
let objeto = {
    nombre: 'matias',
    apellido: 'lamela'
};
//funcion asincronica,
//pidiendo a mi rest API mis productos,
// [] ---> undefined o en el momento que tengo mis productos que es un arreglo
// (e) => {e.target.value} --> e: Event, evento mouseClick, keyDown
// Request
