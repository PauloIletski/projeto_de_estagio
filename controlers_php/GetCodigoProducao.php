<?php
session_start();
$get_json = file_get_contents("php://input");
$data = json_decode($get_json, true);

$array = array(
  'codigoProducao' => $_SESSION['CodigoProducao'],
  'codigoEtapa' => $_SESSION['CodigoEtapa']
);

echo json_encode($array);
