<?php
include_once "../../estagio/models/ocorrenciaParadasObject.php";
include_once "../../estagio/dbAccess/bd.php";

class ocorrenciaParadasDAO
{

  public function insertOcorrencia($ocorrencia)
  {

    $sql = "INSERT INTO tab_ocorrencia_parada(
                                          codigo_motivo_parada,
                                          codigo_producao,
                                          codigo_etapa,
                                          tempo_duracao_parada
                                         )
                                          VALUES
                                          (?,?,?,?) ";

    $conn = obterConexao();

    $cmd = $conn->prepare($sql);


    $cmd->bindValue(1, $ocorrencia->getCodigoMotivoParada());
    $cmd->bindValue(2, $ocorrencia->getCodigoProducao());
    $cmd->bindValue(3, $ocorrencia->getCodigoEtapa());
    $cmd->bindValue(4, $ocorrencia->getTempoDuracaoParada());


    $error = $cmd->errorInfo();
    $cmd->execute();
  }


  public function getAll()
  {
    $sql = "SELECT * FROM tab_ocorrencia_paradas";

    $conn = obterConexao();

    $cmd = $conn->prepare($sql);
    $cmd->execute();

    $ocorrencias = $cmd->fetchAll(PDO::FETCH_OBJ);

    return $ocorrencias;
  }

  public function getLogs()
  {
    $sql = "SELECT * FROM tab_ocorrencia_parada_log";

    $conn = obterConexao();

    $cmd = $conn->prepare($sql);
    $cmd->execute();

    $logs = $cmd->fetchAll(PDO::FETCH_OBJ);

    return $logs;
  }
}
