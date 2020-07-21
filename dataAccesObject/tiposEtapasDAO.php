<?php 
include_once ("../models/tiposEtapasObject.php");
include_once ("../dbAccess/bd.php");

class tipoEtapasDAO{

  public function insert($tipoEtapa){

     $sql="INSERT INTO tab_tipos_etapas
     (codigo_tipo_etapa,
     descricao_tipo_etapa,
     status_tipo_etapa)
     VALUES
     (?,?,?)";


    $conn=obterConexao();
    $cmd=$conn->prepare($sql);

    $cmd->bindValue(1,$tipoEtapa->getCodigoTipoEtapa());
    $cmd->bindValue(2,$tipoEtapa->getDescricaoTipoEtapa());
    $cmd->bindValue(3,$tipoEtapa->getStatusTipoEtapa());

    $cmd->execute();
  }

  public function getAll(){
    $sql="SELECT * FROM tab_tipos_etapas where status_tipo_etapa=1";
    
    $conn=obterConexao();

    $cmd=$conn->prepare($sql);
    $cmd->execute();  

    $tiposEtapas=$cmd->fetchAll(PDO::FETCH_OBJ);    
    return $tiposEtapas;
  }
 
  public function getOne($descricao){
    $sql="SELECT * FROM tab_tipos_etapas where descricao_tipo_etapa=? AND status_tipo_etapa IN(0,1)";
    
    $conn=obterConexao();

    $cmd=$conn->prepare($sql);
    $cmd->execute();  

    $tiposEtapas=$cmd->fetchAll(PDO::FETCH_OBJ);    
    return $tiposEtapas;
  }
  public function update($tipoEtapa){
  
    $sql="UPDATE tab_tipos_etapas
    SET
    descricao_tipo_etapa = ?,
    status_tipo_etapa = ?
    WHERE codigo_tipo_etapa = ?";



    $conn=obterConexao();

    $cmd=$conn->prepare($sql);

    $codigo=$tipoEtapa->getCodigoTipoEtapa();
    $descricao=$tipoEtapa->getDescricaoTipoEtapa();
    $status=$tipoEtapa->getStatusTipoEtapa();
    
    $cmd->bindValue(3,$codigo);   
    $cmd->bindValue(1,$descricao);
    $cmd->bindValue(2,$status);
           
    $cmd->execute();
        
    echo $conn->errorInfo(); 
}



}
















?>