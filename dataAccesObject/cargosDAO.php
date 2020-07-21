<?php
include_once("../models/cargosObject.php");
include_once("../dbAccess/bd.php");

class cargosDAO
{

  public function insert($cargos)
  {

    $descricao = $cargos->getDescricaoCargo();
    $sql = "INSERT INTO tab_cargos(descricao_cargo,status_cargo)VALUES(?,?)";

    $conn = obterConexao();

    $cmd = $conn->prepare($sql);

    $cmd->bindValue(1, $cargos->getDescricaoCargo());
    $cmd->bindValue(2, $cargos->getStatusCargo());


    $cmd->execute();
  }

  public function getAll()
  {
    $sql = "SELECT * FROM tab_cargos where status_cargo=1";

    $conn = obterConexao();

    $cmd = $conn->prepare($sql);
    $cmd->execute();

    $retorno = $cmd->fetchAll(PDO::FETCH_OBJ);

    return $retorno;
  }

  public function getOne($descricao)
  {
    $sql = "SELECT * FROM tab_cargos where descricao_cargo=? and  status_cargo IN (0,1)";

    $conn = obterConexao();

    $cmd = $conn->prepare($sql);
    $cmd->bindValue(1, $descricao);
    $cmd->execute();

    $retorno = $cmd->fetchAll(PDO::FETCH_OBJ);

    return $retorno;
  }

  public function update($cargo)
  {

    $sql = "UPDATE tab_cargos
        SET  
    descricao_cargo = ?,
    status_cargo = ?
    WHERE codigo_cargo = ?";



    $conn = obterConexao();

    $cmd = $conn->prepare($sql);

    $codigo = $cargo->getCodigoCargo();
    $descricao = $cargo->getDescricaoCargo();
    $status = $cargo->getStatusCargo();

    $cmd->bindValue(1, $descricao);
    $cmd->bindValue(2, $status);
    $cmd->bindValue(3, $codigo);

    $cmd->execute();

    echo $conn->errorInfo();
  }
}
