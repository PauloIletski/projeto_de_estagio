<?php
include_once ("dbconn.php");


function criarConexao(){
  config::init();

  return new PDO(config::getMysqlConnectionString(),
                  config::getUsername(),
                  config::getPassword());
}

function obterConexao(){
  return criarConexao();
}











?>