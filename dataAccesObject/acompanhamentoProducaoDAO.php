<?php
include_once("models/acompanhamentoProducaoObject.php");
include_once("dbAccess/bd.php");

class acompanhamentoProducaoDAO{
  public function Insert($acompanhamentoProducao){
      $sql="INSERT INTO tab_acompanhamento_producao (codigo_acompanhamento_producao,descricao_acompanhamento,codigo_usuario,codigo_producao,data_acompanhamento) values(?,?,?,?,?)";

      $conn=obterConexao();

      $cmd=$conn->prepare($sql);
      $cmd->bindValue(1,$acompanhamentoProducao->getCodigoAcompanhamentoProducao());
      $cmd->bindValue(2,$acompanhamentoProducao->getDescricaoAcompanhamento());
      $cmd->bindValue(3,$acompanhamentoProducao->getCodigoUsuario());
      $cmd->bindValue(4,$acompanhamentoProducao->getCodigoProducao());
      $cmd->bindValue(5,$acompanhamentoProducao->getCodigoAcompanhamento());

      $cmd->execute();
  }

  public function getAll(){
    $sql="SELECT * FROM tab_acompanhamento_producao";

    $conn=obterConexao();

    $cmd=$conn->prepare($sql);

    $cmd->execute();

    $acompanhamentos=array();

    while($acompanhamento=$cmd->fetchObject('acompanhamentoProducao')){
      array_push($acompanhamentos,$acompanhamento);
    }

    return $acompanhamentos;

  }




}













?>