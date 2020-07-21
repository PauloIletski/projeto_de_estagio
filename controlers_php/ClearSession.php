<?php
session_start();
$get_json = file_get_contents("php://input");
$data = json_decode($get_json, true);

$_SESSION['CodigoProducao'] = '';
$_SESSION['CodigoEtapa'] = '';
