<?php 
  include_once ("../models/tiposUsuarioObject.php");
  include_once ("../dbAccess/bd.php");
class tiposUsuariosDAO{

public function Insert($tipoUsuario){

  $sql="INSERT INTO tab_tipos_usuarios
  ( codigo_tipo_usuario,
    descricao_tipo_usuario,
    status_tipo_usuario)
  VALUES
  (?,?,?)";

  $conn=obterConexao();

  $cmd=$conn->prepare($sql);

  $cmd->bindValue(1,$tipoUsuario->getCodigoTipoUsuario());
  $cmd->bindValue(2,$tipoUsuario->getDescricaoTipoUsuario());
  $cmd->bindValue(3,$tipoUsuario->getStatusTipoUsuario());

  $cmd->execute();

}

public function getAllTiposUsuarios(){

  $sql="SELECT * FROM tab_tipos_usuarios where status_tipo_usuario=1";

  $conn=obterConexao();

  $cmd=$conn->prepare($sql);

  $cmd->execute();

  $tipoUsuario=$cmd->fetchAll(PDO::FETCH_OBJ);    
  return $tipoUsuario;
}

public function update($tipoUsuario){
  
  $sql="UPDATE tab_tipos_usuarios
  SET
  descricao_tipo_usuario = ?,
  status_tipo_usuario = ?
  WHERE codigo_tipo_usuario = ?";



  $conn=obterConexao();

  $cmd=$conn->prepare($sql);

  $codigo=$tipoUsuario->getCodigoTipoUsuario();
  $descricao=$tipoUsuario->getDescricaoTipoUsuario();
  $status=$tipoUsuario->getStatusTipoUsuario();
  
  $cmd->bindValue(1,$descricao);
  $cmd->bindValue(2,$status);
  $cmd->bindValue(3,$codigo);   
  

         
  $cmd->execute();
      
  echo $conn->errorInfo(); 
}








}











?>