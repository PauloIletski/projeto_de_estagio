<?php
class cargos {
 private $codigoCargo;
 private $descricaoCargo;

//setters
 public function setCodigoCargo($codigoCargo){
   $this->codigoCargo=$codigoCargo;
 }

 public  function setDescricaoCargo($descricaoCargo){
   $this->descricaoCargo=$descricaoCargo;
 }

 public function setStatusCargo($status){
   $this->status=$status;
 }
 //getters
  public function getCodigoCargo(){
   return $this->codigoCargo;
} 

public function getDescricaoCargo(){
   return $this->descricaoCargo;
}

public function getStatusCargo(){
   return $this->status;
}

public function jsonSerialize() {
  $vars = get_object_vars($this);
  return $vars;
}






}






?>