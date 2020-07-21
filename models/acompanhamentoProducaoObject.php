<?php
class acompanhamentoProducao{
  private $codigoAcompanhamentoProducao;
  private $descricaoAcompanhamento;
  private $codigoUsuario;
  private $codigoProducao;
  private $dataAcompanhamento;

  //Setters

  public function setCodigoAcompanhamentoProducao($acompanhamentoProducao){
    $this->acompanhamentoProducao=$acompanhamentoProducao;
  }

  public function setDescricaoAcompanhamento($descricaoAcompanhamento){
    $this->descricaoAcompanhamento=$descricaoAcompanhamento;
  }

  public function setCodigoUsuario($codigoUsuario){
    $this->codigoUsuario=$codigoUsuario;
  }

  public function setCodigoProducao($codigoProducao){
    $this->codigoProducao=$codigoProducao;
  }

  public function setDataAcompanhamento($dataAcompanhamento){
    $this->dataAcompanhamento=$dataAcompanhamento;
  }  

  //getters

  public function getCodigoAcompanhamento(){
    return $this->codigoAcompanhamentoProducao;
  }

  public function getDescricaoAcompanhamento(){
    return $this->codigoUsuario;
  }

  public function getCodigoProducao(){
    return $this->codigoProducao;
  }

  public function getDataAcompanhamento(){
    return $this->dataAcompanhamento;
  }
}






?>