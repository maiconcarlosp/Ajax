function cadastrar() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;

    if (nome == "") {
        alert("O campo nome é obrigatório");
        return false
    }


    lista.innerHTML += "<tr>" + "<td>" + nome + "</td>" + "<td>" +
        email + "</td>" + "<td>" + telefone + "</td>" + "<td>" + +
        "</td>" + "<td>" + + "</td>" + "</tr>";
}