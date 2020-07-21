<?php
include_once("models/acompanhamentoProducaoObject.php");
include_once("dbAccess/bd.php");

class linhasProducaoDAO{

  public function Insert($linhaProducao){

    $sql="INSERT INTO tab_linhas_producao(codigo_linha,descricao_linha,status_linha) VALUES(?,?,?)";

    $conn=obterConexao();

    $cmd=$conn->prepare($sql);

    $cmd->bindValue(1,$linhaProducao->getCodigoLinhaProducao());
    $cmd->bindValue(2,$linhaProducao->getDescricaoLinha());
    $cmd->bindValue(3,$linhaProducao->getStatusLinha());


    $cmd->execute();
  }
  

  public function getAll(){
    $sql="SELECT * FROM tab_linhas_producao";

    $conn=obterConexao();

    $cmd=$conn->prepare($sql);

    $linhasProducao=array();

    while($linhasProducao=$cmd->fetchObject('linhaProducao')){
      array_push($linhasProducao,$linhaProducao);
    }

    return $linhasProducao;



  }











}











?>