
// Aula sobre funções

var nome = "Edir";
var idade = 33;

function imprime() 
{
    //var idade = 10;
    console.log(nome);
    

    function leidade()
    {
        idade = 67;
        console.log(idade);
    }

    leidade();
    console.log(idade);
}

var n1 = 10;
var n2 = 5;

// funcao com escopo fechado
/**
 * docblock 
 * Soma dois numeros
 * @param {number} n1 
 * @param {number} n2 
 * @returns {number}
 */
function soma(n1, n2)
{
    var valor = n1 + n2;
    return valor;
}

// função anonima
var sub = function(n1, n2)
{
    return n1 - n2;
}

//ligar o painekl
function letreiro()
{
    var letreiro = document.getElementById("letreiro");
    var letra = letreiro.innerHTML.charAt(0);

    var novo = letreiro.innerHTML.slice(1) + letra;

    letreiro.innerHTML = novo;
    
}

var id;

function ligar()
{
    id = window.setInterval(letreiro, 200);
}

function desligar()
{
    window.clearInterval(id);
}


var listaCidades = [];

//adiciona cidades
function add()
{
    var texto = document.getElementById("texto");
    var cidade = texto.value;
    var lista = document.getElementById("lista");
    
    listaCidades.push(cidade);  

    // limpa o input
    texto.value = "";
    imprime();
}


function imprime ()
{
    var lista = document.getElementById("lista");
    //var cidades = ["Curitiba", "Tibagi", "Campo Largo"];
    
    lista.innerHTML = "";

    var ult = listaCidades.length - 1;

    for (var idx = 0; idx <= ult; idx += 1)
    {
       lista.innerHTML += "<li>"+ listaCidades[idx] +"</li>";
    }

}

