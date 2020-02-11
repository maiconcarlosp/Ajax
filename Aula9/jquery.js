
//$(document).ready(function (){
//$().ready(function(){
$(function() {
    $("h2").click(function () {
        //$(this).css("color", "pink");

        $(this).slideUp(1200, function(){
            alert("el removido");
        });

    }); // fim do h2 click

}); // fim do ready
