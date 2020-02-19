
$(document).ready(function(){

    $("#btn-cadastrar").click(function () {

        var vetor_periodos = ["", "Manhã", "Tarde", "Noite"];

        var nome = $("#nome").val();
        var email = $("#email").val();
        var telefone = $("#telefone").val();
        var periodo = $("#periodo").val()
        var sexo = $("input[name=sexo]:checked").val();
        var errado = false;


        // limpa msg de erros
        $("#msg-alert").hide();
        $("#msg-alert").html("");
        $("input, select").removeClass("erro");        
        

        if (nome.trim().length < 2)
        {            
            $("#msg-alert").append("<li>O campo nome é obrigatorio</li>");
            $("#msg-alert").fadeIn();
            $("#nome").focus();
            $("#nome").addClass("erro");
            errado = true;
        }

        if (email == "")
        {
            $("#msg-alert").append("<li>O campo email é obrigatorio</li>");
            $("#msg-alert").fadeIn();
            $("#email").focus();
            $("#email").addClass("erro");
            errado = true;
        } else 
        {
            var email_regex = /^[0-9a-z\.\_\-]*@[0-9a-z.]*$/gm;
            if (email.search(email_regex) == -1)
            {
                $("#msg-alert").append("<li>O formato do email é invalido</li>");
                $("#msg-alert").fadeIn();
                $("#email").focus();
                $("#email").addClass("erro");
                errado = true;
            }
        }

        if (telefone == "")
        {
            $("#msg-alert").append("<li>O campo telefone é obrigatorio</li>");
            $("#msg-alert").fadeIn();
            $("#telefone").focus();
            $("#telefone").addClass("erro");
            errado = true;
        } else 
        {
            var fone_regex = /^\([0-9][0-9]\)[0-9]{4,5}-[0-9]{4}$/gm;
            
            if (telefone.search(fone_regex) == -1)
            {
                $("#msg-alert").append("<li>O formato do telefone é invalido</li>");
                $("#msg-alert").fadeIn();
                $("#telefone").focus();
                $("#telefone").addClass("erro");
                errado = true;
            }

        }

        if (sexo == undefined)
        {
            $("#msg-alert").append("<li>O campo sexo é obrigatorio</li>");       
            $("#msg-alert").fadeIn();     
            errado = true;
        }

        if (periodo == 0)
        {
            $("#msg-alert").append("<li>O campo periodo é obrigatorio</li>");
            $("#msg-alert").fadeIn();
            $("#periodo").focus();
            $("#periodo").addClass("erro");
            errado = true;
        }

        if (errado == true)
        {
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
        $("input[type=text]").val();
        $("select").val("0")
        $("input[name=sexo]").prop("checked", false);

    }); //fim do click

    // Mascara para telefone
    $("#telefone").mask("(00)90000-0000");

    // $(".btn-del").click(function(){
       
    //     $(this).parent().parent().remove();

    // }); // fim do click

    $("#alunos").on("click", ".btn-del", function(){
        $(this).parent().parent().remove();
    });



}); // fim ready


