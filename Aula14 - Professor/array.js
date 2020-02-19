
var vet = ["azul", "preto", "azulado"];

var novo = vet.filter(function(el){
    
    if(el.includes("azul") == false)
    {
        return false;
    } else {
        return true;
    }

});

console.log(vet, novo);
