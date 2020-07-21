455<?php
class turnosEtapas{
  private $codigoturno;
  private $descricaoTurno;
  private $horaInicioTurno;
  private $horaFimTurno;
  private $loteTrabalhado;
  private $codigoEtapaTrabalhada;
  private $numeroColaboradores;
  private $statusTurno;


  private function getCodigoTurno(){
    return $this->codigoturno;
  }

  private function getDescricaoTurno(){
    return $this->descricaoTurno;
  }

  private function getHoraInicioTurno(){
    return $this->horaInicioTurno;
  }

  private function getHoraFimTermino(){
    return $this->horaFimTurno;
  }

  private function getTurnoTrabalhado(){
    return $this->turnoTrabalhado;
  }

  private function getCodigoEtapaTrabalhada(){
    return $this->codigoEtapaTrabalhada;
  }

  private function getNumeroColaboradores(){
    return $this->numeroColaboradores;
  }

  private function getStatusTurno(){
    return $this->statusTurno;
  }

  private function setCodigoTurno($codigoTurno){
    $this->codigoturno=$codigoturno;
  }

  private function setDescricaoTurno($descricaoTurno){
    $this->descricaoTurno=$descricaoTurno;
  }

  private function setHoraInicioTurno($horaInicioTurno){
    $this->horaInicioTurno=$horaInicioTurno;
  }

  private function setHoraFim($horaFimTurno){
    $this->horaFimTurno=$horaFimTurno;
  }

  private function setTurnoTrabalho($turnoTrabalho){
    $this->turnoTrabalho=$turnoTrabalho;
  }

  private function setCodigoEtapaTrabalhada($codigoEtapaTrabalhada){
    $this->codigoEtapaTrabalhada=$codigoEtapaTrabalhada;
  }

  private function setNumeroColaboradores($numeroColaboradores){
    $this->numeroColaboradores=$numeroColaboradores;
  }

  private function setStatusTurno($statusTurno){
    $this->statusTurno=$statusTurno;
  }
}






?>