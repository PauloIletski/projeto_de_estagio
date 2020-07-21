<?php
require '../../estagio/dataAccesObject/etapasProducaoDAO.php';
require '../../estagio/dataAccesObject/producaoDAO.php';
require '../../estagio/dataAccesObject/ocorrenciaParadasDAO.php';


$get_json = file_get_contents("php://input");
$data = json_decode($get_json, true);
$codigoProducao = 0;
$producao = new producao();
$insertProducao = new producaoDAO();

$etapasProducao = new etapasProducao();
$insertEtapa = new etapasProducaoDAO();

$ocorrenciaParada = new ocorrenciaParadas;
$insertOcorrencia = new ocorrenciaParadasDAO;

if ($data["action"] == 'insertProducao') {

    //INSERIR CHECK LOTE



    $exists = $insertProducao->getOne($data['numeroLote']);

    if (sizeof($exists) < 1) {

        $producao->setCodigoProduto($data['codigoProduto']);
        $producao->setLoteProducao($data['numeroLote']);


        $lastId = $insertProducao->Insert($producao);

        $etapasProducao->setCodigoProducao($lastId);
        $etapasProducao->setCodigoTipoEtapa($data['codigoTipoEtapa']);
        $etapasProducao->setStatusEtapa($data['statusEtapa']);
    } else {
        $codigoProducao = $exists[0]->codigo_producao;
        $etapasProducao->setCodigoProducao(intval($codigoProducao));
        $etapasProducao->setCodigoTipoEtapa($data['codigoTipoEtapa']);
        $etapasProducao->setStatusEtapa($data['statusEtapa']);
    }

    $lastIdEtapa = $insertEtapa->Insert($etapasProducao);
    session_start();
    $_SESSION['CodigoProducao'] = $exists[0]->codigo_producao;
    $_SESSION['CodigoEtapa'] = $lastIdEtapa;

    echo json_encode("Cadastro efetuado com sucesso");
}

if ($data['action'] == 'ocorrencia') {

    $ocorrenciaParada->setCodigoProducao($data['codigoProducao']);
    $ocorrenciaParada->setCodigoEtapa($data['codigoEtapa']);
    $ocorrenciaParada->setCodigoMotivoParada($data['cod_motivo_parada']);
    $ocorrenciaParada->setTempoDuracaoParada($data['tempo_duracao']);


    $insertOcorrencia->insertOcorrencia($ocorrenciaParada);

    echo json_encode("Ocorrencia registrada");
}

if ($data['action'] == 'finaliza') {

    $producao->setCodigoProducao($data['codigoProducao']);
    $producao->setQtdProduzida($data['qtdProduzida']);
    $producao->setQtdRejeitada($data['qtdRejeitada']);

    $insertProducao->update($producao);

    echo json_encode('Producao finalizada');
}

if ($data['action'] == 'getlog') {

    $ocorrenciaLog = $insertOcorrencia->getLogs();

    echo json_encode($ocorrenciaLog);

    if (json_last_error_msg() != "No error") {
        echo json_last_error_msg();
    }
}

if ($data['action'] == 'getlogproducao') {

    $producaoLog = $insertProducao->getLogs();

    echo json_encode($producaoLog);

    if (json_last_error_msg() != "No error") {
        echo json_last_error_msg();
    }
}
