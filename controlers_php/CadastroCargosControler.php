<?php
 require '../../estagio/dataAccesObject/cargosDAO.php';
 session_start();

 $get_json=file_get_contents("php://input"); 
 $data=json_decode($get_json,true); 

 if($data["action"]=="getallcargos")
 {
   $cargosDAO=new cargosDAO();
   $cargos=$cargosDAO->getAll();

   echo json_encode($cargos);

   if(json_last_error_msg()!="No error"){
     echo json_last_error_msg() ;
   }

 }

 else if($data["action"]=="insert")
 {
    $insertCargos=new cargosDAO();
    $cargos=$insertCargos->getOne($data['descricao']);

    if(sizeof($cargos)>0){
      echo json_encode(' Cadastro ja existente na base de dados!');
    }
    else{
     $cargosObject=new cargos() ;
           
     $cargosObject->setDescricaoCargo($data["descricao"]);
     $cargosObject->setStatusCargo($data["ativo"]);
        
     $insertCargos->insert($cargosObject);

     echo json_encode("Cargo cadastrado");     
    }
 }
 else if ($data["action"]=="update"){
     
  $cargosObject=new cargos() ;
  
  $cargosObject->setCodigoCargo($data["codigo"]);
  $cargosObject->setDescricaoCargo($data["descricao"]);
  $cargosObject->setStatusCargo($data["ativo"]);
  
  
  $insertCargos=new cargosDAO();
  $insertCargos->update($cargosObject);

  echo json_encode("Cargo Alterado"); 

 }










?>