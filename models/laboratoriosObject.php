<?php
class laboratorio{
  private $codigoLaboratorio;
  private $nomeLaboratorio;
  private $status;
  
  //setters
  public function setCodigoLaboratorio($codigoLaboratorio){
    $this->codigoLaboratorio=$codigoLaboratorio;
  }
  
  public function setNomeLaboratorio($nomeLaboratorio){
    $this->nomeLaboratorio=$nomeLaboratorio;
  }
  
  public function setStatusLaboratorio($status){
    $this->status=$status;
  }
  
  //getters
  public function getCodigoLaboratorio(){
    return $this->codigoLaboratorio;
  }
  
  public function getNomeLaboratorio(){
    return $this->nomeLaboratorio;
  }
  
  public function getStatusLaboratorio(){
    return $this->status;
  }











}

?>