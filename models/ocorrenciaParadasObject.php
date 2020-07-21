<?php
class ocorrenciaParadas
{
  private $codigoOcorrencia;
  private $codigoMotivoParada;
  private $codigoProducao;
  private $codigoEtapa;
  private $tempoDuracaoParada;


  public function setCodigoOcorrencia($codigoOcorrencia)
  {
    $this->codigoOcorrencia = $codigoOcorrencia;
  }

  public function setCodigoMotivoParada($codigoMotivoParada)
  {
    $this->codigoMotivoParada = $codigoMotivoParada;
  }

  public function setCodigoProducao($codigoProducao)
  {
    $this->codigoProducao = $codigoProducao;
  }

  public function setCodigoEtapa($codigoEtapa)
  {
    $this->codigoEtapa = $codigoEtapa;
  }

  public function setTempoDuracaoParada($tempoDuracaoParada)
  {
    $this->tempoDuracaoParada = $tempoDuracaoParada;
  }




  public function getCodigoOcorrencia()
  {
    return $this->codigoOcorrencia;
  }

  public function getCodigoMotivoParada()
  {
    return $this->codigoMotivoParada;
  }

  public function getCodigoProducao()
  {
    return $this->codigoProducao;
  }


  public function getCodigoEtapa()
  {
    return $this->codigoEtapa;
  }

  public function getTempoDuracaoParada()
  {
    return $this->tempoDuracaoParada;
  }
}
