<?php
class producao
{
  private $codigoProducao;
  private $codigoProduto;
  private $loteProducao;
  private $dataInicioProducao;
  private $dataFimProducao;
  private $qtdProduzida;
  private $qtdRejeitada;

  public function setCodigoProducao($codigoProducao)
  {
    $this->codigoProducao = $codigoProducao;
  }

  public function setCodigoProduto($codigoProduto)
  {
    $this->codigoProduto = $codigoProduto;
  }

  public function setLoteProducao($loteProducao)
  {
    $this->loteProducao = $loteProducao;
  }

  public function setDataInicioProducao($dataInicioProducao)
  {
    $this->dataInicioProducao = $dataInicioProducao;
  }

  public function setDataFimProducao($dataFimProducao)
  {
    $this->dataFimProducao = $dataFimProducao;
  }

  public function setQtdProduzida($qtdProduzida)
  {
    $this->qtdProduzida = $qtdProduzida;
  }

  public function setQtdRejeitada($qtdRejeitada)
  {
    $this->qtdRejeitada = $qtdRejeitada;
  }

  public function getCodigoProducao()
  {
    return $this->codigoProducao;
  }

  public function getCodigoProduto()
  {
    return $this->codigoProduto;
  }

  public function getLoteProducao()
  {
    return $this->loteProducao;
  }

  public function getDataIncioProducao()
  {
    return $this->dataInicioProducao;
  }

  public function getDataFimProducao()
  {
    return $this->dataFimProducao;
  }
  public function getQtdProduzida()
  {
    return $this->qtdProduzida;
  }
  public function getQtdRejeitada()
  {
    return $this->qtdRejeitada;
  }
}
