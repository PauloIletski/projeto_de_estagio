$(this).ready(function () { });
//Variaveis globais
var codigoProducao;
var codigoEtapa;
var tempoDuracao;


function validateFields() {
  if (!$("#txtNumLote").val()) {
    $("#txtNumLote").css("background", "#ff9999");
    return false;
  }
  else if ($("#txtNumLote").val() == "   ") {
    $("#txtNumLote").css("background", "#ff9999");
    return false;
  }
  else {
    return true;
  }
}

function loadTableProdutos() {
  var action = {
    action: "getall"
  };

  json = JSON.stringify(action);

  $.ajax({
    type: "POST",
    url:
      "http://localhost/estagio/controlers_php/CadastroProdutosControler.php",
    data: json,

    success: function (datas, response, jqXHR) {
      // popAlert("info", datas);
      $resposta = JSON.parse(datas);
      $("#corpoTbRetorno tr").remove();

      for (var i = 0; $resposta.length > i; i++) {
        $("#corpoTbRetorno").append(
          "<tr><td>" +
          $resposta[i].codigo_produto +
          "</td><td>" +
          $resposta[i].nome_produto +
          "</td><td>" +
          "<button type='button' class='btn btn-success' id='btnGrid'>Selecionar</button></tr>"
        );
      }
    },
    error: function (jqXHR, response, errorThrown) {
      alert("error", errorThrown);
    }
  });
}

function loadTableMotivos() {
  var action = {
    action: "getallparadas"
  };

  json = JSON.stringify(action);

  $.ajax({
    type: "POST",
    url:
      "http://localhost/estagio/controlers_php/CadastroParadasControler.php",
    data: json,

    success: function (datas, response, jqXHR) {
      // popAlert("info", datas);
      $resposta = JSON.parse(datas);
      $("#corpoTbRetornoMotivos tr").remove();

      for (var i = 0; $resposta.length > i; i++) {
        $("#corpoTbRetornoMotivos").append(
          "<tr><td>" +
          $resposta[i].codigo_tipo_parada +
          "</td><td>" +
          $resposta[i].descricao_tipo_parada +
          "</td><td>" +
          "<button type='button' class='btn btn-success' id='btnGrid'>Selecionar</button></tr>"
        );
      }
      clearTimeout();
      clearInterval();
    },
    error: function (jqXHR, response, errorThrown) {
      alert("error", errorThrown);
    }
  });
}

function loadFieldsEtapas() {
  var action = {
    action: "getalletapas"
  };

  json = JSON.stringify(action);

  $.ajax({
    type: "POST",
    url: "http://localhost/estagio/controlers_php/CadTipoEtapaControler.php",
    data: json,

    success: function (datas, response, jqXHR) {
      var array = JSON.parse(datas);

      for (var i = 0; array.length > i; i++) {
        $("#cbxTipoProcesso").append(
          new Option(array[i].descricao_tipo_etapa, array[i].codigo_tipo_etapa)
        );
      }
    },
    error: function (jqXHR, response, errorThrown) {
      popAlert("error", errorThrown);
    }
  });
}

function insertAction($value) {


  json = JSON.stringify($value);

  $.ajax({
    type: "POST",
    url: "http://localhost/estagio/controlers_php/PainelPrincipalControler.php",
    data: json,

    success: function (datas, response, jqXHR) {
      popAlert("info", datas);
      $resposta = JSON.parse(datas);
      $("#confirmacaoDados").css("display", "none");
      $("#confirmacaoEtapa").css("display", "block");

    },
    error: function (jqXHR, response, errorThrown) {
      alert("error", errorThrown);
    }
  });
}

$("#corpoTbRetorno").on("click", ".btn-success", function () {
  // get the current row
  var currentRow = $(this).closest("tr");

  var col1 = currentRow.find("td:eq(0)").text();
  var col2 = currentRow.find("td:eq(1)").text();

  $("#txtCodProduto").val(col1);
  $("#txtDescProd").val(col2);

  loadFieldsEtapas();
  $("#selecionarProduto").css("display", "none");
  $("#confirmacaoDados").css("display", "block");
});

$("#corpoTbRetornoMotivos").on("click", ".btn-success", function () {
  // get the current row
  var currentRow = $(this).closest("tr");

  var col1 = currentRow.find("td:eq(0)").text();
  var col2 = currentRow.find("td:eq(1)").text();
  tempoDuracao = $('#horaParada').text() + ':' + $('#minutoParada').text() + ':' + $('#segundoParada').text();


  $.ajax({
    type: "POST",
    url: "http://localhost/estagio/controlers_php/GetCodigoProducao.php",
    data: json,

    success: function (datas, response, jqXHR) {
      $resposta = JSON.parse(datas);
      var ocorrencia = {
        action: 'ocorrencia',
        codigoProducao: $resposta.codigoProducao,
        codigoEtapa: $resposta.codigoEtapa,
        tempo_duracao: tempoDuracao,
        cod_motivo_parada: col1
      }

      registrarOcorrencia(ocorrencia);
    },
    error: function (jqXHR, response, errorThrown) {
      alert("error", errorThrown);
    }
  });



  $("#selecionarProduto").css("display", "none");
  $("#confirmacaoDados").css("display", "block");
  $("#justificativaParada").css("display", "none");
});

function registrarOcorrencia(ocorrencia) {
  json = JSON.stringify(ocorrencia);
  $.ajax({
    type: "POST",
    url: "http://localhost/estagio/controlers_php/PainelPrincipalControler.php",
    data: json,

    success: function (datas, response, jqXHR) {
      popAlert("info", datas);
      $resposta = JSON.parse(datas);
      $("#confirmacaoDados").css("display", "none");
      $("#confirmacaoEtapa").css("display", "block");

    },
    error: function (jqXHR, response, errorThrown) {
      alert("error", errorThrown);
    }
  });
}


$("#btnConfirmaInicio").click(function () {
  var confirma = confirm("Deseja realmente prosseguir?");

  if (confirma == true) {
    if (validateFields() == true) {
      $("#painelInicial").css("display", "none");
      loadTableProdutos();
      $("#selecionarProduto").css("display", "block");
    }
    else {
      popAlert("alert", "Preencha o campo obrigatório!")
    }
  }
});

$("#btnConfirmaSetup").click(function () {
  var objetc = {
    action: "insertProducao",
    numeroLote: $('#txtNumLote').val(),
    codigoProduto: $('#txtCodProduto').val(),
    codigoTipoEtapa: $("#cbxTipoProcesso")
      .children("option:selected")
      .val(),
    statusEtapa: 0
  }

  insertAction(objetc);
});


$("#iniciarProducao").click(function () {
  $("#timerProducao").css("display", "block");
  setTimeout("getSecs(0,0,-1, \"clock1\")", 1000);
  $("#iniciarProducao").css("display", "none");
});

$("#iniciarParada").click(function () {
  clearTimeout("getSecsPars(0,0,-1, \"clock1\")", 1000);
  clearInterval("getSecsPars(0,0,-1, \"clock1\")", 1000);
  $("#processoParada").css("display", "block");
  setTimeout("getSecsPars(0,0,-1, \"clock1\")", 1000);
  $horaProducao = $("#horaProducao").text();
  $minutoProducao = $("#minutoProducao").text();
  $segundoProducao = $("#segundoProducao").text();
  $("#confirmacaoEtapa").css("display", "none");
  $("#timerParada").css("display", "block");

});

$("#finalizarParada").click(function () {
  $("#timerProducao").css("display", "block");
  setTimeout("getSecs(0,0,-1, \"clock1\")", 1000);
  $("#iniciarProducao").css("display", "none");
  $("#processoParada").css("display", "none");
  $horaParada = $("#horaParada").text();
  $minutoParada = $("#minutoParada").text();
  $segundoParada = $("#segundoParada").text();

  loadTableMotivos();
  $("#justificativaParada").css("display", "block");


  clearTimeout("getSecsPars(0,0,-1, \"clock1\")");
  clearInterval("getSecsPars(0,0,-1, \"clock1\")");

});

$('#finalizarOperacao').click(function () {
  var confirma = confirm("Deseja realmente prosseguir?");
  if (confirma == true) {
    $("#confirmacaoEtapa").css("display", "none");
    $('#painelFinal').css('display', 'block');

  }

});
$('#confirmaFinal').click(function () {
  var confirma = confirm("Deseja realmente finalizar?");
  if (confirma == true) {
    if (!$('#txtQtdeProduzida').val() || $('#txtQtdeProduzida').val() == "    " || !$("#txtQuantidadeRejeitada").val() || $('#txtQuantidadeRejeitada').val() == "    ") {
      popAlert('error', 'Preencha todos os campos!');
    }
    else {
      finalizacao();
    }
  }

});

$('#iniciarNovo').click(function () {
  location.reload(true);

});

function finalizacao() {
  $.ajax({
    type: "POST",
    url: "http://localhost/estagio/controlers_php/GetCodigoProducao.php",
    data: json,

    success: function (datas, response, jqXHR) {
      $resposta = JSON.parse(datas);
      var finaliza = {
        action: 'finaliza',
        codigoProducao: $resposta.codigoProducao,
        qtdProduzida: $('#txtQtdeProduzida').val(),
        qtdRejeitada: $('#txtQuantidadeRejeitada').val()

      }
      registraFinalizacao(finaliza);
    }
  });
}

function registraFinalizacao(finaliza) {
  json = JSON.stringify(finaliza);
  $.ajax({
    type: "POST",
    url: "http://localhost/estagio/controlers_php/PainelPrincipalControler.php",
    data: json,

    success: function (datas, response, jqXHR) {
      popAlert("info", datas);
      $("#painelFinal").css("display", "none");
      $("#mensagemFinal").css("display", "block");
      $resposta = JSON.parse(datas);



    },
    error: function (jqXHR, response, errorThrown) {
      alert("error", errorThrown);
    }
  });
}
$("#popAlertDanger").click(function () {
  $("#popAlertDanger").css("display", "none");
});

$("#popAlertWarning").click(function () {
  $("#popAlertWarning").css("display", "none");
});

$("#popAlertInfo").click(function () {
  $("#popAlertInfo").css("display", "none");
});

$("#txtNumLote").click(function () {
  $("#txtNumLote").css("background", "#ffffff");
});

function popAlert(_type, _message) {
  switch (_type) {
    case "error":
      $("#popAlertDanger").text(_message + "  (Fechar)");
      $("#popAlertDanger").css("display", "block");
      break;
    case "alert":
      $("#popAlertWarning").text(_message + "  (Fechar)");
      $("#popAlertWarning").css("display", "block");
      break;
    case "info":
      $("#popAlertInfo").text(_message + "  (Fechar)");
      $("#popAlertInfo").css("display", "block");
      break;
    default:
      break;
  }
}

function getSecs(sHors, sMins, sSecs, campo) {

  sSecs++;

  /* bloco adicionado */
  sMins = "0" + sMins;
  sHors = "0" + sHors;
  /******************/

  if (sSecs == 60) {
    sSecs = 0;
    sMins++;
    if (sMins <= 9)
      sMins = "0" + sMins;
  }
  if (sMins == 60) {
    sMins = "0" + 0;
    sHors++;
    if (sHors <= 9)
      sHors = "0" + sHors;
  }
  if (sSecs <= 9)
    sSecs = "0" + sSecs;

  // document
  //   .getElementById(campo)
  //   .innerHTML = sHors + "<font color=#000000>:</font>" + sMins + " < font color =#000000 >:</font > " + sSecs;
  document
    .getElementById('horaProducao')
    .innerHTML = sHors;
  document
    .getElementById('minutoProducao')
    .innerHTML = sMins;
  document
    .getElementById('segundoProducao')
    .innerHTML = sSecs;

  setTimeout("getSecs(" + sHors + ", " + sMins + "," + sSecs + ", '" + campo + "')", 1000);


  sHours = 0;
  sMin = 0;
}

function getSecsPars(sHors, sMins, sSecs, campo) {

  sSecs++;

  /* bloco adicionado */
  sMins = "0" + sMins;
  sHors = "0" + sHors;
  /******************/

  if (sSecs == 60) {
    sSecs = 0;
    sMins++;
    if (sMins <= 9)
      sMins = "0" + sMins;
  }
  if (sMins == 60) {
    sMins = "0" + 0;
    sHors++;
    if (sHors <= 9)
      sHors = "0" + sHors;
  }
  if (sSecs <= 9)
    sSecs = "0" + sSecs;

  // document
  //   .getElementById(campo)
  //   .innerHTML = sHors + "<font color=#000000>:</font>" + sMins + " < font color =#000000 >:</font > " + sSecs;
  document
    .getElementById('horaParada')
    .innerHTML = sHors;
  document
    .getElementById('minutoParada')
    .innerHTML = sMins;
  document
    .getElementById('segundoParada')
    .innerHTML = sSecs;

  setTimeout("getSecsPars(" + sHors + ", " + sMins + "," + sSecs + ", '" + campo + "')", 1000);

  sHours = 0;
  sMin = 0;
}
  //-->
