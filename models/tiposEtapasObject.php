<?php 
class tipoEtapas{
private $codigoTipoEtapa;
private $descricaoTipoEtapa;
private $statusTipoEtapa;

public function getCodigoTipoEtapa(){
  return $this->codigoTipoEtapa;
}

public function getDescricaoTipoEtapa(){
  return $this->descricaoTipoEtapa;
}

public function getStatusTipoEtapa(){
  return $this->statusTipoEtapa;
}

public function setCodigoTipoEtapa($codigoTipoEtapa){
  $this->codigoTipoEtapa=$codigoTipoEtapa;
}

public function setDescricaoTipoEtapa($descricaoTipoEtapa){
  $this->descricaoTipoEtapa=$descricaoTipoEtapa;
}

public function setStatusTipoEtapa($statusTipoEtapa){
  $this->statusTipoEtapa=$statusTipoEtapa;
}


}




?>