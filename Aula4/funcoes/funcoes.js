// Aula sobre funções

var nome = "Maicon";
var idade = 29;

function imprime() {
    var idade = 10;
    console.log(nome);

    function leidade() {
        idade = 29
        console.log(leidade);
    }
    leidade();
    console.log(leidade);
}

// função com escopo fechado
function soma(n1, n2) {
    var valor = n1 + n2;
    return valor;
}
// função anonima
var sub = function(n1,n2)
{
    return n1-n2;
}