// exemplo para nodejs

var nome = "Edir";
var idade = 12;
var cores = ["azul", "preto", "branco"];
var soma = function (n1, n2) {
    return n1 + n2;
}

/*
 carro
 
 atributos 
 cor
 marca

 metodos
 andar
 ligar
 freiar
*/

// JSON
var carro = {
    cor: "Azul",
    marca: "Fiat",
    ligado: false,
    
    motor: {
        potencia: 50
    },

    andar: function(){
        console.log("vc mandou o carro andar");
        
    },

    ligar: function() {
        this.ligado = true;
        this.andar();
        
    }

};


// definição de classe
// ES5
var Carro = function(){

    this.cor = "preto";
    this.marca = "ford";

    this.ligar = function ()
    {
        console.log("vc ligou o carro");
    }

}

var carro2 = new Carro();

// definição de classe
// ES6 - ES2015

class Caminhao {

    constructor(){
        this.cor = "preto";
        this.marca = "volvo";
        this.ligado = true;
        

    }

    ligar() {
        console.log("vc ligou o carro");
        this.ligado = true;
    }

}

var carreta = new Caminhao();

