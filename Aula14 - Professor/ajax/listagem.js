
console.log("inicio do arquivo");

$(document).ready(function(){

    console.log("inicio do ready");

    $("#carregar").click(function(){
        
        console.log("click do botao");

        $.getJSON("/listagem.php", function(retorno, status){

            $("#conteudo").empty();

            retorno.forEach(function(el){
                
                var tr = ' <tr>'
                    +'<td>'+ el.nome +'</td>'
                    +'<td>'+ el.email +'</td>'
                    +'<td>'+ el.telefone +'</td>'
                    +'<td>'+ el.cidade +'</td>'
                    +'</tr>'

                $("#conteudo").append(tr);

            }); //fim foreach

            

        }); // fim getjson

        console.log("fim do click do botao");

    }); // fim click


    $("#enviar").click(function(){

        var campo_nome = $("#nome").val();
        var campo_email = $("#email").val();

        var dados = {
            nome: campo_nome,
            email: campo_email 
        };

        $.post("/cadastrar.php", dados);

    }); //fim clicl

    console.log("fim do ready");
}); //fim ready

console.log("fim do arquivo");