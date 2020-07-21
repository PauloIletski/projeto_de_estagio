<?php
 require '../../estagio/dataAccesObject/tiposUsuariosDAO.php';
 session_start();

 $get_json=file_get_contents("php://input"); 
 $data=json_decode($get_json,true); 

 if($data["action"]=="getalltiposusuarios")
 {
   $tiposUsuariosDAO=new tiposUsuariosDAO();
   $tiposUsuario=$tiposUsuariosDAO->getAllTiposUsuarios();

   echo json_encode($tiposUsuario);

   if(json_last_error_msg()!="No error"){
     echo json_last_error_msg() ;
   }

 }

 else if($data["action"]=="insert")
 {
     $tiposUsuarioObject=new tiposUsuarios() ;
           
     $tiposUsuarioObject->setDescricaoTipoUsuario($data["descricao"]);
     $tiposUsuarioObject->setStatusTipoUsuario($data["ativo"]);
     
     
     $insertTipoUsuario=new tiposUsuariosDAO();
     $insertTipoUsuario->insert($tiposUsuarioObject);

     echo json_encode("Tipo usuario cadastrado");     

 }
 else if ($data["action"]=="update"){
     
  $tiposUsuarioObject=new tiposUsuarios() ;
  
  $tiposUsuarioObject->setCodigoTipoUsario($data["codigo"]);
  $tiposUsuarioObject->setDescricaoTipoUsuario($data["descricao"]);
  $tiposUsuarioObject->setStatusTipoUsuario($data["ativo"]);
  
  
  $insertTipoUsuario=new tiposUsuariosDAO();
  $insertTipoUsuario->update($tiposUsuarioObject);

  echo json_encode("Tipo usuario alterado"); 

 }










?>