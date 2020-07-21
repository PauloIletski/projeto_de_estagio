<?php
  include_once ("../models/tiposParadasObject.php");
  include_once ("../dbAccess/bd.php");

  class tiposParadasDAO{
    public function insert($tipoParada){
      $sql="INSERT INTO tab_tipos_paradas
      (codigo_tipo_parada,
      descricao_tipo_parada,
      status_tipo_parada)
      VALUES
      (?,?,?)
      ";

      $conn=obterConexao();

      $cmd=$conn->prepare($sql);

      $cmd->bindValue(1,$tipoParada->getCodigoTipoParada());
      $cmd->bindValue(2,$tipoParada->getDescricaoTipoParada());
      $cmd->bindValue(3,$tipoParada->getStatusTipoParada());

      $cmd->execute();

    }

    public function getAll(){
      $sql="SELECT * FROM tab_tipos_paradas Where status_tipo_parada=1";

      $conn=obterConexao();

      $cmd=$conn->prepare($sql);
      $cmd->execute();  
  
      $tiposParadas=$cmd->fetchAll(PDO::FETCH_OBJ);    
      return $tiposParadas;

      return $tiposParadas;

    }
    public function update($tipoParada){
  
      $sql="UPDATE tab_tipos_Paradas
      SET
      descricao_tipo_parada = ?,
      status_tipo_parada = ?
      WHERE codigo_tipo_parada = ?";
  
  
  
      $conn=obterConexao();
  
      $cmd=$conn->prepare($sql);
  
      $codigo=$tipoParada->getCodigoTipoParada();
      $descricao=$tipoParada->getDescricaoTipoParada();
      $status=$tipoParada->getStatusTipoParada();
      
      $cmd->bindValue(3,$codigo);   
      $cmd->bindValue(1,$descricao);
      $cmd->bindValue(2,$status);
             
      $cmd->execute();
          
      echo $conn->errorInfo(); 
  }
  





  }
