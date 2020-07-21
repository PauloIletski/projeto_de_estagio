<?php
 require '../../estagio/dataAccesObject/tiposParadasDAO.php';
 session_start();

 $get_json=file_get_contents("php://input"); 
 $data=json_decode($get_json,true); 

 if($data["action"]=="getallparadas")
 {
   $tipoParadasDAO=new tiposParadasDAO();
   $tipoParadas=$tipoParadasDAO->getAll();

   echo json_encode($tipoParadas);

   if(json_last_error_msg()!="No error"){
     echo json_last_error_msg() ;
   }

 }

 else if($data["action"]=="insert")
 {
     $tipoParadasObject=new tiposParadas() ;
     $insertTipoParada=new tiposParadasDAO();  
     
     $tipoParadasObject->setDescricaoTipoParada($data["descricao"]);
     $tipoParadasObject->setStatusTipoParada($data["ativo"]);
     $insertTipoParada->insert($tipoParadasObject);

     echo json_encode("Tipo Parada cadastrada");     

 }
 else if ($data["action"]=="update"){
     
  $tipoParadasObject=new tiposParadas() ;
  
  $tipoParadasObject->setCodigoTipoParada($data["codigo"]);
  $tipoParadasObject->setDescricaoTipoParada($data["descricao"]);
  $tipoParadasObject->setStatusTipoParada($data["ativo"]);
  
  
  $insertTipoParada=new tiposParadasDAO();
  $insertTipoParada->update($tipoParadasObject);

  echo json_encode("Tipo Parada alterada"); 

 }
