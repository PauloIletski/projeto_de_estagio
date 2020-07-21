<?php
class linhasProducao{
private $codigoLinhaProducao;
private $descricaoLinha;
private $statusLinha;

public function setCodigoLinhaProducao($codigoLinhaProducao){
  $this->codigoLinhaProducao=$codigoLinhaProducao;
}

public function setDescricaoLinha($descricaoLinha){
  $this->descricaoLinha=$descricaoLinha;
}

public function setStatusLinha($statusLinha){
 $this->statusLinha=$statusLinha;
}

public function getCodigoLinhaProducao(){
  return $this->codigoLinhaProducao;
}

public function getDescicaoLinha(){
  return $this->descricaoLinha;
}

public function getStatusLinha(){
  return $this->statusLinha;
}
}













?>