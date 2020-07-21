<?php
class tiposParadas{
    private $codigoTipoParada;
    private $descricaoTipoParada;
    private $statusTipoParada;


    public function getCodigoTipoParada(){
        return $this->codigoTipoParada;
    }

    public function getDescricaoTipoParada(){
        return $this->descricaoTipoParada;
    }
    
    public function getStatusTipoParada(){
        return $this->statusTipoParada;
    }

    public function setCodigoTipoParada($codigoTipoParada){
        $this->codigoTipoParada=$codigoTipoParada;
    }

    public function setDescricaoTipoParada($descricaoTipoParada){
        $this->descricaoTipoParada=$descricaoTipoParada;
    }

    public function setStatusTipoParada($statusTipoParada){
        $this->statusTipoParada=$statusTipoParada;
    }



}






?>