<?php
 require '../../estagio/dataAccesObject/tiposEtapasDAO.php';
 session_start();

 $get_json=file_get_contents("php://input"); 
 $data=json_decode($get_json,true); 

 if($data["action"]=="getalletapas")
 {
   $tipoEtapasDAO=new tipoEtapasDAO();
   $tipoEtapas=$tipoEtapasDAO->getAll();

   echo json_encode($tipoEtapas);

   if(json_last_error_msg()!="No error"){
     echo json_last_error_msg() ;
   }

 }

 else if($data["action"]=="insert")
 {
     $tipoEtapasObject=new tipoEtapas() ;
     $insertTipoEtapa=new tipoEtapasDAO();
     $checkEtapa=$insertTipoEtapa->getOne($data['descricao']);

     if(sizeof($checkEtapa)>0){
       echo json_encode('Etapa ja cadastrada no banco de dados');
     }
     else{
      $tipoEtapasObject->setDescricaoTipoEtapa($data["descricao"]);
      $tipoEtapasObject->setStatusTipoEtapa($data["ativo"]);
        
      $insertTipoEtapa->insert($tipoEtapasObject);
 
      echo json_encode("Tipo etapa cadastrada");
     }         
 }

 else if ($data["action"]=="update"){
     
  $tipoEtapasObject=new tipoEtapas() ;
  
  $tipoEtapasObject->setCodigoTipoEtapa($data["codigo"]);
  $tipoEtapasObject->setDescricaoTipoEtapa($data["descricao"]);
  $tipoEtapasObject->setStatusTipoEtapa($data["ativo"]);
  
  
  $insertTipoEtapa=new tipoEtapasDAO();
  $insertTipoEtapa->update($tipoEtapasObject);

  echo json_encode("Tipo etapa alterada"); 

 }










?>