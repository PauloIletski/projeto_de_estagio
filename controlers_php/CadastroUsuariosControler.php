<?php
require '../../estagio/dataAccesObject/cargosDAO.php';
require '../../estagio/dataAccesObject/usuarioDAO.php';
session_start();

$get_json = file_get_contents("php://input");
$data = json_decode($get_json, true);




if ($data["action"] == "getallusers") {
  $usuariosDAO = new usuarioDAO();
  $usuario = $usuariosDAO->getAll();

  echo json_encode($usuario);

  if (json_last_error_msg() != "No error") {
    echo json_last_error_msg();
  }
} else if ($data["action"] == "getcargo") {

  $cargosDAO = new cargosDAO();

  $cargos = $cargosDAO->getAll();

  echo json_encode($cargos);

  if (json_last_error_msg() != "No error") {
    echo json_last_error_msg();
  }
} else if ($data["action"] == "insert") {
  $usuario = new usuario();
  $insertUsuario = new usuarioDAO();
  $checkUser = $insertUsuario->getOne($data['login']);
  if (sizeof($checkUser) > 0) {
    echo json_encode('Usuario ja cadastrado');
  } else {
    $usuario->setNomeUsuario($data["nome"]);
    $usuario->setLoginUsuario($data["login"]);
    $usuario->setCodigoCargoUsuario($data["cargo"]);
    $usuario->setSenhaUsuario($data["senha"]);
    $usuario->setStatusUsuario($data["ativo"]);


    $insertUsuario->insert($usuario);

    echo json_encode("Usuario cadastrado");
  }
} else if ($data["action"] == "update") {

  $usuario = new usuario();

  $usuario->setCodigoUsuario($data["codigo"]);
  $usuario->setNomeUsuario($data["nome"]);
  $usuario->setLoginUsuario($data["login"]);
  $usuario->setCodigoCargoUsuario($data["cargo"]);
  $usuario->setSenhaUsuario($data["senha"]);
  $usuario->setStatusUsuario($data["ativo"]);

  $updateUsuario = new usuarioDAO();
  $updateUsuario->update($usuario);
  echo json_encode("Usuario alterado");
}


if ($data["action"] == "getloguser") {
  $usuariosDAO = new usuarioDAO();
  $usuario = $usuariosDAO->getloguser();

  echo json_encode($usuario);

  if (json_last_error_msg() != "No error") {
    echo json_last_error_msg();
  }
}

if ($data["action"] == "relatoriotempo") {
  $usuariosDAO = new usuarioDAO();
  $usuario = $usuariosDAO->getrelatoriotempo();

  echo json_encode($usuario);

  if (json_last_error_msg() != "No error") {
    echo json_last_error_msg();
  }
}

if ($data["action"] == "relatorioocorrencia") {
  $usuariosDAO = new usuarioDAO();
  $usuario = $usuariosDAO->getrelatorioocorrencia();

  echo json_encode($usuario);

  if (json_last_error_msg() != "No error") {
    echo json_last_error_msg();
  }
}

if ($data["action"] == "paradasdiarias") {
  $usuariosDAO = new usuarioDAO();
  $usuario = $usuariosDAO->getrelatoriodiaria();

  echo json_encode($usuario);

  if (json_last_error_msg() != "No error") {
    echo json_last_error_msg();
  }
}

if ($data["action"] == "resumo") {
  $usuariosDAO = new usuarioDAO();
  $usuario = $usuariosDAO->getresumo();

  echo json_encode($usuario);

  if (json_last_error_msg() != "No error") {
    echo json_last_error_msg();
  }
}
