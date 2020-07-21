<?php

include_once "../../estagio/models/producaoObject.php";
include_once "../../estagio/dbAccess/bd.php";

class producaoDAO
{

  public function Insert($producao)
  {

    $sql = "INSERT INTO tab_producao
                  (codigo_producao,
                  codigo_produto,
                  lote_producao,
                  data_inicio_producao
                 )
      VALUES
      (?,?,?,CURRENT_TIMESTAMP())
      ";

    $conn = obterConexao();

    $cmd = $conn->prepare($sql);

    $cmd->bindValue(1, $producao->getCodigoProducao());
    $cmd->bindValue(2, $producao->getCodigoProduto());
    $cmd->bindValue(3, $producao->getLoteProducao());


    $cmd->execute();
    $error =  $cmd->errorInfo();
    $lastId = $conn->lastInsertId();

    return $lastId;
  }

  public function getAll()
  {

    $sql = "SELECT * FROM tab_producao";

    $conn = obterConexao();

    $cmd = $conn->prepare($sql);
    $cmd->execute();

    $producoes = $cmd->fetchAll(PDO::FETCH_OBJ);
    return $producoes;
  }


  public function getOne($lote)
  {

    $sql = "SELECT * FROM tab_producao where lote_producao=?";

    $conn = obterConexao();

    $cmd = $conn->prepare($sql);
    $cmd->bindValue(1, $lote);
    $cmd->execute();

    $producoes = $cmd->fetchAll(PDO::FETCH_OBJ);

    return $producoes;
  }

  public function update($producao)
  {

    $sql = "UPDATE tab_producao SET
                  data_fim_producao=current_timestamp,
                  qtd_produzida=?,
                  qtd_rejeitada=?
          WHERE   codigo_producao=?";

    $conn = obterConexao();

    $cmd = $conn->prepare($sql);

    $cmd->bindValue(3, intval($producao->getCodigoProducao()));
    $cmd->bindValue(1, intval($producao->getQtdProduzida()));
    $cmd->bindValue(2, intval($producao->getQtdRejeitada()));


    $cmd->execute();


    $error =  $cmd->errorInfo();
    if (sizeof($error) > 0) {
      echo json_encode($error);
    }
  }

  public function getLogs()
  {

    $sql = "SELECT * FROM tab_producao_log";

    $conn = obterConexao();

    $cmd = $conn->prepare($sql);
    $cmd->execute();

    $producoes = $cmd->fetchAll(PDO::FETCH_OBJ);
    return $producoes;
  }
}
