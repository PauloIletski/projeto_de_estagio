<?php
class produtos{
private $codigoProduto;
private $nomeProduto;
private $laboratorio;
private $status;

public function setCodigoProduto($codigoProduto){
  $this->codigoProduto=$codigoProduto;
}

public function setNomeProduto($nomeProduto){
  $this->nomeProduto=$nomeProduto;
}

public function setLaboratorio($laboratorio){
  $this->laboratorio=$laboratorio;
}

public function setStatusProduto($status){
  $this->status=$status;
}

public function getCodigoProduto(){
  return $this->codigoProduto;
}

public function getNomeProduto(){
  return $this->nomeProduto;
}

public function getLaboratorio(){
  return $this->laboratorio;
}

public function getStatusProduto(){
  return $this->status;
}

}





?>