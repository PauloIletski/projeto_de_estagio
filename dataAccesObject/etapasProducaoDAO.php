<?php
require '../../estagio/models/etapasProducaoObject.php';
require "../../estagio/dbAccess/bd.php";


class etapasProducaoDAO
{
  public function Insert($etapasProducao)
  {

    $sql = "INSERT INTO  tab_etapas_producao(codigo_producao,codigo_tipo_etapa,status_etapa) values(?,?,?)";

    $conn = obterConexao();

    $cmd = $conn->prepare($sql);
    $codigoProducao = $etapasProducao->getCodigoProducao();
    $codigoTipoEtapa = $etapasProducao->getCodigoTipoEtapa();
    $statusEtapa = $etapasProducao->getStatusEtapa();
    $cmd->bindValue(1, $codigoProducao);
    $cmd->bindValue(2, $codigoTipoEtapa);
    $cmd->bindValue(3, $statusEtapa);
    $cmd->execute();
    return $conn->lastInsertId();
  }

  public function getAll()
  {
    $sql = "SELECT * FROM tab_etapas_producao";

    $cmd = $conn->prepare($sql);

    $cmd->execute();

    $etapas = $cmd->fetchAll(PDO::FETCH_OBJ);
    return $etapas;
  }

  public function getOne()
  {
    $sql = "SELECT * FROM tab_etapas_producao where ";

    $cmd = $conn->prepare($sql);

    $cmd->execute();

    $etapas = $cmd->fetchAll(PDO::FETCH_OBJ);
    return $etapas;
  }
}
