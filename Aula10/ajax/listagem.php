<?php
// $contatos = new array(
//     "nome" => "Joselito",
//     "email" => "joselito@hotmail.com",
//     "telefone" => "(41)988278329",
//     "cidade" => "Ponta Grossa"
// );
// *ou*
$contatos[0]["nome"]="Joselito";
$contatos[0]["email"]="joselito@hotmail.com";
$contatos[0]["telefone"]="(41)988278329";
$contatos[0]["cidade"]="Ponta Grossa";

$contatos[1]["nome"]="Miguel";
$contatos[1]["email"]="miguel@gmail.com";
$contatos[1]["telefone"]="(41)981273821";
$contatos[1]["cidade"]="Curitiba";

// var_dump($contatos);
echo json_encode($contatos);

?>