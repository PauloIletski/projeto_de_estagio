<?php
    require '../../estagio/dataAccesObject/laboratoriosDAO.php';
    require '../../estagio/dataAccesObject/produtosDAO.php';
  

    $get_json=file_get_contents("php://input"); 
    $data=json_decode($get_json,true);  
  

  if($data["action"]=="getall")
  {
    $produtosDAO=new produtosDAO();
    $produtos=$produtosDAO->getAll();

    echo json_encode($produtos);

    if(json_last_error_msg()!="No error"){
      echo json_last_error_msg() ;
    }

  }
  else if($data["action"]=="getlab")
  {
   
    $laboratoriosDAO= new laboratoriosDAO();

    $laboratorio=$laboratoriosDAO->getAllLaboratorios();

    echo json_encode($laboratorio);

    if(json_last_error_msg()!="No error"){
      echo json_last_error_msg() ;
    }
    

  }
  else if($data["action"]=="insert")
  {
      $produto=new produtos();
      $insertProduto= new produtosDAO();
      $checkProd=$insertProduto->getOne($data['descricao']);
      if(sizeof($checkProd)>0){
        echo json_encode('Produto ja cadastrado');
      }
      else{
      $produto->setNomeProduto($data["descricao"]);
      $produto->setLaboratorio($data["laboratorio"]);
      $produto->setStatusProduto($data["ativo"]);

      $insertProduto->insert($produto);
      echo json_encode("Produto cadastrado");     
      }
  }
  else if ($data["action"]=="update"){
      
      $produto=new produtos();
      $updateProduto= new produtosDAO();
      $produto->setCodigoProduto($data['codigo']);
      $produto->setNomeProduto($data["descricao"]);
      $produto->setLaboratorio($data["laboratorio"]);
      $produto->setStatusProduto($data["ativo"]);

      $updateProduto->update($produto);
      echo json_encode("Produto alterado");

  }






?>