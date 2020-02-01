// codigo para mover letras
function letreiro() {
    var letreiro = document.getElementById("letreiro");
    var primeiro = letreiro.innerHTML.charAt(0);
    var resto = letreiro.innerHTML.slice(1);
    console.log(primeiro);
    console.log(resto);
    console.log(letreiro);
    letreiro.innerHTML = resto + primeiro;
}
var id;
// codigo de temporização
function ligar() {
    id = window.setInterval(letreiro, 300);
}
function desligar() {
    window.clearInterval(id);
}

// adiciona cidades
function botao() {
    var texto = document.getElementById("texto");
    var cidade = texto.value;
    var lista = document.getElementById("lista");
    var igual = lista.innerHTML.indexOf(cidade);
    console.log(igual);

    if (igual >= 0) {
        window.alert("A cidade já foi cadastrada!");
    } else {
        window.alert("Cidade adicionada!");
        lista.innerHTML += "<li>" + cidade + "</li>";
        listacidades.push(cidade);
        // Apos inserido limpa o campo
    }
    texto.value = " ";
}
var listacidades = [];

function imprime() {
    var lista = document.getElementById("lista");
    var cidades = ["Curitiba", "Campo Largo", "Colombo"];
    // console.log(cidades);

    var ult = cidades.length - 1;
    // for (var idx = 0; idx <= ult; idx += 1){
    //     // console.log(cidades[idx]);
    //     lista.innerHTML+="<li>"+cidades[idx]+"</li>";
    // }
    for (var idx=ult; idx=0; idx-=1){
        console.log(cidades[idx]);
        lista.innerHTML+="<li>"+cidades[idx]+"</li>";
    }
}

// array
// var cidades = new Array("Curitiba", "Pinhais", "Colombo");
// ou
// var cidades = ["Curitiba", "Pinhais", "Colombo"];
// cidades.push("SJP"); //coloca na ultima posição
// cidades.unshift("Araucaria"); //coloca na primeira posição
// cidades[1]="Fazenda" // altera ou retorna