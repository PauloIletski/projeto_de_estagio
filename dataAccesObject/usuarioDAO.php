<?php
include_once("../models/usuarioObject.php");
include_once("../dbAccess/bd.php");


class usuarioDAO
{

  public function insert($usuario)
  {

    $sql = "INSERT INTO tab_usuario
    (
    nome_usuario,
    codigo_cargo_usuario,
    login,
    senha,
    status)
    VALUES
    (?,?,?,?,?)";



    $conn = obterConexao();

    $cmd = $conn->prepare($sql);


    $cmd->bindValue(1, $usuario->getNomeUsuario());
    $cmd->bindValue(2, $usuario->getCodigoCargoUsuario());
    $cmd->bindValue(3, $usuario->getLoginUsuario());
    $cmd->bindValue(4, $usuario->getSenhaUsuario());
    $cmd->bindValue(5, $usuario->getStatus());


    $cmd->execute();
  }


  public function update($usuario)
  {

    $sql = " UPDATE tab_usuario
      SET
      nome_usuario = ?,
      codigo_cargo_usuario = ?,
      login = ?,
      senha = ?,
      status = ?
      WHERE codigo_usuario = ?";



    $conn = obterConexao();

    $cmd = $conn->prepare($sql);

    $nome = $usuario->getNomeUsuario();
    $cargo = $usuario->getCodigoCargoUsuario();
    $login = $usuario->getLoginUsuario();
    $senha = $usuario->getSenhaUsuario();
    $status = $usuario->getStatus();
    $codigo = $usuario->getCodigoUsuario();

    $cmd->bindValue(1, $nome);
    $cmd->bindValue(2, $cargo);
    $cmd->bindValue(3, $login);
    $cmd->bindValue(4, $senha);
    $cmd->bindValue(5, $status);
    $cmd->bindValue(6, $codigo);



    $cmd->execute();

    echo $conn->errorInfo();
  }



  public function getOne($login)
  {
    $sql = "SELECT * FROM tab_usuario where login=? AND status IN (0,1)";

    $conn = obterConexao();

    $cmd = $conn->prepare($sql);
    $cmd->bindValue(1, $login);
    $cmd->execute();

    $usuarios = $cmd->fetchAll(PDO::FETCH_OBJ);
    return $usuarios;
  }

  public function getAll()
  {
    $sql = "SELECT * FROM tab_usuario where status=1";

    $conn = obterConexao();

    $cmd = $conn->prepare($sql);
    $cmd->execute();

    $usuarios = $cmd->fetchAll(PDO::FETCH_OBJ);
    return $usuarios;
  }

  public function getUser($login, $senha)
  {
    $sql = "SELECT * FROM tab_usuario WHERE login='" . $login . "' and senha='" . $senha . "' AND status=1";

    $conn = obterConexao();

    $cmd = $conn->query($sql) or die($conn->error);

    $usuarios = $cmd->fetch();

    $objUser = new usuario();
    $objUser->setCodigoUsuario($usuarios['codigo_usuario']);
    $objUser->setNomeUsuario($usuarios['nome_usuario']);
    $objUser->setCodigoCargoUsuario($usuarios['codigo_cargo_usuario']);
    $objUser->setCodigoTipoUsuario($usuarios['codigo_tipo_usuario']);
    $objUser->setLoginUsuario($usuarios['login']);
    $objUser->setSenhaUsuario($usuarios['senha']);

    return $objUser;
  }

  public function getloguser()
  {
    $sql = "SELECT * FROM tab_usuario_log ";

    $conn = obterConexao();

    $cmd = $conn->prepare($sql);
    $cmd->execute();

    $usuarios = $cmd->fetchAll(PDO::FETCH_OBJ);
    return $usuarios;
  }

  public function getrelatoriotempo()
  {
    $sql = "call paradastempo()";

    $conn = obterConexao();

    $cmd = $conn->prepare($sql);
    $cmd->execute();

    $usuarios = $cmd->fetchAll(PDO::FETCH_OBJ);
    return $usuarios;
  }


  public function getrelatorioocorrencia()
  {
    $sql = "call ocorrenciaparadas()";

    $conn = obterConexao();

    $cmd = $conn->prepare($sql);
    $cmd->execute();

    $usuarios = $cmd->fetchAll(PDO::FETCH_OBJ);
    return $usuarios;
  }


  public function getrelatoriodiaria()
  {
    $sql = "call paradasdiarias()";

    $conn = obterConexao();

    $cmd = $conn->prepare($sql);
    $cmd->execute();

    $usuarios = $cmd->fetchAll(PDO::FETCH_OBJ);
    return $usuarios;
  }

  public function getresumo()
  {
    $sql = "call sp_rel_geralProducao()";

    $conn = obterConexao();

    $cmd = $conn->prepare($sql);
    $cmd->execute();

    $usuarios = $cmd->fetchAll(PDO::FETCH_OBJ);
    return $usuarios;
  }
}
