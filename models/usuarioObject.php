<?php
class usuario{
  private $codigoUsuario;
  private $nomeUsuario;
  private $codigoTipoUsuario;
  private $codigoCargoUsuario;
  private $login;
  private $senha;
  private $status;

  //Setters
  public function setCodigoUsuario($codigoUsuario){
      $this->codigoUsuario=$codigoUsuario;
  }

  public function setNomeUsuario($nomeUsuario){
      $this->nomeUsuario=$nomeUsuario;
  }

  public function setCodigoTipoUsuario($codigoTipoUsuario){
      $this->codigoTipoUsuario=$codigoTipoUsuario;
  } 

  public function setCodigoCargoUsuario($codigoCargoUsuario){
     $this->codigoCargoUsuario=$codigoCargoUsuario;
  }

  public function setLoginUsuario($login){
    $this->login=$login;
  }
  
  public function setSenhaUsuario($senha){
    $this->senha=$senha;
  }

  public function setStatusUsuario($status){
    $this->status=$status;
  }
  //Getters

  public function getCodigoUsuario(){
    return $this->codigoUsuario;
  }

  public function getNomeUsuario(){
    return $this->nomeUsuario;
  }

  public function getCodigoTipoUsuario(){
    return $this->codigoTipoUsuario;
  }

  public function getCodigoCargoUsuario(){
    return $this->codigoCargoUsuario;
  }

  public function getLoginUsuario(){
    return $this->login;
  }

  public function getSenhaUsuario(){
    return $this->senha;
  }

  public function getStatus(){
    return $this->status;
  }

  public function jsonSerialize() {
    $vars = get_object_vars($this);
    return $vars;
}
}

  














?>