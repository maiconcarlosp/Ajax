<?php

    $nome = "edir";

    class Carro 
    {
        public $cor = "Preto";
        public $marca = "Ford";
        private $ligado = false;

        public function ligar()
        {
            $this->ligado = true;
        }
    }

    $novo = new Carro();

    //var_dump($novo);

    //echo json_encode($novo);

    $string = '{"cor":"Azul","marca":"Fiat","ligado":false,"motor":{"potencia":50}}';

    $json = json_decode($string);

    var_dump($json);

?>