<?php
session_start();
$get_json = file_get_contents("php://input");
$data = json_decode($get_json, true);

$_SESSION['CodigoProducao'] = '';
$_SESSION['CodigoEtapa'] = '';
$_SESSION['Login'] = '';
$_SESSION['Nome'] = '';

session_destroy();
echo "deslogado";
