
$(document).ready(function(){

    $("#btn-cadastrar").click(function () {

        var vetor_periodos = ["", "Manhã", "Tarde", "Noite"];

        var nome = $("#nome").val();
        var email = $("#email").val();
        var telefone = $("#telefone").val();
        var periodo = $("#periodo").val()
        var sexo = $("input[name=sexo]:checked").val();

        if (nome.trim().length < 2)
        {            
            alert("O campo nome é obrigatorio");
            $("#nome").focus();
            return false;
        }

        if (email == "")
        {
            alert("O campo email é obrigatorio");
            $("#email").focus();
            return false;
        } else 
        {
            var email_regex = /^[0-9a-z\.\_\-]*@[0-9a-z.]*$/gm;
            if (email.search(email_regex) == -1)
            {
                alert("O formato do email é invalido");
                $("#email").focus();
                return false;
            }
        }

        if (telefone == "")
        {
            alert("O campo telefone é obrigatorio");
            $("#telefone").focus();
            return false;
        } else 
        {
            var fone_regex = /^\([0-9][0-9]\)[0-9]{4,5}-[0-9]{4}$/gm;
            
            if (telefone.search(fone_regex) == -1)
            {
                alert("O formato do telefone é invalido");
                $("#telefone").focus();
                return false;
            }

        }

        if (sexo == undefined)
        {
            alert("O campo sexo é obrigatorio");            
            return false;
        }

        if (periodo == 0)
        {
            alert("O campo periodo é obrigatorio");
            $("#periodo").focus();
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
            +"</tr>";

        $("#alunos").append(linha);

    }); //fim do click

}); // fim ready


