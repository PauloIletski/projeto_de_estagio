<?php 
include_once("models/acompanhamentoProducaoObject.php");
include_once("dbAccess/bd.php");

class turnosEtapasDAO{

  public function Insert($turnoEtapa)
  {
      $sql="INSERT INTO tab_turnos_etapas
     (codigo_turno,
      descricao_turno,
      hora_inicio_turno,
      hora_fim_turno,
      lote_trabalhado,
      codigo_etapa_trabalhada,
      numero_colaboradores,
      status_turno)
      VALUES
      (?,?,?,?,?,?,?,?);
      ";

      $conn=obterConexao();

      $cmd=$conn->prepare($sql);

      $cmd->bindValue(1,$turnoEtapa->getCodigoTurno());
      $cmd->bindValue(2,$turnoEtapa->getDescricaoTurno());
      $cmd->bindValue(3,$turnoEtapa->getHoraInicioTurno());
      $cmd->bindValue(5,$turnoEtapa->getHoraFimTermino());
      $cmd->bindValue(6,$turnoEtapa->getTurnoTrabalho());
      $cmd->bindValue(7,$turnoEtapa->getCodigoEtapaTrabalhada());
      $cmd->bindValue(8,$turnoEtapa->getStatusTurno());

      $cmd->execute();
  }


  public function getAll(){
    $sql="SELECT * FROM tab_turnos_etapas";

    $conn=obterConexao();

    $cmd=$conn->prepare($sql);

    $cmd->execute();

    $turnosEtapas=array();

    while($turnosEtapas=$cmd->fetchObject('turnoEtapa')){
      array_push($turnosEtapas,$turnoEtapa);
    }

    return $turnosEtapas;
  }












}


?>