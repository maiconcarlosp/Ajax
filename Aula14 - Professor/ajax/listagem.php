<?php

    $host = "banco.db";
    $user = "";
    $pass = "";

    $db = new PDO("sqlite:banco.db");

    $sql = "select * from contatos order by nome";

    $retorno = $db->query($sql);

    $valores = $retorno->fetchAll(PDO::FETCH_ASSOC);

   // var_dump($valores);
    
    $contatos[0]["nome"] = "Joselito";
    $contatos[0]["email"] = "joselito@abc.com";
    $contatos[0]["telefone"] = "(12)1234-1234";
    $contatos[0]["cidade"] = "Curitiba";


    $contatos[1]["nome"] = "Maria";
    $contatos[1]["email"] = "marao@abc.com";
    $contatos[1]["telefone"] = "(21)2121-12121";
    $contatos[1]["cidade"] = "Colombo";

   // var_dump($contatos);

   echo json_encode($valores);
    

?>