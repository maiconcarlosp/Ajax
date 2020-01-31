function botao() {
    var texto = document.getElementById("texto");
    var cidade = texto.value;
    var cidades = document.getElementById("cidades");
    var igual = cidades.innerHTML.indexOf(cidade);
    console.log(igual);

    if (igual >= 0) {
        window.alert("A cidade já foi cadastrada!");
    } else {
        window.alert("Cidade adicionada!");
        cidades.innerHTML += "<li>" + cidade + "</li>";
        // Apos inserido limpa o campo
    }
    texto.value = " ";
}
function nome() {
    var nome = document.getElementById("nome");
    var box = document.getElementById("box");
    box.innerHTML = nome.value.toUpperCase();
}
function letras(){
    var nome = document.getElementById("nome");
    var primeira = nome.value.charAt(0);
    var resto = nome.value.slice(1);
    console.log(primeira);
    console.log(resto);
    var box = document.getElementById("box");
    box.innerHTML = primeira.toUpperCase()+resto.toLowerCase();
}