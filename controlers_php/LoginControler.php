<?php
require $_SERVER['DOCUMENT_ROOT'] . '/estagio/dbAccess/bd.php';
require $_SERVER['DOCUMENT_ROOT'] . '/estagio/dataAccesObject/usuarioDAO.php';

$get_json = file_get_contents("php://input");
$data = json_decode($get_json, true);

$usuarioDAO = new usuarioDAO();
$usuario = new usuario();

$usuario = $usuarioDAO->getUser($data['login'], $data['senha']);
$codigo = $usuario->getCodigoUsuario();

if ($codigo == null) {
  echo json_encode($response = "null");
} else {

  $json = json_encode($usuario->jsonSerialize());
  session_start();
  $_SESSION['Login'] = $usuario->getLoginUsuario();
  $_SESSION['Nome'] = $usuario->getNomeUsuario();
  $_SESSION['Tipo'] = $usuario->getCodigoCargoUsuario();
  echo $json;
}

  /*if($loggedUser=="")
  {
    echo json_encode('Erro ao logar');
  }
  else
  {
    echo json_encode($loggedUser);
  }*/
