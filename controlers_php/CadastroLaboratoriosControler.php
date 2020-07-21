<?php
 require '../../estagio/dataAccesObject/laboratoriosDAO.php';
 session_start();

 $get_json=file_get_contents("php://input"); 
 $data=json_decode($get_json,true); 

 if($data["action"]=="getlab")
 {
   $laboratoriosDAO=new laboratoriosDAO();
   $laboratorios=$laboratoriosDAO->getAllLaboratorios();

   echo json_encode($laboratorios);

   if(json_last_error_msg()!="No error"){
     echo json_last_error_msg() ;
   }

 }

 else if($data["action"]=="insert")
 {
     $laboratoriosObject=new laboratorio() ;
     $insertLaboratorio=new laboratoriosDAO();
     $checkLab=$insertLaboratorio->getOne($data['descricao']);
     if(sizeof($checkLab)>0){
       echo json_encode('Laboratório já cadastrado!');
     }
     else
     {
      $laboratoriosObject->setNomeLaboratorio($data["descricao"]);
      $laboratoriosObject->setStatusLaboratorio($data["ativo"]);
      $insertLaboratorio->insert($laboratoriosObject);
      echo json_encode("Laboratorio cadastrado");  
     }
      

 }
 else if ($data["action"]=="update"){
     
  $laboratoriosObject=new laboratorio() ;
  
  $laboratoriosObject->setCodigoLaboratorio($data["codigo"]);
  $laboratoriosObject->setNomeLaboratorio($data["descricao"]);
  $laboratoriosObject->setStatusLaboratorio($data["ativo"]);
  
  $insertlaboratorios=new laboratoriosDAO();
  $insertlaboratorios->update($laboratoriosObject);
  echo json_encode("Laboratorio alterado"); 

 }
