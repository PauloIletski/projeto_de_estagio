<?php
class tiposUsuarios{
private $codigoTipoUsuario;
private $descricaoTipoUsuario;
private $statusTipoUsuario;


public function getCodigoTipoUsuario(){
  return $this->codigoTipoUsuario;
}

public function getDescricaoTipoUsuario(){
  return $this->descricaoTipoUsuario;
}

public function getStatusTipoUsuario(){
  return $this->statusTipoUsuario;
}

public function setCodigoTipoUsario($codigoTipoUsuario){
  $this->codigoTipoUsuario=$codigoTipoUsuario;
}

public function setDescricaoTipoUsuario($descricaoTipoUsuario){
  $this->descricaoTipoUsuario=$descricaoTipoUsuario;
}

public function setStatusTipoUsuario($statusTipoUsuario){
  $this->statusTipoUsuario=$statusTipoUsuario;
}



}







?>