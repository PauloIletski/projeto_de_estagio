<?php
include_once ("../models/laboratoriosObject.php");
include_once ("../dbAccess/bd.php");

class laboratoriosDAO
{
  public function insert($laboratorio){
    $sql="INSERT INTO tab_laboratorios(codigo_laboratorio,nome_laboratorio,status_laboratorio) VALUES(?,?,?)";
    
    $conn=obterConexao();

    $cmd=$conn->prepare($sql);

    $cmd->bindValue(1,$laboratorio->getCodigoLaboratorio());
    $cmd->bindValue(2,$laboratorio->getNomeLaboratorio());
    $cmd->bindValue(3,$laboratorio->getStatusLaboratorio());

    $cmd->execute();

  }


  public function getAllLaboratorios(){

      $sql="SELECT * FROM tab_laboratorios where status_laboratorio=1";

      $conn=obterConexao();
      $cmd=$conn->prepare($sql);

      $cmd->execute();

      $laboratorios=$cmd->fetchAll(PDO::FETCH_OBJ);    
        
      return $laboratorios;



  }

  public function getOne($nome){

    $sql="SELECT * FROM tab_laboratorios where nome_laboratorio=? AND status_laboratorio IN (0,1)";

    $conn=obterConexao();
    $cmd=$conn->prepare($sql);
    $cmd->bindValue(1,$nome);

    $cmd->execute();

    $laboratorios=$cmd->fetchAll(PDO::FETCH_OBJ);    
      
    return $laboratorios;



}

  public function update($laboratorio){
  
    $sql="UPDATE tab_laboratorios
        SET  
    nome_laboratorio = ?,
    status_laboratorio = ?
    WHERE codigo_laboratorio = ?";



    $conn=obterConexao();

    $cmd=$conn->prepare($sql);

    $codigo=$laboratorio->getCodigoLaboratorio();
    $descricao=$laboratorio->getNomeLaboratorio();
    $status=$laboratorio->getStatusLaboratorio();
    
    $cmd->bindValue(3,$codigo);   
    $cmd->bindValue(1,$descricao);
    $cmd->bindValue(2,$status);
           
    $cmd->execute();
        
    echo $conn->errorInfo(); 
}














}











?>