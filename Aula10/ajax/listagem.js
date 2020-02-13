$(document).ready(function () {

    $("#carregar").click(function () {

        $("#conteudo").empty();

        $.getJSON("/listagem.php", function (retorno, status) { //parametros para pegar no banco de dados
            
            retorno.forEach(function(el){
                var tr = '<tr>'
                    +'<td>'+ el.nome + '</td>'
                    +'<td>'+ el.email + '</td>'
                    +'<td>'+ el.telefone + '</td>'
                    +'<td>'+ el.cidade + '</td>'
                    +'</tr>'

                    $("#conteudo").append(tr); //adiciona as linhas
            });
            console.log(retorno, status);

        });
    }); //fim click

    $("#enviar").click(function(){

        var campo_nome = $("#nome").val();
        var campo_email = $("#email").val();
        var campo_telefone = $("#telefone").val();
        var campo_cidade = $("#cidade").val();

        var dados = {
            nome:campo_nome,
            email:campo_email,
            telefone:campo_telefone,
            cidade:campo_cidade
        };

        $.post("/cadastrar.php", dados); //envia dados para o banco

    }); //fim click

}); //fim carregar