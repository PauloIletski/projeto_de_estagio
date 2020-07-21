<?php
class etapasProducao
{
    private $codigoEtapa;
    private $codigoProducao;
    private $codigoTipoEtapa;
    private $duracaoEtapa;
    private $statusEtapa;


    //setters
    public function setCodigoEtapa($codigoEtapa)
    {
        $this->codigoEtapa = $codigoEtapa;
    }

    public function setCodigoProducao($codigoProducao)
    {
        $this->codigoProducao = $codigoProducao;
    }

    public function setCodigoTipoEtapa($codigoTipoEtapa)
    {
        $this->codigoTipoEtapa = $codigoTipoEtapa;
    }

    public function setDuracaoEtapa($duracaoEtapa)
    {
        $this->duracaoEtapa = $duracaoEtapa;
    }

    public function setStatusEtapa($statusEtapa)
    {
        $this->statusEtapa = $statusEtapa;
    }

    public function getCodigoEtapa()
    {
        return  $this->codigoEtapa;
    }

    public function getCodigoProducao()
    {
        return $this->codigoProducao;
    }

    public function getCodigoTipoEtapa()
    {
        return $this->codigoTipoEtapa;
    }

    public function getDuracaoEtapa()
    {
        return $this->duracaoEtapa;
    }

    public function getStatusEtapa()
    {
        return $this->statusEtapa;
    }
}
