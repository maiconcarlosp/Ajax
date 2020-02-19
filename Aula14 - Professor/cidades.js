
// variveiws BD
var listaCidades = ["Curitiba", "Pelotas", "Cuiaba", "Pinhais"];


function imprime()
{
    var lista = document.getElementById("lista");
    
    lista.innerHTML = "";

    // i = i + 1;
    // i += 1;
    // i++;
    for (var i = 0; i < listaCidades.length; i++)
    {
        lista.innerHTML += "<li>"+ listaCidades[i] +"</li>";        
    }

}

function adicionar()
{
    var input = document.getElementById("texto");
    var cidade = input.value;
    
    if (listaCidades.indexOf(cidade) == -1)
    {
        listaCidades.push(input.value);
        imprime();
    } else {
        alert("cidade já cadastrada!");
    }

    
    input.value = "";
}

function ordena(ord)
{
    listaCidades.sort();
    if (ord == "desc")
    {
        listaCidades.reverse();
    }
    imprime();
}


var cresc = true;
function alterna()
{
    listaCidades.sort();
    if (cresc == false)
    {
        listaCidades.reverse();
    }
    imprime();
    // inversão logica
    cresc = !cresc; 

}