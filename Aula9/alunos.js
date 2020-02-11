
$(document).ready(function(){

    $("#btn-cadastrar").click(function () {

        var vetor_periodos = ["", "Manhã", "Tarde", "Noite"];

        var nome = $("#nome").val();
        var email = $("#email").val();
        var telefone = $("#telefone").val();
        var periodo = $("#periodo").val()
        var sexo = $("input[name=sexo]:checked").val();

        var errado = false;
        
        // Limpa mensagens de erro
        $("#msgalert").hide();
        $("#msgalert").html("");
        $(".removerror").removeClass("erro");

        if (nome.trim().length < 2)
        {            
            // alert("O campo nome é obrigatorio");
            $("#msgalert").append("<li>O campo nome é obrigatório</li>");
            $("#msgalert").fadeIn();
            $("#nome").addClass("erro");
            $("#nome").focus();
            errado=true;
        }

        if (email == "")
        {
            // alert("O campo email é obrigatorio");
            $("#msgalert").append("<li>O campo email é obrigatorio</li>");
            $("#msgalert").fadeIn();
            $("#email").addClass("erro");
            $("#email").focus();
            errado=true;
        } else 
        {
            var email_regex = /^[0-9a-z\.\_\-]*@[0-9a-z.]*$/gm;
            if (email.search(email_regex) == -1)
            {
                // alert("O formato do email é invalido");
                $("#msgalert").append("<li>O formato do email é invalido</li>");
                $("#msgalert").fadeIn();
                $("#email").addClass("erro");
                $("#email").focus();
                errado=true;
            }
        }

        if (telefone == "")
        {
            // alert("O campo telefone é obrigatorio");
            $("#msgalert").append("<li>O campo telefone é obrigatorio</li>");
            $("#msgalert").fadeIn();
            $("#telefone").addClass("erro");
            $("#telefone").focus();
            errado=true;
        } else 
        {
            var fone_regex = /^\([0-9][0-9]\)[0-9]{4,5}-[0-9]{4}$/gm;
            
            if (telefone.search(fone_regex) == -1)
            {
                // alert("O formato do telefone é invalido");
                $("#msgalert").append("<li>O formato do telefone é invalido</li>");
                $("#msgalert").fadeIn();
                $("#telefone").addClass("erro");
                $("#telefone").focus();
                errado=true;
            }

        }

        if (sexo == undefined)
        {
            // alert("O campo sexo é obrigatorio");
            $("#msgalert").append("<li>O campo sexo é obrigatorio</li>");
            $("#msgalert").fadeIn();
            $("#sexo").addClass("erro");            
            errado=true;
        }

        if (periodo == 0)
        {
            // alert("O campo periodo é obrigatorio");
            $("#msgalert").append("<li>O campo periodo é obrigatorio</li>");
            $("#msgalert").fadeIn();
            $("#periodo").addClass("erro");
            $("#periodo").focus();
            errado=true;
        }
        if(errado==true){
            return false;
        }

        /*
        if (sexo == "M")
        {
            var sexo_rotulo = "Masculino";
        } else {
            var sexo_rotulo = "Feminino";
        }*/
        // if ternario
        var sexo_rotulo = (sexo == "M")? "Masculino" : "Feminino";

        var linha = "<tr>"
            +"<td>"+ nome +"</td>"
            +"<td>"+ email +"</td>"
            +"<td>"+ telefone +"</td>"
            +"<td>"+ sexo_rotulo +"</td>"
            +"<td>"+ vetor_periodos[periodo] + "</td>"
            +'<td><span class="btn-del">[X]</span></td>'
            +"</tr>";

        $("#alunos").append(linha);
        $("#nome").val("");
        $("#email").val("");
        $("#telefone").val("");
        $("#periodo").val(0);
        $("input[name=sexo]").prop("checked", false);

    }); //fim do click


    // código remover linha
    // o Js roda apenas uma vez no incio da aplicação, então precisa ser solicitado novamente pois nesse caso nao funciona
    // $(".btn-del").click(function(){
    //     console.log(this);
    //     $(this).parent().parent().remove();
    // }); 
    //fim remover linha

    $("#alunos").on("click", ".btn-del", function(){
        $(this).parent().parent().remove();
    }); //monitora a tabela, permitindo que seja inserido novos botões de remoção


    $("#telefone").mask("(00)90000-0000");


    // $("#telefone").keydown(function(ev){
    //     console.log(ev);
    //     // if(ev.keyCode >= 48 && ev.keyCode <= 57){
    //     //    if(ev.key >=0 && ev.key <=9){ 
           
        
    //     if(ev.key.search(/[0-9()-]/g) != -1 || ev.keyCode == 8 || ev.keyCode == 9 || ev.keyCode == 37 || ev.keyCode == 39 || ev.keyCode == 46){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // });

}); // fim ready


