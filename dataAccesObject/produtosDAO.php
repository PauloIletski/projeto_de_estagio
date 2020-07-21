<?php 
include_once ("../models/produtosObject.php");
include_once ("../dbAccess/bd.php");


class produtosDAO{

 public function insert($produto){
  $sql="INSERT INTO tab_produtos
                    (nome_produto,
                     codigo_laboratorio,
                     status_produto)
                VALUES
                (?,?,?)";
  
  $conn=obterConexao();

  $cmd=$conn->prepare($sql);
  $cmd->bindValue(1,$produto->getNomeProduto());
  $cmd->bindValue(2,$produto->getLaboratorio());
  $cmd->bindValue(3,$produto->getStatusProduto());
  $cmd->execute();
 }

 public function update($produto){
  $sql="UPDATE  tab_produtos SET 
                     nome_produto=?,
                    codigo_laboratorio=?,
                    status_produto=?
                WHERE codigo_produto=?";
  
  $conn=obterConexao();

  $cmd=$conn->prepare($sql);
  $cmd->bindValue(4,$produto->getCodigoProduto());
  $cmd->bindValue(1,$produto->getNomeProduto());
  $cmd->bindValue(2,$produto->getLaboratorio());
  $cmd->bindValue(3,$produto->getStatusProduto());
  $cmd->execute();
 }

 public function getAll(){
  $sql="SELECT * FROM tab_produtos where status_produto=1";

  $conn=obterConexao();

  $cmd=$conn->prepare($sql);
  $cmd->execute();

  $produtos=$cmd->fetchAll(PDO::FETCH_OBJ);    
 
  return $produtos;
 }
 

 public function getOne($nome){
  $sql="SELECT * FROM tab_produtos where nome_produto=? and status_produto IN(0,1) ";

  $conn=obterConexao();

  $cmd=$conn->prepare($sql);
  $cmd->bindValue(1,$nome);
  $cmd->execute();

   $produtos=$cmd->fetchAll(PDO::FETCH_OBJ);    
  return $produtos;
 }
}
